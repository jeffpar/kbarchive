---
layout: page
title: "Q154575: HOWTO: Extract Appointment Information from Schedule Plus"
permalink: /kb/154/Q154575/
---

## Q154575: HOWTO: Extract Appointment Information from Schedule Plus

{% raw %}

	Article: Q154575
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbprogramming kbVBp400
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The OLE Scheduling Library exposes an object model for Microsoft Schedule Plus
	7.0 that can be manipulated by the VBA language. This object model allows
	programmers to gain access to appointment information. This article provides a
	code sample of how to extract appointment information between two given dates
	from Schedule Plus.
	
	MORE INFORMATION
	================
	
	1. Start Visual Basic. If Visual Basic is already running, choose New Project
	  from the File menu. Form1 is created by default.
	
	2. Place a Command button on Form1.
	
	3. Add the following code to the General Declarations section of Form1:
	
	     Option Explicit
	
	     Private Sub Command1_Click()
	       GetAppointments "06/03/96", "08/03/96"
	     End Sub
	
	     Sub GetAppointments(sStartdate As String, sEndDate As String)
	       Dim objSchdPlus As Object
	       Dim gobjappt As Object
	       Dim objappt As Object
	       Dim objitem As Object
	       Dim obatt As Object
	       Screen.MousePointer = vbHourglass
	       Set objSchdPlus = CreateObject("SchedulePlus.Application")
	       objSchdPlus.Logon
	       Set gobjappt = objSchdPlus.ScheduleSelected
	       Print objSchdPlus.UserName
	       Set objappt = gobjappt.singleappointments
	       Set objitem = objappt.Item()
	       Print objappt.Rows
	       While Not objappt.IsEndOfTable
	         Set objitem = objappt.Item()
	         If CDate(objitem.start) >= CDate(Format$(sStartdate, "dd/mm/yy") & _
	           " 00:00:00") And CDate(objitem.end) <= CDate(Format$(sEndDate, _
	           "dd/mm/yy") & " 23:59:59") Then
	           Print "Starts " & objitem.start & "---" & "Ends " & objitem.end
	           Print "Appointment := " & objitem.Text
	         End If
	         objappt.Skip
	       Wend
	       Screen.MousePointer = vbArrow
	       MsgBox "Done"
	     End Sub
	
	4. Press the F5 key to run the project. When you click on the button, the
	  appointments that fall into the date range specified will be printed onto the
	  form.
	
	REFERENCES
	==========
	
	OLE Messaging is fully documented in the Win32 SDK, available on the Microsoft
	Developer Network (MSDN).
	
	OLE Scheduling is documented in the Microsoft Schedule+ Programmer's Guide found
	under Microsoft Exchange Server in the BackOffice SDK on the Microsoft Developer
	Network (MSDN).
	
	The Mastering Series for Exchange Development, also available from Microsoft, has
	extensive Visual Basic code samples and explanations relating to OLE Scheduling.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
