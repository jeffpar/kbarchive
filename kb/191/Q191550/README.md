---
layout: page
title: "Q191550: BUG: DateTimePicker Won't Scroll Full Text in Visible Combo Area"
permalink: /kb/191/Q191550/
---

## Q191550: BUG: DateTimePicker Won't Scroll Full Text in Visible Combo Area

{% raw %}

	Article: Q191550
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp kbVBp600bug kbGrpDSVB
	Last Modified: 16-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DateTimePicker will not scroll the full text in the visible combo area if
	you use a Custom Format that contains more characters than the width of the
	visible combo area.
	
	CAUSE
	=====
	
	The focus only moves to parts of the actual date and not the text that is just
	part of the formatting.
	
	RESOLUTION
	==========
	
	Make the Width property large enough to display the entire formatted date.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	You will not be able to scroll the text in a DateTimePicker control if you use a
	custom format that has more characters then the control is able to display.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project. Form1 is created by default.
	
	2. From the Project menu, choose Components and select "Microsoft Windows Common
	  Controls-2 6.0" and then click the OK button.
	
	3. Add a DTPicker control, named DTPicker1, to Form1.
	
	4. Set the following properties on DTPicker1:
	
	          CustomFormat = 'Welcome to ' dddd', the ' dd'th of 'MMMM
	          Format = 3 - dtpCustom
	          Width = 2300
	
	5. Save and run the project.
	
	6. Select the month at the very end of the combo area.
	
	7. Use the arrow keys to try and get the "Welcome to" to display in the combo
	  area. Note that the focus moves from the month to the day and weekday, but
	  not to the text, so that "Welcome to" never displays.
	
	Additional query words: kbCtrl kbVBp kbVBp600bug
	
	======================================================================
	Keywords          : kbCtrl kbVBp kbVBp600bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
