---
layout: page
title: "Q299862: Mixed Secure and Nonsecure Content Dialog Boxes"
permalink: /kb/299/Q299862/
---

## Q299862: Mixed Secure and Nonsecure Content Dialog Boxes

{% raw %}

	Article: Q299862
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Passport-enabled pages can potentially serve both HTTPS and HTTP content within
	the same page, but do so only if there is an error in either cobranding or
	LogoTag2 method calls.
	
	MORE INFORMATION
	================
	
	Some browsers display a warning dialog box in this situation, depending on
	security settings. If you are serving HTTPS pages and using the Passport Manager
	object's LogoTag2 method, make sure to set the bSecure parameter to True to
	serve the Sign-in or Sign-out image links from a Passport HTTPS image server.
	Also check your cobranding elements, including elements that are called as
	images and the Cascading Style Sheet (CSS) or cobranding template files.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassportSearch
	Version           : :1.3,1.4
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
