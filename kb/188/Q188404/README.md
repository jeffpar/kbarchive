---
layout: page
title: "Q188404: HOWTO: Use API Calls to Detect Other Running Applications"
permalink: /kb/188/Q188404/
---

## Q188404: HOWTO: Use API Calls to Detect Other Running Applications

{% raw %}

	Article: Q188404
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbDSupport
	Last Modified: 07-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	At times it is desirable to determine what other applications or background
	processes are executing. This article describes how to use Windows API calls to
	determine what applications are running concurrently with a Visual FoxPro
	session or application.
	
	MORE INFORMATION
	================
	
	Under certain circumstances, it is desirable to determine whether other
	applications, or multiple instances of a application are executing. You can use
	Windows API calls to determine what applications are executing at any given
	time. The code snippet, listed below, illustrates use of Windows API functions
	to determine what applications are currently executing.
	
	Create a program called Enumwins.prg and type in the following code:
	
	Sample Code
	-----------
	
	     LOCAL awin_apps, vfp_handle, ln_current_window,ln_window_count
	     * Dimension array awin_apps to store running apps
	     DIMENSION awin_apps[1]
	     * Initialize variable to store handle for current application
	     vfp_handle=0
	     * Declare API Functions
	     DECLARE INTEGER FindWindow ;
	        IN win32api ;
	        INTEGER nullpointer, ;
	        STRING cwindow_name
	     DECLARE INTEGER GetWindow ;
	        IN win32api ;
	        INTEGER ncurr_window_handle, ;
	        INTEGER ndirection
	     DECLARE INTEGER GetWindowText ;
	        IN win32api ;
	        INTEGER n_win_handle, ;
	        STRING @ cwindow_title, ;
	        INTEGER ntitle_length
	     * End of API function declarations
	     * Get handle for current application
	     vfp_handle=findwindow(0,_SCREEN.CAPTION)
	     * Store handle of current app to a variable
	     ln_current_window=vfp_handle
	     * Initialize a count variable used to dimension array of running apps
	     ln_window_count=0
	     DO WHILE ln_current_window>0
	        *  Initialize variable to store application title
	        lc_window_title=SPACE(255)
	        * Call to GetWindowText to fetch window caption
	        ln_length=getwindowtext(ln_current_window, ;
	           @lc_window_title,LEN(lc_window_title))
	        * Note that the lc_window_title variable is used as a buffer to
	        * receive text from the call to GetWindowText
	        IF ln_length>0
	           lc_window_title=STRTRAN(TRIM(lc_window_title),CHR(0),"")
	        ELSE
	           lc_window_title=""
	        ENDIF
	        IF ln_current_window>0 .AND. !EMPTY(lc_window_title)
	           * Increment the window count and re-dimension the array of running
	           * applications
	           ln_window_count=ln_window_count+1
	           DIMENSION awin_apps(ln_window_count)
	           awin_apps[ln_Window_Count]=lc_window_title
	        ENDIF
	        * Call to GetWindow to fetch handle of running applications.
	        ln_current_window=getwindow(ln_current_window,2)
	     ENDDO
	     CREATE TABLE runapps (appname m)
	     IF ALEN(awin_apps,1)>0
	        SELECT runapps
	        APPEND BLANK
	        FOR i=1 TO ALEN(awin_apps,1)
	           REPLACE appname WITH awin_apps[i]+CHR(13) ADDITIVE
	        NEXT
	     ENDIF
	     MODIFY MEMO appname NOEDIT
	
	The application stores the names of all executing applications in the memo field
	of the table Runapps.dbf.
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by John Desch, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
