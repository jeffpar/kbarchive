---
layout: page
title: "Q132601: Shortcut to MS-DOS-Based Program on Network Drive Fails"
permalink: /kb/132/Q132601/
---

## Q132601: Shortcut to MS-DOS-Based Program on Network Drive Fails

{% raw %}

	Article: Q132601
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
	
	When you try to use a shortcut to an MS-DOS-based program (.com, .exe, or .bat
	file) on a network drive that has been disconnected, you receive the following
	error message:
	
	  Cannot find the working folder for this program. The program may have
	  difficulty locating its files and documents. Make sure that the working
	  folder is specified correctly in the property sheets for the program and any
	  shortcuts to it. Do you wish to run the program anyway?
	
	If you click Yes, you receive the following error message:
	
	  Cannot find the file <drive>:\<path>\<program file>
	
	This problem does not occur with shortcuts to Windows-based programs or
	registered file types.
	
	CAUSE
	=====
	
	Windows 95 does not correctly remap the network drive before trying to run the
	MS-DOS-based program specified in the shortcut.
	
	
	RESOLUTION
	==========
	
	Remap the network drive containing the MS-DOS-based program file using the same
	drive letter, or change the shortcut to use a UNC path. UNC paths have the
	following syntax:
	
	  \\<servername>\<sharename>\<path>\<program file>
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
