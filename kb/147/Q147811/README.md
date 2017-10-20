---
layout: page
title: "Q147811: HOWTO: Detect If Computer Has Sound Card That Plays Wave Audio"
permalink: /kb/147/Q147811/
---

## Q147811: HOWTO: Detect If Computer Has Sound Card That Plays Wave Audio

{% raw %}

	Article: Q147811
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to detect if a system has a sound card capable of
	playing back wave audio data (.WAV files).
	
	MORE INFORMATION
	================
	
	The multimedia Application Programming Interface (API) has a function,
	WaveOutGetNumDevs(), which returns the number of devices in the system capable
	of playing back wave audio data.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new project in Visual Basic (ALT, F, N), and place a Command button
	  (Command1) on Form1.
	
	2. Add the following declaration to the General Declarations section of Form1:
	
	        #If Win32 Then
	
	        Private Declare Function waveOutGetNumDevs Lib "winmm" () As Long
	        #ElseIf Win16 Then
	        Private Declare Function waveOutGetNumDevs Lib "mmsystem" () _
	         As Integer
	        #End If
	
	3. Add the following code to the Command1_Click event:
	
	        Private Sub Command1_Click()
	        #If Win32 Then
	        Dim i As Long
	        #ElseIf Win16 Then
	        Dim i As Integer
	        #End If
	        i = waveOutGetNumDevs()
	        If i > 0 Then         ' There is at least one device.
	        MsgBox "You Can Play Wave Data"
	        Else
	        MsgBox "Cannot Play Wave Data"
	        End If
	        End Sub
	
	4. Press the F5 key to run the code. Then click the command button. An
	  appropriate message lets you know if your computer plays wave audio data.
	
	Additional query words: kbVBp400 kbVBp600 kbVBp kbdsd kbDSupport kbVBA
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
