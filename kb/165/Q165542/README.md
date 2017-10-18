---
layout: page
title: "Q165542: Service Pack 2 Uninstall Directory Gets Overwritten"
permalink: kb/165/Q165542/
---

## Q165542: Service Pack 2 Uninstall Directory Gets Overwritten

	Article: Q165542
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you uninstall Windows NT 4.0 Service Pack 2, the uninstall procedure may not
	restore the original files.
	
	CAUSE
	=====
	
	If you apply Windows NT 4.0 Service Pack 2 (SP2) a second time with the Create
	Uninstall Directory option chosen, the uninstall procedure may not restore the
	original files.
	
	In this scenario, the pre-SP2 files in the uninstall directory may be replaced
	with Service Pack 2 files already in the Windows NT directory tree. The files
	are copied without warning. Future use of the Service Pack 2 uninstall feature
	may copy Service Pack 2 files back into the Windows NT directory tree instead of
	the original files.
	
	RESOLUTION
	==========
	
	To maintain the state of the files prior to the first application of Service
	Pack 2, use one of the following options:
	
	- When re-installing Service Pack 2, select "No, I do not want to create an
	  Uninstall directory."
	
	  -or-
	
	- Prior to re-installing the Service Pack, make a backup copy of the
	  $NtServicePackUninstall$ directory. After you apply the service pack again
	  and choose to create an uninstall directory, you may replace the
	  $NtServicePackUninstall$ directory with the backup copy.
	
	If you wish to save the state of the files prior to the re-application of Service
	Pack 2 and use the Uninstall feature as currently designed, simply reapply
	Service Pack 2 with the uninstall directory creation option enabled.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 Service
	Pack 2. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
