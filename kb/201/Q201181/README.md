---
layout: page
title: "Q201181: BUG: CoolBar: Large FixedWidth/MinWidth Setting Locks Computer"
permalink: /kb/201/Q201181/
---

## Q201181: BUG: CoolBar: Large FixedWidth/MinWidth Setting Locks Computer

{% raw %}

	Article: Q201181
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCmnCtrls kbCtrl kbVBp kbVBp600bug kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	First Scenario
	--------------
	
	When you set the Style property of two or more bands on the CoolBar control to
	FixedWidth, and set the MinWidth properties to a large value, the computer hangs
	when you select either OK or Apply in the Property dialog window.
	
	Second Scenario
	---------------
	
	When you load a project that contains a form with a Coolbar control, Visual Basic
	freezes when you attempt to display a form in design mode.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	There are two things that can happen as a result of this problem.
	
	- Visual Basic may freeze after setting these properties.
	
	- If you have successfully set these properties, Visual Basic (or the computer)
	  may freeze when you attempt to reload the project and view the form in design
	  mode.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Restart the Operating System.
	
	2. Start a Visual Basic Standard EXE project. Form1 is created by default.
	
	3. From the Project menu, select Components, select the "Windows Common
	  Controls-3 6.0" component, and then click OK.
	
	4. Add an instance of the Coolbar control to Form1.
	
	5. Display the Property Page for the Coolbar, and click the Bands tab.
	
	6. Set the Style of Band 1 to 1-cc3BandFixedSize.
	
	7. Set the MinWidth property to 16000.
	
	8. Repeat steps 6 and 7 for Band 2.
	
	9. Click the Apply or OK button on the Property Page.
	
	RESULT: Visual Basic stops responding, or the system itself becomes
	non-responsive.
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbCmnCtrls kbCtrl kbVBp kbVBp600bug kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
