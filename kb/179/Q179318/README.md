---
layout: page
title: "Q179318: ACC97: How to Simulate Office Features in an ODE Application"
permalink: /kb/179/Q179318/
---

## Q179318: ACC97: How to Simulate Office Features in an ODE Application

	Article: Q179318
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SUMMARY
	=======
	
	Some of the features in the retail version of Microsoft Access are not available
	for run-time applications that you create using the Microsoft Office 97
	Developer Edition Tools Setup wizard. For example, you are not able to
	redistribute the spelling checker files or the Microsoft Access wizards with
	your run-time application. However, there are ways in which you can simulate the
	features in Microsoft Office in a run-time application.
	
	This article describes how you can simulate Office features in your run-time
	application.
	
	MORE INFORMATION
	================
	
	The following list describes features that are disabled in custom applications
	that you create using the Setup wizard and how you can simulate those features.
	
	Spelling Checker Functionality
	------------------------------
	
	Issue:
	
	You want to add spelling checker functionality to your run-time application.
	
	Solution:
	
	You must write a procedure to run the installed spelling checker that is already
	on your user's computer or look for a 3rd party add-on that does spell checking.
	If Microsoft Word 97 is installed on your user's computer, you can write a
	procedure for a command button's OnClick property. For example, the following
	sample code is attached to the OnClick property of a command button on the
	Employees form. When clicked, it will check the spelling of the contents of the
	Notes field:
	
	  Private Sub Command0_Click()
	
	    Me!Notes.SetFocus
	    Me!Notes.SelStart = 0
	    Me!Notes.SelLength = Len(Me!Notes)
	    RunCommand acCmdSpelling
	
	  End Sub
	
	Microsoft Access Wizard Functionality
	-------------------------------------
	
	Issue:
	
	You want to use Microsoft Access wizards in your custom application.
	
	Solution:
	
	You cannot copy the wizard files directly into a custom application that you
	create. You can extract the code from the wizard files by opening the wizard
	file that contains the code you need and copying and pasting the code into your
	application.
	
	NOTE: In the retail version of Microsoft Access 97, you can't view the Visual
	Basic for Applications code for wizards. However, you can download a special
	version of the wizards that contains viewable wizard code. For more information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q151196 ACC97: Viewable Wzmain80.mde Code Available in Download Center
	
	For example, if your users need to have the functionality of the Find Duplicates
	Query Wizard, you can copy the following code from Wztool80.mde:
	
	  Function Dup_Entry()
	
	     On Error GoTo dup_Entry_Err
	     Dim rsStrings As Recordset
	     Dim dbCode As Database
	     Set dbCode = CodeDb()
	     Set rsStrings = dbCode.OpenRecordset("fd_TblStrings", dbOpenTable)
	     rsStrings.Index = "PrimaryKey"
	     wlib_StartAddin 203, rsStrings, "String"
	     wlib_OpenCurrentDb
	     DoCmd.OpenForm "fd_FrmMain", , , , , acDialog
	
	  dup_Entry_Exit:
	
	     On Error Resume Next
	     rsStrings.Close
	     dbCode.Close
	     wlib_EndAddin
	     wlib_CloseCurrentDb
	
	  Exit Function
	  dup_Entry_Err:
	
	     If (Err <> 2501) Then
	        wlib_HandleError Err, Error$
	     End If
	     Resume dup_Entry_Exit
	
	  End Function
	
	When you call a procedure in the Wztool80.mde or Wzmain80.mde library database,
	the required syntax can vary, depending on if you have a reference to the
	library within your database.
	
	For more information about where to find a specific wizard, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q159367 ACC97: Which Wizard Is Where in Microsoft Access 97?
	
	Filter-by-form Functionality
	----------------------------
	
	Issue:
	
	You want to use the Filter-by-Form feature in your custom application.
	
	Solution:
	
	The Filter-by-Form command is disabled in a Microsoft Access 97 run-time
	application. You can simulate this feature by using information that can be
	found in the Qbf.exe file. This file contains a database, created by Ken Getz,
	that demonstrates how to create a custom Filter-by-Form that you can use in any
	application, including a run-time application.
	
	For more information about obtaining this file, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q166634 ACC97: Filter-by-Form Example for Run-Time Applications Available in
	  Download Center
	
	Office Assistant Functionality
	------------------------------
	
	Issue:
	
	You want to use the Office Assistant object in your custom application.
	
	Solution:
	
	Only distribute your custom application that includes the Office Assistant object
	in environments where the user will have a retail copy of Microsoft Access. For
	more information about distributing the Office Assistant, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q162894 ODE97: Cannot Redistribute Office Assistant with Run-Time Application
	
	OutputTo Functionality
	----------------------
	
	Issue:
	
	You want to use the OutputTo functionality in your run-time application, and be
	prompted for an output file name.
	
	Solution:
	
	If you want to prompt the user for a file name, you can use the ShowOpen or
	ShowSave methods of the Common Dialog ActiveX control.
	
	For more information about using the ShowOpen or ShowSave methods in your
	run-time application, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173334 ODE97: OutputTo Action Was Canceled Error in Run-time App
	
	Microsoft Excel, Microsoft PowerPoint, and Microsoft Word functionality
	-----------------------------------------------------------------------
	
	Issue:
	
	You want to create run-time applications that include Microsoft Excel
	spreadsheets, Microsoft PowerPoint presentations, or Microsoft Word documents to
	other users who do not have Microsoft Excel, Word, or PowerPoint
	
	Solution:
	
	One way you can do this is by adding the application's viewer files to the Setup
	Wizard program when you are creating your distribution disks.
	
	For more information about adding viewer files to your custom application, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q163410 ODE97: Creating Run-Time Apps for MS Excel, Word, or PowerPoint
	
	Adding Custom Toolbars
	----------------------
	
	Issue:
	
	You want to create custom toolbars that include commands from the Microsoft
	Access built-in toolbar.
	
	Solution:
	
	Instead of selecting the built-in menus on the Commands tab in the Customize box,
	select the commands that you want from the individual categories. For example,
	if you want to add the File menu commands, select the File category, and then
	select the individual commands.
	
	NOTE: The run-time environment does not show and hide your custom toolbars as the
	context changes, so you must manipulate the toolbars in your application using
	the ShowToolbar method in the OnActivate and OnDeactivate properties of your
	forms and reports.
	
	Including Help Files
	--------------------
	
	Issue:
	
	You want to use Microsoft Access Help in your run-time application.
	
	Solution:
	
	If you want to provide Help for your run-time application, you must create your
	own Help file, and then set the AppHelpFile key in the Windows Registry.
	Microsoft Office 97 Developer Edition includes a Help Workshop to assist you in
	creating custom Help files, and the Setup Wizard to assist you in setting the
	AppHelpFile registry key when you create your Setup files.
	
	For more information about creating your own Help file, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q171958 ODE97: Tips for Creating and Compiling Your Windows Help File
	
	  Q175491 ODE97: Step-by-Step Example of Creating/Compiling a Help File
	
	  Q163939 ODE97: Help Workshop Help Topics Contents
	
	REFERENCES
	==========
	
	For more information about features that are disabled in the run-time
	environment, please see the following article in the Microsoft Knowledge Base:
	
	  Q162521 ACC97: Differences Between Retail and Run-Time Microsoft Access
	
	Additional query words: runtime
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbAccess97 kbOffice97Search kbAccess97Search kbOffice97 kbOffice97DevSearch
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
