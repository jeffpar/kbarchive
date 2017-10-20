---
layout: page
title: "Q195516: HOWTO: Make a Form a Topmost Window Using APIs"
permalink: /kb/195/Q195516/
---

## Q195516: HOWTO: Make a Form a Topmost Window Using APIs

{% raw %}

	Article: Q195516
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDesigner kbvfp500a kbvfp600
	Last Modified: 31-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes you might want to make a form the topmost window on the Windows
	desktop to prompt a user to perform an action, and, when the user performs the
	action, return the form to its previous window. This article will demonstrate
	how to use the FindWindowA and SetWindowPos Application Program Interfaces
	(APIs).
	
	MORE INFORMATION
	================
	
	This API method is similar to a system modal window because these APIs make the
	Visual FoxPro form stay on top of all windows. However, unlike a system modal
	window, you can still use applications under the topmost form. For example, you
	could have the form set as a topmost window, but still type into a WordPad
	document. When you use the FindWindowA API, it returns a non- zero number if the
	window handle is found. In addition, this approach works well regardless of the
	form's ShowWindow property setting (that is, in- screen, in top-level form, or
	as top-level form).
	
	1. Create a form and add four command buttons to the form. For example:
	
	  
	
	        "Get Window Handle"
	        "Make Topmost Window"
	        "Restore Window State"
	        "Quit"
	
	2. Add the following two properties to the form:
	
	  
	
	        frmcaption
	        formhandle
	
	3. In the Load event of the form add the following code:
	
	  
	
	        THISFORM.frmcaption = THIS.CAPTION      && Get the window caption.
	
	        DECLARE LONG FindWindowA IN WIN32API ;
	           STRING class, ;
	           STRING title
	
	        DECLARE SetWindowPos IN WIN32API ;
	           LONG HWND, ;
	           LONG hwndafter, ;
	           LONG x, ;
	           LONG Y, ;
	           LONG cx, ;
	           LONG cy, ;
	           LONG flags
	
	4. In the Click event of the first command button "Get Window Handle," add the
	  following code:
	
	  
	
	        THISFORM.formhandle = 0
	        * If you want to use the class for the application,
	        * use Fox_4000001 for VFP 3 and 5 or VFP66400000 for VFP 6.
	        * For example,
	        * THISFORM.formhandle = ;
	        *    FindWindowA("VFP66400000", THISFORM.frmcaption)
	
	        * Pass a 0 to class to search for all child windows
	        * Be sure the form name is unique though.
	        * The FindWindowA API returns a non-zero number if the
	        * child window is found.
	        THISFORM.formhandle = FindWindowA(0,THISFORM.frmcaption)
	        IF THISFORM.formhandle = 0
	           =MESSAGEBOX("Unable to get window handle.")
	        ELSE
	           =MESSAGEBOX("Found the window. The handle is ";
	              +ALLTRIM(STR(THISFORM.formhandle)))
	        ENDIF
	
	5. In the Click event of the second command button, "Make Topmost Window," add
	  the following code:
	
	  
	
	        IF THISFORM.formhandle = 0
	           =MESSAGEBOX("You have not obtained a handle to the windows yet")
	           RETURN
	        ENDIF
	
	        swp_nosize = 1
	        swp_nomove = 2
	        hwnd_topmost = -1
	        hwnd_notopmost = -2
	
	        lretval=0
	        lretval = SetWindowPos(THISFORM.formhandle,hwnd_topmost,;
	           0,0,0,0,swp_nosize+swp_nomove)
	
	6. In the Click event of the third command button, "Restore Window State," add
	  the following code:
	
	  
	
	        IF THISFORM.formhandle = 0
	           =MESSAGEBOX("You have not obtained a handle to the windows yet")
	           RETURN
	        ENDIF
	        swp_nosize = 1
	        swp_nomove = 2
	        hwnd_topmost = -1
	        hwnd_notopmost = -2
	
	        * Call the SetWindowPos API to return form to prior window state
	        lretval=0
	        lretval = SetWindowPos(THISFORM.formhandle,hwnd_notopmost,;
	           0,0,0,0,swp_nosize+swp_nomove)
	
	7. In the Quit command button, add the following code:
	
	  
	
	        THISFORM.RELEASE
	
	8. Change the form's desktop property to .T.
	
	Test the code:
	
	1. Run the form.
	
	2. Click the command button "Get Window Handle" to get the handle to the form.
	
	3. To make the form the topmost window on the desktop, click the "Make Topmost
	  Window" command button.
	
	4. Start or switch to another Windows application.
	
	RESULT: Notice how this form stays on top of the other application even when you
	click on that other application. Now click the "Restore Window State" command
	button and click the another Windows application. The other application will
	come forward and the form will be behind this window.
	
	REFERENCES
	==========
	
	"PC Magazine's Visual Basic Programmer's Guide to the Windows API" by Daniel
	Appleman, published by Ziff-Davis Press, pages 215 and 243.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Dean
	Christopher, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDesigner kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
