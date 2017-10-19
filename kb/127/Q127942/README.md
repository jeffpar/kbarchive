---
layout: page
title: "Q127942: How to Place a Timer in the Main Window"
permalink: /kb/127/Q127942/
---

## Q127942: How to Place a Timer in the Main Window

	Article: Q127942
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Timer control is new to Visual FoxPro. It can execute code at regular
	intervals and is not a visual control. You can use the timer to periodically
	execute a set of commands. The following two sample programs illustrate the
	basic commands to place a timer on the Visual FoxPro version 3.0 desktop.
	
	MORE INFORMATION
	================
	
	Method One: Use the ADDOBJECT() Method to Place the Timer on the Desktop
	------------------------------------------------------------------------
	
	The _SCREEN system memory variable holds a reference to the main Visual FoxPro
	window. It allows you to manipulate it as a form. This memory variable will be
	used in this sample.
	
	The following code places a timer that displays the time. Similar code can be
	used to place any control on the desktop. Press the F6 key to release the
	timer.
	
	Place the following code in a program (.PRG) file:
	
	     * To remove the object:
	     ON KEY LABEL F6 _SCREEN.RemoveObject('oTime')
	
	     * To activate the Timer:
	     _SCREEN.AddObject('oTime','MyTimer')
	
	     * Class definition. The TIMER event is triggered every second, and a
	     * WAIT WINDOW is displayed.
	     DEFINE CLASS MyTimer AS Timer
	        Interval= 1000
	        PROCEDURE Timer
	          WAIT WINDOW (TIME()) NOWAIT
	        ENDPROC
	     ENDDEFINE
	
	Method two: Encapsulate the Object in a Container Class
	-------------------------------------------------------
	
	This sample program does the same operations as the first example. The timer is
	added to a container class, and the CREATEOBJECT() function instantiates the
	object. To execute the sample, place it in a .PRG file and run the program.
	Press the F6 key to release the timer.
	
	     PUBLIC oTimerObj
	
	     * The instance variable is released when F6 is pressed.
	     ON KEY LABEL f6 RELEASE oTimerObj
	
	     oTimerObj=CREATEOBJECT('MyTimer')
	
	     DEFINE CLASS MyTimer as Container
	        ADD OBJECT oTimerobj as TimerClock
	     ENDDEFINE
	
	     DEFINE CLASS TimerClock as Timer
	        Interval = 1000
	        PROCEDURE Timer
	           WAIT WINDOW (TIME()) NOWAIT
	        ENDPROC
	     ENDDEFINE
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
