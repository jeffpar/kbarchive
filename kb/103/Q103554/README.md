---
layout: page
title: "Q103554: Running MS-DOS-Based Games with DoubleSpace"
permalink: /kb/103/Q103554/
---

## Q103554: Running MS-DOS-Based Games with DoubleSpace

{% raw %}

	Article: Q103554
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	Some MS-DOS-based games may not display video output correctly when the
	DoubleSpace component (DBLSPACE.BIN) is loaded.
	
	CAUSE
	=====
	
	The DoubleSpace decompression code requires the buffer it is reading into to be
	readable so that it can scan back for expanding repeated strings. Some games
	read directly into video RAM, which is not guaranteed to be readable.
	
	WORKAROUND
	==========
	
	To work around this problem, install your MS-DOS-based games on your
	uncompressed host drive. Then, when you start MS-DOS, press CTRL+F5 or CTRL+F8
	when the "Starting MS-DOS" prompt is displayed to start your computer without
	loading DBLSPACE.BIN.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	

{% endraw %}
