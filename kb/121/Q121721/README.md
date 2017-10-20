---
layout: page
title: "Q121721: DIR of Local Share Fails from Command Prompt Started by AT"
permalink: /kb/121/Q121721/
---

## Q121721: DIR of Local Share Fails from Command Prompt Started by AT

{% raw %}

	Article: Q121721
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the AT command to start Command Prompt and then attempt to list a
	shared directory (from that Command Prompt) on your local hard disk drive (for
	example: DIR \\LOCALCOMPUTER\SHARENAME), one of the following error messages
	will appear:
	
	  Access Denied
	
	  -OR-
	
	  The system cannot find the file specified.
	
	Running the DIR command on a remote share works without error.
	
	If you attempt to connect to this share by running NET USE *
	\\LOCALCOMPUTER\SHARENAME the following error message appears:
	
	  The password is invalid for \\LOCALCOMPUTER\SHARENAME.
	
	If you then enter the password, another error message appears:
	
	  System error 1312 has occurred.
	
	  A specified logon session does not exist. It may already have been terminated.
	
	These problems do not occur under Windows NT or Windows NT Advanced Server
	version 3.1, nor do they occur in a manually started Command Prompt under
	Windows NT 3.5.
	
	WORKAROUND
	==========
	
	To connect to a local share from Command Prompt (for example, from a batch file)
	started by the AT command, you must provide all of the user account information
	as well as a specific drive letter. For example, entering the following
	information should allow you to connect:
	
	  net use x: \\server\share /user: username password
	
	You can substitute %USERNAME% for user name so that it uses the name of the
	currently logged-on user.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}
