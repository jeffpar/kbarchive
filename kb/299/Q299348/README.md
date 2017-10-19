---
layout: page
title: "Q299348: ASP Script Error w/Attempt to Access User Core Profile Attribute"
permalink: /kb/299/Q299348/
---

## Q299348: ASP Script Error w/Attempt to Access User Core Profile Attribute

	Article: Q299348
	Product(s): Microsoft Developer Network
	Version(s): 1.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, version 1.4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to access a specific user core profile attribute displays a "No such
	attribute" Active Server Pages (ASP) script error.
	
	CAUSE
	=====
	
	This problem occurs if you attempt to retrieve a value for a field attribute
	that does not exist in the core profile table.
	
	Attributes are never removed from the core profile, but they may be added when
	you make a change and then distribute updated Component Configuration Document
	(CCD) files to each participant site by using built-in update capabilities of
	the Passport Manager object. A call to such a new attribute results in this same
	scripting error if the CCD is not properly updated.
	
	RESOLUTION
	==========
	
	For specific tips on debugging CCD refresh failures, see the following Microsoft
	Passport Software Development Kit (SDK) Web site:
	
	  Troubleshooting: Windows NT Events
	  http://www.passport.com/sdkdocuments/sdk14/reference/operations/troubleshooting_events.htm
	
	Also, make sure that the attribute that you are using is of the expected type or
	can be coerced into the expected type. For more information on data types for
	Passport profile attributes, see the following Passport SDK Web site:
	
	  Core Profile Table
	  http://www.passport.com/sdkdocuments/sdk14/reference/miscref/r_profilecoretable.htm
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassportSearch
	Version           : :1.4
	Issue type        : kbprb
	
	=============================================================================
	
