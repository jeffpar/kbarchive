---
layout: page
title: "Q175909: HOWTO: Hide an Executable from the Taskbar"
permalink: /kb/175/Q175909/
---

## Q175909: HOWTO: Hide an Executable from the Taskbar

	Article: Q175909
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 30-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a Visual FoxPro executable is running, it appears on the Windows or Windows
	NT 4.0 taskbar. This code provides a programmatic method of removing the Visual
	FoxPro executable from the taskbar while it is executing. This code emulates
	behavior similar to setting the ShowInTaskbar property to false (.F.) in Visual
	Basic.
	
	MORE INFORMATION
	================
	
	This code does not work with Single Document Interface forms (SDI) because the
	mainhwnd() function gets the Windows handle (HWND) of the Visual FoxPro desktop.
	SW_HIDE serves to hide the executable from both the taskbar and the tasklist.
	However, the executable is not totally hidden from the operating system. When
	running an executable created with Visual FoxPro 3.0b, the Close Program window
	in Windows 95 and the Processes tab of the Windows NT 4.0 Task Manager both show
	the Vfp300.esl file. With a Visual FoxPro 5.0x executable running under Windows
	NT 4.0 or Windows 95, the executable's name appears in the Processes tab of the
	Windows NT Task Manager or in the Close Program window.
	
	1. Create a project called Zhide and add a program named Zhide.prg.
	
	2. In Zhide.prg, add the following code:
	
	  
	
	        DO FORM Zhide.scx
	        READ EVENTS
	
	  Zhide.prg should be marked as the main file of the project.
	
	3. Add a form named Zhide to the project. Place the following code in the Load
	  event of the form:
	
	  
	
	        Declare Integer ShowWindow in Win32API Integer hWnd, Integer nCmdShow
	        SET LIBRARY TO c:\vfp3\foxtools.fll
	        * The name of the Visual FoxPro folder may vary between machines.
	
	4. Add a command button and place the following code in the Click event:
	
	  
	
	        #DEFINE SW_HIDE 0
	        m.retval = ShowWindow(mainhwnd(), SW_HIDE)
	
	5. Add a timer control to the form with an interval set to 10000 millisecond.
	  Place the following code in the Timer event and close the form:
	
	  
	
	        m.retval = MessageBox("Click OK to quit", 0 + 48 + 0)
	        #DEFINE SW_SHOW 5
	        m.retval = ShowWindow(mainhwnd(), SW_SHOW)
	        CLEAR EVENTS
	        ThisForm.Release
	
	  NOTE: This code is important. Without this code the window does not reappear
	  and you cannot quit the application.
	
	6. Build the executable and close Visual FoxPro. From Explorer, double- click
	  Zhide.exe and within 10 seconds click the command button. The form should
	  disappear from the taskbar and the tasklist. Check the tasklist by pressing
	  the CTRL+ALT+DEL keys. In Windows 95 the Close Program window appears. In
	  Windows NT 4.0 the Windows NT Security dialog box appears. Click Task Manager
	  and then click the Applications tab. The Visual Foxpro executable is not
	  listed in the Task Manager of the operating systems.
	
	7. When the Messagebox appears, click OK to restore Visual Foxpro.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	
