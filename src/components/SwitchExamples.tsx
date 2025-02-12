import * as React from 'react';
import { Switch } from './Switch';
import { FormControl } from './FormControl';
import { FormControlLabel } from './FormControlLabel';

export const SwitchExamples = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Basic switches</h2>
        <div className="flex items-center gap-4">
          <Switch defaultChecked />
          <Switch />
          <Switch disabled defaultChecked />
          <Switch disabled />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">
          Switch with FormControlLabel
        </h2>
        <div className="flex flex-col gap-4">
          <FormControlLabel control={<Switch defaultChecked />} label="Label" />
          <FormControlLabel disabled control={<Switch />} label="Disabled" />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Switch sizes</h2>
        <div className="flex items-center gap-4">
          <Switch size="small" />
          <Switch size="medium" />
          <FormControlLabel control={<Switch size="small" />} label="Small" />
          <FormControlLabel control={<Switch size="medium" />} label="Medium" />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Switch colors</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Switch defaultChecked color="default" />
          <Switch defaultChecked color="primary" />
          <Switch defaultChecked color="secondary" />
          <Switch defaultChecked color="error" />
          <Switch defaultChecked color="info" />
          <Switch defaultChecked color="success" />
          <Switch defaultChecked color="warning" />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Controlled switch</h2>
        <div className="flex items-center gap-4">
          <Switch checked={checked} onChange={handleChange} />
          <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} />}
            label={checked ? 'On' : 'Off'}
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Label placement</h2>
        <div className="flex flex-col gap-4">
          <FormControlLabel
            control={<Switch />}
            label="Start"
            labelPlacement="start"
          />
          <FormControlLabel
            control={<Switch />}
            label="End"
            labelPlacement="end"
          />
          <FormControlLabel
            control={<Switch />}
            label="Top"
            labelPlacement="top"
          />
          <FormControlLabel
            control={<Switch />}
            label="Bottom"
            labelPlacement="bottom"
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">With FormControl</h2>
        <FormControl error>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Error state"
          />
        </FormControl>
      </div>
    </div>
  );
};
