---
layout: page
title: "Q159469: WD97: Run-Time Error Using VBA Macro to Resize Document Window"
permalink: kb/159/Q159469/
---

## Q159469: WD97: Run-Time Error Using VBA Macro to Resize Document Window

	Article: Q159469
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbdta kbdtacode word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to resize or reposition a document window using one of the
	Microsoft Visual Basic for Applications document window properties (Width,
	Height, Left, or Top), the following error message may appear:
	
	  Run-time error '5868': Window is maximized.
	
	CAUSE
	=====
	
	This error occurs because the document window is in a maximized window state.
	You cannot resize a window while it is in a maximized state.
	
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
	
	To work around this problem, you can set the active window state to "Normal"
	before you attempt to resize the window. To do this, add the .WindowState
	property to the macro before you define the Width, Height, Left, and Top
	properties:
	
	  Sub ResizeDocumentWindow()
	     ' If there are no open Windows then exit this routine.
	     If Windows.Count = 0 Then Exit Sub
	     ' The With statement sets the Window State to Normal and sets
	     ' the Width, Height, Left, and Top properties.
	     With ActiveWindow
	        ' Set the window state to Normal.
	        .WindowState = wdWindowStateNormal
	        ' Resize the window.
	        .Width = 400
	        .Height = 200
	        .Left = 10
	        .Top = 32
	     End With
	  End Sub
	
	For information about how to do this in earlier versions of Word, please see the
	following article in the Microsoft Knowledge Base:
	
	  
	
	  Q88499 WinWord Err Msg: 'WordBasic Err=509,' with DocSize or DocMove
	
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
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kberrmsg kbdta kbdtacode word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
