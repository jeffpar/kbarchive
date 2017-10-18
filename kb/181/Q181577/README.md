---
layout: page
title: "Q181577: WD97: Text Form Fields Not Retained During Mail Merge"
permalink: kb/181/Q181577/
---

## Q181577: WD97: Text Form Fields Not Retained During Mail Merge

	Article: Q181577
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A mail merge main document that contains form fields retains the drop-down and
	check box form fields, but text form fields are not present in the merge result.
	
	CAUSE
	=====
	
	Word unlinks the text form fields during the mail merge. Word does not unlink
	display form fields, such as the drop-down and the check box form fields. This
	behavior is by design.
	
	
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
	
	NOTE: Do not perform a mail merge as usual in Microsoft Word. Instead, run the
	following two macros from your mail merge main document.
	
	The following macros will:
	
	1. Replace text form fields in the main mail merge document with placeholders
	  while preserving the contents of the form fields.
	
	2. Merge to a new document.
	
	3. Replace the placeholders with text form fields and restore the contents of
	  the form fields.
	
	4. Restore the main mail merge document to its original content prior to running
	  the macro.
	
	NOTE: The following two macros work in conjunction with one another, and both
	macros must be created in the same Visual Basic for Applications project.
	
	Create the first macro:
	
	  Sub PreserveMailMergeFormFields()
	
	     Dim fFieldText() As String
	     Dim iCount As Integer
	     Dim fField As FormField
	     Dim sWindowMain, sWindowMerge As String
	
	     On Error GoTo ErrHandler
	
	     ' Store Main merge document window name.
	     sWindowMain = ActiveWindow.Caption
	
	     ' Because the document contains form fields, it should be protected so,
	     ' unprotect document.
	     If ActiveDocument.ProtectionType <> wdNoProtection Then
	        ActiveDocument.Unprotect
	     End If
	
	     ' Loop through all text form fields in the main mail merge document.
	     For Each aField In ActiveDocument.FormFields
	
	        ' If the form field is a text form field...
	        If aField.Type = wdFieldFormTextInput Then
	
	           ' Redim array to hold contents of text field.
	           ReDim Preserve fFieldText(1, iCount + 1)
	
	           ' Place content and name of field into array.
	           fFieldText(0, iCount) = aField.Result
	           fFieldText(1, iCount) = aField.Name
	
	           ' Select the form field.
	           aField.Select
	
	           ' Replace it with placeholder text.
	           Selection.TypeText "<" & fFieldText(1, iCount) _
	              & "PlaceHolder>"
	
	           ' Increment icount
	           iCount = iCount + 1
	
	        End If
	
	     Next aField
	
	     ' Perform mail merge to new document.
	     ActiveDocument.MailMerge.Destination = wdSendToNewDocument
	     ActiveDocument.MailMerge.Execute
	
	     ' Find and Replace placeholders with form fields.
	     doFindReplace iCount, fField, fFieldText()
	
	     ' Protect the merged document.
	     ActiveDocument.Protect Password:="", NoReset:=True, Type:= _
	        WdAllowOnlyFormFields
	
	     ' Get name of final merged document.
	     sWindowMerge = ActiveWindow.Caption
	
	     ' Reactivate the main merge document.
	     Windows(sWindowMain).Activate
	
	     ' Find and replace placeholders with form fields.
	     doFindReplace iCount, fField, fFieldText()
	
	     ' Reprotect the main mail merge document.
	     ActiveDocument.Protect Password:="", NoReset:=True, Type:= _
	        WdAllowOnlyFormFields
	
	     ' Switch back to the merged document.
	     Windows(sWindowMerge).Activate
	
	     ErrHandler:
	
	  End Sub
	
	Create the second macro:
	
	  Sub doFindReplace(iCount As Integer, fField As FormField, _
	     fFieldText() As String)
	
	     ' Go to top of document.
	     Selection.HomeKey Unit:=wdStory
	
	     ' Initialize Find.
	     Selection.Find.ClearFormatting
	     With Selection.Find
	     .Forward = True
	     .Wrap = wdFindContinue
	     .Format = False
	     .MatchCase = False
	     .MatchWholeWord = False
	     .MatchWildcards = False
	     .MatchSoundsLike = False
	     .MatchAllWordForms = False
	
	        ' Loop form fields count.
	        For i = 0 To iCount
	
	           ' Execute the find.
	           Do While .Execute (FindText:="<" & fFieldText(1, i) _
	              & "PlaceHolder>") = True
	
	              ' Replace the placeholder with the form field.
	              Set fField = Selection.FormFields.Add _
	                 (Range:=Selection.Range, Type:=wdFieldFormTextInput)
	
	              ' Restore form field contents and bookmark name.
	              fField.Result = fFieldText(0, i)
	              fField.Name = fFieldText(1, i)
	
	           Loop
	
	           ' Go to top of document for next find.
	           Selection.HomeKey Unit:=wdStory
	
	        Next
	
	     End With
	
	  End Sub
	
	For more information about how to use the sample code in this article, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	MORE INFORMATION
	================
	
	Some fields, such as the Next and FillIn fields, require input either from the
	data document or from you to continue processing the merge. In this case, Word
	places the results in the merged document. However, fields that obtain
	information from document statistics, such as the Numpages field, may be
	inappropriate for a merged document. As a result they are not retained in the
	merge result.
	
	The following table lists which fields are not unlinked and which fields are
	unlinked during a Word mail merge.
	
	  Fields that are          Fields that are
	  not unlinked             unlinked
	  -------------------------------------------------
	
	  = (Formula)              Ask
	  Advance                  Author
	  AutoNum                  AutoText
	  AutoNumLgl               AutoTextList
	  AutoNumOut               Comments
	  BarCode                  Compare
	  Date                     CreateDate
	  EQ                       Database
	  FormCheckbox             DocProperty
	  FormDropDown             DocVariable
	  GotoButton               EditTime
	  IncludePicture           FileName
	  IncludeText              FileSize
	  Link                     FillIn
	  MacroButton              Hyperlink
	  NoteRef                  If
	  Page                     Index
	  PageRef                  Info
	  Print                    Keyword
	  PrintDate                LastSavedBy
	  Private                  ListNum
	  RD                       Mergefield
	  Section                  MergeRec
	  SectionPages             MergeSeq
	  Symbol                   Next
	  TA                       NextIf
	  TC                       NumChars
	  Time                     NumPages
	                           NumWords
	                           Quote
	                           Ref
	                           RevNum
	                           SaveDate
	                           Seq
	                           Set
	                           SkipIf
	                           StyleRef
	                           Subject
	                           Template
	                           Title
	                           TOA
	                           TOC
	                           UserAddress
	                           UserInitials
	                           UserName
	
	REFERENCES
	==========
	
	For additional information about other Visual Basic for Application programming
	resources, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: text form mail merge mailmerge lost stripped removed disappear print merging display field formfield drop down dropdown
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
