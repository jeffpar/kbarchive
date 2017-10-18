---
layout: page
title: "Q102775: Problems with WfWG to Windows NT Connectivity"
permalink: kb/102/Q102775/
---

## Q102775: Problems with WfWG to Windows NT Connectivity

	Article: Q102775
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.10 3.11 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In some cases, you may have problems accessing Windows NT servers from Windows
	for Workgroups (WfWG) computers. This article covers some of the better known
	connectivity issues.
	
	When you are using Workgroup Connections or Windows for Workgroups network
	functions from MS-DOS, connecting to a computer with a space in the computer
	name will result in a syntax error.
	
	WORKAROUND
	==========
	
	Use quotation marks around the computer name and share name. This will allow the
	connections. For example:
	
	  NET USE F: "\\Computer Name\share"
	
	MORE INFORMATION
	================
	
	Using Lowercase Extended Characters for Passwords
	-------------------------------------------------
	
	Lower level machines such as WFWG should not use lowercase extended characters
	for passwords on Windows NT servers. By convention, the down level client
	converts the password to uppercase before it is sent to Windows NT. Some of the
	international characters do not have an uppercase equivalent, which causes
	Windows NT to fail to validate the password.
	
	Using a Windows for Workgroups Machine as a Backup Browser
	----------------------------------------------------------
	
	If Windows NT is the master browser and Windows for Workgroups is the backup
	browser, you may get an empty browser list under the following conditions:
	
	- A user logs on to the Windows for Workgroups machine and does not have a
	  valid username/password for the domain.
	
	- The Windows NT master browser goes down and promotes the Windows for
	  Workgroups browser.
	
	The Windows for Workgroups machine may have a empty browser list caused by a
	failure to authenticate with the master before Windows for Workgroups was
	promoted.
	
	Using International Characters in the Windows NT Share Name
	-----------------------------------------------------------
	
	If you try to connect to a Windows NT share that contains one or more
	international characters in the share name, you will receive an error message.
	
	Access Denied Errors
	--------------------
	
	Windows for Workgroups does not send out domain information when:
	
	- It attempts to log on to the Windows for Workgroups system
	
	- You issue a "NET USE" command for a Windows NT server causing a logon to an
	  Windows NT system
	
	This may cause access denied errors in the case where you have primary accounts
	with different passwords in more than one trusted domain. Your access to the
	server will depend on which trusted domain can authenticate the users credential
	first.
	
	Error 2242
	----------
	
	A Windows for Workgroups computer may be unable to connect to a Windows NT or
	Windows NT Advanced server computer, for the purposes of sharing resources. When
	you try to connect, the Windows for Workgroups computer generates the following
	error message: Error 2242.
	
	Windows for Workgroups computers need accounts on Windows NT computers to use
	shared resources on the Windows NT computers. Error 2242 is generated if the
	given password on that account has expired. This error can also be generated if
	the "User must change password on next logon" box was checked when the account
	was created.
	
	To correct this error use the following procedure:
	
	1. Make sure the "User must change password on next logon" box is unchecked.
	
	2. Type the user password for the Windows for Workgroups computer account.
	
	Additional query words: wfw wfwg prodnt WC 3.10 3.11 browse
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbWFWSearch kbWFW311
	Version           : 3.10 3.11 3.50
	
	=============================================================================
	
