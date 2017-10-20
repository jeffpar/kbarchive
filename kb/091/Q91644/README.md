---
layout: page
title: "Q91644: PRB: Empty Segments in Program Overlay, Empty MOVE.TRC File"
permalink: /kb/091/Q91644/
---

## Q91644: PRB: Empty Segments in Program Overlay, Empty MOVE.TRC File

{% raw %}

	Article: Q91644
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:5.3,5.31.009,5.5,5.6
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 5.3, 5.31.009, 5.5, 5.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using LINK version 5.3 and above, an application created with the MOVE overlay
	syntax is not recognized to contain overlays. Each segment specified in the
	SEGMENTS statement in the module definition (DEF) file is empty. In a tracing
	version of the application, the trace file, MOVE.TRC, is also empty.
	
	CAUSE
	=====
	
	When the /Gy compiler option switch is specified, the compiler places the code
	for each module into segments named comdat_segN, where N is assigned successive
	integer values as segments fill up. The linker creates empty segments of the
	form modulename_text and places them into the specified overlays. Because each
	of the overlays is empty, the MOVE.TRC file produced by the tracing version of
	the overlaid program is also empty.
	
	RESOLUTION
	==========
	
	Perform one of the following two methods to avoid this situation:
	
	- Specify the overlays in the DEF file using the FUNCTIONS statement instead of
	  the SEGMENTS statement. Function code is placed in the appropriate
	  comdat_segN segment in the overlay.
	
	- Remove the /Gy option switch from the compiler command line.
	
	Additional query words: 5.30 5.31.009 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK530DOS kbLINK53109DOS kbLINK550DOS kbLINK560DOS
	Version           : MS-DOS:5.3,5.31.009,5.5,5.6
	
	=============================================================================
	

{% endraw %}
