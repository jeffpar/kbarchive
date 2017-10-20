---
layout: page
title: "Q189991: PRB: Error Setting DateTimePicker's Month Programmatically"
permalink: /kb/189/Q189991/
---

## Q189991: PRB: Error Setting DateTimePicker's Month Programmatically

{% raw %}

	Article: Q189991
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to programmatically set the Month property of a DateTimePicker
	control, you receive the following error message:
	
	  "Run-time error '380': Invalid property value"
	
	If you use the drop-down Calendar to change the Month for the same date, it works
	correctly.
	
	CAUSE
	=====
	
	When you change the Month property through the DateTimePicker control's Calendar
	interface, it handles adjusting the Day property to create a valid date. But if
	you assign a value to the Month property in code and this creates an invalid
	date, you receive the appropriate error message.
	
	RESOLUTION
	==========
	
	Check to ensure that the combination of the control's current Day and Year,
	along with the Month you wish to assign, combine to create a valid date.
	
	Another approach you can take is to use the DateAdd function to change the value
	of the Month property of the DateTimePicker control by adding or subtracting the
	appropriate number of months. Just like the control's graphic interface, the
	DateAdd function will automatically adjust for differences in the number of days
	in the various months.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When changing the Month interactively, the DateTimePicker allows for the fact
	that some months are shorter than others and adjusts the Day property, making it
	smaller if necessary. If the Month is changed programmatically this interface is
	bypassed and an invalid date can result. While it is possible to write code that
	will check for valid dates and adjust the Day property when necessary, it is
	much simpler to use the DateAdd function to change the date. The following
	sample demonstrates the problem and a solution.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Select Components from the Project menu, check "Microsoft Windows Common
	  Controls-2 6.0," and then click OK.
	
	3. Place a CommandButton and a DTPicker control onto Form1.
	
	4. Place the following code into the module of Form1:
	
	        Private Sub Form_Load()
	           DTPicker1.Value = "1/29/97"
	        End Sub
	
	        Private Sub Command1_Click()
	           DTPicker1.Month = 2
	           ' Comment the line above and uncomment the line below to test fix
	           'DTPicker1.Value = DateAdd("m", 1, DTPicker1.Value)
	        End Sub
	
	5. Run the project, note the date is 1/29/97, and click on Command1. You will
	  see "Run-time error '380': Invalid property value". This is because 2/29/98
	  is not a valid date.
	
	6. Stop the project.
	
	7. Comment the Month assignment line, uncomment the line that calls the DateAdd
	  function and run the project. Click on Command1 and the date advances one
	  month properly, to 2/28/97.
	
	  You can retry this test using dates like 7/31/98 for an initial value and try
	  to assign a value of 6 to Month. Any value that corresponds to a Month with
	  fewer than 31 days will generate the error. You can use positive or negative
	  values in the DateAdd function, so it can subtract months as easily as it
	  adds them.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp600 kbCtrl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
