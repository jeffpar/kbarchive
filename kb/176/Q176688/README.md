---
layout: page
title: "Q176688: WD97: Recorded Macro to Insert AutoText from Add-in Fails"
permalink: kb/176/Q176688/
---

## Q176688: WD97: Recorded Macro to Insert AutoText from Add-in Fails

	Article: Q176688
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you record a macro to insert AutoText that exists in an add-in template,
	the macro will fail on playback and the following error will occur:
	
	  Run-time error '5941':
	
	  The requested member of the collection does not exist.
	
	CAUSE
	=====
	
	This is a problem with the way the Visual Basic Editor records the Word command
	to insert the AutoText entry.
	
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
	
	To work around this problem, temporarily attach the add-in template to the active
	document to insert the AutoText.
	
	Use the following sample Visual Basic for Applications macro to work around this
	problem. Substitute the AttachedTemplate path and file name to the path and file
	name of your custom template. Substitute "MyEntry" for the name of the AutoText
	entry to insert:
	
	        Sub GetAddInAutotext()
	
	        Dim originalattachment As String
	
	        ' Get the currently attached template and store it in a variable.
	        originalattachment = Templates(1).Path & Application.PathSeparator _
	           & ActiveDocument.AttachedTemplate
	
	        ' Set the attached template to your custom template.
	        ActiveDocument.AttachedTemplate = _
	           "C:\Program Files\Microsoft Office\Templates\MyTemplate.Dot"
	
	        ' Insert the AutoText at the insertion point.
	        ActiveDocument.AttachedTemplate.AutoTextEntries("MyEntry").Insert _
	           Where:=Selection.Range, RichText:=True
	
	        ' Re-Attach the original template.
	        ActiveDocument.AttachedTemplate = originalattachment
	
	     End Sub
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon insert autotext fail recorded
	
	======================================================================
	Keywords          : kbdta kbdtacode 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
