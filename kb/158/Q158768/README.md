---
layout: page
title: "Q158768: WD97: Sample VB Code to Set, Retrieve Summary Information"
permalink: /kb/158/Q158768/
---

## Q158768: WD97: Sample VB Code to Set, Retrieve Summary Information

	Article: Q158768
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmacroexample word8 kbwordvba word97kbfaq
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Microsoft Word, you can use Microsoft Visual Basic for Applications to access
	the summary information in the Properties dialog box (on the File menu, click
	Properties) and then display the information in a message box, insert the
	information into the active document, or store the values within a variable.
	
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
	
	To retrieve or set values on the Summary tab of the Document Properties dialog
	box, use the following literal string arguments or property constants with
	either of the two methods below.
	
	Literal String Arguments             Property Constants
	------------------------             ------------------
	Title                                wdPropertyTitle
	Subject                              wdPropertySubject
	Author                               wdPropertyAuthor
	Manager                              wdPropertyManager
	Company                              wdPropertyCompany
	Category                             wdPropertyCategory
	Keywords                             wdPropertyKeywords
	Comments                             wdPropertyComments
	Hyperlink base                       wdPropertyHyperlinkbase
	
	Method 1: Use the BuiltInDocumentProperties property
	----------------------------------------------------
	
	Use the BuiltInDocumentProperties property to set and return summary information
	for the active document. You can specify which value to set or retrieve by
	referencing the argument through a built-in constant or a literal string. The
	following sample code uses the wdPropertyTitle constant to retrieve the title
	for the active document and the result is displayed in a message box.
	
	     Sub GetSetDocProps()
	        If Documents.Count > 0 Then
	           Dim dp As Object
	           Set dp = ActiveDocument.BuiltInDocumentProperties
	           ' Retrieve and display the active document's
	           ' title by using the constant "wdPropertyTitle."
	           MsgBox dp(wdPropertyTitle)
	        End If
	     End Sub
	
	The following sample code use a literal string to define the keywords for the
	active document:
	
	     Sub SetDocProps()
	        If Documents.Count > 0 Then
	           Dim dp As Object
	           Set dp = ActiveDocument.BuiltInDocumentProperties
	           ' Set KeyWords for the active document by
	           ' using a literal string.
	           dp("KeyWords") = "Summary Information Example Macro"
	           ActiveDocument.Save
	        End If
	     End Sub
	
	Method 2: Use the Dialogs property to set and return values
	-----------------------------------------------------------
	
	Use the Dialogs property to set and return values for the active document's
	summary information.
	
	Before you return or change a built-in dialog box setting, you need to identify
	the individual dialog box. To do this, use the Dialogs property and a
	WdWordDialog constant. The following sample code returns the properties Dialog
	object that refers to the Summary tab.
	
	     Set myDialog = Dialogs(wdDialogFileSummaryInfo)
	
	You can set or retrieve the following literal string arguments without displaying
	the Summary tab when a document is open.
	
	  Title
	  Subject
	  Author
	  Manager
	  Company
	  Category
	  Keywords
	  Comments
	  Hyperlinkbase
	
	The following sample macro retrieves the current value of the Title string,
	places this value in a variable string, and sets a new value without displaying
	the Properties dialog box.
	
	     Sub SetSummaryInfo ()
	        Dim dp As Object
	        Dim sTitle As String
	        If Documents.Count > 0 Then
	           Set dp = Dialogs(wdDialogFileSummaryInfo)
	           ' Retrieve value of "Title" into a variable.
	           sTitle  = dp.Title
	           ' Set "Title" to a new value.
	           dp.Title = "My Title"
	           ' Set the value without showing the dialog.
	           dp.Execute
	           ' Save the changes
	           ActiveDocument.Save
	        End If
	     End Sub
	
	The following sample macro sets a new value for Title and displays the Properties
	dialog box.
	
	     Sub SetSummaryInfo()
	        Dim dp As Object
	        If Documents.Count > 0 Then
	           Set dp = Dialogs(wdDialogFileSummaryInfo)
	           ' Set "Title" to a new value.
	           dp.Title = "My Title"
	           ' Set the value.
	           dp.Execute
	           ' Save the changes.
	           ActiveDocument.Save
	           ' Display the dialog.
	           ' Note: Using the Display method will not keep changes
	           ' manually entered into the dialog box. To keep changes
	           ' manually entered in the dialog box, use the Show method.
	           dp.Display
	        End If
	     End Sub
	
	For more information about displaying, setting, or retrieving values in Word
	dialog boxes, click Office Assistant, type "Displaying dialog boxes" (without
	the quotation marks), click Search, and then click Displaying built-in Word
	dialog boxes.
	
	For information about how to do this in earlier versions of Word, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q85168 WD: How to Access the Summary Info Dialog Box from a Macro
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbmacroexample word8 kbwordvba word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
