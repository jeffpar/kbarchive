---
layout: page
title: "Q159896: WD97: How to Control the Tabbing Order in a Form"
permalink: /kb/159/Q159896/
---

## Q159896: WD97: How to Control the Tabbing Order in a Form

{% raw %}

	Article: Q159896
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmacro kbualink97 kbusage kbwordvba word97kbfaq
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	By default, when you fill in an online form, Word positions the insertion point
	in the first form field and moves from one field to the next in a left-to-right,
	top-to-bottom order when you press TAB. To change the default tabbing order, use
	the procedure described in the "More Information" section of this article.
	
	MORE INFORMATION
	================
	
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
	
	You can use one of the following methods as a workaround.
	
	Method 1: Create a single exit macro for all Form fields
	--------------------------------------------------------
	
	Create a macro similar to the following example. For each form field, specify
	this macro as the exit macro for Form field in your document. In the Select Case
	statement, list each Form field for which you want to change the tabbing order.
	
	Note: Each Case statement below should be in all lower case.
	
	     Sub TabOrder()
	        Dim sTabTo As String
	        Dim dlgForm As Dialog
	        Set dlgForm = Dialogs(wdDialogFormFieldOptions)
	        Select Case LCase(dlgForm.Name)
	           Case "cc"
	              sTabTo = "header"
	           Case "header"
	              sTabTo = "to"
	           Case "to"
	              sTabTo = "from"
	           Case "from"
	              sTabTo = "memo"
	           Case "memo"
	              sTabTo = "subject"
	           Case "subject"
	              sTabTo = "cc"
	           Case Else
	        End Select
	        ActiveDocument.Bookmarks(sTabTo).Select
	     End Sub
	
	Method 2: Create a separate macro for each form field
	-----------------------------------------------------
	
	Each macro contains a Selection.GoTo statement that moves the insertion point to
	the desired Form field.
	
	TIP: To easily identify each macro, give the macro a name that describes its
	functionality. For example, use the name "GoToSubject" (without the quotation
	marks) for the Exit macro that moves the insertion point to the Subject Form
	field.
	
	The following sample exit macro, named "GoToSubject," moves from the current Form
	field to the Subject Form field:
	
	     Sub GoToSubject()
	        Selection.GoTo What:=wdGoToBookmark, Name:="Subject"
	     End Sub
	
	For information about how to do this in earlier versions of Word, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120447 How to Control the Tabbing Order in a Form
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q181058 OFF98: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: vb vba vbe tabs tabbed
	
	======================================================================
	Keywords          : kbmacro kbualink97 kbusage kbwordvba word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
