---
layout: page
title: "Q99285: Extract From VidEdit Supports 8-Bit Color Only"
permalink: /kb/099/Q99285/
---

## Q99285: Extract From VidEdit Supports 8-Bit Color Only

{% raw %}

	Article: Q99285
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Extracting frames from the VidEdit utility that ships with Microsoft Video for
	Windows results in bitmap images at a color depth of 8 bit only. This occurs
	even if the current AVI sequence is captured at a color depth of 16 or 24 bit.
	This is by design.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In VidEdit, open an AVI sequence that uses a 16- or 24-bit color depth.
	
	2. From the File menu, choose Extract.
	
	3. From the List Of Files Type list box, choose Microsoft Windows DIB.
	
	4. Type a valid filename with a DIB extension into the File Name text box and
	  choose OK.
	
	5. The resulting file (FILENAME.DIB) will be at an 8-bit color depth.
	
	Additional query words: 1.00 8 16 24
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a
	
	=============================================================================
	

{% endraw %}
