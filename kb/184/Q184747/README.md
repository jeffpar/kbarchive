---
layout: page
title: "Q184747: INFO: Event Logging in Visual Basic"
permalink: /kb/184/Q184747/
---

## Q184747: INFO: Event Logging in Visual Basic

{% raw %}

	Article: Q184747
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp kbVBp500 kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbOSWinME
	Last Modified: 27-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The App object in Visual Basic has the following methods and properties that
	facilitate the creation of event logs:
	
	  Methods: LogEvent,
	           StartLogging.
	
	  Properties: AppMode,
	              AppPath.
	
	This article addresses some of the common issues associated with these properties
	and methods and provides an event logging example that demonstrates their use.
	
	MORE INFORMATION
	================
	
	Common Issues Regarding Event Logging
	-------------------------------------
	
	- Event logging does not work within the Visual Basic IDE. To enable event
	  logging, you must compile and run a Visual Basic project as an executable.
	
	- The LogPath and LogMode properties are read-only. The documentation in books
	  online is incorrect in suggesting that they can be used as L-Values.
	
	- You can specify the LogPath and LogMode by using the logTarget and logMode
	  parameters of the StartLogging method respectively.
	
	- If LogPath is not specified, the logged entries go to the event log on
	  Windows NT and the VBEvents.log file in the %SystemRoot% directory on Windows
	  95 and Windows 98.
	
	- The Source in the Windows NT Event Viewer for all entries of any Visual Basic
	  application is "VBRuntime." This is by design.
	
	Event Logging Example
	---------------------
	
	1. Create a new a Standard EXE project (Project1) in Visual Basic (Form1 is
	  created by default).
	
	2. Add two Command buttons to Form1.
	
	3. Add the following code to Form1's code window:
	
	     '=========================== CODE FOR FORM1 ==========================
	
	        Private Sub Command1_Click()
	           'Default logging without specifying LogPath or LogMode.
	           With App
	              .LogEvent "Default Logging " & Now, vbLogEventTypeInformation
	              .LogEvent .LogPath
	              .LogEvent .LogMode
	           End With
	        End Sub
	
	        Private Sub Command2_Click()
	           'Logging to a file by specifying LogPath and LogMode
	           'in the StartLogging method call.
	           With App
	              .StartLogging "c:\temp\logtest.log", 2
	              'LogMode = 2 should be the same as vbLogToFile,
	              'but vbLogToFile constant is not defined as shown
	              'in books online.
	              .LogEvent "Specified Path File Logging " & Now,
	                 vbLogEventTypeInformation
	              .LogEvent .LogPath
	              .LogEvent .LogMode
	           End With
	        End Sub
	
	        Private Sub Form_Load()
	           Command1.Caption = "Default Logging"
	           Command2.Caption = "Specified Path"
	        End Sub
	     '======================== END OF CODE FOR FORM1 =======================
	
	4. Compile the project. Run the resulting Executable file, and press the command
	  buttons to generate the logs.
	
	5. Check the logs. If you are using Windows 2000 or Windows NT, check the
	  default logging with the Event Viewer by selecting Application from the Log
	  menu, then press the F5 key to refresh. If you are using Windows 95, Windows
	  98, or Windows Me, you can find VBEvents.log in the %SystemRoot% directory on
	  Windows 95 and Windows 98, typically the C:\Win95 or C:\Windows directory.
	  The non-default log file (LogTest.log) for both platforms should be in the
	  "C:\Temp" directory.
	
	Additional query words: LogPath LogMode StartLogging LogEvent
	
	======================================================================
	Keywords          : kbnokeyword kbVBp kbVBp500 kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Version           : :5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
