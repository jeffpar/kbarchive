---
layout: page
title: "Q85877: FIX: MASM BELL and SNAP TSR Program Examples Incorrect"
permalink: /kb/085/Q85877/
---

## Q85877: FIX: MASM BELL and SNAP TSR Program Examples Incorrect

	Article: Q85877
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The BELL and SNAP TSR (terminate-and-stay-resident) sample programs that ship
	with the Microsoft Macro Assembler (MASM) versions 6.0, 6.0a, and 6.0b are not
	correct. Because of the errors in this program, other programs that are executed
	after the BELL or SNAP TSR program has been installed may hang the computer.
	
	CAUSE
	=====
	
	Because of the segment ordering and the way memory is released when the BELL or
	SNAP TSR program goes resident, the BeepCount variable is being freed. Because
	this variable is changed in the interrupt service routine (ISR), any program
	that is run after the BELL or SNAP TSR program has gone resident may have its
	memory corrupted.
	
	RESOLUTION
	==========
	
	To keep BeepCount from being released when BELL.EXE or SNAP.EXE terminates and
	goes resident, use one of the following solutions:
	
	- Change the class of the installcode segment so the segments are ordered
	  correctly. In INSTALL.ASM and HANDLERS.ASM, a segment named installcode is
	  declared with class CODE2, and is grouped inside DGROUP. Because both the
	  assembler and linker treat class CODE2 the same as class CODE, and BELL.C and
	  SNAP.C use .DOSSEG segment ordering, this code segment is placed prior to the
	  data segments in DGROUP. If this segment is placed after the _DATA segment,
	  where BeepCount is stored, the problem does not occur. To order the segments
	  differently, change the class of installcode to class CODE2 in both
	  INSTALL.ASM and HANDLERS.ASM. Class CODE2 is not treated the same as class
	  CODE so the installcode segment will not be considered a code segment.
	
	-or-
	
	- Move BeepCount so that it isn't released when the BELL or SNAP TSR program
	  terminates and goes resident. This can be accomplished by changing the
	  declaration of BeepCount in BELL.C or SNAP.C to the following:
	
	     int _based("CODE") BeepCount = 1;
	
	  This will move BeepCount into the code segment where it will not be returned
	  to MS-DOS. (Compile this code with Microsoft C version 6.0 or later.)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 6.0, 6.0a, and
	6.0b. This problem was corrected in MASM for MS-DOS version 6.1.
	
	MORE INFORMATION
	================
	
	In MASM 6.0, this program also generates the run-time error:
	
	  R6001 - null pointer assignment
	
	This particular problem was corrected in MASM 6.0a and 6.0b by stubbing out the
	function that checked for null pointer assignments. The R6001 error also occurs
	because of segment ordering and can be corrected with the first solution above.
	
	For more information on this problem, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q76945 FIX: Sample Program BELL.C Causes R6001 Error
	
	Additional query words: 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : MS-DOS:6.0,6.0a,6.0b
	Solution Type     : kbfix
	
	=============================================================================
	
