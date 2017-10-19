---
layout: page
title: "Q151178: User Restrictions Under File Manager and Print Manager"
permalink: /kb/151/Q151178/
---

## Q151178: User Restrictions Under File Manager and Print Manager

	Article: Q151178
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how to restrict users from creating or deleting resource
	shares under Windows NT and describes the procedures that can be applied to
	Windows for Workgroups 3.1x systems.
	
	MORE INFORMATION
	================
	
	Under Windows for Workgroups 3.1x, an administrator could set up a user's File
	Manager or Print Manager to restrict that user from creating file or print
	shares. The administrator did this by adding an entry to one of the .ini files
	of Windows for Workgroups 3.1x. This method is not possible under Windows NT,
	but there are other ways to prevent a user from creating file and print shares.
	
	File and Print Sharing Restrictions Under Windows 3.1x:
	-------------------------------------------------------
	
	Under Windows for Workgroups 3.1x, an administrator could restrict both File
	Manager and Print Manager sharing for the users of a specific workstation. The
	administrator did this by adding entries, respectively, to the Winfile.ini or
	Win.ini files. This procedure is described in the following Microsoft Knowledge
	Base article:
	
	Q95470Disabling Peer-To-Peer Network Functionality with WFWG
	
	File and Print Sharing Restrictions Under Windows NT:
	-----------------------------------------------------
	
	The two values described for disabling file or print sharing in Windows for
	Workgroups 3.1x do not have counterpart entries in the Windows NT Registry. This
	does not mean that ordinary users can create file or print shares under Windows
	NT; they cannot. Windows NT is controlled via user accounts, only those accounts
	that are part of the Administrators, Server Operators or Print Operators groups
	by default are allowed to create or delete shares.
	
	The sharing options for a basic user account will be disabled. The Share As
	option will be available but when a user tries to select it, an "Access Denied"
	message will be returned. In Print Manager, the user will not be able to create
	a printer or share one, although the user will be able to connect to a shared
	network printer.
	
	Completely Disabling File and Print Sharing Under Windows NT:
	-------------------------------------------------------------
	
	To completely disallow any sharing of system File and Print resources, it is
	possible to disable the Server service in Control Panel>Services. To do this,
	go into Control Panel>Services, select the Server service, click the Startup
	button, click Disabled and click OK. Then, with the Server service still
	selected, click on the Stop button. This will stop the Server service
	immediately, otherwise, on the next reboot of NT the Server service will not
	start by default.
	
	For additional information on how an administrator can protect data via Windows
	NT's NTFS file system permissions and the use of attributes, please see the
	following articles in the Microsoft Knowledge Base:
	
	
	Q103106Difference Between No Access and Access Not Specified
	
	Q100108Overview of FAT, HPFS, and NTFS File Systems
	
	Q96621NTFS Files Maintain FAT Attributes
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
