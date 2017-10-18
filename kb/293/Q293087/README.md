---
layout: page
title: "Q293087: WORD97: &quot;Formatting is too Complex&quot; Err Msg When You Run Macro"
permalink: kb/293/Q293087/
---

## Q293087: WORD97: &quot;Formatting is too Complex&quot; Err Msg When You Run Macro

	Article: Q293087
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a Microsoft Visual Basic for Applications (VBA) macro, you may
	receive the following error message:
	
	  The formatting in this document is too complex.
	
	CAUSE
	=====
	
	This behavior can occur if the Visual Basic macro contains multiple style
	commands similar to the following:
	
	  .Style = ActiveDocument.Styles("Heading 2")
	
	This behavior occurs only when you use the Style property.
	
	WORKAROUND
	==========
	
	To work around this issue, periodically save the document.
	
	You can add the following VBA code to your macro to save, close, and then re-open
	the document:
	
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
	
	  Sub Test()
	      ActiveDocument.Save
	      ActiveDocument.Close
	      Application.RecentFiles(1).Open
	      ActiveDocument.paragraphs.Last.Range.Select
	      Selection.Collapse Direction:=wdCollapseEnd
	  End Sub
	
	NOTE: This code also positions the mouse pointer at the end of the last paragraph
	of the document.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
