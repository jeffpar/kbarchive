---
layout: page
title: "Q163052: WD97: Macro Error When Opening Template with Toolbar"
permalink: /kb/163/Q163052/
---

## Q163052: WD97: Macro Error When Opening Template with Toolbar

	Article: Q163052
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbProgramming kbdta kbdtacode word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use a macro to open a template, you may receive one of the following
	errors:
	
	  - Run-time error '-2147467259(80004005):
	
	  Method 'Visible' of object 'CommandBar failed
	
	  -or-
	
	  - Run-time error '7':
	
	  Out of memory
	
	CAUSE
	=====
	
	This problem occurs if an AutoNew or AutoOpen macro is attempting to make a
	custom toolbar visible that has the same name of a toolbar that is currently
	displayed. For example, If you have a template named Template1 that contains a
	custom toolbar named "Custom 1" and an AutoOpen macro that makes this toolbar
	visible when a document that is based on this template is opened.
	
	-and-
	
	You also have a template named Template2 which contains a custom toolbar also
	named "Custom 1," and an AutoOpen macro that displays this toolbar.
	
	When you open "Template1" or a document based on "Template1", the AutoOpen macro
	runs and displays the "Custom 1" toolbar. If you then open "Template2" or a
	document based on "Template2", you receive one of the error messages listed in
	the "Symptoms" section of this article.
	
	NOTE: This problem does not occur when your templates reference the default
	toolbars.
	
	WORKAROUND
	==========
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	To prevent these errors from occurring, use one of the following methods.
	
	Method 1: Remove or Disable the Command That Displays the Custom Toolbar
	------------------------------------------------------------------------
	
	Edit the auto macro in one or both of the templates to remove or disable the
	command that displays the custom toolbar.
	
	For example, the command line that may be causing the error may be either of the
	following.
	
	     Macro converted from WordBasic:
	
	     WordBasic.ViewToolBars Toolbar:="Custom 1", Show:=1
	
	  Visual Basic for Applications macro:
	
	     CommandBars("Custom 1").Visible = True
	
	Adding an apostrophe at the beginning of either line will disable the command.
	
	Method 2: Rename One ToolBar to a Unique Name
	---------------------------------------------
	
	Rename one of the custom toolbars to a unique name and edit the macro of the same
	template to reference the changed custom toolbar name.
	
	Method 3: Add an Error Trap for the Error
	-----------------------------------------
	
	Adding an error trap will prevent the error if Word attempts to display both
	custom toolbars at the same time.
	
	NOTE: Using an error trap will skip the command to display the second custom
	toolbar. As a workaround, you can choose Toolbars on the View menu to display
	the custom toolbar without receiving an error.
	
	The following is an example of an error trap that can be used in this case:
	
	  On Error Resume Next
	  CommandBars("Custom 1").Visible = True
	
	For more information about error trapping, click the Office Assistant while in
	the Visual Basic Editor, type "error trap" (without the quotation marks), click
	Search, and then click to view "On Error Statement."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	Method 4: Check the Visible state of the Custom toolbar
	-------------------------------------------------------
	
	     ' If the Custom toolbar is not visible then...
	     If CommandBars("Custom 1").Visible = False Then
	        ' ...make the Custom toolbar visible.
	        CommandBars("Custom 1").Visible = True
	     End
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	For more information about how to edit a macro, click the Office Assistant while
	in the Visual Basic Editor, type "edit a macro" (without the quotation marks)
	click Search, and then click to view "Edit a macro."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbProgramming kbdta kbdtacode word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
