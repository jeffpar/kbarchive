---
layout: page
title: "Q139388: HOWTO: Create a Thermometer Bar in Visual FoxPro"
permalink: kb/139/Q139388/
---

## Q139388: HOWTO: Create a Thermometer Bar in Visual FoxPro

	Article: Q139388
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbvfp300 kbvfp500 kbvfp600
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows-based applications often use a thermometer bar to represent the progress
	of a certain task visually. This article shows by example how to create a
	general-purpose thermometer bar that you can use in new or existing Visual
	FoxPro applications.
	
	MORE INFORMATION
	================
	
	For this example, a timer is used to simulate a process. At regular intervals,
	the thermometer bar is updated to indicate the percentage of completion.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new program that contains the following code:
	
	     PUBLIC othermometer
	     othermometer = CreateObject('thermometer')
	     othermometer.Visible = .T.
	
	     DEFINE CLASS thermometer AS form
	
	             Height = 73
	             Width = 385
	             DoCreate = .T.
	             AutoCenter = .T.
	             Caption = ""
	             Closable = .F.
	             ControlBox = .F.
	             MaxButton = .F.
	             MinButton = .F.
	             Movable = .F.
	             Name = "Form1"
	
	         ADD OBJECT shape2 AS shape WITH ;
	             Height = 25, ;
	             Left = 24, ;
	             Top = 24, ;
	             Width = 336, ;
	             Name = "Shape2"
	
	         ADD OBJECT shape1 AS shape WITH ;
	             BackColor = RGB(0,0,255), ;
	             Height = 25, ;
	             Left = 24, ;
	             Top = 24, ;
	             Width = 0, ;
	             Name = "Shape1"
	
	         ADD OBJECT timer1 AS timer WITH ;
	             Top = 0, ;
	             Left = 0, ;
	             Height = 23, ;
	             Width = 23, ;
	             Interval = 100, ;
	             Name = "Timer1"
	
	         PROCEDURE timer1.Timer
	             IF This.Parent.shape1.Width<336
	                This.Parent.shape1.Width=This.Parent.shape1.Width+2
	             ELSE
	                WAIT WINDOW 'Finished!'
	                Thisform.Release
	             ENDIF
	         ENDPROC
	
	     ENDDEFINE
	
	2. Run the program. The thermometer bar form should display, and the thermometer
	  bar should progress at a constant rate until it finishes.
	
	Another Example
	---------------
	
	The previous example uses a timer to simulate a process. This example
	demonstrates how to implement this thermometer bar in a loop. The WAIT TIMEOUT
	command inside the loop represents where the developer would place code
	appropriate for the application.
	
	The overall width of the thermometer bar is 300 pixels. Because the code in the
	loop is executed 100 times, the width of the thermometer is incremented 3 pixels
	at a time to achieve an overall thermometer bar width of 300 pixels. This
	incremental value will vary depending on the number of times through the loop.
	
	     PUBLIC othermometer
	     othermometer = CreateObject('thermometer')
	     othermometer.Visible = .T.
	
	     i=0
	     SET CONSOLE OFF
	
	     DO WHILE i<100
	        WAIT TIMEOUT 1        && Place application-specific code here
	        othermometer.update()
	        i=i+1
	     ENDDO
	
	     WAIT WINDOW 'Finished'
	
	     othermometer.Release
	
	     DEFINE CLASS thermometer AS form
	
	             Height = 73
	             Width = 349
	             DoCreate = .T.
	             AutoCenter = .T.
	             Caption = ""
	             Closable = .F.
	             ControlBox = .F.
	             MaxButton = .F.
	             MinButton = .F.
	             Movable = .F.
	             Name = "Form1"
	
	         ADD OBJECT shape2 AS shape WITH ;
	             Height = 25, ;
	             Left = 24, ;
	             Top = 24, ;
	             Width = 300, ;
	             Name = "Shape2"
	
	         ADD OBJECT shape1 AS shape WITH ;
	             BackColor = RGB(0,0,255), ;
	             Height = 25, ;
	             Left = 24, ;
	             Top = 24, ;
	             Width = 0, ;
	             Name = "Shape1"
	
	         ADD OBJECT timer1 AS timer WITH ;
	             Top = 0, ;
	             Left = 0, ;
	             Height = 23, ;
	             Width = 23, ;
	             Interval = 100, ;
	             Name = "Timer1"
	
	         PROCEDURE update
	            This.shape1.Width=This.shape1.Width+3
	         ENDPROC
	
	     ENDDEFINE
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
