---
layout: page
title: "Q136965: SETUP.TXT Incorrectly States to Run UPDATE.EXE on Windows NT 3.5"
permalink: kb/136/Q136965/
---

## Q136965: SETUP.TXT Incorrectly States to Run UPDATE.EXE on Windows NT 3.5

	Article: Q136965
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SETUP.TXT included with Windows NT Server and Workstation version 3.51 lists the
	following title in the table of contents:
	
	  Update Required when Retaining Windows NT 3.1
	
	However, further down in the file the version number in the corresponding title
	has changed to 3.5:
	
	  Update Required when Retaining Windows NT 3.5
	
	All text in that section refers to retaining your installation of Windows NT
	version 3.5 with Windows NT 3.51.
	
	If you have Windows NT 3.5 installed on your computer and you follow the
	instructions in this section and run UPDATE.EXE, a message similar to the
	following appears when you restart Windows NT 3.5:
	
	  Cannot find FASTFAT.SYS
	
	NOTE: SETUP.TXT may also be distributed with products that are bundled with
	Windows NT 3.51 such as Backoffice version 1.5.
	
	CAUSE
	=====
	
	The section titled "Update Required when Retaining Windows NT 3.5" erroneously
	refers to Windows NT 3.5 instead of Windows NT 3.1.
	
	RESOLUTION
	==========
	
	When you read the section titled "Update Required when Retaining Windows NT
	3.5", replace all occurrences of Windows NT 3.5 with Windows NT 3.1, because it
	is intended for users who want to retain their installation of Windows NT 3.1
	along with a new installation of Windows NT 3.51. If you do not have Windows NT
	3.1 and want to retain your installation of Windows NT 3.5 with a new
	installation of Windows NT 3.51, you do not need to run UPDATE.EXE.
	
	If you do not want to retain Windows NT 3.1 (or you do not have Windows NT 3.1
	installed), but you have Windows NT 3.5 installed, and you have run UPDATE.EXE
	because of the SETUP.TXT error above, you must undo the changes made by
	UPDATE.EXE before you install Windows NT 3.51:
	
	1. Replace the following files in your %SystemRoot%\SYSTEM32\DRIVERS directory
	  with the files by the same name in the \I386 directory on the Windows NT 3.51
	  compact disc:
	
	  FASTFAT.SYS
	  NTFS.SYS
	
	2. Replace the following file in your %SystemRoot%\SYSTEM32 directory with the
	  file by the same name in the \I386 directory on the Windows NT 3.51 compact
	  disc:
	
	  AUTOCHK.EXE
	
	3. Copy the following files from \I386 directory on the Windows NT 3.51 compact
	  disc to a temporary directory on your hard disk:
	
	  UFAT.DL_
	  UNTFS.DL_
	
	4. Run the following commands from the command line to expand both files:
	
	  expand ufat.dl_ ufat.dll
	
	  expand untfs.dl_ untfs.dll
	
	  NOTE: You can find EXPAND.EXE in your %SystemRoot%\SYSTEM32 directory.
	
	5. Copy UFAT.DLL and UNTFS.DLL into the %SystemRoot%\SYSTEM32 directory.
	
	6. Delete the file PATCHDLL.DLL in your %SystemRoot%\SYSTEM32 directory.
	
	You may restart your computer and begin the Windows NT 3.51 installation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	
