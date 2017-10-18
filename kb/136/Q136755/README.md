---
layout: page
title: "Q136755: HOWTO: Replacing the Visual FoxPro Desktop with an App's Form"
permalink: kb/136/Q136755/
---

## Q136755: HOWTO: Replacing the Visual FoxPro Desktop with an App's Form

	Article: Q136755
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbvfp300 kbvfp500 kbvfp600
	Last Modified: 04-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Visual FoxPro application design may require that the Visual FoxPro desktop be
	hidden and the application's own forms occupy the entire Windows desktop area.
	This article explains how to do that.
	
	This article adds the steps necessary to make the application's form the desktop.
	It concludes with the steps necessary to terminate the application and restore
	the Visual FoxPro desktop.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure
	----------------------
	
	1. Start the application's form and establish the Visual FoxPro event handler
	  with the READ EVENTS command. The code in the .prg file continues with the
	  procedure needed to terminate the application's form, stop the Visual FoxPro
	  event handler, and return to the Visual FoxPro desktop. After that code there
	  is the function to hide the main Visual FoxPro window.
	
	      *******************************************************************
	     ** Starter.prg  Extreme minimum sample Code to start the application
	     *******************************************************************
	     *
	     DO FORM appform.scx
	     READ EVENTS
	
	     PROCEDURE back2vfp
	     ** The application's form was activated from the desktop level as a
	     ** desktop level form. The event handler is at the desktop level, and
	     ** is equivalent to a property of the _SCREEN object, so it must be
	     ** terminated by a method of the _SCREEN object. As no _SCREEN
	     ** object members are visible (no command buttons, text boxes, etc.),
	     ** a Timer event is used to clear events. The timer object is not
	     ** visible, and doesn't need to be in order to be activated.
	     ** To activate the Timer: Add it to the _SCREEN
	     *
	     _SCREEN.AddObject('oTime','MyTimer')  && MyTimer is the
	     **                                       current instance
	     ** End of procedure Back2vfp
	     **
	     ** Class definition. The TIMER event is triggered after two seconds
	     DEFINE CLASS MyTimer AS Timer
	
	        Interval= 2000
	
	        PROCEDURE Timer
	           CLEAR EVENTS
	           _SCREEN.RemoveObject('oTime')
	        ENDPROC
	     ENDDEFINE
	     **
	     ** End of extreme minimum sample Starter.prg*******************
	     ***************************************************************
	
	2. In the application's form, declare three properties of the form to serve as
	  global references in the following function. Also place a command button or
	  other object on the form, this object provides an event that can terminate
	  the application. For this example, name the three properties FoxHWND,
	  FoxGone, and ShowState. Name the command button Quit. Its Click event will
	  contain code to terminate the form.
	
	  CAUTION: If a template class is used to create a form, and its DeskTop
	  property is set to .F., then setting the DeskTop property of the created form
	  to .T. will have no effect. In that case, running the form will cause the
	  main Visual FoxPro Window and the form within it to not be visible, which
	  will require a rebooting in Windows 3.x, and potentially damaging files
	  associated with the application.
	
	  For more information about the behavior of the Desktop property, please see
	  the following article(s) in the Microsoft Knowledge Base:
	
	  Q141315 Changing Subclassed Form's Desktop Property Has No Effect
	
	     ** The following is the code to hide the Visual FoxPro desktop.
	
	     **************************************************************
	     * This function may be called in the Load Event of the
	     * application's form that has these properties:
	     *
	     * WindowType = Modal,
	     * AlwaysOnTop = True, and
	     * DeskTop = True
	     **************************************************************
	
	     #DEFINE W32sDLL "W32SCOMB.DLL"
	     #DEFINE W32DLL "USER32.DLL"
	     IF "3.5" $ OS(1) OR "Windows 4" $ OS(1) OR "NT" $ OS(1)  &&
	        cDLL = W32DLL
	     ELSE
	        cDLL = W32sDLL
	     ENDIF
	
	     DECLARE integer FindWindow IN &cDLL integer, string
	     DECLARE Integer ShowWindow IN &cDLL Integer, Integer
	
	     SW_MAXIMIZE = 3
	     SW_SHOWNORMAL = 1
	     SW_SHOWMINIMIZED = 2
	     SW_SHOWGONE = 0
	
	     ThisForm.showstate = SW_SHOWNORMAL
	
	     NullPointer = 0
	     ThisForm.FoxHWND = FindWindow(NullPointer, _SCREEN.Caption)
	
	     * Hide the Main Visual FoxPro Window
	     ThisForm.FoxGone = ShowWindow(ThisForm.FoxHWND, SW_SHOWGONE)
	
	     ** The next command is optional - it shows the successful
	     ** execution of this function's code.
	     ** =MessageBox("Visual FoxPro Desktop is hidden...")
	
	     **************************************************************
	     ** End of function.
	     **************************************************************
	
	3. Place the following code in the Click event of the Quit command button.
	
	  
	
	     * Clear the form
	     ThisForm.Release
	     *
	     * Restore the Visual FoxPro desktop
	     ThisForm.FoxGone = ShowWindow(ThisForm.FoxHWND, ThisForm.showstate)
	     *
	     * Terminate the READ EVENTS with a CLEAR EVENTS two seconds after
	     * restoring the Visual FoxPro desktop
	     DO Back2vfp    && Procedure found in the calling program Starter.prg
	
	Caveats
	-------
	
	If this code is placed in a project and built into an application, the user will
	receive the following error messages in a Locate File dialog box:
	
	  Unable to find Unknown FINDWINDOW Locate, Ignore, Ignore All, Cancel
	
	Once the user chooses Ignore, the following error messages appear:
	
	  Unable to find Unknown SHOWWINDOW. Locate, Ignore, Ignore All, Cancel
	
	This is because Visual FoxPro is trying to resolve the external references in the
	DECLARE statements associated in the Load event's code. The user can:
	
	- Ignore the errors, and the project will build without a problem.
	
	  -or-
	
	- Add a program to the project that references the FINDWINDOW and SHOWWINDOW as
	  a procedure or a function.
	
	Additional query words: SDI Command window timer _SCREEN
	
	======================================================================
	Keywords          : kbcode kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
