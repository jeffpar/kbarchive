---
layout: page
title: "Q157727: BUG: Animated Mouse Cursor Does Not Work in .exe File"
permalink: /kb/157/Q157727/
---

## Q157727: BUG: Animated Mouse Cursor Does Not Work in .exe File

	Article: Q157727
	Product(s): Microsoft FoxPro
	Version(s): 5.00
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An animated mouse cursor (pointer) used in a form in an application works only
	in the development environment. The animated mouse cursor (pointer) shows up as
	regular mouse cursor (pointer) instead at run time (in an .exe file).
	
	NOTE: In Visual FoxPro 5.0a, using a .cur file also produces the same behavior.
	Visual FoxPro 5.0a Service Pack 2 allows a .cur file to be used properly.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	An animated mouse cursor will not show up properly in an .exe, however, if you
	assign an .ico or .cur file to the MouseIcon property, the animated mouse cursor
	will work.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form as mPointer.scx.
	
	2. Set the MouseIcon property of the form to some animated cursor (for example,
	  Cursor.ani).
	
	3. Set the MousePointer property of the form to "99-Custom."
	
	4. Add a command button to the form, and in the click method of the form, put in
	  the following code:
	
	        RELEASE Thisform
	        CLEAR EVENT
	
	5. Run the form.
	
	  Notice the animated mouse pointer that appears when you run the form.
	
	6. Now, close the form and create a project named mProject.pjx
	
	7. Add a program to the project as Main.prg, and put the following code in
	  Main.prg
	
	        DO FORM mPointer
	        READ EVENT
	
	8. Add the form to the project.
	
	9. Build the project into an .exe file.
	
	10. Exit Visual FoxPro and run the .exe file.
	
	  The animated mouse pointer changes to a regular mouse pointer.
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : 5.00
	
	=============================================================================
	
