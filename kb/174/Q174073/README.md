---
layout: page
title: "Q174073: Auditing User Authentication"
permalink: kb/174/Q174073/
---

## Q174073: Auditing User Authentication

	Article: Q174073
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains tips for interpreting security auditing events related to
	user authentication.
	
	These events will all appear in the Security event log and will be logged with a
	source of Security.
	
	MORE INFORMATION
	================
	
	EventID   Description
	-------   -----------
	  514     An authentication package has been loaded by the LSA
	  515     A trusted logon process has registered with the LSA
	  518     A notification package has been loaded by the Security
	          Account Manager
	  528     Successful Logon
	  529     Logon Failure: Unknown user name or bad password
	  530     Logon Failure: Account logon time restriction violation
	  531     Logon Failure: Account currently disabled
	  532     Logon Failure: The specified user account has expired
	  533     Logon Failure: User not allowed to logon at this computer
	  534     Logon Failure: The user has not been granted the requested
	          logon type at this machine
	  535     Logon Failure: The specified account's password has expired
	  536     Logon Failure: The NetLogon component is not active
	  537     Logon Failure: An unexpected error occurred during logon
	  538     User Logoff
	  539     Logon Failure: Account locked out
	  644     User Account Locked Out
	
	For additional information about security events, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q174074 Security Event Descriptions
	
	Security Identifiers (SIDs)
	---------------------------
	
	Some security events report SIDs instead of user names. In this case, it is often
	difficult to determine which user account is being referred to in the event.
	
	It is possible to build a list of mappings of user names to SIDs by performing
	the following steps:
	
	1. Dump the user list to a text file with the NET USERS command or with
	  Addusers.exe.
	
	2. Modify this text file to remove unwanted information (headers, and so forth).
	
	3. Modify the resulting list of user names into a batch file, using the GETSID
	  resource kit utility to translate each user name into a SID. Redirect the
	  output to a text file.
	
	4. When you encounter a SID, search the text file (created previously) for that
	  SID. This will place you on the line with the user's name.
	
	Logon Type
	----------
	
	"Logon Type" will be one of the following:
	
	  2  Interactive
	  3  Network
	  4  Batch
	  5  Service
	  6  Proxy
	  7  Unlock Workstation
	  (0 & 1 are invalid)
	
	Logon Process
	-------------
	
	"Logon Process" will be one of the following:
	
	 "msv1_0" or "MICROSOFT_AUTHENTICATION_PACKAGE_V1_0":
	    msv1_0.dll, the default authentication package
	
	 "KSecDD":
	    ksecdd.sys, the security device driver
	
	 "User32" or "WinLogon\MSGina":
	    winlogon.exe & msgina.dll, the authentication user interface
	
	 "SCMgr":
	    The Service Control Manager
	
	 "LAN Manager Workstation Service"
	
	 "advapi"
	  API call to LogonUser
	
	 "MS.RADIU":
	   The RADIUS authentication package; a part of the Microsoft Internet
	   Authentication Services (IAS).
	
	
	User Rights
	-----------
	
	For additional information about user rights, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q101366 Definition and List of Windows NT Advanced User Right
	
	For additional information about auditing user right changes, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q163905 Auditing User Right Assignment Changes
	
	Supplemental Information
	------------------------
	
	For additional information about user authentication, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q102716 User Authentication with Windows NT
	
	For additional information about authentication on networks, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q122422 Example of Remote Logon with Windows NT Server
	
	Additional query words: secevent sec
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :2000,3.5,3.51,4.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
