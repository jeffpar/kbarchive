---
layout: page
title: "Q139617: Windows 95 Disconnects Attempting to Connect to Windows NT RAS"
permalink: kb/139/Q139617/
---

## Q139617: Windows 95 Disconnects Attempting to Connect to Windows NT RAS

	Article: Q139617
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you dial in using Windows 95 Dial-Up Networking client software to a
	Windows NT Remote Access Service (RAS) Server with the correct user name and
	password, the following error message appears:
	
	  Password expired. Contact your network administrator.
	
	When you click OK, you are disconnected.
	
	CAUSE
	=====
	
	This problem occurs if your password has expired or been reset with the "User
	Must Change Password at Next Logon" option. In addition, Windows 95 Dial-Up
	Networking does not support the ChangePassword CHAP functionality provided by
	Windows NT RAS/PPP servers.
	
	Users who connect to Windows NT RAS servers with expired passwords are
	disconnected without the opportunity to change their password.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- In Windows NT Server, enable the "Password Never Expires" option for the
	  user.
	
	  -OR-
	
	- Do not force users to change passwords set by the Administrator. In Windows
	  NT Server, click to clear the "User Must Change Password at Next Logon" check
	  box for the user.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Windows 95. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	Additional query words: win95x domain logon
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : :3.5,3.51
	
	=============================================================================
	
