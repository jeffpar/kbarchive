---
layout: page
title: "Q172613: Errors Connecting Through RAS When Password Expires"
permalink: kb/172/Q172613/
---

## Q172613: Errors Connecting Through RAS When Password Expires

	Article: Q172613
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbWinNT400sp4fix dun win95 kbDialUp
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows for Workgroups 
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	
	SYMPTOMS
	========
	
	When you attempt to connect to a Windows NT Remote Access Service (RAS) server,
	you may experience one of the following problems:
	
	Windows 95 Dial-Up Networking (DUN) Client
	------------------------------------------
	
	You may be prompted to change your password and/or you may receive the following
	error:
	
	  The computer you have dialed in to has denied access because the
	  username and/or password is invalid on the domain.
	
	This is not to be confused with the error: Password has expired. Contact your
	network administrator.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: <LINK TYPE="ARTICLE" VALUE="Q139617">Q139617</LINK>
	
	  TITLE     : Windows 95 Disconnects Attempting to Connect to Windows NT
	
	  RAS
	
	Windows for Workgroups 3.11 RAS Client
	--------------------------------------
	
	You may receive the following error:
	
	  Error 649: The Account does not have Remote Access permission.
	
	The above problems only occur if all of the following conditions are met:
	
	- Your Windows NT domain account is configured to expire passwords or you
	  enable the Change Password at Next Logon option in User Manager for Domains.
	
	- The RAS Server is running Windows NT configured as a member server and is
	  participating in a domain.
	
	- Your user account is not in the RAS server's local user account security
	  (SAM) database, but only in the domain database.
	
	RESOLUTION
	==========
	
	To resolve this issue, you will need to use one of the following methods,
	depending on the version of Windows NT Server that is operating as your RAS
	server:
	
	Windows NT Server 3.51
	----------------------
	
	- If you want to expire passwords or use the Change Password at Next Logon
	  option, you will need to move your RAS server to a Windows NT computer that
	  is configured as a domain controller. -or-
	
	- Do not use password expirations.
	
	Windows NT Server 4.0
	---------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbWinNT400sp4fix dun win95 kbDialUp 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search kbAudDeveloper kbWin95search kbWFWSearch kbZNotKeyword3
	Version           : WINDOWS:95; winnt:3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
