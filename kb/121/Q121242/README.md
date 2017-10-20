---
layout: page
title: "Q121242: HOWTO: Produce a List of Other Applications Running in Windows"
permalink: /kb/121/Q121242/
---

## Q121242: HOWTO: Produce a List of Other Applications Running in Windows

{% raw %}

	Article: Q121242
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5x,2.6,2.6a,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbvfp300 kbvfp500 kbvfp600
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates an approach that you can use to produce a list of all
	applications that are running under Microsoft Windows.
	
	MORE INFORMATION
	================
	
	It is sometimes necessary for a FoxPro application to determine whether another
	application is running. The following article explains how to use the
	FindWindow() function to determine whether a particular application is running:
	
	  Q110117 How to Pause Program Execution During a RUN Command
	
	In order to use the FindWindow() function, you need to know the complete text of
	the window title. In some cases, the complete text of the window title cannot be
	known. When a document is opened in Microsoft Word, for example, the title of
	the Microsoft Word window will contain the text "Microsoft Word - " followed by
	the name of the document that is being edited. Since it is not possible for a
	FoxPro application to know the full text of the window title in cases like this,
	the FindWindow() function cannot be used to determine whether the application is
	running.
	
	To work around this situation, this article provides a code sample that uses the
	Windows API GetWindowText() function to produce a list of all visible windows
	currently running in Microsoft Windows, with the exception of Microsoft FoxPro.
	
	The IsWindEx() function can be used in two ways. This function can be used to
	determine whether there is a visible window that contains the specified string
	of text. This function can also be used to produce a list of all visible windows
	currently in existence.
	
	To determine whether there is a visible window that contains a specified string
	of text, call the function with the text that you are interested in checking.
	For example, to determine whether there are any windows that contain the text
	"Microsoft Word", call the function as follows:
	
	     ? IsWindEx("Microsoft Word")
	
	To produce a list of all visible windows currently in existence, call the
	function with a null value, as follows:
	
	     =IsWindEx("")
	
	Code Sample
	-----------
	
	  FUNCTION IsWindEx
	  PARAMETERS WindowName
	
	       IsWindEx = .F.
	
	       SET LIBRARY TO foxtools.fll
	
	       * Register the Windows API functions that will be called
	
	       mGetWinTxt = RegFn("GetWindowText", "I@CI", "I")
	       mGetWindow = RegFn("GetWindow", "II", "I")
	       mIsWinVis =  RegFn("IsWindowVisible", "I", "I")
	
	       * Get the HWND (handle) to the main FoxPro window
	
	       foxhwnd = MAINHWND()
	
	       * Produce a list of all windows
	
	          hwndNext = CallFn(mGetWindow,foxhwnd,0)
	
	       DO WHILE hwndNext <> 0
	
	            IF (hwndnext <> foxhwnd) .AND. ;
	                 CallFn(mGetWindow,hwndnext,4) = 0 .AND. ;
	                 CallFn(mIsWinVis,hwndnext) <> 0
	
	                 Stuffer = SPACE(64)
	                 x = CallFn(mGetWinTxt,hwndnext,@Stuffer,64)
	
	                 * If a window name was specified, check to
	                 * see if this is the specified window. If a
	                 * window name was not specified, display the
	                 * name of the window.
	
	                 IF LEN(TRIM(WindowName)) = 0
	
	                      ? Stuffer
	
	                 ELSE
	
	                      IF WindowName $ Stuffer
	
	                           IsWindEx = .T.
	                           EXIT
	
	                      ENDIF
	
	                 ENDIF
	
	            ENDIF
	
	           hwndNext = CallFn(mGetWindow,hwndnext,2)
	
	          ENDDO
	
	       SET LIBRARY TO
	
	       IF LEN(TRIM(WindowName)) = 0
	
	            IsWindEx = .T.
	
	       ENDIF
	
	  RETURN IsWindEx
	
	For more information about the functions called in this code sample, please refer
	to the documentation for the Windows 3.1 Software Development Kit or the
	Microsoft Developer's Network (MSDN) Development Library CD-ROM.
	
	For more information about the algorithm used in this article, please refer to
	the following article in the Microsoft Knowledge Base:
	
	  Q80124 Retrieving the Names of Simultaneous Tasks Under Windows
	
	
	REFERENCES
	==========
	
	MSDN Development Library CD Microsoft Windows 3.1 SDK documentation Microsoft
	Visual C/C++ documentation Microsoft Knowledge Base article Q80124
	
	Additional query words: VFoxWin FoxWin 2.50 2.50a 2.50b task open list manager emulate taskmanager
	
	======================================================================
	Keywords          : kbcode kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro260a kbVFP300 kbVFP500 kbVFP600
	Version           : WINDOWS:2.5x,2.6,2.6a,3.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
