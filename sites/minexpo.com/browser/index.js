import Browser from '@base-cms/marko-web/browser';
import DefaultTheme from '@base-cms/marko-web-theme-default/browser';
import GTM from '@base-cms/marko-web-gtm/browser';
import GAM from '@base-cms/marko-web-gam/browser';
import GCSE from '@base-cms/marko-web-gcse/browser';
import RevealAd from '@base-cms/marko-web-reveal-ad/browser';
import Common from '@ascend-media/package-common/browser';
import Shared from '@ascend-media/package-minexpo/browser';

Shared(Browser);
DefaultTheme(Browser);
GTM(Browser);
GAM(Browser);
GCSE(Browser);
RevealAd(Browser);
Common(Browser);

export default Browser;
