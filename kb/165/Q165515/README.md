---
layout: page
title: "Q165515: WD97: Run-Time Error '4605': Command Not Available"
permalink: /kb/165/Q165515/
---

## Q165515: WD97: Run-Time Error '4605': Command Not Available

	Article: Q165515
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you close a document protected for forms, you receive the error:
	
	  Run-time error '4605': Command not available
	
	After receiving the error, you cannot close or save your document.
	
	CAUSE
	=====
	
	This problem occurs when you:
	
	- Create a document and protect it for Forms (click Protect Document on the
	  Tools menu).
	
	  -and-
	
	- While the protected document is open, create a Web page using the Web Page
	  Wizard.
	
	If you close the Web page you just created and attempt to save or close the
	protected document, the error will occur and you will be unable to save or close
	the protected document. Also, the UnProtect menu command is missing from the
	Tools menu.
	
	This problem occurs because the underlying template add-in, Html.dot, for the Web
	Page Wizard is still active and all menu commands reflect the menus of the
	Html.dot template. When you choose one of the menu commands, such as Close on
	the File menu, a call is made to the Html.wll add-in. Because the Web Page has
	been closed, the call fails.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, create and run the following macro:
	
	The following macro unprotects the active document, removes the HTML.Dot as an
	Add-In and then re-protects the active document.
	
	     Sub RestoreMenus()
	        Dim sDefPath As String
	        ' Unprotect the document.
	        If ActiveDocument.ProtectionType <> wdNoProtection Then
	           ActiveDocument.Unprotect
	        End If
	        ' Remove the HTML.Dot as an add-in.
	        ' (To restore the default menus.)
	        sDefPath = Options.DefaultFilePath(Path:=wdProgramPath)
	        AddIns(sDefPath & "\HTML.Dot").Installed = False
	        ' Reprotect the document preserving form field contents.
	        If ActiveDocument.ProtectionType = wdNoProtection Then
	           ActiveDocument.Protect Type:=wdAllowOnlyFormFields, NoReset:=True
	        End If
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: vb vba vbe
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
