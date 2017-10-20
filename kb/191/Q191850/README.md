---
layout: page
title: "Q191850: Convert Reports Cannot Create Elementary File System Structures"
permalink: /kb/191/Q191850/
---

## Q191850: Convert Reports Cannot Create Elementary File System Structures

{% raw %}

	Article: Q191850
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Conversion from FAT to NTFS fails and the following error message appears:
	
	  Cannot create the elementary file system structures.
	  The conversion failed
	  C: was not converted to ntfs
	
	This error occurs on Alpha systems when performing an unattended installation
	using the following options in the Unattend.txt file:
	
	     [Unattended]
	     OemPreinstall = yes
	     FileSystem = ConvertNTFS
	     ExtendOemPartition = 1
	
	CAUSE
	=====
	
	This problem only occurs if you apply the Alpha-based hotfix referenced in the
	following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q185773
	  TITLE : NTFS Corruption on Drives > 4 GB Using ExtendOEMPartition
	
	The ExtendOEMPartition option extends the partition to the maximum size of the
	drive. The above hotfix enables this feature so that it works correctly on
	drives exceeding 4 GB in size. There is a BIOS limitation on x86-based computers
	that limit the maximum size of a partition to 7.8 GB. Because this limitation
	does not exist on Alpha systems, the byte offset may exceed 32 bits. A problem
	in Fastfat.sys fails any disk access that calculated a byte offset exceeding 32
	bits.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	NOTE: This fix applies to both x86 and Alpha platforms and supercedes the hotfix
	referenced in the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q185773
	  TITLE : NTFS Corruption on Drives > 4 GB Using ExtendOEMPartition
	
	NOTE: In addition to the above file, the following additional files must be
	obtained from the latest Windows NT 4.0 Service Pack. The service pack should be
	of the same language as that being installed:
	
	  x86           Alpha
	  --------------------------
	  Gdi32.dll     Gdi32.dll
	  Hal.dll       Halgammp.dll
	  Hal486c.dll   Halpinna.dll
	  Halapic.dll   Halrawmp.dll
	  Halast.dll    Halsabmp.dll
	  Halcbus.dll   Kernel32.dll
	  Halcbusm.dll  Ntdll.dll
	  Halmca.dll    Ntkrnlmp.exe
	  Halmps.dll    Ntoskrnl.exe
	  Halmpsm.dll   User32.dll
	  Haloli.dll    Win32k.sys
	  Halsp.dll     Winsrv.dll
	  Halwyse7.dll
	  Kernel32.dll
	  Ntdll.dll
	  Ntkrnlmp.exe
	  Ntoskrnl.exe
	  User32.dll
	  Win32k.sys
	  Winsrv.dll
	
	Perform the following steps to successfully install this hotfix:
	
	1. Start the computer in MS-DOS mode and prepare the drive for Windows NT
	  unattended installation as usual. This includes copying the .\I386 or .\Alpha
	  folder from the Windows NT CD to the install directory on drive C.
	
	2. Copy the fixed files into a temporary folder.
	
	3. Apply the fixed files and required service pack dependency files to the
	  install directory on drive C. The service pack CD should be that of the same
	  language as that being installed. Because the service pack CDs are in Windows
	  NT Unicode format, they cannot be read directly from MS-DOS. The service pack
	  files may need to be transferred from a Windows NT system capable of reading
	  the service pack CD or the service pack files can be read directly using
	  MS-DOS from the Enterprise Server CD in the "\SP3\i386" or "\SP3\Alpha"
	  directory. The service pack dependency files are listed above. This step can
	  be performed automatically using the Oemsetup.bat batch file if you have the
	  dependency files in an MS-DOS readable format. Otherwise, you must perform
	  this step manually:
	
	  Manual Instructions for the Intel Platform
	  ------------------------------------------
	
	  Batch File Option:
	
	  From the temporary folder, run Oemsetup.bat, specifying both the source
	  service pack folder and the target install folder. For example (assume D: is
	  a service pack folder and C:\I386 is the install folder):
	
	  OEMSETUP D:\SP3\I386 C:\I386
	
	  This copies the necessary files to the I386 and C:\I386\System32 folders on
	  drive C where the installation folder is located.
	
	  Manual Option:
	
	  You can also perform this step manually by first copying Fastfat.sys from the
	  fix to the C:\I386 install folder, and then copy the following files from the
	  latest Windows NT 4.0 service pack to the C:\I386 and C:\I386\System32
	  folders as denoted below:
	
	     Fastfat.sys     -> ..\I386
	     Hal.dll         -> ..\I386
	     Hal486c.dll     -> ..\I386
	     Halapic.dll     -> ..\I386
	     Halast.dll      -> ..\I386
	     Halcbus.dll     -> ..\I386
	     Halcbusm.dll    -> ..\I386
	     Halmca.dll      -> ..\I386
	     Halmps.dll      -> ..\I386
	     Halmpsm.dll     -> ..\I386
	     Haloli.dll      -> ..\I386
	     Halsp.dll       -> ..\I386
	     Halwyse7.dll    -> ..\I386
	     Ntdll.dll       -> ..\I386 and  -> ..\I386\SYSTEM32
	     Ntoskrnl.exe    -> ..\I386
	     Ntkrnlmp.exe    -> ..\I386
	     Win32k.sys      -> ..\I386
	     User32.dll      -> ..\I386
	     Kernel32.dll    -> ..\I386
	     Gdi32.dll       -> ..\I386
	     Winsrv.dll      -> ..\I386
	
	  Then remove the compressed versions of these files from the C:\I386 and
	  C:\I386\System32 folders. Compressed files are identified by the last
	  character of the file type containing an underscore (_). For example, delete
	  Fastfat.Sy_, Hal.dl_, Ntdll.dl_, Ntoskrnl.ex_, and so on.
	
	  Manual Instructions for the Alpha Platform
	  ------------------------------------------
	
	  Batch File Option:
	
	  From the temporary folder, run Oemsetup.bat specifying both the source service
	  pack folder and the target install folder. For example (assume D: is a
	  service pack folder and C:\Alpha is the install folder):
	
	  OEMSETUP D:\SP3\Alpha C:\Alpha
	
	  This copies the necessary files to the Alpha and C:\Alpha\System32 folders on
	  drive C where the installation folder is located.
	
	  Manual Option:
	
	  You can also perform this step manually by first copying Fastfat.sys from the
	  fix to the C:\Alpha install folder then copy the following files from the
	  latest Windows NT 4.0 service pack to the C:\Alpha and C:\Alpha\System32
	  folders as denoted below:
	
	     Fastfat.sys     -> ..\Alpha
	     Halgammp.dll    -> ..\Alpha
	     Halpinna.dll    -> ..\Alpha
	     Halrawmp.dll    -> ..\Alpha
	     Halsabmp.dll    -> ..\Alpha
	     Ntdll.dll       -> ..\Alpha and  -> ..\Alpha\SYSTEM32
	     Ntoskrnl.exe    -> ..\Alpha
	     Ntkrnlmp.exe    -> ..\Alpha
	     Win32k.sys      -> ..\Alpha
	     User32.dll      -> ..\Alpha
	     Kernel32.dll    -> ..\Alpha
	     Gdi32.dll       -> ..\Alpha
	     Winsrv.dll      -> ..\Alpha
	
	  Then remove the compressed versions of these files from the C:\Alpha and
	  C:\Alpha\System32 folders. Compressed files are identified by the last
	  character of the file type containing an underscore (_). For example, delete
	  Fastfat.Sy_, Halgammp.dl_, Ntdll.dl_, Ntoskrnl.ex_, and so on.
	
	4. Run Winnt.exe as usual to complete the Windows NT installation.
	
	5. When the Windows NT installation is complete, apply the latest service pack
	  immediately. This eliminates inconsistent releases of system files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	Additional query words: corrupt user domain
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
