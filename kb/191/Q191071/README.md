---
layout: page
title: "Q191071: BUG: Controls Do Not Refresh After Exit From Screen Saver on NT"
permalink: /kb/191/Q191071/
---

## Q191071: BUG: Controls Do Not Refresh After Exit From Screen Saver on NT

{% raw %}

	Article: Q191071
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbScreenSaver kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB
	Last Modified: 27-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Controls on a form whose ClipControls property is set to False may not refresh
	properly after the Screen Saver is activated and then deactivated. When the
	mouse is moved to dismiss the Screen Saver, the form reappears but some controls
	are not redrawn properly. For example, Textbox controls do not retain their 3-D
	appearance. Programmatically refresh the form to cause the controls to be drawn
	properly.
	
	This problem only occurs on Windows NT 4.0. The problem does not occur on Windows
	95, Windows 98, Windows Me, or Windows 2000.
	
	
	RESOLUTION
	==========
	
	Set the ClipControls property of the form to True (the default value).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On Windows NT 4.0 Display Properties, enable the "Blank Screen" Screen Saver
	  and set Wait to one minute.
	
	2. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	3. Set the ClipControls property of Form1 to False.
	
	4. Add a Textbox control to Form1.
	
	5. Run the project and wait one minute for the Screen Saver to activate.
	
	6. Move the mouse to dismiss the screen saver. Notice the textbox has a flat
	  (2-D appearance) instead of a 3-D appearance.
	
	REFERENCES
	==========
	
	For more information, please search the Visual Basic Help Topics on
	"ClipControls property."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbScreenSaver kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
