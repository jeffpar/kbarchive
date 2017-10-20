---
layout: page
title: "Q145863: FIX: Clear All Guides in Dialog Editor Causes Access Violation"
permalink: /kb/145/Q145863/
---

## Q145863: FIX: Clear All Guides in Dialog Editor Causes Access Violation

{% raw %}

	Article: Q145863
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): _IK920 kbVC kbVC500fix kbGrpDSTools
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Resource Editor, included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Choosing "Clear All" dialog guides inside the Visual C++ Dialog Editor can cause
	an access violation when saving the resource file or project. The error usually
	appears as a dialog that says:
	
	  The instruction at "0x5025b287" referenced memory at "0x00000000".
	  The memory could not be "read".
	
	  Click "OK" to Terminate the Application
	  Click "Cancel" to Debug the Application
	
	The "Clear All" command is accessible through a right mouse click on the Dialog
	Editor's ruler controls. The ruler controls can be found to the left and top of
	the current dialog being edited in the dialog editor. They may optionally be
	turned on/off through the Layout menu's Guide Settings dialog.
	
	RESOLUTION
	==========
	
	This seems to only be a problem if there are no dialog guide settings saved with
	the project when "Clear All" is chosen.
	
	This problem can be avoided by not choosing "Clear All" when there are currently
	no dialog guide settings saved in your project.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Create a default AppWizard MDI application.
	
	2. Insert a new dialog by right-clicking the mouse in the Resource View.
	
	3. "Clear All" dialog box guide settings by right-clicking the Dialog Editor's
	  ruler control.
	
	4. Choose "Save All" from the file menu or toolbar icon.
	
	At this point, Visual C++ will generate an access violation.
	
	If you were to set a dialog guide in the ruler control and choose "Save All"
	between steps 2 and 3 (above) then you wouldn't get an access violation.
	
	Additional query words: gpfault gpf NULL
	
	======================================================================
	Keywords          : _IK920 kbVC kbVC500fix kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch kbResourceEd
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
