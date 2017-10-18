---
layout: page
title: "Q197206: PRB: Slight Memory Leak Calling VFP COM DLL Repeatedly from VFP"
permalink: kb/197/Q197206/
---

## Q197206: PRB: Slight Memory Leak Calling VFP COM DLL Repeatedly from VFP

	Article: Q197206
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbCOMt kbOOP kbvfp500 kbvfp500a kbvfp600
	Last Modified: 03-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you repeatedly call a COM DLL created in Visual FoxPro, the memory usage of
	Visual FoxPro increases slightly.
	
	CAUSE
	=====
	
	The memory usage increase between calls to the COM DLL is greater in Visual
	FoxPro 5.x than in Visual FoxPro 6.0. In Visual FoxPro 5.x, increases of 100K or
	more are common. In Visual FoxPro 6.0, the memory increases normally range from
	4K to 16k.
	
	The problem appears to be related to returning long character strings back from
	the COM DLL.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The Steps to Reproduce Behavior require that you use a Windows NT computer.
	
	NOTE: If you run this on a different computer (not the one where you built the
	COM DLL), then you need to register it using Regsvr32.exe.
	
	1. Create a new project. Name it Test.
	
	2. Add a new program to the project. Name this Test.prg.
	
	3. Place the following code in Test.prg and save it:
	
	  
	
	        DEFINE CLASS ObjectTest AS CUSTOM OLEPUBLIC
	           FUNCTION MyGetObject()
	              RETURN REPLICATE( "D", 65000 )
	           ENDFUNC
	        ENDDEFINE
	
	4. Build the project into a COM DLL.
	
	5. Create another new program. Name it Dotest.prg. Do not include it in the
	  project.
	
	6. Place the following code in Dotest.prg and save it:
	
	  
	
	        x = CreateObject("test.ObjectTest")
	        FOR i = 1 TO 10
	           x.MyGetObject()
	        NEXT i
	        x = .NULL.
	
	7. Keep the Dotest.prg file open in Visual FoxPro.
	
	8. Open the Windows NT Task Manager. Click the Process tab. Make sure the Mem
	  Usage column is displayed. Find the Visual FoxPro executable file - VFP6.exe
	  or VFP.exe. Note the Mem Usage number.
	
	9. Run the Dotest.prg program repeatedly by clicking on the Run ToolButton on
	  the Standard toolbar.
	
	RESULT: Note that the Mem Usage number jumps up and then comes back down each
	time. However, each time it comes back down, it is higher than it was
	previously. With Visual FoxPro 6.0, it is normally about 4k higher each time.
	This might vary between 2k and 16k higher. In Visual FoxPro 5.x, the Mem Usage
	increases by 100k or more each time you run the program.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCOMt kbOOP kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
