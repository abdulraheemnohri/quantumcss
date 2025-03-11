interface QuantumPlugin {
  name: string;
  version: string;
  styles: string;
  apply: () => void;
}

class PluginRegistry {
  private plugins: Map<string, QuantumPlugin> = new Map();

  register(plugin: QuantumPlugin) {
    this.plugins.set(plugin.name, plugin);
  }

  apply(pluginName: string) {
    const plugin = this.plugins.get(pluginName);
    if (plugin) {
      plugin.apply();
    }
  }
}

export const registry = new PluginRegistry();
