---
layout: page
title: "Q221657: FIX: C0000005 Error with Specific Access Methods and Debugger"
permalink: /kb/221/Q221657/
---

## Q221657: FIX: C0000005 Error with Specific Access Methods and Debugger

	Article: Q221657
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbOOP kbvfp600 kbvfp600bug kbVS600sp3 kbGrpDSFox kbDSupport
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under a specific set of circumstances involving Access methods in custom classes
	and the use of the debugger, Visual FoxPro displays the following error
	message:
	
	  Fatal error: Exception code=C0000005
	
	This behavior may not happen if you run the form using the Run button (!) in the
	system toolbar although this sometimes can occur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	The Visual Studio 6.0 Service Pack 3 readme lists this bug as being fixed.
	Service Pack 3 did not fix this bug.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new class based on PageFrame.
	
	2. From the Class menu, select Edit Property/Method. Select the MousePointer
	  property from the Property/Method Information list. Select the Access method
	  check box.
	
	3. From the Property/Method Information list, select the Name property. Select
	  the Access method check box. Click Close and click Yes to save changes.
	
	4. Press Ctrl-W to save the class.
	
	5. Create a new form. On the Form Controls toolbar, click View Classes. Select
	  Add and select the VCX file in which your PageFrame class was saved.
	
	6. Add your custom PageFrame class to the form.
	
	7. Add a command button to the page frame. In the command button's click event,
	  add the following code:
	
	  SET STEP ON
	
	8. Run the form using the DO FORM command.
	
	9. Click the command button on the page frame.
	
	10. After the debugger opens, switch back to Visual FoxPro.
	
	11. Move the mouse pointer over the page frame.
	
	NOTE: If the mouse pointer is moved over the page frame for a while, the
	following error is displayed:
	
	  Fatal error: Exception code=C0000005
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbOOP kbvfp600 kbvfp600bug kbVS600sp3 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix kbpending
	
	=============================================================================
	
