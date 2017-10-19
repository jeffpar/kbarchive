---
layout: page
title: "Q278389: Telnet Server from SFU 2.0 Causes Error Message"
permalink: /kb/278/Q278389/
---

## Q278389: Telnet Server from SFU 2.0 Causes Error Message

	Article: Q278389
	Product(s): Microsoft Windows NT
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Telnet Server from Services for UNIX (SFU) 2.0, the Telnet
	server may generate an error message in the Dr. Watson log when users with a
	logon script try to connect and log on.
	
	CAUSE
	=====
	
	The Telnet server expects the full path to the logon script, either as a
	universal naming convention (UNC) name
	(\\<servername>\<share>\logon.bat) or as <Drive>:\logon.bat.
	If the script was not specified with a complete path name, the Telnet server
	exits incorrectly.
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods:
	
	- Specify the logon script with a complete path.
	
	- Use a user ID that has no script associated with it.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : :2.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
