---
layout: page
title: "Q257529: FIX: MonthView's Year is Changed When Setting DayofWeek Property"
permalink: /kb/257/Q257529/
---

## Q257529: FIX: MonthView's Year is Changed When Setting DayofWeek Property

{% raw %}

	Article: Q257529
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to set the DayOfWeek property of the MonthView control to one of
	the enumerated constants in code, the MonthView's year changes to 1899. This
	behavior starts occurring after you have changed the date in the MonthView
	control.
	
	CAUSE
	=====
	
	When you try to set the DayOfWeek property to one of the enumerated constants,
	it is actually setting the value property of the control.
	
	RESOLUTION
	==========
	
	Step-by-Step Workaround Procedure
	---------------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. From the Project menu, select Components, select Microsoft Windows Common
	  Controls-2 6.0, and then click OK.
	
	3. Add a MonthView control and a CommandButton to Form1.
	
	4. Add the following code to the General Declarations section of Form1:
	
	  Private Sub Command1_Click()
	      MonthView1.Value = MonthView1.Value - MonthView1.DayOfWeek + mvwSunday
	  End Sub
	
	5. Run the Project.
	
	6. Click on the MonthView control to change the date. Now click the
	  CommandButton. Click the CommandButton again, and note that the year is
	  correct.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. From the Project menu, select Components, select Microsoft Windows Common
	  Controls-2 6.0, and then click OK.
	
	3. Add a MonthView control and a CommandButton to Form1.
	
	4. Add the following code to the General Declarations section of Form1:
	
	  Private Sub Command1_Click()
	      MonthView1.DayOfWeek = mvwSunday
	  End Sub
	
	5. Run the project.
	
	6. Click on the MonthView control to change the date. Now click the
	  CommandButton. Click the CommandButton again, and note that the year is
	  changed to 1899.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbCtrl kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
