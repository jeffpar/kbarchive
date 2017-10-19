---
layout: page
title: "Q142673: NetWare Drives Become Inaccessible to Certain Applications"
permalink: /kb/142/Q142673/
---

## Q142673: NetWare Drives Become Inaccessible to Certain Applications

	Article: Q142673
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Windows NT services that interact with drives connected to NetWare
	resources using Client Services for NetWare or Gateway Services for NetWare, the
	connected drives become inaccessible to applications such as File Manager,
	Microsoft Office 95, and Cmd.exe (the Windows NT command processor).
	
	If you attempt to access the drive from a Windows NT command prompt, the
	following error message is displayed:
	
	  The system cannot find the drive specified.
	
	From applications such as File Manager or Microsoft Office 95, these drives
	appear not to exist at all.
	
	If you issue a NET USE command, the computer will indicate that the drive
	connection is present. Furthermore, any operations where the drive letter is
	explicitly specified (for example, DIR X:\) work normally.
	
	CAUSE
	=====
	
	The drive table entry representing the NetWare drive connection becomes
	corrupted within the CSRSS process.
	
	
	RESOLUTION
	==========
	
	Basesrv.dll has been corrected to prevent NetWare drive resources from becoming
	orphaned in this manner.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51.
	
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words: wininstall drive letter missing prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
