---
layout: page
title: "Q123767: PRB: Help Compiler Error 5059 - Not Enough Memory"
permalink: /kb/123/Q123767/
---

## Q123767: PRB: Help Compiler Error 5059 - Not Enough Memory

	Article: Q123767
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Help Compiler generates Error 5059 stating that there is not enough memory
	to build the help file.
	
	CAUSE
	=====
	
	This error message occurs under each these conditions:
	
	- There is a graphic larger than 64K pasted directly into the .RTF file.
	
	- There is a corrupt graphic in the .RTF file.
	
	- The Help Compiler does not have enough memory.
	
	RESOLUTION
	==========
	
	You can resolve the problem by following these steps:
	
	1. Place large graphics (larger than 64K) in the .RTF file by reference. To
	  insert a graphic by reference, type the following instead of pasting the
	  graphic directly into the .RTF file:
	
	        {bm$ graphfile}
	
	  Where:
	
	   - bm$ is either bml, bmr, or bmc:
	
	      - Use bml for a left-aligned (left-justified) graphic.
	
	      - Use bmr for a right-aligned (right-justified) graphic.
	
	      - Use bmc for a character-aligned (character-justified) graphic.
	
	   - graphfile is the name of the graphic file you want displayed in the
	     compiled help file.
	
	2. Replace any bad graphics embedded in the .RTF file.
	
	3. To free memory, unload unneeded appliactions, device drivers, and
	  memory-resident (TSR) programs before compiling again.
	
	Additional query words: VFoxWin FoxWin 2.50 hc31 errmsg err msg message
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300
	Version           : WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0
	
	=============================================================================
	
