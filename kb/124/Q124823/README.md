---
layout: page
title: "Q124823: ADK/ADT: How to Create Pop-up, Context-Sensitive Help"
permalink: /kb/124/Q124823/
---

## Q124823: ADK/ADT: How to Create Pop-up, Context-Sensitive Help

{% raw %}

	Article: Q124823
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:1.1,2.0
	Operating System(s): 
	Keyword(s): kbprogramming
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Distribution Kit, version 1.1 
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	One alternative to displaying your application's online Help system in a separate
	window is to display it in a small, shaded pop-up window within your
	application. To do so, you can use the Windows API WinHelp() function with its
	HELP_CONTEXTPOPUP argument. This article describes how to implement such a Help
	system.
	
	This article assumes that you are familiar with Access Basic and with creating
	Microsoft Access applications using the programming tools provided with
	Microsoft Access. For more information about Access Basic, please refer to the
	"Introduction to Programming" manual in Microsoft Access version 1.x, or the
	"Building Applications" manual in version 2.0.
	
	This article also assumes that you are familiar with creating Windows Help files.
	For more information about creating Help files, refer to the "Help Compiler
	Guide" included with the Microsoft Access Distribution Kit version 1.1 and the
	Microsoft Access Developer's Toolkit version 2.0.
	
	MORE INFORMATION
	================
	
	The Windows API WinHelp() function supports a large number of options. The
	HELP_CONTEXTPOPUP option opens a shaded pop-up window for you to display Help
	in. This window is similar to the window that opens when you click a glossary
	entry (green underlined text) in the Microsoft Access Help system.
	
	To implement this feature you need to:
	
	- Create a working Help system by setting the HelpContextID and HelpFile
	  properties for your forms to a valid Windows Help file.
	
	- Redirect the F1 key to call a user-defined function that opens the Help file
	  using the HELP_CONTEXTPOPUP option.
	
	Note that jumping or branching to other Help topics from the pop-up Help window
	is not supported using the methods discussed in this article.
	
	The following steps describe how to create the user-defined function to open the
	pop-up Help window and how to redirect the F1 key.
	
	NOTE: In the following sample code, an underscore (_) at the end of a line is
	used as a line-continuation character. Remove the underscore from the end of the
	line when re-creating this code in Access Basic.
	
	1. Open a new module and declare the Windows API WinHelp() and FindWindow()
	  functions by entering the following lines in the module's Declarations
	  section:
	
	  Declare Function WinHelp% Lib "User" (ByVal hwnd%, ByVal _
	     szHelpFile$, ByVal uCmd%, ByVal dwData&)
	  Declare Function FindWindow% Lib "User" (ByVal szClass$, ByVal _
	     szTitle As Any)
	
	  NOTE: You may have some Microsoft Windows API functions defined in an existing
	  Microsoft Access library; therefore, your declarations may be duplicates. If
	  you receive a duplicate procedure name error message, remove or comment out
	  the declarations statement in your code.
	
	2. Enter the following line to add the constant for HELP_CONTEXTPOPUP:
	
	  Const HELP_CONTEXTPOPUP = 8
	
	3. Enter the following code in the module:
	
	  Function Help ()
	     Dim Cid As Integer, Dummy As Integer
	     On Error Resume Next
	     ' Get the HelpContextID of the active control.
	     Cid = Screen.ActiveControl.HelpContextID
	     ' The error is 2474 if no control is active.
	     If Cid = 0 Then
	        ' There is no control context ID, so check the form and get
	        ' the HelpContextID of the active form.
	        Cid = Screen.ActiveForm.HelpContextID
	        ' The error is 2475 if no form is active.
	     End If
	     ' If there is a context ID, open the Help file with context.
	     ' FindWindow() returns the handle of the Microsoft Access window.
	     ' Specify your custom Help file for the second argument.
	     If Cid > 0 And Cid < 32767 Then
	        Dummy = WinHelp(FindWindow("OMain", 0&), "C:\Myhelp.Hlp", _
	        HELP_CONTEXTPOPUP, Cid)
	     End If
	  End Function
	
	4. Create the following new macro called AutoKeys to redirect the F1 key:
	
	     Macro Name   Condition   Action
	     --------------------------------
	     {F1}                     RunCode
	
	     AutoKeys Action
	     ------------------------
	     RunCode
	        Function Name: Help()
	
	REFERENCES
	==========
	
	Microsoft Windows version 3.0 Software Development Kit "Reference Volume 1"
	
	
	Additional query words: pop up popup
	
	======================================================================
	Keywords          : kbprogramming 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3 kbAccessDistKit110
	Version           : WINDOWS:1.1,2.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
