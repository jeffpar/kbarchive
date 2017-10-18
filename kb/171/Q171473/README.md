---
layout: page
title: "Q171473: FIX: MCI32.OCX Does Not Save Recorded .WAV Files"
permalink: kb/171/Q171473/
---

## Q171473: FIX: MCI32.OCX Does Not Save Recorded .WAV Files

	Article: Q171473
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Command method of the MCI32.OCX control to save a recorded WAV
	file, the process will not actually create the targeted file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Create a new Standard EXE project.
	
	2. Add a Microsoft Multimedia (MCI32.OCX) control to Form1.
	
	3. Add the following code to Form1.
	
	        Private Sub Form_Load()
	            ' Set properties needed by MCI to open.
	            MMControl1.Notify = False
	            MMControl1.Wait = True
	            MMControl1.Shareable = False
	            MMControl1.DeviceType = "WaveAudio"
	            MMControl1.filename = "C:\temp\test.wav"
	
	            ' Open the MCI WaveAudio device.
	            MMControl1.Command = "Open"
	        End Sub
	
	        Private Sub MMControl1_StopClick(Cancel As Integer)
	            MMControl1.Command = "Save"
	            MMControl1.Command = "Close"
	        End Sub
	
	4. Run the application (Press F5).
	
	5. Click the Record button, then wait for a few seconds.
	
	6. Click the Stop button. Notice that the folder "C:\TEMP" does not contain the
	  file "test.wav" as expected.
	
	Additional query words: MCI_SAVE
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
