---
layout: page
title: "Q186356: FIX: Source Code Controlled VFP Project Compiles Slow"
permalink: /kb/186/Q186356/
---

## Q186356: FIX: Source Code Controlled VFP Project Compiles Slow

	Article: Q186356
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbSSafe500bug kbvfp500bug kbvfp600fix
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compile a Visual FoxPro project that is under Source Code Control, it
	can take a very long time (as compared to compiling the same project when it is
	not under Source Code Control).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual FoxPro version
	6.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use a computer that has both Visual SourceSafe and Visual FoxPro installed.
	
	2. Make sure that Visual FoxPro is set up correctly for SourceSafe integration.
	
	3. Open the sample project, Tastrade.pjx, which ships with Visual FoxPro.
	
	4. In the Project Manager select the BUILD option.
	
	5. In the Build Options dialog box select "Build Executable" and then click OK.
	
	6. In the "Save As" dialog box, specify the name and path for the executable
	  file, then select SAVE to build a Visual FoxPro executable file.
	
	  Note how long it takes Visual FoxPro to complete the build process.
	
	7. Add the Project to Source Code Control.
	
	8. Repeat steps 3 through 6.
	
	RESULT: Observe that it takes Visual FoxPro much longer to finish the build
	process. The actual time depends on the specific computer configuration, such as
	processor speed, amount of memory and so forth.
	
	NOTE: The larger a project is the larger the difference between compile time for
	when the Project is under SourceCode control as compared to when the Project is
	not under SourceCode control.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbSSafe500bug kbvfp500bug kbvfp600fix 
	Technology        : kbVFPsearch kbSSafeSearch kbAudDeveloper kbVFP500 kbSSafe500
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
