---
layout: page
title: "Q259103: HOWTO: Use the Windows Script Host to Automate an Application"
permalink: /kb/259/Q259103/
---

## Q259103: HOWTO: Use the Windows Script Host to Automate an Application

{% raw %}

	Article: Q259103
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbMiscTools kbvfp kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbWSH200 kbGrpDSFox kbDSupport
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows Script Host is a language-independent scripting host for
	32-bit Windows operating system platforms. Windows Script Host is integrated
	into Microsoft Windows 98, Microsoft Windows 2000, and Microsoft Internet
	Information Server 4.0. It is included with Microsoft Windows NT 4 Option Pack
	and is also available for download at:
	
	http://msdn.microsoft.com/scripting
	
	MORE INFORMATION
	================
	
	This article demonstrates how to use the Windows Script Host to run, activate,
	and send keystrokes to applications.
	
	The Windows Script Host Object Model includes a versatile Run() method that
	allows programmers to specify window states of the applications they run. The
	AppActivate method allows programmers to activate applications by passing the
	target application's windows caption. The SendKeys method allows programmers to
	send keystrokes to the activated application. Use the following code:
	
	  *Run Winword, give it a string and sort it and then run Notepad and paste in.
	  #Define VFPCR	chr(13)+chr(10)
	  *Constants for window state when using run method
	  #Define WSHIDE          0 && Hides the window and activates another window.
	  #Define WSNORMAL        1 && Activates and displays window. 
	  #Define WSMIN           2 && Activates the window and displays it as a minimized window.
	  #Define WSMAX           3 && Activates the window and displays it as a maximized window.
	  #Define WSLAST          4 && Displays a window in its most recent size and position. The active window remains active.
	  #Define WSSAME          5 && Activates the window and displays it in its current size and position.
	  #Define WSMINNEXT       6 && Minimizes the specified window and activates the next top-level window in the Z order.
	  #Define WSMINSAME       7 && Displays the window as a minimized window. The active window remains active.
	  #Define WSSAMECUR       8 && Displays the window in its current state. The active window remains active.
	  #Define WSORIG          9 && Activates and displays the window. 
	  #Define WSSETSHOW      10 && Sets the show state based on the state of the program that started the application.
	  Declare Sleep IN WIN32API INTEGER  &&wait for milliseconds-may not be necessary in all instances
	  WshShell = CreateObject("wscript.Shell")
	  _Cliptext="One"+VFPCR+"Two"+VFPCR+"Three"+VFPCR+"Four"+VFPCR+"Five"+VFPCR
	  WshShell.Run( "WinWord", WSNORMAL)     && Run normal 
	  =Sleep(1000)
	  WshShell.SendKeys( "^v")       &&Ctrl++v
	  =Sleep(100)
	  WshShell.SendKeys( "%as")      &&Alt+a+s
	  =Sleep(100)
	  WshShell.SendKeys( "{ENTER}")  &&Enter
	  =Sleep(100)
	  WshShell.SendKeys( "^a")       &&ctrl+a
	  =Sleep(100)
	  WshShell.SendKeys( "^c")       &&ctrl+c
	  =Sleep(100)
	  WshShell.SendKeys( "%{F4}")    &&Alt+F4
	  =Sleep(100)
	  WshShell.SendKeys( "n")        && n-(No)
	  =Sleep(100)
	  WshShell.Run("notepad",1)
	  =Sleep(100)
	  WshShell.AppActivate("notepad")
	  =Sleep(1000)
	  WshShell.SendKeys( "^v")       &&Ctrl+V  Sorted!
	
	REFERENCES
	==========
	
	The following references are available at:
	
	http://www.msdn.microsoft.com/scripting/
	
	Select the Windows Script Host topic, and then select Documentation:
	
	White paper: Windows Script Host: A Universal Scripting Host for Scripting
	Languages
	
	Technical Paper: Windows Script Host Programmer's Reference
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMiscTools kbvfp kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbWSH200 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
