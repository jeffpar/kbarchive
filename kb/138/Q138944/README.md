---
layout: page
title: "Q138944: Cannot Add Components from Floppy Disks or CD-ROM"
permalink: kb/138/Q138944/
---

## Q138944: Cannot Add Components from Floppy Disks or CD-ROM

	Article: Q138944
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to add additional components to an existing Windows 95 installation
	using the Windows 95 CD-ROM or floppy disks, you may receive the following error
	message:
	
	  The file <filename> on Disk-1-Desc could not be found. Setup cannot
	  find the specified network path. If the path appears below make sure it is
	  correct. Click OK to try copying again.
	
	  Copy files from: <path>
	
	CAUSE
	=====
	
	This problem can occur if you originally installed Windows 95 from a shared
	network folder created by the Network Setup tool. The Layout.inf file for the
	installation refers to uncompressed files in the shared network folder, rather
	than to compressed files stored in cabinet files (such as those on the Windows
	95 CD-ROM and floppy disks).
	
	RESOLUTION
	==========
	
	To work around this problem, follow these steps:
	
	1. Rename the Layout.inf file in the Windows\Inf folder.
	
	2. Use the Extract tool to extract a new copy of the Layout.inf file from the
	  Precopy2.cab cabinet file to the Windows\Inf folder. For information about
	  using the Extract tool, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	3. Run the Add/Remove Programs tool in Control Panel to install the components
	  you want.
	
	4. When you are prompted, enter the correct path for the installation media.
	
	NOTE: If you choose to install components that are not included with the floppy
	disk version of Windows 95, you will be prompted to provide a different source
	for the necessary files.
	
	MORE INFORMATION
	================
	
	To avoid having to manually enter the path for the installation media each time
	you want to add a component, you must change the Setup Source path. For
	information about how to do so, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q131652 How to Change the Setup Source Path in Windows 95
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
