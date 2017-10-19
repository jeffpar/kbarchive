---
layout: page
title: "Q277758: WP: What Are the Requirements for Express Purchase (EP) Service?"
permalink: /kb/277/Q277758/
---

## Q277758: WP: What Are the Requirements for Express Purchase (EP) Service?

	Article: Q277758
	Product(s): Internet Information Server
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
	
	This article lists the client-side and server-side requirements for using the
	Microsoft Passport Express Purchase (EP) service.
	
	MORE INFORMATION
	================
	
	Client-side requirements:
	
	- Each client user must have a Passport. The user must have registered as a
	  Passport user and have provided at least the required elements of the
	  Passport core profile.
	
	- The client browser must be capable of accepting cookies and be configured to
	  accept them.
	
	- The browsers must support Secure Sockets Layer (SSL).
	
	- Browsers must be JavaScript capable and enabled.
	
	Server-side requirements:
	
	- The participant site must be a Passport-registered site and have a
	  Passport-issued Site ID.
	
	Without the Site ID, the Passport EP service cannot verify that a participant
	site is legitimate. When a participant site applies for a Passport Site ID, it
	also must specify a root domain. When requesting user data from the Passport EP
	service, any private user data that is requested must be returned into that
	domain to corroborate the validity of the supplied Site ID. After you have
	completed the registration process, you are provided with an official Passport
	Site ID. Include the Site ID number as a query string parameter whenever you
	direct a user to the Passport Wallet server from your site.
	
	- Pages that are specified as "return URLs" (that is, the pages on a site that
	  actually receive and process the posted wallet data) must be served by means
	  of HTTPS protocol.
	
	- Any material that is used in Passport EP service cobranding must also be
	  served by HTTPS.
	
	REFERENCES
	==========
	
	For more information, see the following Passport Web site:
	
	  Customize Developer Info
	  http://www.passport.com/DevInfo/Dev_ppep.asp
	
	Additional query words: express purchase ep
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassportSearch
	Version           : :1.3,1.4
	Issue type        : kbinfo
	
	=============================================================================
	
