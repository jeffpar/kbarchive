---
layout: page
title: "Q153242: Net Use /Home Fails with 13 Character Domain Controller"
permalink: kb/153/Q153242/
---

## Q153242: Net Use /Home Fails with 13 Character Domain Controller

	Article: Q153242
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Carrying out a "net use <drive>: /home" command fails with the following
	error:
	
	  Error 53: The computer name specified in the network path cannot be located.
	
	CAUSE
	=====
	
	Carrying out the "net use <drive>: /home" command only allows for 13
	character domain controller computer names. Domain controller computer names
	greater than 13 characters are truncated.
	
	A client attempts to retrieve the home directory value by querying the
	authenticating domain controller. Because the computer name is truncated, the
	computer name cannot be resolved and the name query fails.
	
	NOTE: If the home directory server is not a domain controller, its computer name
	can be up to 15 characters in length.
	
	RESOLUTION
	==========
	
	Rename all domain controllers with names that are 13 characters or less or
	upgrade clients to Windows 95. For more information on renaming a primary or
	backup domain controller, please see the following Microsoft Knowledge Base
	article:
	
	  Q150298 Renaming a Windows NT PDC or BDC
	
	
	Additional query words: err msg errmsg downlevel win95 homedir networking wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbZNotKeyword kbWFWSearch kbNetworkClientSearch kbNetworkClient300DOS
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
