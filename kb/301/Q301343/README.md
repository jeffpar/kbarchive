---
layout: page
title: "Q301343: Cannot Load Login Server URL in a Frameset"
permalink: /kb/301/Q301343/
---

## Q301343: Cannot Load Login Server URL in a Frameset

{% raw %}

	Article: Q301343
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4,1.99
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4, 1.99 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Because of security concerns, the Passport Login server URL cannot be loaded
	into a frameset.
	
	MORE INFORMATION
	================
	
	The Passport Login server URL must always be the top window in the object model.
	Do not call LoginUser from within any framed page. If LoginUser is called from
	within a frameset and is viewed by a non-Passport-aware client application, the
	end user receives a runtime error from the browser scripting engine due to cross
	frame scripting security issues.
	
	Specify target="_top" for any HREF that points to the Login server if your site
	uses frames. Note that you may have to parse and reform the output of the
	LogoTag2 method if you intend to include the Passport link in a framed document.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassport199 kbPassportSearch
	Version           : :1.3,1.4,1.99
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
