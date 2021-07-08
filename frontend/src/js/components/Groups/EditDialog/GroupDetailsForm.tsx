import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { Field } from 'formik';
import { useTranslation } from 'react-i18next';
import { Channel } from '../../../api/apiDataTypes';
import { ARCHES } from '../../../utils/helpers';

export default function GroupDetailsForm(props: { channels: Channel[] }) {
  const { t } = useTranslation();
  const { channels } = props;
  return (
    <div style={{ padding: '1rem' }}>
      <Grid container spacing={2} justify="center">
        <Grid item xs={8}>
          <Field name="name" component={TextField} margin="dense" label="Name" required fullWidth />
        </Grid>
        <Grid item xs={4}>
          <FormControl margin="dense" fullWidth>
            <InputLabel shrink>Channel</InputLabel>
            <Field name="channel" component={Select} displayEmpty>
              <MenuItem value="" key="">
                {t('groups|None yet')}
              </MenuItem>
              {channels.map((channelItem: Channel) => (
                <MenuItem value={channelItem.id} key={channelItem.id}>
                  {`${channelItem.name}(${ARCHES[channelItem.arch]})`}
                </MenuItem>
              ))}
            </Field>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Field
            name="description"
            component={TextField}
            margin="dense"
            label={t('groups|Description')}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="track"
            component={TextField}
            margin="dense"
            label={t('groups|Track (identifier for clients, filled with the group ID if omitted)')}
            fullWidth
          />
        </Grid>
      </Grid>
    </div>
  );
}