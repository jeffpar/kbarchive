---
layout: page
title: "Q135858: Specifying an Account Control Field in an FTP Script"
permalink: kb/135/Q135858/
---

## Q135858: Specifying an Account Control Field in an FTP Script

	Article: Q135858
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how to specify an Account control field in an ftp script.
	
	MORE INFORMATION
	================
	
	When a ftp client initiates a connection, the ftp-server sends a USER,PASS
	access-control command to the client. The client answers with its username and
	password information. Some ftp servers also require an account for login by
	sending an ACCT command.
	
	When you are using an ftp-script (ftp -s:script ) on Windows-NT, you need to
	specify the ACCT field in the same line as the PASS information. The following
	is an example of a script to handle this ACCT request. This script opens a
	connection to IP address 11.11.11.11, logs in as MYUSER with MYPASSWORD password
	and MYACCOUNT account, transfers MYFILE, and then quits:
	
	  open 11.11.11.11
	  myuser
	  mypassword myaccount
	  put myyfile
	  quit
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
