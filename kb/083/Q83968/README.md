---
layout: page
title: "Q83968: How Windows Determines the Recommended Maximum Swap File Size"
permalink: /kb/083/Q83968/
---

## Q83968: How Windows Determines the Recommended Maximum Swap File Size

{% raw %}

	Article: Q83968
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	3.10 3.11
	
	WINDOWS
	
	kbusage
	
	SUMMARY
	=======
	
	This article discusses how Microsoft Windows version 3.1 determines the file
	size to recommend for swap files.
	
	MORE INFORMATION
	================
	
	Temporary Swap File
	-------------------
	
	- Q. What is the temporary swap file recommended maximum size?
	
	  A. It is four times the physical RAM in the computer, rounded to the next 4
	  megabytes (MB). For example, if you have 3 MB of free XMS memory, you can
	  create 16 MB of virtual memory ([3 MB * 4] + 4MB = 16 MB). Four is the
	  default value for the SYSTEM.INI [386Enh] switch "PageOverCommit=".
	
	
	  The recommended maximum size is also limited by the "50 percent free hard
	  drive space" rule (that is, a swap file cannot take more than 50 percent of
	  the available, usable hard drive space [compressed or stacked hard drive
	  space is not considered usable]).
	
	  Whichever limit is reached first establishes the maximum size.
	
	- Q. When I set a temporary swap file to a size larger than the maximum
	  recommended size, the following error message is displayed. What does this
	  message mean?
	
	  Windows will not use more than the virtual memory specified by the
	  Recommended Size. Are you sure you want to create a larger swap file?
	
	  A. WIN386.EXE creates the temporary swap file at run time, and the file grows
	  as necessary; the swap-file functionality only controls the maximum size
	  allowable. You can never exceed 50 percent of the free hard disk space or
	  four times the amount of physical RAM.
	
	Permanent Swap File
	-------------------
	
	- Q. When I set a permanent swap file to a size larger than the recommended
	  maximum size, Windows forces the setting back to the recommended maximum
	  size, even when plenty of free hard drive space exists. When this occurs, the
	  following message is displayed. What does this message mean?
	
	  The number you specified is too large. The number currently displayed is the
	  largest you can specify.
	
	  A. When Windows sets up a permanent swap file, free and contiguous hard drive
	  space limits the recommended maximum size. A permanent swap file must be
	  located on unfragmented space; therefore, even if there is plenty of disk
	  space, the swap file is limited by file fragmentation.
	
	If you have an disk-optimization program, such as Speedisk by Norton Utilities or
	Compress by PC Tools, you can use it to make more of the free hard drive space
	contiguous and usable for a permanent swap file.
	
	NOTE: The maximum size limitations described in the first answer apply in
	addition to the required unfragmented disk space.
	
	NOTE: These utilities should not be run from Windows and should not be run if you
	are using a disk cache. For more information, consult the manual for the utility
	you are using.
	
	
	KBCategory: kbusage
	KBSubcategory: wfw win31 wfwg
	
	Additional query words: 3.10 3.11 unfragment defragment swapfile
	
	======================================================================
	Keywords          : win31 
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : :3.1,3.11
	
	=============================================================================
	

{% endraw %}
