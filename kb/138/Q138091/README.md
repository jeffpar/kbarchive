---
layout: page
title: "Q138091: FIX: Internal Error When Add New Telephony Location"
permalink: /kb/138/Q138091/
---

## Q138091: FIX: Internal Error When Add New Telephony Location

	Article: Q138091
	Product(s): Miscellaneous Software Development Kits
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Telephony Software Development Kit (SDK), version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the International Control Panel Applet (CPL), if the current country is set
	to Canada, then the Telephony CPL will display the following error when a new
	location is added:
	
	  Internal Application error; please shut down and restart this application.
	
	WORKAROUND
	==========
	
	The only workaround is to use the International CPL to change the location to
	something other than Canada (United States is a logical choice), add the new
	Telephony location, and then change the location back to Canada.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Windows 95.
	
	Additional query words: 1.00 1.30 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper _IKkbbogus kbSDKSearch kbWinSDKTelephony kbWinSDKSearch
	Version           : :1.0
	Solution Type     : kbfix
	
	=============================================================================
	
