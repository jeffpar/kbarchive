---
layout: page
title: "Q134750: Err Msg: SCANDISK Will Work Only with MS-DOS Versions..."
permalink: /kb/134/Q134750/
---

## Q134750: Err Msg: SCANDISK Will Work Only with MS-DOS Versions...

{% raw %}

	Article: Q134750
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
	
	After you install Windows 95, the MS-DOS version of ScanDisk does not operate.
	When you try to start ScanDisk from the DOS directory, you receive one of the
	following error messages:
	
	  This version of Microsoft SCANDISK will work only with MS-DOS versions 6.0
	  and later.
	
	  This version of Microsoft SCANDISK will work only on MS-DOS versions 6 and
	  6.20.
	
	CAUSE
	=====
	
	Setup leaves the MS-DOS version of ScanDisk in the DOS directory for backwards
	compatibility, but this version of ScanDisk does not run in Windows 95.
	
	RESOLUTION
	==========
	
	Run ScanDisk from the Windows\Command folder, or run it by clicking the Start
	button, pointing to Programs, pointing to Accessories, pointing to System Tools,
	and then clicking ScanDisk.
	
	MORE INFORMATION
	================
	
	You can run the version of ScanDisk in the DOS directory only if you boot your
	computer to your previous version of MS-DOS. We do not recommend that you do
	this because running the MS-DOS version of ScanDisk from the DOS directory can
	damage long filenames.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
