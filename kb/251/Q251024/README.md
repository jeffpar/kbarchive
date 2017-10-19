---
layout: page
title: "Q251024: BUG: Converting VFP3 Project with Form Activates the Debugger"
permalink: /kb/251/Q251024/
---

## Q251024: BUG: Converting VFP3 Project with Form Activates the Debugger

	Article: Q251024
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbProjManager kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport
	Last Modified: 12-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Converting a Visual FoxPro 3.0 project that contains a Form activates the
	debugger. The debugger is launched with program execution suspended on the
	scx30converter1.converter message.
	
	CAUSE
	=====
	
	The Convert program contains a Suspend or Set Step On statement.
	
	RESOLUTION
	==========
	
	You can click on the Resume or Step over options several times in the Visual
	FoxPro debugger to complete the conversion.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	MORE INFORMATION
	================
	
	1. Run Visual FoxPro 3.0.
	
	2. Create a project and add a form to it along with a main program.
	
	3. Close and save the project.
	
	4. Run Visual FoxPro 6.0.
	
	5. Open the Visual FoxPro 3.0 project. This should bring up the Visual FoxPro
	  Converter dialog box.
	
	6. In the Converter dialog box, select the Retain Visual FoxPro 3.0 default
	  property values option.
	
	7. Click the Continue button.
	
	Note that the Debugger window comes up with the string Source Not Available in
	the Trace window.
	
	The program execution is stopped at the scx30converter1.converter message.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbProjManager kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
