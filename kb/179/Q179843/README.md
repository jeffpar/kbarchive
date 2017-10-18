---
layout: page
title: "Q179843: OFF97: Compile Error Using the Visible Property of UserForms"
permalink: kb/179/Q179843/
---

## Q179843: OFF97: Compile Error Using the Visible Property of UserForms

	Article: Q179843
	Product(s): Word 97 for Windows
	Version(s): 97
	Operating System(s): 
	Keyword(s): kbProgramming kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Excel 97 for Windows 
	- Microsoft PowerPoint 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to set or change the Visible property of a UserForm, you
	receive the following error message:
	
	  Compile error:
	  Wrong number of arguments or invalid property assignment.
	
	CAUSE
	=====
	
	This error occurs when you attempt to modify a read-only property. For example,
	the following sample Microsoft Visual Basic for Applications code generates the
	error:
	
	     Sub HideForm()
	        UserForm1.Visible = False ' Generates a Compile error.
	     End Sub
	   
	     Sub ShowForm()
	        UserForm1.Visible = True  ' Generates a Compile error.
	     End Sub
	
	RESOLUTION
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
	
	The Visible property is designed to let you check the Visible state of a specific
	form, but not modify it. To modify the Visible state of a form, use the Hide and
	Show methods to change the form's Visible property.
	
	NOTE: The following code samples assume your form is named UserForm1. Replace
	UserForm1 with the name of your form or a reference to your form.
	
	How to Use the Show and Hide Methods
	------------------------------------
	
	The following sample Visual Basic code hides a UserForm:
	
	     Sub HideForm()
	        UserForm1.Hide
	     End Sub
	
	The following sample Visual Basic code shows a UserForm:
	
	     Sub ShowForm()
	        UserForm1.Show
	     End Sub
	
	How to Use the Visible Property
	-------------------------------
	
	The following sample Visual Basic code checks the Visible property of a form:
	
	     Sub CheckFormState()
	
	        ' Determine whether the form is visible.
	        If UserForm1.Visible = True Then
	           ' Do something when the form is visible.
	        End If
	
	        ' Determine whether the form is hidden.
	        If UserForm1.Visible = False Then
	            ' Do something when the form is hidden.
	        End If
	
	     End Sub
	
	STATUS
	======
	
	This behavior is by design. Microsoft welcomes suggestions or comments about
	changes in functionality and product design. You are invited to submit
	suggestions by filling out the form at the following Microsoft Web site:
	
	  http://www.microsoft.com/regwiz/regwiz.asp
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon dialog box dialogs hidden invisible custom
	
	======================================================================
	Keywords          : kbProgramming kbwordvba word97 
	Technology        : kbWordSearch kbExcelSearch kbPowerPtSearch kbWord97 kbWord97Search kbPowerPt97 kbZNotKeyword2 kbExcel97Search kbPowerPt97Search kbZNotKeyword3 kbExcelWinSearch
	Version           : :97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
