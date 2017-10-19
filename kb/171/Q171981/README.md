---
layout: page
title: "Q171981: HOWTO: Play an .AVI Video File in Full Screen in Visual Basic"
permalink: /kb/171/Q171981/
---

## Q171981: HOWTO: Play an .AVI Video File in Full Screen in Visual Basic

	Article: Q171981
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to play an .AVI (video) file in full screen from
	Visual Basic for Windows. When you play an .AVI file using the full screen, the
	color palette focus is set to the .AVI file only. No dithering of colors occurs
	because there are no other windows in the background to capture the color
	palette.
	
	
	MORE INFORMATION
	================
	
	This example uses the mciSendString application programming interface (API).
	Your computer must be able to play .AVI files for this sample to work.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new Visual Basic Standard Exe project.
	
	2. Add a CommandButton (Command1) to Form1, and set its Caption property to
	  "Play Video."
	
	3. Add the following line of code to the General Declarations section of Form1:
	
	        Private Declare Function mciSendString Lib "winmm.dll" Alias _
	          "mciSendStringA" (ByVal lpstrCommand As String, ByVal _
	          lpstrReturnString As Any, ByVal uReturnLength As Long, ByVal _
	          hwndCallback As Long) As Long
	
	4. Add the following lines of code to the Command1 Click event procedure:
	
	        Sub Command1_Click()
	          '// --- Modify FILE_TO_OPEN constant as appropriate ---
	          Const FILE_TO_OPEN = "C:\winnt\clock.avi"
	          Dim strCmdStr As String
	          Dim lngReturnVal As Long
	          strCmdStr = "play " & FILE_TO_OPEN & " fullscreen "
	          lngReturnVal = mciSendString(strCmdStr, 0&, 0, 0&)
	        End Sub
	
	5. Press the F5 key to execute the sample code.
	
	6. Click the Play Video button to watch the video full screen. The video will
	  last for a few seconds and then return to the Visual Basic environment.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
