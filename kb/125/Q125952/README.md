---
layout: page
title: "Q125952: Security Menu in Windows (16-bit) File Manager Not Available"
permalink: /kb/125/Q125952/
---

## Q125952: Security Menu in Windows (16-bit) File Manager Not Available

	Article: Q125952
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11; Win2000:3.1; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Security menu in File Manager (under Windows or Windows for Workgroups) is
	not available after you install the 16-bit Windows NT Server Tools from the
	Windows NT Server 3.5 CD. This problem occurs when File Manager cannot find all
	of the necessary DLLs to load the Security menu extensions.
	
	MORE INFORMATION
	================
	
	To reenable the Security menu, check the following:
	
	1. During the installation of the Windows NT Server Tools, you can choose
	  whether or not to install File Manager extensions. If you did not install
	  them, run Windows NT Server Tools Setup again and make sure you specify to
	  install File Manager extensions.
	
	2. Make sure the directory where the Windows NT Server Tools are installed
	  (SRVTOOLS by default) is in your PATH system environment variable. If not,
	  append the name of the correct directory to the PATH statement in your
	  AUTOEXEC.BAT file.
	
	  NOTE: At the conclusion of Windows NT Server Tools Setup, you are prompted to
	  view the NEW-CONF.SYS and NEW-VARS.BAT files and modify your CONFIG.SYS and
	  AUTOEXEC.BAT files. Windows NT Server Tools Setup does not modify CONFIG.SYS
	  or AUTOEXEC.BAT for you.
	
	3. Make sure the following line is in the [AddOns] section of WINFILE.INI:
	
	  acleditor=<x:\srvtools>\acledt16.dll
	
	  where <x:\srvtools> is the directory in which the Windows NT Server
	  Tools were installed.
	
	Additional query words: prodnt wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWFW311
	Version           : WINDOWS:3.11; Win2000:3.1; winnt:3.5,3.51,4.0
	
	=============================================================================
	
