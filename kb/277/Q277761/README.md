---
layout: page
title: "Q277761: Browser Must Reauthenticate When Browsing Between Partner Sites"
permalink: kb/277/Q277761/
---

## Q277761: Browser Must Reauthenticate When Browsing Between Partner Sites

	Article: Q277761
	Product(s): Internet Information Server
	Version(s): 1.3,1.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you go from one site to another for the first time, and both sites use
	Passport authentication, you are asked to reauthenticate to the second site. You
	must provide permission to provide information to the other site if you have not
	been there at least once during the currently logged on session.
	
	After the first time you provide logon information to the second site, you are
	automatically signed in to the second site. However, the second site can perform
	a "forced logon", so that you have to log on again to reauthenticate.
	
	STATUS
	======
	
	This is by design.
	
	REFERENCES
	==========
	
	For more information, see the following Web site:
	
	  http://www.passport.com/business
	
	Additional query words: authenticate forced login partner
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassportSearch
	Version           : :1.3,1.4
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
