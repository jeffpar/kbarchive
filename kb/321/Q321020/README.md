---
layout: page
title: "Q321020: &quot;May Not Remove Local Logon Right&quot; Err Msg Editing User Rights"
permalink: kb/321/Q321020/
---

## Q321020: &quot;May Not Remove Local Logon Right&quot; Err Msg Editing User Rights

	Article: Q321020
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to add or remove user accounts from the Grant To list in the User
	Rights Policy dialog box in User Manager for Domains, you may receive the
	following error message:
	
	  You may not remove the local logon right from the Administrators local group.
	  Doing so will disable all local administration of this computer.
	
	CAUSE
	=====
	
	This behavior may occur if one of the following conditions is true:
	
	- You try to edit the user rights assignments from the Windows NT 4.0 Remote
	  Administration Tools installed on a Windows 2000-based computer.
	
	  -or-
	
	- The Grant To list contains a deleted user account.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods, as appropriate to your
	situation.
	
	Method 1: Install the Windows 2000 Remote Server Administration Tools
	---------------------------------------------------------------------
	
	To remotely administer a Windows NT Server 4.0 computer or a Windows 2000 Server
	computer from a Windows 2000 Professional-based computer, you must install the
	Windows 2000 Remote Server Administration Tools. You can obtain these tools from
	the Windows 2000 Server CD-ROM or from the Windows 2000 Server Resource Kit.
	
	For additional information about how to install the Windows 2000 Remote Server
	Administration tools, click the article numbers below to view the articles in
	the Microsoft Knowledge Base:
	
	  Q216999 How to Install the Remote Server Administration Tools in Windows 2000
	
	  Q269483 Windows 2000 Administration Tools Package (Adminpak.msi) Updates
	
	To obtain the Windows 2000 Resource Kit, visit the following Microsoft Web site:
	
	  http://www.microsoft.com/windows2000/techinfo/reskit/default.asp#section1
	  (http://www.microsoft.com/windows2000/techinfo/reskit/default.asp#section1)
	
	Remove the Deleted User Account
	-------------------------------
	
	If the Grant To list contains a deleted user account, remove it. To do this,
	follow these steps:
	
	1. Synchronize the domain.
	
	2. On the Windows NT 4.0 primary domain controller (PDC), start User Manager for
	  Domains.
	
	3. On the Policies menu, click User Rights.
	
	4. In the Grant To list, click the deleted user or group item, and then click
	  Remove.
	
	5. Click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000Search kbwin2000ProSearch kbwin2000Pro
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	
