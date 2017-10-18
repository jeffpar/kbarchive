---
layout: page
title: "Q135161: Cannot Run Program Using UNC Path in Run Dialog Box"
permalink: kb/135/Q135161/
---

## Q135161: Cannot Run Program Using UNC Path in Run Dialog Box

	Article: Q135161
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
	
	When you try to start a program by typing a Universal Naming Convention (UNC)
	path in the Run dialog box, you may receive an error message stating that the
	program, or one of its components, cannot be found.
	
	CAUSE
	=====
	
	Many 16-bit programs do not work with a UNC path. Such programs may fail to open
	required files.
	
	RESOLUTION
	==========
	
	Map a network drive to the server containing the program. Then, run the program
	by using the mapped drive letter instead of the UNC path.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
