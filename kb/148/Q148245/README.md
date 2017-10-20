---
layout: page
title: "Q148245: Upgrading from Uni- to Multi-Processor Requires Service Pack"
permalink: /kb/148/Q148245/
---

## Q148245: Upgrading from Uni- to Multi-Processor Requires Service Pack

{% raw %}

	Article: Q148245
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to upgrade a uni-processor computer to a multi-
	processor computer for Windows NT 3.51. It also explains how to resolve the
	error message:
	
	  System Process - Driver Entry Point Not Found [popup]
	
	  The \SystemRoot\System32\drivers\srv.sys device driver could not locate the
	  entry point RtllsNameLegalDOS8Dot3 in driver NTOSKRNL.EXE?.
	
	MORE INFORMATION
	================
	
	Compaq Computers
	----------------
	
	If you install Windows NT 3.51 on a Compaq uni-processor computer and you want to
	upgrade the computer to support multi-processors, run SETUP.CMD from the Compaq
	SSD version 1.17b or later. Select "Upgrade to multi- processor support"
	(without quotation marks) to update the HAL.DLL and NTOSKRNL.EXE to
	multi-processor versions.
	
	For NON-COMPAQ machines, use the Windows NT Resource Kit Utility called
	UPTOMP.EXE to perform the upgrade.
	
	The setup program will prompt you for the correct path to the Windows NT
	installation directory. This is required to copy additional support files needed
	to make Windows NT multi-processor aware.
	
	The following files are copied and some are modified to support SMP on Compaq
	computers:
	
	HALSP.DLLMultiprocessor HAL for Compaq SystemPro and non-PCI ProLiant systems,
	including the Compaq SystemPro, SystemPro/XL, and the ProLiant 2000, 4000, and
	4500
	
	HALMPS.DLLMultiprocessor HAL for Intel MPS based systems, including the Compaq
	ProLiant 1500, 2500, 5000, 6000, 6500, and later systems.
	
	  HALSP.DLL     (renamed to HAL.DLL)
	or
	  HALMPS.DLL    (renamed to HAL.DLL)
	  WINSRV.DLL
	  NTKRNLMP.EXE  (renamed to NTOSKRNL.EXE)
	  KERNEL32.DLL
	  NTDLL.DLL
	
	After you upgrade your processor using Compaq SSD version 1.17b (or later), it is
	recommended that you modify SETUP.LOG (this allows future Microsoft Service
	Packs to install properly), as follows:
	
	1. Find SETUP.LOG in the %SystemRoot%\Repair directory. This file has hidden and
	  read-only file attributes.
	
	2. Remove the file attributes using File Manager.
	
	3. Using a text editor, such as Notepad, modify the [Files.WinNt] section to the
	  following:
	
	  \<%SystemRoot%>\System32\Kernel32.dll = "KERNEL32.DLL","5d99a"
	  \<%SystemRoot%>\System32\Winsrv.dll = "WINSRV.DLL","155a67"
	  \<%SystemRoot%>\System32\Ntdll.dll = "NTDLL.DLL","5830f"
	  \<%SystemRoot%>\System32\Ntoskrnl.exe = "NTKRNLMP.EXE","cb271"
	
	4. Save SETUP.LOG.
	
	5. Update or prompt recreate your Emergency Repair Disk using the RDISK utility.
	
	Possible Problem
	----------------
	
	If you are upgrading from single-processor to multi-processor support and the
	Windows NT 3.51 Service Pack 3 (SP3) or later has already been applied to your
	computer prior to the upgrade, the following error message may appear:
	
	  System Process - Driver Entry Point Not Found [popup]
	
	  The \SystemRoot\System32\drivers\srv.sys device driver could not locate the
	  entry point RtllsNameLegalDOS8Dot3 in driver NTOSKRNL.EXE?.
	
	Cause
	-----
	
	This problem occurs because the NTOSKRNL.EXE file copied from the Windows NT
	compact disc is not compatible with the new SRV.SYS in Windows NT 3.51 Service
	Pack 3 or later. To correct this problem, run Setup again and specify the
	location of the Windows NT files to the Windows NT Service Pack 3 (or later)
	compact disc.
	
	Resolution
	----------
	
	To resolve this problem, instead of pointing to the Windows NT 3.51 compact disc,
	provide a path to the Windows NT SP3 or later installation directory. This will
	allow the upgrade to copy the multi-processor version of the NTOSKRNL.EXE file
	that is compatible with the SRV.SYS file that is already in use.
	
	If using UPTOMP.EXE make sure each file listed above is in the service pack
	directory prior to performing the upgrade.
	
	If you are currently receiving the above error message:
	
	1. Rename the file NTOSKRNL.EXE located in the %SystemRoot%\SYSTEM32 directory.
	
	2. Copy the NTKRNLMP.EXE (multi-processor kernel) file from the Windows NT 3.51
	  Service Pack to the %SystemRoot%\SYSTEM32 directory.
	
	3. Rename NTKRNLMP.EXE to NTOSKRNL.EXE.
	
	4. Reboot.
	
	Supported Non-Compaq Computers
	------------------------------
	
	For non-Compaq computers, use UPTOMP.EXE in the Windows NT Resource Kit to
	upgrade from uni-processor to multi-processor. Ensure that the required HAL
	along with the TXTSETUP.SIF file located on the Windows NT 3.51 compact disc is
	also copied to the Windows NT 3.51 Service Pack 3 or later source directory.
	
	If the "Driver Entry Point Not Found" error message appears again, please see the
	following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q138713
	  TITLE : Err Msg: Driver Entry Point Not Found After Service Pack Upgrade
	
	1. Find SETUP.LOG in the %SystemRoot%\Repair directory. This file has hidden and
	  read-only file attributes.
	
	2. Remove the file attributes using File Manager.
	
	3. Using a text editor, such as Notepad, modify the [Files.WinNt] section to the
	  following:
	
	  \<%SystemRoot%>\System32\hal.dll = "halmps.dll","18039"
	  \<%SystemRoot%>\System32\Kernel32.dll = "KERNEL32.DLL","5d99a"
	  \<%SystemRoot%>\System32\Winsrv.dll = "WINSRV.DLL","155a67"
	  \<%SystemRoot%>\System32\Ntdll.dll = "NTDLL.DLL","5830f"
	  \<%SystemRoot%>\System32\Ntoskrnl.exe = "NTKRNLMP.EXE","cb271"
	
	4. Save SETUP.LOG.
	
	5. Update or recreate your Emergency Repair Disk using the RDISK utility.
	
	**NOTE: The HAL file may vary depending on Multi-processor machine your using and
	may need to modify the 1st line in acordance to the HAL file name.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbMSPressSearch kbWinNTS351search kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword5
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
