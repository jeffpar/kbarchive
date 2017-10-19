---
layout: page
title: "Q300416: Netscape Navigator Browsers Display a &quot;404 Page Not Found&quot; Error"
permalink: /kb/300/Q300416/
---

## Q300416: Netscape Navigator Browsers Display a &quot;404 Page Not Found&quot; Error

	Article: Q300416
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Netscape Navigator browsers are redirected to the Passport network pages,
	you may receive the following error message:
	
	  404 Page Not Found
	
	CAUSE
	=====
	
	If your site is experiencing this problem with the Netscape Navigator browsers
	only, it is probably the result of a misplaced or missing CSS cobranding style
	sheet, cobranding template, or an element called by your cobranding.
	
	RESOLUTION
	==========
	
	Make sure that a CSS style sheet is available using the path and file name you
	supplied for the CoBrandCSSURL and that the cobranding template is available
	from the URL you supplied for CoBrandURL at site registration time.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassportSearch
	Version           : :1.3,1.4
	Issue type        : kbprb
	
	=============================================================================
	
