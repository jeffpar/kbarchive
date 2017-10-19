---
layout: page
title: "Q132545: Windows NT 3.51 Step Up Installation"
permalink: /kb/132/Q132545/
---

## Q132545: Windows NT 3.51 Step Up Installation

	Article: Q132545
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Advanced Server, version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Special Step-Up Edition of Windows NT 3.51 can be used to upgrade from
	Windows NT 3.5 to Windows NT 3.51. The Special Step-Up Edition runs only on
	computers with Windows NT 3.5 or Windows NT 3.51 installed. If Windows NT 3.5 or
	3.51 in installed on a computer, you can use the Special Step-Up Edition to
	upgrade that copy to Windows NT 3.51, or install Windows NT 3.51 into a new
	directory. The Special Step-Up Edition cannot be used to upgrade or install over
	Windows NT 3.1.
	
	NOTE: The Windows NT repair procedure also uses these steps to detect a Windows
	NT installation to repair. If NTOSKRNL.EXE and NTDLL.DLL are corrupted, the
	repair process may fail reporting it cannot locate a Windows NT installation. It
	is possible to expand and copy NTOSKRNL.EXE and NTDLL.DLL to the
	%SystemRoot%\System32 directory to allow the repair procedure to continue.
	
	MORE INFORMATION
	================
	
	The Special Step-Up Edition setup program checks the following to verify that an
	upgradable copy of Windows NT 3.5 is installed on the computer:
	
	1. The BOOT.INI file is searched for entries indicating installations of Windows
	  NT.
	
	2. Setup checks for the following files and directories in the location
	  specified by the BOOT.INI entry:
	
	
	  Directories:
	
	     \SYSTEM32
	     \SYSTEM32\DRIVERS
	     \SYSTEM32\CONFIG
	
	  Files:
	
	     \SYSTEM32\NTOSKRNL.EXE
	     \SYSTEM32\NTDLL.DLL
	
	
	3. Setup loads the SYSTEM and SOFTWARE hives from the registry and verifies the
	  product type and version. The following items are verified in the registry:
	
	  a. The installed version must be 3.5 or higher, but not higher than the
	     version you are attempting to install.
	
	  b. The installed version product type is compared against the Step-Up product
	     type. You cannot use the Special Step-Up Edition of Windows NT Workstation
	     to upgrade a Windows NT Server installation, and vice versa.
	
	If all of these things check out correctly, Setup proceeds. If any of the
	elements listed above are missing, the Setup does not to proceed. Also, if
	anything prevents Setup from seeing the Windows NT 3.5 installation, Setup does
	not proceed. For example, mirrored drives, inaccessible drives, and other
	similar problems can prevent Setup from seeing a Windows NT 3.5 installation.
	
	Windows NT 3.5 and Windows NT 3.51 Setup use the same steps listed above when
	looking for previous installations of Windows NT. The only difference is, the
	Special Step-Up Edition setup program requires the presence of an upgradable
	copy of Windows NT 3.5.
	
	Additional query words: 3.51 prodnt advanced server ntas
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTAdvSerSearch kbWinNTAdvServ351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
