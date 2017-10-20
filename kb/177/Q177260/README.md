---
layout: page
title: "Q177260: BUG: Execution of REPORT FORM Command Sets Focus to Application"
permalink: /kb/177/Q177260/
---

## Q177260: BUG: Execution of REPORT FORM Command Sets Focus to Application

{% raw %}

	Article: Q177260
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Executing a REPORT FORM command while an application is running minimized, sets
	focus to the application and restores the application's window. After the REPORT
	FORM command finishes executing, the application loses focus and continues
	running minimized.
	
	RESOLUTION
	==========
	
	Setting the visible property of the form to false before the REPORT FORM command
	is executed prevents the form from being restored and displayed on screen.
	
	The following code snippet illustrates changing the visible property before and
	after a REPORT FORM command is encountered. In the example below, this code
	would appear in the Timer Event method of the timer object.
	
	     ThisForm.Visible=.F.
	     REPORT FORM prtsrv FOR RECNO() < 5 TO PRINT NOCONSOLE NOWAIT
	     ThisForm.Visible=.T.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	When an application compiled with Visual FoxPro version 5.0 is running as a
	minimized background process and a REPORT FORM command is encountered, the
	application's window is restored from its minimized state and displayed on
	screen. After the REPORT FORM command has finished executing, the application's
	window is minimized and the application continues executing as a background
	process.
	
	Applications compiled with Visual FoxPro version 3.0 that are running as a
	minimized background process remain minimized when a REPORT FORM command is
	encountered.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Using Visual FoxPro version 5.0, create a new project called Prtsrv.
	
	2. Click Data, Databases and add the Testdata database from the VFP\Samples\Data
	  folder.
	
	3. Click Documents, Reports and create a new quick report using the Customer
	  table of the Testdata database. Save the report as Prtsrv.
	
	4. Click Code, Programs and create a new program file named Prtsrv with the
	  following code:
	
	        PUBLIC rollcounter
	        rollcounter=0
	        DO FORM prtsrv
	        READ EVENTS
	
	        _SCREEN.WINDOWSTATE=2
	        _SCREEN.VISIBLE=.T.
	        _SCREEN.SHOW
	        ZOOM WINDOW SCREEN MAX
	
	5. Set Prtsrv.prg as the main program file.
	
	6. Click Documents, Forms and create a new form called Prtsrv with the following
	  properties:
	
	        AutoCenter = .T.
	        Height     = 130
	        ShowWindow = 2
	        Width      = 192
	
	7. In the form's Activate event, add the following code:
	
	        _SCREEN.WINDOWSTATE=1
	        _SCREEN.VISIBLE=.f.
	        HIDE WINDOW SCREEN
	        thiswin=WONTOP()
	        ZOOM WINDOW &thiswin MIN
	
	8. Add a Timer control to the form with the following properties:
	
	        Interval=3000
	
	9. Add the following code to the Timer Event method of the timer object:
	
	        rollcounter=rollcounter+1
	        REPORT FORM prtsrv FOR RECNO()  < 5 TO PRINT NOCONSOLE NOWAIT
	        IF rollcounter=3
	        ThisForm.Command1.Click
	        ENDIF
	
	10. Add a command button to the form with the following code in the Click event
	  of the command button:
	
	        RELEASE THISFORM
	        CLEAR EVENTS
	
	11. From the Project Manager, build an executable file. Open Windows Explorer
	  and double-click the executable file. At 30 second intervals, the Prtsrv
	  form is restored and visible on screen.
	
	Additional query words: VFoxWin form print visible timer
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
