---
layout: page
title: "Q139390: How to Create a Stopwatch Timer in Visual FoxPro"
permalink: kb/139/Q139390/
---

## Q139390: How to Create a Stopwatch Timer in Visual FoxPro

	Article: Q139390
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It can be useful to track the amount of time that was spent in a Visual FoxPro
	application. By using the timer control in Visual FoxPro, you can create a timer
	to track elapsed time.
	
	MORE INFORMATION
	================
	
	The following code creates a form that begins tracking the elapsed time when it
	is launched. It displays the total time in a WAIT WINDOW when the form is
	closed.
	
	     PUBLIC ostopwatch
	
	     oStopWatch=CreateObject('stopwatch')
	     ostopwatch.Visible=.T.
	
	     DEFINE CLASS stopwatch AS form
	        AutoCenter = .T.
	        Top = 32
	        Left = 9
	        Height = 137
	        Width = 293
	        DoCreate = .T.
	        Caption = ""
	        etime = 0
	        Name = "Form1"
	
	        ADD OBJECT command1 AS commandbutton WITH ;
	          Top = 48, ;
	          Left = 84, ;
	          Height = 49, ;
	          Width = 133, ;
	          Caption = "Quit", ;
	          Name = "Command1"
	
	        ADD OBJECT timer1 AS timer WITH ;
	          Top = 12, ;
	          Left = 12, ;
	          Height = 23, ;
	          Width = 23, ;
	          Interval = 1000, ;
	          Name = "Timer1"
	
	        PROCEDURE Unload
	          WAIT WINDOW 'Elapsed Time = '+ALLTRIM(STR(ThisForm.etime))+ ;
	             ' Seconds'
	        ENDPROC
	
	        PROCEDURE command1.Click
	          THISFORM.Release
	        ENDPROC
	
	        PROCEDURE timer1.Timer
	          THIS.Parent.etime=This.Parent.etime+1
	          THIS.Parent.Caption='Elapsed Time ='+ ;
	              ALLTRIM(STR(This.Parent.etime))+' Seconds'
	        ENDPROC
	
	     ENDDEFINE
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
