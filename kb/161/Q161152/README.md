---
layout: page
title: "Q161152: HOWTO: Add a New Appointment in Schedule Plus"
permalink: /kb/161/Q161152/
---

## Q161152: HOWTO: Add a New Appointment in Schedule Plus

{% raw %}

	Article: Q161152
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbVBp500 kbhowto
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to use Visual Basic code to add an appointment to
	Schedule Plus.
	
	MORE INFORMATION
	================
	
	1. Start a new Standard EXE project. Form1 is added by default.
	
	2. Add a CommandButton to Form1.
	
	3. Place the following code in the General Declarations section of Form1:
	
	        Option Explicit
	
	        Private Sub Command1_Click()
	          Dim objSchdPlus As Object
	          Dim objContact As Object
	          Dim dStartTime As Date
	          Dim iNumHours As Integer
	          Set objSchdPlus = CreateObject("SchedulePlus.application")
	          objSchdPlus.Logon
	          Set objContact = _
	          objSchdPlus.ScheduleSelected.SingleAppointments.New
	          dStartTime = "01/04/96 12:15:00"
	          iNumHours = 1
	          objContact.SetProperties Text:="Santa Claus", _
	             Start:=dStartTime, End:=DateAdd("h", _
	          iNumHours, dStartTime), Notes:="Booking xmas presents"
	          objSchdPlus.Logoff
	        End Sub
	
	4. Press the F5 key to run the project, and click the CommandButton. Note that
	  when you look at the Schedule Plus database, you see the new appointment.
	
	NOTE: If Schedule Plus 7.0 is not running, the above code will result in run-time
	error 450: Wrong number of arguments or invalid property assignment.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbVBp500 kbhowto 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
