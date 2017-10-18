---
layout: page
title: "Q161306: INFO: App.LogEvent Only Logs in Compiled Applications"
permalink: kb/161/Q161306/
---

## Q161306: INFO: App.LogEvent Only Logs in Compiled Applications

	Article: Q161306
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Visual Basic, Event Logging allows an application to add
	information to either a user-defined file or the Microsoft Windows NT or Windows
	2000 Event Log when a user-defined criteria is met.
	
	This functionality is only available when running a compiled application. If you
	attempt to use the logging methods while in the Microsoft Visual Basic
	development environment, the logging methods will be ignored.
	
	MORE INFORMATION
	================
	
	
	
	The logging can be enabled for the development process by creating and compiling
	a user-defined ActiveX DLL or EXE component that exposes the logging methods of
	the App object. The application in the development environment need only to add
	a reference to this compiled component. Calling the exposed methods of this
	ActiveX component will allow logging to function. Below is a sample ActiveX DLL
	that exposes the StartLogging and LogEvent methods of the App object.
	
	WARNING: ANY USE BY YOU OF THE CODE PROVIDED IN THIS ARTICLE IS AT YOUR OWN RISK.
	Microsoft provides this code "as is" without warranty of any kind, either
	express or implied, including but not limited to the implied warranties of
	merchantability and/or fitness for a particular purpose.
	
	1. Start Microsoft Visual Basic. Open a new ActiveX DLL project. This will add
	  Class1 to the new project.
	
	2. Change the Name property of Class1 to "Logging" (without quotes).
	
	3. From the Project menu, click Project1 Properties.
	
	4. Change the Name of the Project to "AppMessages" (without quotes).
	
	5. Add the following code to the Logging class:
	
	        Public Enum eLogModes
	            mLogAuto = 0
	            mLogOff = 1
	            mLogToFile = 2
	            mLogToNT = 3
	            mLogOverwrite = &H10
	            mLogThreadID = &H20
	        End Enum
	
	        Public Sub StartLog(logTarget As String, logMode As eLogModes)
	            App.StartLogging logTarget, logMode
	
	        End Sub
	
	        Public Sub AddLogEvent(LogBuffer As String, EventType As _
	        LogEventTypeConstants)
	            App.LogEvent LogBuffer, EventType
	        End Sub
	
	NOTE: Other methods may be exposed to apply to your specific needs. See the
	Microsoft Visual Basic Online Help for the entire list of event log methods of
	the App object.
	
	1. From the File menu, click Make AppMessage.DLL. Select a folder in which to
	  place the DLL, and click OK.
	
	2. From the File menu, click New project. Click Yes to Save the AppMessage
	  source code for later use.
	
	3. Select Standard EXE. Click OK.
	
	4. From the Project menu, click References.
	
	5. Turn on the reference to "AppMessages." Click OK.
	
	6. To Form1, add the following code:
	
	         Private Sub Form_Load()
	             Dim t As New AppMessages.Logging
	             t.StartLog "C:\TEMP\Test.log", mLogToFile
	             t.AddLogEvent "Form Loaded", vbLogEventTypeInformation
	             Set t = Nothing
	         End Sub
	
	7. From the Run menu, click Start. A new file "Test.log" will be created and
	  placed into the C:\TEMP folder. This file will contain the information:
	
	  "Information Application C:\TEMP\Test.log: Thread ID: -316429 ,Logged: Form
	  Loaded"
	
	REFERENCES
	==========
	
	Microsoft Visual Basic 5.0 Online Help
	"StartLogging Method"
	"LogEvent Method"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
