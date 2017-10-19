---
layout: page
title: "Q192106: PRB: ActiveDoc Displays Incorrectly When Internet Explorer is Ma"
permalink: /kb/192/Q192106/
---

## Q192106: PRB: ActiveDoc Displays Incorrectly When Internet Explorer is Ma

	Article: Q192106
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you display a Visual FoxPro ActiveDoc form in a restored Internet Explorer
	window after it was started when the Internet Explorer window was maximized, you
	will notice that the left side and top of the form is cut off.
	
	RESOLUTION
	==========
	
	Steps to Resolve
	----------------
	
	1. Press ALT + MINUS SIGN to expose the control menu of the form.
	
	2. Choose Move.
	
	3. Using the arrow keys on the keyboard, move the form window down until the
	  form displays properly.
	
	Another way to avoid this is to set the AutoCenter property of the form to False.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project.
	
	2. Create a new ActiveDoc class and place the following code in the Run event:
	
	        DO FORM TEST1
	        READ EVENTS
	
	3. Place the following code in the ContainerRelease event:
	
	        CLEAR EVENTS
	
	4. Build a form called TEST1 and set the AutoCenter property True.
	
	5. Place a command button on the form with the following code in the Click
	  event:
	
	        RELEASE THISFORM
	        CLEAR EVENTS
	
	6. Size the form to a large size.
	
	7. Size the restored Internet Explorer window to be smaller than the form.
	
	8. Build the Application and run it in Internet Explorer.
	
	  Notice that the form is showing in the Internet Explorer window but the title
	  bar is cut off.
	
	9. Maximize the Internet Explorer window. Notice that the Title bar of the form
	  is still cut off.
	
	Additional query words: kbVFp600 kbActiveDocs kbIE
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
