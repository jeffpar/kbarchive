---
layout: page
title: "Q88140: DOCERR: &quot;Guide to Programming&quot; DLL Example Incorrect"
permalink: /kb/088/Q88140/
---

## Q88140: DOCERR: &quot;Guide to Programming&quot; DLL Example Incorrect

	Article: Q88140
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the "Guide to Programming" manual included with version 3.1 of the Microsoft
	Windows Software Development Kit (SDK), the dynamic-link library (DLL) example
	in Chapter 20 contains some errors. The text below lists these errors and the
	steps to correct them.
	
	MORE INFORMATION
	================
	
	Pages 475 and 480 discuss the Windows exit procedure (WEP) that must be present
	in every DLL. The code on page 475 implies that the source code for the WEP
	function belongs in the same file as the source code for the other functions in
	the DLL. This implication is incorrect. Because the segment containing the WEP
	must be marked PRELOAD FIXED and the other segments of the DLL should be marked
	MOVEABLE DISCARDABLE, the source code for the WEP should be in a separate file,
	for example, WEP.C.
	
	To correct this problem, name the code segment that contains the WEP by
	specifying the -NT option switch for the Microsoft C Compiler. The following
	compiles the code in the WEP.C file and places the resulting code into a code
	segment named WEP_SEG:
	
	     cl -c -AMw -Gsw -NT WEP_SEG -Os -W3 wep.c
	
	Place a SEGMENTS statement in the module definition (.DEF) file to specify the
	attributes for the code segment that contains the WEP. The .DEF file should also
	include a CODE statement that specifies the default attributes for the code
	segments not listed in a SEGMENTS statement. The SEGMENTS statement is as
	follows:
	
	     SEGMENTS
	        WEP_SEG PRELOAD FIXED
	
	On page 481, the .DEF file names the library using a combination of uppercase and
	lowercase letters. Naming a library with lowercase letters causes problems if
	the DLL is used with version 3.0 of the Microsoft Windows graphical environment.
	These problems have been corrected in Windows 3.1.
	
	
	Also on page 481, the HEAPSIZE statement in the .DEF file does not reserve any
	space for a heap for the DLL. This is incorrect. The DLL must have at least a
	minimal heap available for the functions in the C run-time library. Modify the
	HEAPSIZE statement to reserve 1024 bytes for the heap.
	
	On pages 482 and 483, the small memory model is incorrectly specified in the C
	compiler command line. On pages 483 and 484, medium memory model libraries are
	correctly specified to link the DLL.
	
	To correct this problem, modify the compiler command line to use the medium
	memory model libraries by replacing the -ASw option switch with the -AMw option
	switch.
	
	To reflect the changes listed in this article, replace the .DEF file on page 481
	with the following:
	
	    LIBRARY MINDLL
	     DESCRIPTION 'MinDLL -- Minimum Code Required for DLL.'
	     EXETYPE WINDOWS
	     STUB 'WINSTUB.EXE'
	
	     CODE MOVEABLE DISCARDABLE
	     DATA MOVEABLE SINGLE
	     SEGMENTS
	        WEP_SEG PRELOAD FIXED
	
	     HEAPSIZE 1024
	
	     EXPORTS
	        MinRoutine @1
	        WEP        @2 RESIDENTNAME
	
	To reflect the changes listed in this article, replace the makefile on pages 482
	and 483 with the following:
	
	     all: mindll.dll
	
	     mindll.obj: mindll.c
	        cl -c -AMw -Gsw -Os -W3 mindll.c
	
	     wep.obj: wep.c
	        cl -c -AMw -Gsw -NT WEP_SEG -Os -W3 wep.c
	
	     mindll.dll: mindll.obj wep.obj
	        link mindll.obj libentry.obj wep.obj, mindll.dll, \ 
	           mindll.map/map, mdllcew.lib libw.lib/noe/nod, mindll.def
	        mapsym mindll.map
	        implib mindll.lib mindll.def
	        rc mindll.dll
	
	Additional query words: 3.10 docerr
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
