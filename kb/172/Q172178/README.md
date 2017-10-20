---
layout: page
title: "Q172178: WD97: How to Create Mutually Exclusive Check Boxes Using VBA"
permalink: /kb/172/Q172178/
---

## Q172178: WD97: How to Create Mutually Exclusive Check Boxes Using VBA

{% raw %}

	Article: Q172178
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbui kbdta kbdtacode kbmacroexample word8 word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Microsoft Word, there is no built-in functionality to force a user to select
	only one Check Box Form Field out of a group of check boxes.
	
	For example, if you have three check boxes: Yes, No, and Undecided, the user can
	select more than one at a time. However, you want to limit the user to selecting
	only one check box.
	
	This article describes a method using Visual Basic for Applications that you can
	use to force a user to select only one check box from a group of check boxes.
	
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
	
	The following sample Visual Basic for Applications macro demonstrates two groups
	of check boxes on a form. One group contains check boxes named Yes, No, and
	Undecided and the other group contains check boxes named True and False. When
	you select one of the check boxes in the group, the other check boxes are
	cleared.
	
	     Sub ToggleCheckBoxOnEntry()
	        Dim fFields As FormFields
	        Dim fSelectedField As FormField
	        Set fFields = ActiveDocument.FormFields
	        For Each fSelectedField In Selection.FormFields
	           ' Form field must be a check box.
	           If fSelectedField.Type = wdFieldFormCheckBox Then
	              ' Go to the case for the currently selected group.
	              Select Case fSelectedField.Name
	                 ' Yes, No, or Undecided check box group.
	                 Case "Yes", "No", "Undecided"
	                    ' Clear all values.
	                    fFields("Yes").CheckBox.Value = False
	                    fFields("No").CheckBox.Value = False
	                    fFields("Undecided").CheckBox.Value = False
	                 ' True or False check box group.
	                 Case "True", "False"
	                    ' Clear all values.
	                    fFields("True").CheckBox.Value = False
	                    fFields("False").CheckBox.Value = False
	                 ' You can add other Case statements for other groupings.
	                 ' For example:
	                 'Case
	                 '   <Code>
	                 'Case
	                 '   <Code>
	                 Case Else
	              End Select
	              ' Check the selected formfield.
	              fSelectedField.CheckBox.Value = True
	           End If
	        Next
	     End Sub
	
	To use this macro for any check box grouping within your document, assign
	ToggleCheckBoxOnEntry() as the Entry macro for every Check Box Form Field in the
	group.
	
	For more information about Select Case statement, click the Office Assistant
	while in the Visual Basic Editor, type "Select Case statement" (without the
	quotation marks), click Search, and then click to view "Select Case statement."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	For additional information about how to create check box groupings in earlier
	versions of Word, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q141081 How to Create Mutually Exclusive Check Boxes Using WordBasic
	
	
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
	Keywords          : kbui kbdta kbdtacode kbmacroexample word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
