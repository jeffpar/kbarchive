---
layout: page
title: "Q148336: Memory Leak in Windows 95 Kernel Using Windows Sockets"
permalink: /kb/148/Q148336/
---

## Q148336: Memory Leak in Windows 95 Kernel Using Windows Sockets

	Article: Q148336
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbfile kbnetwork diskmem win95 kbgraphxlinkcritical kbDiskMemory
	Last Modified: 14-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a program that uses Windows Sockets in Windows 95, a gradual
	increase in the memory used by the operating system may occur over time,
	especially if the program opens and closes a large number of sockets.
	
	CAUSE
	=====
	
	There is an error in the Windows 95 Kernel (Kernel32.dll) that prevents the
	proper freeing of certain small data structures associated with Windows Socket
	processes and allocated sockets. Over time, these small memory leaks can result
	in a significant loss of available memory.
	
	Note that you can free the resources associated with a program by closing the
	program. If you quit and restart Windows 95, the memory is freed.
	
	RESOLUTION
	==========
	
	Microsoft has released an updated version of the Kernel32.dll file that corrects
	the problem described in this article. The updated file is:
	
	  KERNEL32.DLL version 4.00.951 (dated 2/2/96) and later
	
	To install the updated Kernel, follow these steps:
	
	1. Download the Krnlupd.exe file to an empty folder.
	
	2. In My Computer or Windows Explorer, double-click the Krnlupd.exe file you
	  downloaded in step 1.
	
	3. Follow the instructions on the screen.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Download krnlupd.exe now
	  (http://download.microsoft.com/download/win95upg/update/3/w95/EN-US/krnlupd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 95 (retail version) and
	Windows 95 OEM Service Release 1 (OSR1).
	
	This problem was corrected in Windows 95 OEM Service Release 2 (OSR2) and later
	versions (including Windows 98).
	
	MORE INFORMATION
	================
	
	When you run the Krnlupd.exe file, the following file is installed:
	
	  File name      Folder           Size      Date       Version
	  -------------------------------------------------------------
	  Kernel32.dll   Windows\System   411,136   02/02/96   4.00.951
	  Krnl32un.inf   Windows              533   07/25/97
	
	If you wish to uninstall the updated Kernel32.dll file, use the right Mouse
	button to click the Krnl32un.inf file in the Windows folder, and then click
	Install from the menu that appears. This step replaces the updated Kernel32.dll
	with the version that was previously installed on your computer and removes
	Krnl32un.inf.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbnetwork diskmem win95 kbgraphxlinkcritical kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
