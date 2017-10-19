---
layout: page
title: "Q171829: FIX: GetChunk Freezes Unless Other Events Happening"
permalink: /kb/171/Q171829/
---

## Q171829: FIX: GetChunk Freezes Unless Other Events Happening

	Article: Q171829
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbvbp500sp2fix
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0, on platform(s):
	   - the hardware: DEC Alpha 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The GetChunk operation pauses unless other events are happening. Other events
	could include moving the mouse, which would trigger the GetChunk to continue.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run Visual Basic or, if Visual Basic is already running, choose New Project
	  from the File menu (ALT, F, N). Form1 is created by default. Add the
	  following code to the General Declarations of Form1:
	
	        Option Explicit
	        Private bwait As Boolean
	
	2. Place an Internet Transfer Control (Inet1) on Form1, and add the following
	  code:
	
	        Private Sub Inet1_StateChanged(ByVal State As Integer)
	          Dim s$, t$
	          Debug.Print "StateChanged:", State
	          If State = icResponseCompleted Then
	             t$ = ""
	             s$ = Inet1.GetChunk(1024)
	             DoEvents
	             While Len(s$) <> 0
	                 t$ = t$ & s$
	                 s$ = Inet1.GetChunk(1024)
	                 DoEvents: DoEvents: DoEvents
	                 Debug.Print ".";
	             Wend
	             Debug.Print
	             Debug.Print Left$(t$, 20), Len(t$)
	             bwait = True
	          End If
	        End Sub
	
	3. Place a CommandButton (Command1) on Form1, and add the following code:
	
	        Private Sub Command1_Click()
	           Dim i As Integer
	           Dim tmp As Single
	
	           For i = 1 To 5
	            tmp = Timer
	            While tmp + 1 > Timer
	                 DoEvents: DoEvents: DoEvents
	            Wend
	            bwait = False
	            Inet1.Execute "http://msw"
	            While Not (bwait)
	             DoEvents
	            Wend
	           Next
	        End Sub
	
	4. Press the F5 key to run it, and then press the ENTER key to invoke the
	  command_click. (NOTE: Do not move the mouse or touch the keyboard.)
	
	5. Watch your debug window. The first time you access the page, it works.
	  However, the second time, you need to pause. Press Ctrl-break quickly and you
	  are at the Doevents statement following the GetChunk. If you move the mouse,
	  the GetChunk will continue.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Hardware          : ALPHA
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
