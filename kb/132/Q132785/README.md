---
layout: page
title: "Q132785: Cannot Start Windows 95 from NetWare Server with RPL"
permalink: /kb/132/Q132785/
---

## Q132785: Cannot Start Windows 95 from NetWare Server with RPL

{% raw %}

	Article: Q132785
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
	
	On a computer with a hard disk that starts Windows 95 from a Novell NetWare
	server using Remote Program Loader (RPL), you may experience one or more of the
	following problems:
	
	- The real-mode network cannot be started.
	
	- The computer stops responding (hangs) during startup.
	
	- You receive an error message stating that the registry path cannot be
	  updated.
	
	CAUSE
	=====
	
	When you start Windows 95 from a Novell NetWare server with RPL, a folder called
	Suboot is created on the local hard disk. All of the files necessary to start
	the real-mode network are copied into this folder. A copy of the registry
	(called System.dat) is also copied to the root directory of the local hard disk,
	with the System, Hidden, and Read-Only attributes set. The next time you start
	the computer, the command in the Autoexec.bat file to copy the registry fails,
	because the the current version still has its Hidden, System, and Read-Only
	attributes set.
	
	This is not a problem if nothing in the registry has changed, but if you
	reinstall Windows 95, or make any changes to the registry, the problems
	described above may occur.
	
	RESOLUTION
	==========
	
	Delete the System.dat file in the root directory of the hard disk and then
	restart the computer. Note that you may need to clear the file's System, Hidden,
	and Read-Only attributes before you can delete it.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
