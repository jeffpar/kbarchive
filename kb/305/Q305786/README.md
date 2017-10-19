---
layout: page
title: "Q305786: Differences Between the LogoTag and LogoTag2 Methods"
permalink: /kb/305/Q305786/
---

## Q305786: Differences Between the LogoTag and LogoTag2 Methods

	Article: Q305786
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4,1.99,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4, 1.99, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains differences between the LogoTag and LogoTag2 methods.
	
	MORE INFORMATION
	================
	
	LogoTag is used in legacy Passport Manager installations (1.36 and earlier).
	When you implement LogoTag, Passport Manager displays the sign-in scarab that
	has a link to the Passport Login server URL.
	
	When you implement LogoTag2, Passport Manager displays the sign-in scarab, with a
	link to the originating partner page (instead of the Passport Login server).
	This is used to invoke the Tweener Login dialog box on the client side in case
	the user is using a Tweener-enabled client, such as Microsoft Internet Explorer
	6.0 or Microsoft Windows XP. If the user is not using a Tweener-enabled client,
	the client redirects to the traditional Login server, and everything happens as
	in the LogoTag case.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassport199 kbPassport200 kbPassportSearch
	Version           : :1.3,1.4,1.99,2.0
	Issue type        : kbinfo
	
	=============================================================================
	
