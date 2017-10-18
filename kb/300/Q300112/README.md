---
layout: page
title: "Q300112: Using the Error Property of the Passport Manager Object"
permalink: kb/300/Q300112/
---

## Q300112: Using the Error Property of the Passport Manager Object

	Article: Q300112
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Error property of the Passport Manager object identifies errors or problem
	conditions when the user reaches a Passport-enabled Web page.
	
	MORE INFORMATION
	================
	
	The Error property of the Passport Manager object returns an integer value set
	by the Passport domain authority during user-network communications. Reading the
	Error property determines whether a user's request contains a Passport error on
	the query string or in the Passport Ticket cookie.
	
	If you know what area of your Passport implementation code may be failing, place
	code that reads the Error property either before or after the code that you
	suspect. The syntax, error codes, and descriptions can be found in the reference
	page for the Error property at the following Passport Software Development Kit
	(SDK) Web site:
	
	  Error
	  http://www.passport.com/sdkdocuments/sdk14/reference/scriptreference/ifaces/ipassportmanager/error.htm
	
	The information there should assist in resolving the issue.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassportSearch
	Version           : :1.3,1.4
	Issue type        : kbinfo
	
	=============================================================================
	
