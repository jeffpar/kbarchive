---
layout: page
title: "Q179052: BUG: Transparent Label on Transparent Control Does Not Display"
permalink: /kb/179/Q179052/
---

## Q179052: BUG: Transparent Label on Transparent Control Does Not Display

{% raw %}

	Article: Q179052
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Label text on a UserControl does not appear or appears "jagged" when the
	UserControl is placed in a container.
	
	CAUSE
	=====
	
	This problem occurs when the BackStyle property of both the Label control and
	the UserControl are set to Transparent. If the Font property of the Label
	control is set to a TrueType font, the Label text appears "jagged." If the Font
	property of the Label control is set to a non-TrueType font, the Label text does
	not appear at all.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new ActiveX control project in Visual Basic. UserControl1 is created
	  by default.
	
	2. Set the BackStyle property of UserControl1 to 0-Transparent.
	
	3. Add a Label control to UserControl1. Set the BackStyle property of the Label
	  control to 0-Transparent. Enter some text in the Caption property, such as
	  "Hello World." Close the UserControl1 control.
	
	4. Add a Standard EXE project to the project by completing the following steps:
	
	   - From the File menu, click Add Project. The Add Project dialog box appears.
	
	   - From the New Tab, click Standard EXE.
	
	   - Click Open to close the dialog box. Form1 is created by default.
	
	5. Add the UserControl you created in the previous steps to Form1. Note that the
	  caption in the Label control does not appear.
	
	Additional query words: ocx user kbcontrol kbactivex control kbdsi kbDSupport kbVBp500 
	kbVBp600 kbVBp
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
