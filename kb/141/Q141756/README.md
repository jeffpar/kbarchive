---
layout: page
title: "Q141756: How to Play MIDI Files Using API Calls from Visual Basic"
permalink: /kb/141/Q141756/
---

## Q141756: How to Play MIDI Files Using API Calls from Visual Basic

{% raw %}

	Article: Q141756
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbWndw
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
	
	This article demonstrates how to play a MIDI (.MID) file from Visual Basic using
	the WIN16 or WIN 32 API call named mciSendString. If you have the Professional
	or Enterprise Editions of Visual Basic version 4.0, you can use the MCI control
	to play a MIDI file. You don't need to use the APIs.
	
	MORE INFORMATION
	================
	
	Step-by-Step to an Application that Plays a .MID File
	-----------------------------------------------------
	
	1. Start Visual Basic, or if Visual Basic is already running, click New Project
	  on the File menu (ALT, F, N). Form1 is created by default.
	
	2. Add a Command Button (Command1) to Form1.
	
	3. Add the following code to the Command1_Click event of Form1:
	
	     Private Sub Command1_Click()
	     Dim ret As Integer
	
	     ' The following will open the sequencer with the C:\WIN31\CANYON.MID
	     ' file. Canyon is the device_id.
	
	     ret = mciSendString( _
	     "open c:\windows\CANYON.MID type sequencer alias canyon", 0&, 0, 0)
	
	     ' The wait tells the MCI command to complete before returning control
	     ' to the application.
	
	     ret = mciSendString("play canyon wait", 0&, 0, 0)
	
	     ' Close CANYON.MID file and sequencer device
	
	     ret = mciSendString("close canyon", 0&, 0, 0)
	
	     End Sub
	
	4. Add the following code to the general declarations section of Form1:
	
	     #If Win32 Then
	
	     Private Declare Function mciSendString Lib "winmm.dll" Alias _
	     "mciSendStringA" (ByVal lpstrCommand As String, ByVal  _
	     lpstrReturnString As Any, ByVal uReturnLength As Long, ByVal _
	     hwndCallback As Long) As Long
	
	     #ElseIf Win16 Then
	
	     Private Declare Function mciSendString Lib "mmsystem" (ByVal _
	     lpstrCommand As String, ByVal lpstrReturnStr As Any, ByVal _
	     wReturnLen As Integer, ByVal hCallBack As Integer) As Long
	
	     #End If
	
	5. On the Run menu, click Start (ALT, R, S) or press F5 to run the program.
	
	REFERENCES
	==========
	
	More information about mciSendString() can be found in:
	
	- The Multimedia Programmer's Reference on page 3-26.
	
	- Command strings described on pages 7-23 to 7-93 and in the WIN31MWH.HLP file
	  shipped with the Windows 3.1 Software Development Kit (SDK).
	
	Additional query words: 4.00 vb4win vb4all
	======================================================================
	Keywords          : kbWndw 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	
	=============================================================================
	

{% endraw %}
