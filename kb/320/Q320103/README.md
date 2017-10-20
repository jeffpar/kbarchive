---
layout: page
title: "Q320103: BUG: Conditionally Compiled Public Events Cause Access Violation"
permalink: /kb/320/Q320103/
---

## Q320103: BUG: Conditionally Compiled Public Events Cause Access Violation

{% raw %}

	Article: Q320103
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbActivexEvents
	Last Modified: 15-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use conditionally compiled public events, you may receive an access
	violation in the Microsoft Visual Basic development environment. This error may
	occur during compilation or when you shut down the development environment.
	
	CAUSE
	=====
	
	This problem can occur if you use an Object Browser attribute to define and
	apply a public variable after the conditionally compiled public events.
	
	RESOLUTION
	==========
	
	To work around this problem, move any variables that have Object Browser
	attributes before any conditionally compiled public events.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Create a new ActiveX.dll project, and then paste the following code in the
	  Class1 module:
	
	  Option Explicit
	
	  'Move L here and everything will be fine!
	  'Public L As Long
	
	  #Const switch = False
	
	  Public Event ev1()
	  Public Event ev2()
	
	  #If switch Then
	      Public Event Ev3()
	      Public Event Ev4()
	  #End If
	
	  Public Event ev5()
	
	  'L has had HelpID and Description attributes set with the Object Browser.
	  'Find L for your class in the Object Browser, and then select "Properties."
	
	  Public L As Long
	
	  Public Event ev6()
	
	2. On the Tools menu, click Procedure Attributes.
	
	3. In the Name dialog box, click L.
	
	4. In the Description dialog box, type "Test" (without the quotation marks).
	
	5. In the Help Context ID dialog box, type "1" (without the quotation marks).
	
	6. On the File menu, click Save, and then click "Make the dll".
	
	7. Create a new Standard Exe project. By default, Form1 is created.
	
	8. On the Project menu, click References, select the reference to the ActveX.dll
	  project that you just created, and then click OK.
	
	9. Place a Command Button control on Form1.
	
	10. Open the form in code view, and then paste the following code:
	
	  Private Sub Command1_Click()
	      'Change Project1 to the name of the ActiveX.dll project that you just created.
	      Dim x As Project1.Class1
	      Set x = New Class1
	      x.L = 5
	      MsgBox x.L
	  End Sub
	
	11. Run the project and you will receive the access violation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActivexEvents 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
