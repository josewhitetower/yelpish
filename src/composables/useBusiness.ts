import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { IBusiness } from '../types/index';
import { getBusiness } from '../api/index';

const businessInfo = async (): Promise<IBusiness> => {
  const route = useRoute();
  const query = computed(() => `
        {
            business(id: "${route.params.alias}"){
                name,
                alias,
                url,
                rating,
                photos,
                hours {
                    is_open_now
                    open { start, end }
                },
                reviews { rating, user { name }, time_created },
                coordinates { latitude, longitude },
                location { formatted_address }
            }
        }`);
  const business = await getBusiness(query.value);
  return business;
};

export default businessInfo;
