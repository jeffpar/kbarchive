---
layout: page
title: "Q170969: WD97: Macro to Cascade Open Document Windows"
permalink: /kb/170/Q170969/
---

## Q170969: WD97: Macro to Cascade Open Document Windows

{% raw %}

	Article: Q170969
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kbmacro kbProgramming kbui kbdta kbdtacode word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft Word does not contain a command to cascade all open document windows.
	To add this functionality, use the Visual Basic for Applications macro included
	in this article. After you create this macro, you can add it to the Window menu
	for easy access.
	
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
	
	The following example Visual Basic for Applications macro routine will cascade
	all open document windows.
	
	     Sub CascadeWindows()
	        Dim iVLap As Integer        'Vertical Window Overlap.
	        Dim iHLap As Integer        'Horizontal Window Overlap.
	        Dim lngTop As Long          'Cascaded Window Top.
	        Dim lngLeft As Long         'Cascaded Window Left.
	        Dim lngWidth As Long        'Cascaded Window Width.
	        Dim lngHeight As Long       'Cascaded Window Height.
	        Dim wDocWindow As Window    'Document Window Object.
	        ' If no documents exist, exit this routine.
	        If Documents.Count = 0 Then Exit Sub
	        'Set document window to normal size.
	        ActiveWindow.WindowState = wdWindowStateNormal
	        'Calculate window sizes.
	        iVLap = 14   'Vertical overlap
	        iHLap = 28   'Horizontal overlap
	        'Calculate width and height of windows in points.
	        lngWidth = Application.UsableWidth - ((Windows.Count - 1) * iHLap)
	        lngHeight = Application.UsableHeight - ((Windows.Count - 1) * iVLap)
	        ' The following loop cascades the windows by calculating
	        ' each document window size and then moves them into position.
	        For Each wDocWindow In Windows
	           Documents(wDocWindow).Activate
	           With ActiveWindow
	              .Top = lngTop
	              .Left = lngLeft
	              .Height = lngHeight
	              .Width = lngWidth
	           End With
	           lngLeft = lngLeft + iHLap
	           lngTop = lngTop + iVLap
	        Next wDocWindow
	     End Sub
	
	For more information about adding a command to a menu, click Contents And Index
	on the Help menu, click the Index tab in Word Help, type the following text
	
	  "menus" (without the quotation marks)
	
	and then double-click the selected text to go to the "Add a command or other item
	to a menu" topic. If you are unable to find the information you need, ask the
	Office Assistant.
	
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
	Keywords          : kbcode kbmacro kbProgramming kbui kbdta kbdtacode word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
