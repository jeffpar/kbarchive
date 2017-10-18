---
layout: page
title: "Q154009: HOWTO: Set the System Time"
permalink: kb/154/Q154009/
---

## Q154009: HOWTO: Set the System Time

	Article: Q154009
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 07-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Win32 SetSystemTime API function offers the functionality to change the
	system time on the local machine. The change will take place immediately without
	the need for a reboot. This article illustrates how to create a sample project
	that sets the system time using the SetSystemTime function. The SetSystemTime
	function sets the system time based on coordinated universal time (UTC).
	UTC-based time is loosely defined as the current date and time of day in
	Greenwich, England.
	
	MORE INFORMATION
	================
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add the following code to the General Declarations section of Form1:
	
	        Option Explicit
	
	        Private Type SYSTEMTIME
	          wYear As Integer
	          wMonth As Integer
	          wDayOfWeek As Integer
	          wDay As Integer
	          wHour As Integer
	          wMinute As Integer
	          wSecond As Integer
	          wMilliseconds As Integer
	        End Type
	
	        Private Declare Function SetSystemTime Lib "kernel32" (lpSystemTime _
	          As SYSTEMTIME) As Long
	
	        Private Sub Form_Load()
	          Dim lReturn As Long
	          Dim lpSystemTime As SYSTEMTIME
	          lpSystemTime.wYear = 1996
	          lpSystemTime.wMonth = 6
	          lpSystemTime.wDayOfWeek = 5
	          lpSystemTime.wDay = 28
	          lpSystemTime.wHour = 9
	          lpSystemTime.wMinute = 42
	          lpSystemTime.wSecond = 0
	          lpSystemTime.wMilliseconds = 0
	          lReturn = SetSystemTime(lpSystemTime)
	        End Sub
	
	3. Run the project by pressing the F5 key. Check the system time and date in the
	  Control Panel. The time should have changed to reflect the UTC-based time
	  settings used in the sample.
	
	REFERENCES
	==========
	
	The SYSTEMTIME Type structure is as follows:
	
	  WYear           Integer-The current year.
	  WMonth          Integer-The current month. January is 1.
	  WDayOfWeek      Integer-The current day of the week. Sunday is 0.
	  WDay            Integer-The current day of the month.
	  WHour           Integer-The current hour.
	  wMinute         Integer-The current minute.
	  wSecond         Integer-The current second.
	  wMilliseconds   Integer-The current millisecond.
	
	To change the system time on a Win32 platform from 16-bit Visual Basic, you would
	have to create a DLL that does a generic thunk to the 32-bit API SetSystemTime.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
