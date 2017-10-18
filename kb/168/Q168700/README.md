---
layout: page
title: "Q168700: Error Message Uninstalling Service Pack 3"
permalink: kb/168/Q168700/
---

## Q168700: Error Message Uninstalling Service Pack 3

	Article: Q168700
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you are uninstalling Service Pack 3 for Microsoft Windows NT 4.0, you may
	receive the following error message:
	
	  An error has occurred copying ntldr.
	  Ensure the location specified below is correct, or change it and insert
	  'Windows NT Service Pack Uninstall Archive' in the drive you specify.
	
	  From: <drive1>:\winnt\$NtServicePackUninstall$\ntldr To:
	  <drive2>:\ntldr
	
	If you click Error Details, you see the following information
	
	  The following error occurred: "The directory name is invalid" (error #267).
	  Source file: <drive1>:\winnt\$NtServicePackUninstall$\ntldr
	  Destination file: <drive2>:\ntldr
	
	where <drive1> is the current drive letter of the boot drive and
	<drive2> is the drive letter of the boot drive when Service Pack 3 was
	installed.
	
	CAUSE
	=====
	
	This error message occurs when the boot drive letter assignment has been changed
	since Service Pack 3 was installed.
	
	RESOLUTION
	==========
	
	Click Skip to bypass the file and allow the uninstall process to finish. When
	the uninstall process is finished, run the Emergency Repair Disk (ERD), choose
	Verify Windows NT System Files, and repair the changed Ntldr file.
	
	NOTE: We do not recommend changing the boot drive letter or system drive letter
	assignment.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	After skipping the Ntldr file, you may receive the following additional error
	message:
	
	  The following error occurred: "The system could not find the path specified."
	  (error #3)
	
	  Source file: <drive1>:\winnt\$NtServicePackUninstall$\iexplore.exe
	  Destination file: <drive2>:\program files\plus!\ Microsoft
	  Internet\iexplore.exe
	
	This error message may also occur for the Hyperterm.exe file for the following
	destination:
	
	  <drive2>:\program files\Windows NT\hyperterm.exe
	
	If these error messages occur, click Skip to bypass the files and then replace
	the files noted in the error message by expanding them from the Windows NT
	compact disc. For example, to replace the Hyperterm.exe file, perform the
	following steps:
	
	1. Rename the Hyperterm.exe file in the <drive1>:\Program Files\Windows NT
	  folder.
	
	2. Expand the original Hyperterm.exe file from the Windows NT 4.0 compact disc
	  into the <drive1>:\Program Files\Windows NT folder. To do so, use the
	  following command:
	
	  expand <cd-rom>\i386\hyperterm.ex_ <drive1>:\program files\
	  windows nt\hyperterm.exe
	
	where <cd-rom> is your CD-ROM drive.
	
	If you have upgraded your version of Internet Explorer since installing Windows
	NT, you should reinstall Internet Explorer.
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
