---
layout: page
title: "Q132580: Cannot Start Windows 95 After Installing Close-Up"
permalink: /kb/132/Q132580/
---

## Q132580: Cannot Start Windows 95 After Installing Close-Up

{% raw %}

	Article: Q132580
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
	
	After you install Close-Up, you receive the following error message when you
	start Windows 95:
	
	  Cannot find a device file that may be needed to run Windows. Make sure that
	  the path...
	
	The file that cannot be found is Vddvga.vxd.
	
	CAUSE
	=====
	
	Close-Up must change the video driver in order to support desktop display on a
	remote computer. However, Close-Up does not modify the Windows system files
	directly. Instead, it installs a terminate-and-stay-resident (TSR) program that
	watches for an application trying to read the System.ini file (as Windows 95
	does at startup). When Windows 95 reaches the display driver line in the
	System.ini file, the TSR steps in and patches the read operation on the fly.
	However, the file that the patch references (Vddvga.vxd) is not part of Windows
	95.
	
	RESOLUTION
	==========
	
	Since no changes were made to the system files there is no workaround. Windows
	95 is not a supported platform for the Host side of Close-Up, but does work as a
	Guest workstation. Norton-Lambert plans to release a version of Close-Up that is
	compatible with Windows 95.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: CloseUp Close Up Norton
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
