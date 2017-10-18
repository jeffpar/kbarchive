---
layout: page
title: "Q100093: &quot;Invalid File Format&quot; Error When Launching MindMaze"
permalink: kb/100/Q100093/
---

## Q100093: &quot;Invalid File Format&quot; Error When Launching MindMaze

	Article: Q100093
	Product(s): Microsoft Home Kids Products
	Version(s): 1993 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta for Windows 1993 edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An "Invalid File Format" error appears if an outdated or corrupted .VBX or .DLL
	file used by MindMaze is encountered. This may occur if a MindMaze file is
	deleted or overwritten after installing Encarta.
	
	MORE INFORMATION
	================
	
	MindMaze copies and uses these .VBX and .DLL files:
	
	  VBRUN200.DLL
	  ANIBUTON.VBX
	  CMDIALOG.VBX
	  MCI.VBX
	  SBC.VBX
	  THREED.VBX
	
	When you run MindMaze, it searches for the files in this order:
	
	1. Current directory
	
	2. WINDOWS directory
	
	3. WINDOWS\SYSTEM directory
	
	4. Path directories
	
	To resolve this error, locate and delete duplicate copies of these files on the
	hard disk drive, and recopy the above files to the WINDOWS\SYSTEM directory.
	
	Note that a "minimum installation" of Encarta corrects this problem. A minimum
	installation forces MindMaze to read the correct files from the compact disc
	Viewer 2.0
	
	Additional query words: 1.00 game message multimedia multi media multi-media start open begin mindmaze encarta cd launch
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncarta1993
	Version           : :1993 edition
	
	=============================================================================
	
