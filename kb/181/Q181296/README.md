---
layout: page
title: "Q181296: WD97: Macro to Dock Toolbars That Are Beyond Screen Borders"
permalink: /kb/181/Q181296/
---

## Q181296: WD97: Macro to Dock Toolbars That Are Beyond Screen Borders

{% raw %}

	Article: Q181296
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article contains a sample Microsoft Visual Basic for Applications macro
	(Sub procedure) to dock (move) any active toolbars that are not visible on
	screen to the top of the active Microsoft Word window.
	
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
	
	The following sample Visual Basic macro searches for all active toolbars
	(CommandBars) that are not visible on screen and docks (moves) them to the top
	of the active document window.
	
	  Sub DockCommandBars()
	
	        Dim cBar As CommandBar
	        Dim intHres As Integer
	        Dim intVres As Integer
	
	        ' Get screen resolution. Subtract 60 from each screen dimension
	        ' to account for toolbars that are barely visible on the screen.
	        intHres = System.HorizontalResolution - 60
	        intVres = System.VerticalResolution - 60
	
	        ' Loop through each CommandBar in Word.
	        For Each cBar In ActiveDocument.CommandBars
	
	           ' If the CommandBar is beyond screen limits, then
	           ' dock the CommandBar to the top of the Word window.
	           If cBar.Top > intVres Or cBar.Left > intHres Then
	              CommandBars(cBar.Name).Position = msoBarTop
	              cBar.Visible = True
	           End If
	
	        Next
	
	     End Sub
	
	To dock a single toolbar, type the following line in a blank macro and then run
	the macro:
	
	    ActiveDocument.CommandBars(<commandbar name>).Position=msoBarTop
	
	where <commandbar name> is the name of the single toolbar you want to dock.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
