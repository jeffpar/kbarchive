---
layout: page
title: "Q166751: Running Dskprobe.exe from WinNT 4.0 Resource Kit on WinNT 3.51"
permalink: kb/166/Q166751/
---

## Q166751: Running Dskprobe.exe from WinNT 4.0 Resource Kit on WinNT 3.51

	Article: Q166751
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you try to run Dskprobe.exe from the Windows NT 4.0 Resource Kit on a
	computer running Windows NT 3.51, you get errors asking for additional DLL files
	that are not mentioned in the resource kit.
	
	MORE INFORMATION
	================
	
	To run the utility Dskprobe.exe from the Windows NT 4.0 Resource Kit on a
	computer running either Windows NT Server 3.51 or Windows NT Workstation 3.51,
	you need four files.
	
	You find these files on the Windows NT Server 4.0 or Workstation 4.0 compact
	disc, not in the resource kit.
	
	For the x86 platform, these files can be found under the i386 directory:
	
	  MSVCRT40.DLL
	  MSVCRT.DLL
	  MFC40.DLL
	  MSVCIRT.DLL
	
	These files will be compressed on the compact disc. Use the Expand utility to
	decompress, rename, and copy these files:
	
	  MSVCRT40.DL_
	  MSVCRT.DL_
	  MFC40.DL_
	  MSVCIRT.DL_
	
	Place all of these files in the same directory and then run the Diskprobe
	utility. This allows you to run Dskprobe.exe from the Resource Kit in Windows NT
	3.51.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
