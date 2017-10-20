---
layout: page
title: "Q86013: Windows Err Msg: Cannot Find the SETUP.INF File Necessary..."
permalink: /kb/086/Q86013/
---

## Q86013: Windows Err Msg: Cannot Find the SETUP.INF File Necessary...

{% raw %}

	Article: Q86013
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use the Windows Setup program located in the Main group of
	Windows, the following error message may occur:
	
	  Cannot find the SETUP.INF file necessary to run setup. Be sure that the file
	  is in a directory on the default path.
	
	CAUSE
	=====
	
	The SETUP.INF file is an information file that Windows Setup uses to install
	Windows system and application files, and to create program groups. This error
	can occur if the SETUP.INF file is not in the Windows SYSTEM subdirectory or if
	the SETUP.INF file is being accessed by another program.
	
	RESOLUTION
	==========
	
	If the file is missing, you can copy it directly from the Windows 3.0 or 3.1
	Setup disk #1. The SETUP.INF on disk #1 is not compressed.
	
	If SETUP.INF is being accessed by Write or another application, close the
	application before running Windows Setup. In Windows 3.0 the following error
	message also appears
	
	  System Error
	  Sharing violation on drive <x>:
	
	where <x> is the drive letter where the file is located.
	
	Additional query words: 3.00 3.10 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
