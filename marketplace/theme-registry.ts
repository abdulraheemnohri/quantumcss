interface Theme {
  name: string;
  version: string;
  styles: string;
  preview: string;
  author: string;
}

class ThemeRegistry {
  private themes: Map<string, Theme> = new Map();

  register(theme: Theme) {
    this.themes.set(theme.name, theme);
  }

  getTheme(name: string): Theme | undefined {
    return this.themes.get(name);
  }
}

export const themeRegistry = new ThemeRegistry();
