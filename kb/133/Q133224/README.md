---
layout: page
title: "Q133224: USS Ticonderoga Displays &quot;Incorrect DOS Version&quot; at Startup"
permalink: kb/133/Q133224/
---

## Q133224: USS Ticonderoga Displays &quot;Incorrect DOS Version&quot; at Startup

	Article: Q133224
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
	
	When you start the game USS Ticonderoga by Mindscape, you receive the following
	error message:
	
	  - Incorrect DOS version
	
	  -or-
	
	  - Bad Command or File Name
	
	CAUSE
	=====
	
	The startup batch file for the game includes the path C:\Dos\mem. If you
	upgraded from an earlier version of MS-DOS, the batch file tries to run the Mem
	program from the earlier version of MS-DOS, resulting in the error message
	"Incorrect DOS version." If you do not have an earlier version of MS-DOS, or the
	MS-DOS directory is something other than C:\Dos, you receive the error message
	"Bad command or filename."
	
	RESOLUTION
	==========
	
	Modify the Tico.bat file. Change the line that reads
	
	  C:\DOS\MEM
	
	to:
	
	  C:\WINDOWS\COMMAND\MEM
	
	Or, contact Mindscape for information about resolving this problem.
	
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
