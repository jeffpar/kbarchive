---
layout: page
title: "Q152612: Err Msg: Drvspace 484... Incompatible Compression Driver"
permalink: /kb/152/Q152612/
---

## Q152612: Err Msg: Drvspace 484... Incompatible Compression Driver

{% raw %}

	Article: Q152612
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are attempting to perform any operation with Drvspace.exe, you may
	receive the following error message:
	
	  The compression driver that is currently loaded is incompatible with your
	  version of Windows compression.
	
	  Drvspace 484
	
	CAUSE
	=====
	
	This behavior can occur for either of the following reasons:
	
	- The following line appears in the Dblspace.ini file:
	
	  Drvspace3 = 0
	
	- An old or damaged version of the Drvspace.bin or Dblspace.bin file exists on
	  the hard disk.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Use any text editor (such as Notepad) to edit the Dblspace.ini file.
	
	2. Delete the following line:
	
	  Drivespace 3 = 0
	
	If this does not resolve the problem, replace all occurrences of the Dblspace.bin
	and Drvspace.bin files using one of the following methods:
	
	- If you installed Microsoft Plus! and are using DriveSpace 3, extract the
	  Drvplus.bin file from the Plus_1.cab file on the Microsoft Plus! CD-ROM or
	  disk 1, then rename the extracted file to Drvspace.bin.
	
	- If you do not have Microsoft Plus! installed and are using DriveSpace,
	  extract the Drvspace.bin file from the Precopy1.cab file on the Windows 95
	  CD-ROM or disk 1.
	
	- If you updated your Startup disk when you compressed your drive, a copy of
	  the Drvspace.bin file also resides on the Startup disk.
	
	For information about using the Extract tool, type "extract" (without quotation
	marks) at a command prompt, or see the following article in the Microsoft
	Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	Additional query words: drvspace484
	
	======================================================================
	Keywords          : kbenv kberrmsg win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	

{% endraw %}
