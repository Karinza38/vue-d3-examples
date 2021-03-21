// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import colors from 'vuetify/lib/util/colors'
import VueI18n from 'vue-i18n'

Vue.use(Vuetify)
Vue.use(VueI18n)

const messages = {
  en: {
    $vuetify: {
      examplesButton: 'Examples',
      sidebar: {
        title1: {
          value: 'Basic',
          children: {
            title1: {
              value: 'HelloWorld'
            },
            title2: {
              value: 'UpdateEnterExit'
            },
            title3: {
              value: 'GeneralUpdatePatternI'
            },
            title4: {
              value: 'SelectElementAndBindData'
            },
            title5: {
              value: 'SelectInsertRemove'
            }
          }
        },
        title2: {
          value: 'Tree',
          children: {
            title1: {
              value: 'TreeI'
            },
            title2: {
              value: 'TreeII'
            },
            title3: {
              value: 'TreeIII'
            },
            title4: {
              value: 'TreeIV'
            },
            title5: {
              value: 'TreeV'
            },
            title6: {
              value: 'TreeVI'
            },
            title7: {
              value: 'TreeVII'
            },
            title8: {
              value: 'TreeVIII'
            }
          }
        }
      }
    }
  },
  zh: {
    $vuetify: {
      examplesButton: '示例',
      sidebar: {
        title1: {
          value: '基础',
          children: {
            title1: {
              value: '你好，世界'
            },
            title2: {
              value: '更新、添加、退出'
            },
            title3: {
              value: '生成、更新 I'
            },
            title4: {
              value: '选择元素并绑定数据'
            },
            title5: {
              value: '选择、添加、移除'
            }
          }
        },
        title2: {
          value: '树',
          children: {
            title1: {
              value: '树 I'
            },
            title2: {
              value: '树 II'
            },
            title3: {
              value: '树 III'
            },
            title4: {
              value: '树 IV'
            },
            title5: {
              value: '树 V'
            },
            title6: {
              value: '树 VI'
            },
            title7: {
              value: '树 VII'
            },
            title8: {
              value: '树 VIII'
            }
          }
        }
      }
    }
  }
}

let i18nLocale = 'en'
if (sessionStorage.getItem('i18nLocale')) {
  i18nLocale = sessionStorage.getItem('i18nLocale')
}

const i18n = new VueI18n({
  locale: i18nLocale,
  messages
})

const opts = {
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#409eff',
        secondary: '#54a8ff',
        accent: '#9c27b0',
        error: '#f44336',
        warning: '#ff5722',
        info: '#607d8b',
        success: '#4caf50'
      },
      dark: {
        primary: colors.blue.darken1
      }
    }
  },
  lang: {
    t: (key, ...params) => i18n.t(key, params)
  }
}

const vuetify = new Vuetify(opts)
export { vuetify, i18n }
