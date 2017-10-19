---
layout: page
title: "Q179338: WD97: Programmatically Unlinking Field Makes Word Stop"
permalink: /kb/179/Q179338/
---

## Q179338: WD97: Programmatically Unlinking Field Makes Word Stop

	Article: Q179338
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdtacode kbmacroexample kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to unlink fields in a document footer using the Microsoft
	Visual Basic for Applications Unlink Method, Microsoft Word may stop responding.
	
	CAUSE
	=====
	
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
	
	The following sample Visual Basic macro causes the problem described in the
	Symptoms section of this article to occur.
	
	WARNING: Running this macro causes Word to stop responding.
	
	     Sub UnlinkFieldsinFooter()
	        ' Switch to document footer.
	        If ActiveWindow.View.SplitSpecial <> wdPaneNone Then
	           ActiveWindow.Panes(2).Close
	        End If
	        If ActiveWindow.ActivePane.View.Type = wdNormalView Or _
	        ActiveWindow.ActivePane.View.Type = wdOutlineView Or _
	        ActiveWindow.ActivePane.View.Type = wdMasterView Then
	           ActiveWindow.ActivePane.View.Type = wdPageView
	        End If
	        ActiveWindow.ActivePane.View.SeekView = wdSeekCurrentPageFooter
	
	        ' Select all text in the footer.
	        Selection.WholeStory
	
	        ' Loop through fields in selection.
	        For Each afield In Selection.Fields
	           ' If field type is a REF field.
	           If afield.Type = wdFieldRef Then
	              ' Unlink the field.
	              afield.Unlink ' <--- Word stops responding at this line.
	           End If
	           ' Reselect all text in the footer.
	           Selection.WholeStory
	        Next afield
	      Selection.Collapse     
	  End Sub
	
	WORKAROUND
	==========
	
	To work around this problem, use the following sample Visual Basic macro
	instead.
	
	     Sub UnlinkFieldsinFooter()
	        ' Switch to document footer.
	         ActiveWindow.ActivePane.View.SeekView = wdSeekCurrentPageFooter
	
	        ' Select all text in the footer.
	         Selection.WholeStory
	         ' Loop through fields in selection.
	         For Each afield In Selection.Fields           
	         ' If field type is a REF field.            
	         If afield.Type = wdFieldRef Then             
	         ' Select the current field.               
	         afield.Select              
	         'Unlink the currently selected field.
	                  Selection.Field(1).Unlink
	              End If
	            ' Reselect all text in the footer.
	            Selection.WholeStory
	            Next afield
	          ' Close footer return to document
	           ActiveWindow.ActivePane.View.SeekView = wdSeekMainDocument
	      End Sub
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: kbdtacode kbmacro vba hang hung crash crashed locks locked frozen freezes crashing quit quits stopped crashes auto lockup freeze break won't respond waiting near memory stops responding hangs lock up fail
	
	======================================================================
	Keywords          : kbdtacode kbmacroexample kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	
	=============================================================================
	
