import * as yup from 'yup';

export const suggestionValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  project_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
