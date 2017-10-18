---
layout: page
title: "Q139187: FIX:Open Dialog Box Appears After Clicking Next in Wizard Form"
permalink: kb/139/Q139187/
---

## Q139187: FIX:Open Dialog Box Appears After Clicking Next in Wizard Form

	Article: Q139187
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,5.0
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	As you run a form that was created by using the Form Wizard, the Open dialog box
	appears when you click a navigation button such as the Next button. If the table
	used in the form is selected, the following error appears:
	
	  File is in use.
	
	This occurs if SET COMPATIBLE is set to DB4.
	
	WORKAROUND
	==========
	
	Use any of the following three workarounds:
	
	Workaround One
	--------------
	
	This workaround sets the default Compatibility of Visual FoxPro to OFF.
	
	1. On the Tools menu, click Options.
	
	2. Click the General tab.
	
	3. Clear the dBASE Compatibility check box.
	
	Workaround Two
	--------------
	
	This workaround sets the Compatibility OFF until Visual FoxPro is restarted. In a
	program or in the Command window, issue the following line of code:
	
	     SET COMPATIBLE OFF
	
	Workaround Three
	----------------
	
	This is a permanent solution. Wizard-created forms will function correctly
	regardless of the setting of SET COMPATIBILITY.
	
	1. Open the txtbtns class of the Wizstyle.vcx class library file. (This library
	  is in the Wizards directory of Visual FoxPro.)
	
	2. In the Initvars procedure, change the following existing line of code:
	
	        THIS.nWorkarea = SELECT()
	
	  to the following new line of code:
	
	        THIS.nWorkarea = SELECT(0)
	
	3. Save the class.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	SET COMPATIBLE DB4 changes the behavior of the Initvars procedure. With the SET
	COMPATIBLE OFF setting, SELECT() returns the currently selected work area.
	However, with the SET COMPATIBLE DB4 setting, SELECT() returns the next
	available work area.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form by using the Form Wizard.
	
	2. Issue a SET COMPATIBLE DB4 command.
	
	3. Run the form.
	
	4. Click the Next button.
	
	Additional query words: move record kbtool kbprb
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500
	Version           : WINDOWS:3.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
