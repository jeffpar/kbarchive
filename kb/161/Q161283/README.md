---
layout: page
title: "Q161283: INFO: Default Filename for Text File Error Log: VBEVENTS.LOG"
permalink: kb/161/Q161283/
---

## Q161283: INFO: Default Filename for Text File Error Log: VBEVENTS.LOG

	Article: Q161283
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 10-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you invoke the LogEvent Method in your Visual Basic program running under
	Windows 95 and Windows 98, a text file is created with the filename VBEVENTS.LOG
	in the Windows directory if you leave the LogPath Property blank. The LogPath
	property allows you to set the path and filename of a log file.
	
	MORE INFORMATION
	================
	
	You can log events in your Visual Basic program by using the LogEvent method. If
	your program is running under Windows NT, the specified events are logged in the
	NT Event Log. Under Windows 95 and Windows 98, the specified events are logged
	to a text file, vbevents.log.
	
	You can change the location and the file name of the event log by setting the
	LogPath property to the path and location of your choice and setting the mode
	argument of the LogMode property to vbLogToFile.
	
	You cannot set the LogPath Property directly. Instead, you must use the
	StartLogging Method to set the LogPath Property.
	
	The LogEvents and StartLogging Methods work only in a compiled EXE. They do not
	work in the Microsoft Visual Basic IDE.
	
	For more information, refer to the LogMode Property topic of the online Help.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Visual Basic project. Form1 is created by default.
	
	2. Place the following code in the General Declarations section of Form1:
	
	        Private Type OSVERSIONINFO
	            dwOSVersionInfoSize As Long
	            dwMajorVersion As Long
	            dwMinorVersion As Long
	            dwBuildNumber As Long
	            dwPlatformId As Long
	            szCSDVersion As String * 128
	        End Type
	
	        Private Declare Function GetVersionExA Lib "kernel32" _
	            (lpVersionInformation As OSVERSIONINFO) As Integer
	
	        Private Sub Form_Click()
	        Dim osinfo As OSVERSIONINFO
	        Dim retvalue As Integer
	
	        osinfo.dwOSVersionInfoSize = 148
	        osinfo.szCSDVersion = Space$(128)
	        retvalue = GetVersionExA(osinfo)
	
	        'Log an Event before setting LogPath:
	        App.LogEvent "Event1", vbLogEventTypeError
	        Print "LogPath before StartLogging: " & App.LogPath
	        'Use StartLogging to set LogPath:
	        App.StartLogging "c:\MyEventLog.txt", vbLogAuto
	        Print "LogPath after StartLogging: " & App.LogPath
	        'Log another Event, after setting LogPath:
	        App.LogEvent "Event2", vbLogEventTypeError
	
	            'If Windows 95 or 98:
	            If osinfo.dwPlatformId = 1 Then
	            Print "Logged 'Event1' in " & _
	                Environ("windir") & "\vbevents.log"
	            Print "Logged 'Event2' in LogPath (" & App.LogPath & ")"
	            'If Windows NT:
	            ElseIf osinfo.dwPlatformId = 2 Then
	            Print "Logged 'Event1' & 'Event2' in the NT Event Log."
	            End If
	        End Sub
	
	3. Choose Make Project1.exe from the File menu. The LogEvents and StartLogging
	  Methods work only in a compiled EXE.
	
	4. Run Project1.exe, and then click the form.
	
	REFERENCES
	==========
	
	For more information about event logging, see the following topics in the Online
	Help:
	
	- LogEvent Method
	
	- LogPath Property
	
	- LogMode Property
	
	- StartLogging Method
	
	Additional query words: event log App default VBEVENTS.LOG unattended
	
	======================================================================
	Keywords          : kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbPTNotAssigned kbZNotKeyword2 kbVBA500Search
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
