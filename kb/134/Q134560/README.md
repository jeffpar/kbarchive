---
layout: page
title: "Q134560: Newly Formatted Drive Does Not Support Long Filenames"
permalink: kb/134/Q134560/
---

## Q134560: Newly Formatted Drive Does Not Support Long Filenames

	Article: Q134560
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Fdisk program to configure a new, secondary disk drive, restart
	the computer, and then use the Format program to format the new disk drive, when
	you copy files to the new drive, you receive the following message
	
	  Select File Name
	
	  The destination does not support long file names. Please enter a name
	  for this file.
	
	  Original path:  C:\LongFileName.Extention
	
	  To folder:      <new drive>
	
	  New name:       longfile.ext
	
	where <new drive> is the drive letter of the newly formatted drive.
	
	CAUSE
	=====
	
	When Windows 95 starts, it creates a cache of information about the capabilities
	of each drive, including whether it supports long filenames. When the Format
	program finishes, the information in the cache is not updated; therefore,
	Windows 95 reads the previously cached information that indicates that the new
	drive does not support long filenames.
	
	RESOLUTION
	==========
	
	To copy files with long filenames to the newly formatted drive, do one of the
	following:
	
	- Restart the computer.
	
	  -or-
	
	- Double-click My computer, and then on the View menu, click Refresh.
	
	MORE INFORMATION
	================
	
	In addition to the message above, other symptoms you may see are as follows:
	
	- When you create a new folder, it only accepts an MS-DOS 8.3 filename.
	
	- When you drag a file with a long filename to the new drive, the long filename
	  is changed to an MS-DOS 8.3 filename.
	
	- When you attempt to copy files across a network from one mapped drive to
	  another (where both networked computers are running Windows 95), you receive
	  the following error message:
	
	  The destination does not support long file names. Please enter a name for
	  this file.
	
	To resolve these symptoms, use a resolution listed above.
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
