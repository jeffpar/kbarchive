---
layout: page
title: "Q167963: Installing Program Requiring Specific Drive Letter"
permalink: kb/167/Q167963/
---

## Q167963: Installing Program Requiring Specific Drive Letter

	Article: Q167963
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install a program that is designed to run from a
	network server using a specific mapped drive letter on a local drive instead of
	a network server.
	
	MORE INFORMATION
	================
	
	To install the program locally, use one of the following methods:
	
	Method 1
	--------
	
	NOTE: This method uses DriveSpace and does not work on drives using the FAT32
	file system. For additional information, see the following article in the
	Microsoft Knowledge Base:
	
	  Q150579 DriveSpace Is Not Supported with FAT32 Drives
	
	1. Click the Start button, point to Programs, point to Accessories, point to
	  System Tools, and then click DriveSpace.
	
	2. On Advanced menu, click Create Empty.
	
	3. In the Create New Compressed Drive dialog box, assign the drive letter
	  required by the program in the Create A New Drive Named box.
	
	4. Click Start.
	
	5. Click Close.
	
	6. Install the program to the new compressed drive.
	
	Method 2
	--------
	
	Use the SUBST command to associate the required drive letter with the program's
	installation folder. For example, use
	
	  subst <drive>: <C:\dir>
	
	where <drive> is the drive the program requires to be mapped to, and
	<C:\dir> is the folder in which the program resides.
	
	NOTE: You should install Windows 95 Service Pack 1 if you are using the SUBST
	command and you have the retail release of Windows 95. If you have an OEM
	release of Windows 95, this update may already be included in your version of
	Windows 95. For information about obtaining Service Pack 1, see the following
	article in the Microsoft Knowledge Base:
	
	  Q142794 Availability of Microsoft Windows 95 Service Pack 1
	
	For additional information about issues that can occur when you use the SUBST
	command, see the following articles in the Microsoft Knowledge Base:
	
	  Q137529 Cannot Use DriveSpace to Compress a Substituted Drive
	
	  Q117390 SUBST Fails on Removable Media
	
	  Q135948 System Agent Reports Error After Running ScanDisk
	
	  Q151805 Files Appear Twice in the Recycle Bin
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbhowto
	
	=============================================================================
	
