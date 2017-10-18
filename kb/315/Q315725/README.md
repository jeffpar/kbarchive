---
layout: page
title: "Q315725: HOW TO: Determine If Screen Saver Is Running by Using VB 6.0"
permalink: kb/315/Q315725/
---

## Q315725: HOW TO: Determine If Screen Saver Is Running by Using VB 6.0

	Article: Q315725
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbAudDeveloper kbHOWTOmaster
	Last Modified: 23-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Requirements
	- Create an Application That Determines Screen Saver State
	- Verify That It Works
	- Troubleshooting
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This article demonstrates how to detect if a screen saver is running by using
	Visual Basic 6.0. In this sample, you use the SystemParametersInfo function and
	specify the SPI_GETSCREENSAVERRUNNING parameter.
	
	Requirements
	------------
	
	The following list outlines the recommended hardware, software, network
	infrastructure, and service packs that you need:
	
	- Microsoft Windows XP, Microsoft Window Millennium Edition (Me), Microsoft
	  Windows 2000, or Microsoft Windows 98 (see the References section for
	  articles that relate to earlier versions of Windows)
	
	In addition, this article assumes that you have Visual Basic 6.0 programming
	experience.
	
	Create an Application That Determines Screen Saver State
	--------------------------------------------------------
	
	1. Start Visual Basic 6.0, and then create a new Standard EXE project. Form1 is
	  created by default.
	
	2. Add a Timer control to Form1, and then set the Interval property of the Timer
	  to "1000" (without the quotation marks). This interval represents one second.
	
	3. Right-click the form, and then click View Code. Add the following code to the
	  General Declarations section of Form1's module:
	
	  Option Explicit
	
	  Private Declare Function SystemParametersInfo _
	      Lib "user32" _
	      Alias "SystemParametersInfoA" _
	        (ByVal uiAction As Long, _
	         ByVal uiParam As Long, _
	         pvParam As Any, _
	         ByVal fWInIni As Long) As Boolean
	
	  Private Const SPI_GETSCREENSAVEACTIVE As Long = &H10
	  Private Const SPI_GETSCREENSAVERRUNNING As Long = &H72
	
	4. Define a form-load handler procedure for your form. Add the following code,
	  which displays a caption to indicate whether the screen saver is active:
	
	  Private Sub Form_Load()
	      Dim bActive As Boolean
	      
	      ' Find out if screen saver is active, and display a suitable message.
	      SystemParametersInfo SPI_GETSCREENSAVEACTIVE, 0, bActive, False
	      If bActive Then
	          Me.Caption = "Screen saver is active"
	      Else
	          Me.Caption = "Screen saver is not active"
	      End If
	  End Sub
	
	5. Define a timer-event handler procedure for the timer. This event occurs once
	  every second. Add the following code to this procedure, which produces a
	  sound if the screen saver is running:
	
	  Private Sub Timer1_Timer()
	      Dim bRunning As Boolean
	
	      ' Beep if the screen saver is running.
	      SystemParametersInfo SPI_GETSCREENSAVERRUNNING, 0, bRunning, False
	      If bRunning Then
	          Beep
	      End If
	  End Sub
	
	Verify That It Works
	--------------------
	
	1. If a screen saver is not enabled on the computer, follow these steps to
	  enable a screen saver:
	
	  a. Right-click in the desktop, and then click Properties.
	
	  b. In the Display Properties dialog box, on the Screen Saver tab, select a
	     screen saver. Wait for approximately one minute, and then click OK.
	
	2. Build and run your Visual Basic application. The form caption in your
	  application displays the following message:
	
	  Screen saver is active
	
	  NOTE: If the caption displays the "Screen saver is not active" message, the
	  screen saver is not enabled.
	
	3. Wait for the screen saver to begin running. You hear short beeps at
	  one-second intervals until the screen saver stops.
	
	4. Close your Visual Basic application.
	
	5. Reset the screen saver to your settings as appropriate.
	
	Troubleshooting
	---------------
	
	- This application only calls SystemParametersInfo with the
	  SPI_GETSCREENSAVEACTIVE parameter when the application starts to run. If the
	  user changes the screen saver settings after this time, this information is
	  not updated in the Visual Basic application.
	
	- Earlier versions of Windows, such as Microsoft Windows NT 4.0 and Microsoft
	  Windows 95, do not support the SPI_GETSCREENSAVERRUNNING parameter to
	  SystemParametersInfo. If you want to determine if a screen saver is running
	  on these earlier versions of Windows, refer to the References section.
	
	REFERENCES
	==========
	
	For additional information about a low-level technique that uses the Windows C
	application programming interface (API) and message hooks, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q238882 HOWTO: Know When Your Screen Saver Starts
	
	For additional information about an alternative technique for Windows NT 4.0,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q150785 INFO: Detect if a Screen Saver Is Running on Windows NT
	
	For additional information about how to determine which version of 32-bit Windows
	you are running, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q189249 HOWTO: Determine Which 32-Bit Windows Version Is Being Used
	
	Additional query words: poll screen saver state
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbAudDeveloper kbHOWTOmaster 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	
