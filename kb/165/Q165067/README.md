---
layout: page
title: "Q165067: FIX: Memory Leak Using CLEAR ALL on Subclass with Array"
permalink: kb/165/Q165067/
---

## Q165067: FIX: Memory Leak Using CLEAR ALL on Subclass with Array

	Article: Q165067
	Product(s): Microsoft FoxPro
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The CLEAR ALL command does not recover memory after altering the array property
	of a class from a subclass. Because the CLEAR ALL command does not recover the
	memory, running the program numerous times may cause the Visual FoxPro
	application to exhaust system memory resources.
	
	This problem does not occur in Visual FoxPro for Windows 3.0b.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 5.0a
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create a program file, add the following code, and execute it.
	
	     * This program illustrates a memory leak in Visual FoxPro 5.0:
	     * If an array property of a class is altered in a subclass
	     * then there is a memory leak with each instantiation of the
	     * subclass.
	     * The loop demonstrates the memory leak: Every instantiation of
	     * a test1 class will use memory not recoverable by CLEAR ALL.
	
	     FOR lncounter=1 TO 500
	        oa=CREATEOBJ("test1")
	        _PAGENO=lncounter
	        CLEAR ALL
	        WAIT WINDOW NOWAIT "Test "+ALLT(STR(_PAGENO,6))+": ;
	        Memory used"+ALLTRIM(SYS(1016))
	        lncounter=_PAGENO
	     ENDFOR
	     CLEAR ALL
	     RETURN
	
	     *   DO-NOTHING CLASSES which demonstrate the memory leak.
	     DEFINE CLASS objectWithArray AS LINE
	        DIMENSION atest[1]
	        atest[1]=""
	        p1="base value for p1"
	     ENDDEFINE
	
	     DEFINE CLASS Test1 AS objectWithArray
	        DIMENSION atest[4]
	        atest[1]="p1"
	        atest[2]="p2"
	        atest[3]="a1"
	        atest[4]="a2"
	
	        p1="default for p1"
	        p2="default for p2"
	     ENDDEFINE
	     *   End of test loop program
	
	While the program runs under Visual FoxPro 5.0, notice the memory usage reported
	by the SYS(1016) function continues to increase. However, no increase in memory
	usage appears when the code runs under Visual FoxPro 5.0a for Windows.
	
	Additional query words: execute executing
	
	======================================================================
	Keywords          : kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
