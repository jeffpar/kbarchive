---
layout: page
title: "Q99152: PRB: MOVE Application Requires Additional Memory to Load"
permalink: /kb/099/Q99152/
---

## Q99152: PRB: MOVE Application Requires Additional Memory to Load

{% raw %}

	Article: Q99152
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An application that uses the Microsoft Overlaid Virtual Environment may require
	more memory to run than the same program build with old style (C 6.0) overlays
	or without any overlay manager. While the size of the executable file may not
	change significantly, the EXEHDR utility indicates that more memory is required
	to load the program. (In EXEHDR version 3.0, memory required to load is the last
	line of information displayed for an MS-DOS program.)
	
	Additionally, the program may not recognize that it contains overlays. Each
	segment specified in the SEGMENTS statement in the module definition (.DEF) file
	is empty. In a tracing version of the application, the trace file, MOVE.TRC, is
	also empty.
	
	CAUSE
	=====
	
	This problem may occur when one or more modules of the program is compiled with
	the /Gy (Enable function-level linking) compiler option and these modules are
	listed in the SEGMENTS statement in the .DEF file.
	
	RESOLUTION
	==========
	
	To avoid the problem, do one of the following:
	
	- In the .DEF file, specify overlays in the FUNCTIONS statement instead of in
	  the SEGMENTS statement. LINK places function code into the appropriate
	  comdat_seg<n> segment in the overlay (discussed below). Specify the /Gy
	  compiler option switch only for those modules that require function-level
	  linking.
	
	- Remove the /Gy option switch from the compiler command line.
	
	MORE INFORMATION
	================
	
	The compiler creates a separate segment for each function in modules compiled
	with the /Gy option switch. The compiler names each segment comdat_seg<n>,
	where <n> is assigned successive integer values as segments fill up. In
	addition, the compiler creates an empty segment (0 bytes long) with the name
	<modulename>_TEXT. The error occurs because the SEGMENTS statement in the
	DEF file specifies the empty <modulename>_TEXT segments. LINK creates
	empty overlays and places the functions into the root overlay (overlay 0).
	Because each overlay is empty, the MOVE.TRC file produced by the tracing version
	of the overlaid program is also empty.
	
	While the empty segment that the compiler produces with the /Gy option switch
	prevents erroneous linker messages, it causes the side-effects listed above when
	the segment is placed into an overlay.
	
	The program may require more memory to load because the MOVE overlay manager
	requires about 16K. If the code that is expected to be in an overlay is placed
	into the root overlay, the application requires more memory.
	
	A code sample that demonstrates this problem is fairly easy to create, however,
	it requires too many files and lines of code to include one in this article. To
	demonstrate this problem, find an application that use MOVE overlays and the
	SEGMENTS statement in its .DEF file. Build the application and use EXEHDR to
	determine its load size. Then add the /Gy option switch to the compiler options
	for each module placed into an overlay. Rebuild the application and determine
	its load size.
	
	Additional query words: 5.30 5.31.009 5.50
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch
	Version           : :
	
	=============================================================================
	

{% endraw %}
