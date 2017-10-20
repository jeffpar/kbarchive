---
layout: page
title: "Q193967: HOWTO: Determine the New Month Selected in Calendar Control"
permalink: /kb/193/Q193967/
---

## Q193967: HOWTO: Determine the New Month Selected in Calendar Control

{% raw %}

	Article: Q193967
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Calendar Control provides NewMonth and NewYear events. These
	events occur when the user selects a different month or year in the Calendar.
	However, the events do not indicate which month or year was selected. This
	article demonstrates how you can determine which month or year was selected.
	
	MORE INFORMATION
	================
	
	The Microsoft Calendar control does not ship with Visual Basic. The control
	ships as part of Microsoft Access or may be downloaded for free from the
	following URL:
	
	  http://www.microsoft.com/officedev/freestuff/mscaldl.htm
	
	Step-by-Step Example
	--------------------
	
	1. Start Visual Basic and create a new Standard EXE project. Form1 is created by
	  default.
	
	2. On the Project menu, click Components, and then check the "Microsoft Calendar
	  Control 8.0" component. The Calendar control is made available on the
	  Toolbox.
	
	3. Put a Calendar control on Form1.
	
	4. Copy and paste the following code to the form's code window:
	
	        Option Explicit
	        Private Declare Function FindWindowEx Lib "user32" _
	           Alias "FindWindowExA" _
	           (ByVal hWnd1 As Long, _
	           ByVal hWnd2 As Long, _
	           ByVal lpsz1 As String, _
	           ByVal lpsz2 As String) As Long
	
	        Private Declare Function SendMessage Lib "user32" _
	           Alias "SendMessageA" _
	           (ByVal hwnd As Long, _
	           ByVal wMsg As Long, _
	           ByVal wParam As Long, _
	           lParam As Any) As Long
	
	        Private Const CB_GETCURSEL = &H147
	        Private Const CB_GETLBTEXT = &H148
	        Private calendarHwnd As Long
	        Private cboMonthHwnd As Long
	        Private cboYearHwnd As Long
	
	        Private Sub Form_Load()
	           calendarHwnd = FindWindowEx(Me.hwnd, 0&, "CalendarWndClass", _
	              vbNullString)
	           cboMonthHwnd = FindWindowEx(calendarHwnd, 0&, "ComboBox", _
	              vbNullString)
	         cboYearHwnd = FindWindowEx(calendarHwnd, cboMonthHwnd, "ComboBox", _
	              vbNullString)
	        End Sub
	
	        Private Sub Calendar1_NewMonth()
	           Dim monthIndex As Long, temp As Long
	           Dim ret As String * 255
	           ret = Space(255)
	           ' Find 0-based index of the selected item:
	           monthIndex = SendMessage(cboMonthHwnd, CB_GETCURSEL, 0&, 0&)
	           ' Put month name in ret and length of month name in temp:
	           temp = SendMessage(cboMonthHwnd, CB_GETLBTEXT, monthIndex, _
	               ByVal ret)
	           ' uncomment the line below to see if the ComboBox was used:
	           'If Calendar1.Month = 0 Then Debug.Print "ComboBox used to
	           'select";
	           Debug.Print Left(ret, temp) 'Displays Month Name
	        End Sub
	
	        Private Sub Calendar1_NewYear()
	           Dim yearIndex As Long, temp As Long
	           Dim ret As String * 255
	           ret = Space(255)
	           ' Find 0-based index of the selected item:
	           yearIndex = SendMessage(cboYearHwnd, CB_GETCURSEL, 0&, 0&)
	           ' Put year value in ret and length of year value in temp:
	           temp = SendMessage(cboYearHwnd, CB_GETLBTEXT, yearIndex, _
	               ByVal ret)
	           ' uncomment the line below to see if the ComboBox was used:
	           'If Calendar1.Year = 0 Then Debug.Print "ComboBox used to
	           'select ";
	           Debug.Print Left(ret, temp) 'Displays Year
	        End Sub
	
	5. Press the CTRL+G key combination to view the Immediate Window.
	
	6. Press the F5 key to run the project.
	
	7. Choose a month from the first combo box. Note the Immediate Window displays
	  the month name selected.
	
	8. Choose a year from the second combo box. Note the Immediate Window displays
	  the year selected.
	
	NOTE: The NewMonth event can occur either by using the ComboBox to select a new
	month or by clicking a new day that is in a different month than the one
	currently shown.
	
	For example, suppose the current value in the Calendar is February 1. If you
	click on what would be the 31st day, the NewMonth event occurs because you have
	chosen a day in January. If you need to distinguish between using the ComboBox
	to select a month versus clicking a day in the calendar that changes the month,
	check the Month property of the calendar in the NewMonth event. If Month is 0,
	the ComboBox was used to select the new month. Otherwise, if Month is greater
	than 0, the user chooses a new date in the Calendar. Similarly, you can check
	the Year property in the NewYear event.
	
	REFERENCES
	==========
	
	
	Additional query words: kbVBp kbVBp500 kbVBp600 kbCtrl kbdsd kbDSupport
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
