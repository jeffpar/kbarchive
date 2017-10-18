---
layout: page
title: "Q108079: 32-Bit File Access Maximum Cache Size"
permalink: kb/108/Q108079/
---

## Q108079: 32-Bit File Access Maximum Cache Size

	Article: Q108079
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	3.11
	
	WINDOWS
	
	kbenv
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you use Microsoft Windows for Workgroups 3.11 with 32-bit file access, the
	maximum amount of memory that can be set in the 386 Enhanced dialog box in
	Control Panel is 24 megabytes (MB)(or 24,576 kilobytes [K]).
	
	Microsoft Windows 95 does not provide a user interface to change the 32-bit file
	access cache size.
	
	MORE INFORMATION
	================
	
	Although the user interface is limited to 24 MB, the theoretical maximum size of
	the cache is actually 2GB. This cache size is using physical RAM; therefore, the
	cache size is limited to the amount of RAM on your computer. Setting the cache
	size greater than the physical amount of RAM available results in the following
	error message when re-entering the Virtual Memory settings in the 386 Enhanced
	dialog box:
	
	  32-bit file access was unable to run. Your hard disk(s) may not be compatible
	  with 32-bit file access.
	
	Steps to Manually Increase or Decrease the Cache Size
	for Windows for Workgroups 3.11 and Windows 95
	----------------------------------------------------------------------------------------------------
	
	1. Open the System.ini file in a text editor, such as Microsoft Windows Notepad.
	
	2. Go to the [VCache] section.
	
	3. Change the MinFileCache= and the MaxFileCache= settings to the desired
	  value.
	
	  NOTE: The value for these settings are in kilobytes. For example, if you want
	  to create a 50-MB cache that cannot exceed 55 MB, the lines would be as
	  follows:
	
	        [VCache]
	        MinFileCache=51200
	        MaxFileCache=56320
	
	Please note that Microsoft's testing did not include cache sizes greater than
	40MB. Microsoft makes no guarantees that the cache size will operate correctly
	when increased above the user interface. Microsoft is not responsible for data
	loss or data corruption due to a cache size larger than the user interface.
	
	Additional query words: 3.11 vfat vcache vcache.386 max limit amount
	
	======================================================================
	Keywords          : win95 
	Technology        : kbAudDeveloper kbWin95search kbWFWSearch kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
