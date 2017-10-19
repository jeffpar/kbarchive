---
layout: page
title: "Q160807: Cannot Connect to Windows NT Server with Many Shares"
permalink: /kb/160/Q160807/
---

## Q160807: Cannot Connect to Windows NT Server with Many Shares

	Article: Q160807
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 2,2.1,3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork osr2kbfixlist
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience problems connecting to a share on a Windows NT server from a
	Windows 95 workstation if the Windows NT server has a large number of shares.
	
	Specific symptoms may include:
	
	- When you attempt to make a UNC (Universal Naming Convention) connection to
	  the share, you may receive the following error message:
	
	  The folder "\\<server>\<share>" does not exist.
	
	- When you attempt to connect to the share in Windows NT Explorer, you may
	  receive the following error message:
	
	  Access Denied
	
	- In Microsoft Word version 7.0 for Windows 95, when you change the default
	  document location to a folder on the server, the File Open operation does not
	  work. The current folder reverts to the desktop or the root folder of drive
	  C. This may occur whether the share on the server is accessed using a mapped
	  drive letter or a UNC connection.
	
	- While using shortcuts you cannot get to lower level directories on the
	  Windows NT server. If you double click the shortcut - it connects to the
	  servers share and displays folders, but when you double click the lower level
	  folder all it does is refresh the upper level share points directories thus
	  creating a shortcut loop.
	
	
	CAUSE
	=====
	
	In some scenarios, Windows 95 determines whether a share exists on an SMB server
	by getting the list of shares from the server, then searching for the specified
	share name in the data returned. The SMB protocol used to get the list of shares
	is limited to a total data size of 64K. If the list of shares is too large, not
	all names fit within the 64K data block. If the specified share is not included
	in the partial list returned, the operation does not work.
	
	
	RESOLUTION
	==========
	
	To work around this issue, use one or more of the following methods:
	
	- Reduce the number of shares on the Windows NT server.
	
	- Reduce the length of the share names on the server.
	
	- Reduce the length of the comments on the shares.
	
	This issue is resolved by the following updated file for Windows 95 (retail and
	OSR1), and later versions of this file:
	
	  SHELL32.DLL  version 4.00.955  dated 9/30/96  817,664 bytes
	
	This issue is resolved by the following updated file for Windows 95 OEM Service
	Release 2 (OSR2), 2.1 and 2.5, and later versions of this file:
	
	  SHELL32.DLL  version 4.00.1112  dated 9/25/97  819,200 bytes
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Windows 95 and OEM
	Service Release 2 (OSR2). An update to address this problem is now available,
	but is not fully regression tested and should be applied only to computers
	experiencing this specific problem. Unless you are severely impacted by this
	specific problem, Microsoft does not recommend implementing this update at this
	time. Contact Microsoft Technical Support for additional information about the
	availability of this update.
	
	This issue is resolved in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	This symptom is typically encountered if the number of shares on the Windows NT
	server exceeds 1,000 shares, or if the shares generally have long comment
	strings.
	
	For additional information about related issues, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q160808 Profiles and Briefcase May Not Work with Windows NT Server
	
	  Q188206 Access Denied Connecting to Windows NT Server with Many Shares
	
	
	For additional information about issues resolved by updates to this component,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q161100 File May Be Truncated When Copied to a Full Network Drive
	
	  Q150215 Disabling Automatic Network Shortcut Resolution
	
	  Q138014 File May Be Truncated to Zero Bytes When Copied Onto Itself
	
	  Q136834 Error Copying Read-Only Files to Core SMB Server
	
	
	For additional information about Windows 95 updates, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q161020 Implementing Windows 95 Updates
	
	
	Additional query words: winnt refresh 1000 shares network path not found error 53
	
	======================================================================
	Keywords          : kberrmsg kbnetwork osr2 kbfixlist
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWin95search kbWinNT310Search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1,3.1,3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
