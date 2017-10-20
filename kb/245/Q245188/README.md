---
layout: page
title: "Q245188: Err Msg: STOP C0000221 - Bad Image Checksum in Oleaut32.dll."
permalink: /kb/245/Q245188/
---

## Q245188: Err Msg: STOP C0000221 - Bad Image Checksum in Oleaut32.dll.

{% raw %}

	Article: Q245188
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install custom programs on a computer running Microsoft Windows NT
	Server 4.0, your computer may stop responding (hang), and you may receive the
	following error message:
	
	  STOP C0000221 - Bad Image Checksum
	  The image Oleaut32.dll is possibly corrupt the header checksum does not match
	  the computed checksum.
	
	Attempts to replace the damaged Oleaut.dll file using the Last Known Good
	Configuration and the Emergency Repair Disk (ERD) are unsuccessful.
	
	CAUSE
	=====
	
	The cause is unknown.
	
	RESOLUTION
	==========
	
	To resolve this issue, replace the Oleaut32.dll file. Note that if you are
	running Microsoft Internet Information Server 4.0, you may need to replace other
	files as well.
	
	If Windows NT Server 4.0 resides on a FAT (file allocation table) partition,
	follow these steps:
	
	1. Start the computer in MS-DOS.
	
	2. Replace the Oleaut32.dll file in the %SystemRoot%\System32 folder with the
	  Oleaut32.dll file included in Microsoft Windows NT 4.0 Service Pack 3 or
	  later.
	
	  NOTE: If you are performing this procedure on a Compaq computer, apply the
	  latest Compaq Software Support Diskette (SSD).
	
	3. Restart the computer.
	
	If Windows NT Server 4.0 resides on an NTFS file system partition, follow these
	steps:
	
	1. Install a parallel installation of Windows NT Server 4.0, and then install
	  the latest service pack for Windows NT 4.0 to the parallel installation.
	
	2. Start the computer in the parallel installation.
	
	3. Copy the Oleaut32.dll file from the parallel installation to the
	  %SystemRoot%\System32 folder of the original installation.
	
	  NOTE: If you are performing this procedure on a Compaq computer, apply the
	  latest Compaq SSD.
	
	4. Restart the computer to the original installation, and then remove the
	  parallel installation.
	
	If you replace the Oleaut32 file and your computer is running Internet
	Information Server 4.0 on the original installation and the issue still occurs,
	follow these steps:
	
	1. Install a parallel installation of Windows NT Server 4.0.
	
	2. Install the following programs on the parallel installation in the following
	  order:
	
	  a. Windows NT 4.0 Service Pack 3
	
	  b. Microsoft Internet Explorer 4.0
	
	  c. Microsoft Windows NT 4.0 Option Pack
	
	  d. Microsoft Windows NT 4.0 Service Pack 4
	
	3. Copy all files in the \Winnt\System32 folder, excluding subfolders, from the
	  parallel installation to the \Winnt\System32 folder of the original
	  installation.
	
	4. Copy all files in the \Winnt\System32\Drivers folder, excluding subfolders,
	  from the parallel installation to the \Winnt\System32\Drivers folder of the
	  original installation.
	
	5. Restart the computer to the original installation, and then, unless you
	  receive a Dr. Watson error message, remove the parallel installation.
	
	6. If you receive a Dr. Watson error message while you are starting the computer
	  to the original installation, restart it to the parallel installation, and
	  then follow these steps:
	
	  a. In the original installation, rename the following files:
	
	  Explorer.exe
	  Comctl32.dll
	  Kernel32.dll
	  Ntdll.dll
	  Shdocvw.dll
	  Shell32.dll
	
	  b. Replace the listed files with the same files from the parallel
	     installation.
	
	  c. Restart the computer to the original installation, and then remove the
	     parallel installation.
	
	MORE INFORMATION
	================
	
	In the first two procedures, you can also use the file-system-specific steps to
	repair any damaged file that is referred to in the STOP C0000221 error message.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
