---
layout: page
title: "Q89141: Using Swap Files on Networks in Windows"
permalink: kb/089/Q89141/
---

## Q89141: Using Swap Files on Networks in Windows

	Article: Q89141
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the use of Microsoft Windows and swap files on network
	drives. The following topics are included:
	
	- Can swap files be created on a network drive?
	
	- Why does Windows take so long to start in 386 enhanced mode?
	
	MORE INFORMATION
	================
	
	Can Swap Files be Created on a Network Drive?
	---------------------------------------------
	
	Network drives do not support the INT13h calls needed to set up a permanent swap
	file. A temporary swap file can be set up on a network drive where you have full
	privileges (rights) including creation rights if you are on a Novell network.
	
	Approximately 2 MB of free hard disk space is required. You cannot have multiple
	workstations using the same swap file; therefore, if you set up a swap file on a
	network drive, it should be in the user's directory where no one else but the
	user can access it.
	
	If possible, set up the swap file on your local workstation's hard drive.
	Benefits of this configuration include the following:
	
	- Performance for the workstation
	
	- Performance for the network (cuts down on network traffic)
	
	- Provides the ability to set up a permanent swap file
	
	Why Does Windows Take So Long to Start in 386 Enhanced Mode?
	------------------------------------------------------------
	
	Temporary swap files on a network can make the loading of Windows slow. This can
	also affect the speed at which Windows runs in 386 enhanced mode while Windows
	tries to swap files. This affects both Windows and non- Windows-based
	applications.
	
	When you load Windows, the temporary swap file is initialized in the startup
	location of WIN.COM. Because a network drive normally has a large amount of free
	disk space, this swap file can become large. 386 enhanced mode initializes the
	temporary swap file to about half of the available contiguous free disk space.
	
	Initializing this large swap file can take a long time and can cause Windows to
	take more than one minute to load.
	
	There are three ways to avoid this problem:
	
	1. The first step is to change the location of the temporary swap file. Change
	  the PagingDrive= in the [386Enh] section of the SYSTEM.INI file to a local
	  drive. For example:
	
	  PagingDrive=C:
	
	  NOTE: For a diskless workstation, this won't be an option. A network drive
	  must be used.
	
	2. You can also limit the size of the swap file by using the MaxPagingFileSize=
	  statement in the [386Enh] section of the SYSTEM.INI. For example:
	
	  MaxPagingFileSize=[Amount in Kilobytes]
	
	  NOTE: Using a smaller size swap file speeds up the initialization of the swap
	  file and makes access to it faster as well. This also limits the amount of
	  virtual memory available.
	
	3. Using Notepad, you can disable paging completely by editing the Paging= line
	  in the [386Enh] section of the SYSTEM.INI file.
	
	  Paging=NO
	
	  NOTE: Microsoft does not recommend setting Paging=NO as a Long-term solution
	  because this may adversely affect the performance of Windows.
	
	Additional query words: 3.10 3.11 3.00a 3.00 swapfile decnet starlan swap-file 2.1 2.12 2.2 4.0 4.1
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
