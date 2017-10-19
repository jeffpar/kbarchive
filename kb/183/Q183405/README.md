---
layout: page
title: "Q183405: XADM: Authrest.exe Fails with -1003"
permalink: /kb/183/Q183405/
---

## Q183405: XADM: Authrest.exe Fails with -1003

	Article: Q183405
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 03-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running the Authrest Utility, for example: "Authrest 1000 1000",
	where the first number is the <object version increment> and the second
	number is the <USN increment>, the following error message and information
	appear a few seconds after you enter the command:
	
	  D:\exchsrvr\DSADATA>..\bin\authrest 1000 1000
	  Doing authoritative restore, Object version increment = 1000
	          Extra Usn increment = 1000
	  Doing Recovery.
	  Opening database
	  Getting directory configuration
	  Modifying records
	  JetCommitTransaction returned -1003
	  Closing database
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the new version of Authrest.exe from Microsoft
	Technical Support.
	
	
	Additional query words: jet commit committ transaction authrest
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	
