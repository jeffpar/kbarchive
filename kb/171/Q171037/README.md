---
layout: page
title: "Q171037: Error Message: Real Audio Error 14: No Document Available at..."
permalink: /kb/171/Q171037/
---

## Q171037: Error Message: Real Audio Error 14: No Document Available at...

{% raw %}

	Article: Q171037
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The first time you sign in to MSN, The Microsoft Network, after you install the
	MSN software, you may receive the following error message while you are
	downloading additional components:
	
	  ActiveX Controls, Real Audio Error 14: No document available at requested
	  location.
	
	CAUSE
	=====
	
	This error message can occur for either of the following reasons:
	
	- The Setupbbs.ocx file, which configures Real Audio for MSN, may be damaged.
	
	- The MSN safety level may be set to High, preventing the download of active
	  content.
	
	RESOLUTION
	==========
	
	To resolve this issue, delete the Setupbbs.ocx file, and then reduce the MSN
	safety level to None to download the necessary ActiveX controls. To do so,
	follow these steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "setupbbs.ocx" (without the quotation marks), and then
	  click Find Now.
	
	3. Right-click the Setupbbs.ocx file in the list of found files, and then click
	  Delete.
	
	4. Right-click the Internet icon on the desktop, and then click Properties.
	
	5. On the Security tab, click Safety Level.
	
	6. Click None, and then click OK.
	
	7. Click OK.
	
	8. Start Microsoft Internet Explorer and connect to the following Web site:
	
	  http://setup.msn.com/
	
	  Follow the instructions on the screen to download the necessary ActiveX
	  controls.
	
	After you finish downloading the ActiveX controls, you may want to set the MSN
	safety level back to High. To do so, follow steps 4-7 above. In step 6, click
	High to set the MSN safety level back to High.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbMSNSearch kbMSN200
	Version           : WINDOWS:2.0
	
	=============================================================================
	

{% endraw %}
