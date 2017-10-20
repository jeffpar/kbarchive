---
layout: page
title: "Q176867: WD97: Incorrect Tab Settings Using WordBasic.FormatTabs"
permalink: /kb/176/Q176867/
---

## Q176867: WD97: Incorrect Tab Settings Using WordBasic.FormatTabs

{% raw %}

	Article: Q176867
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample word8 word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use positional arguments instead of named arguments for the
	WordBasic.FormatTabs command, incorrect tab settings are made. For example, the
	following sample WordBasic code produces incorrect tab settings:
	
	  Sub TestTabs()
	     WordBasic.FormatTabs "2 in", , 3, 2, 1, 0, 0
	  End Sub
	
	After running this example, a right tab with a period leader is set at 2 inches,
	when the expected result would be a decimal tab with a hyphen leader set at 2
	inches.
	
	
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
	
	To work around this problem, use one of the following methods.
	
	Method 1: Add an Extra Comma for the Positional Arguments
	---------------------------------------------------------
	
	Correct the order of the arguments by adding an extra comma, as in the following
	example:
	
	     WordBasic.FormatTabs "2 in",,,3,2,1,0,0
	
	Method 2: Use Named Arguments
	-----------------------------
	
	Modify the statement to use named arguments, as in the following example:
	
	     WordBasic.FormatTabs Position := "2 in", Align := 3, \ 
	      Leader := 2, Set := 1
	
	MORE INFORMATION
	================
	
	Following is the position order of the arguments for FormatTabs.
	
	  FormatTabs [.Position = text] [.DefTabs = text] [.Align = number]
	  [.Leader = number] [.Set] [.Clear] [.ClearAll]
	
	  .Position   Position of the tab stop in a text measurement.
	
	  .DefTabs    Position for default tab stops in the document in points or
	              a text measurement.
	
	  .Align      Alignment of the tab stop:
	
	                 0 (zero)    Left
	                 1           Center
	                 2           Right
	                 3           Decimal
	                 4           Bar
	
	  .Leader     The leader character for the tab stop:
	
	                 0 (zero)    None
	                 1           Period
	                 2           Hyphen
	                 3           Underscore
	
	  .Set        Sets the specified custom tab stop.
	
	  .Clear      Clears the specified custom tab stop.
	
	  .ClearAll   Clears all custom tab stops.
	
	In the versions of Word listed at the beginning of this article, WordBasic has
	been replaced with Visual Basic for Applications. For backward compatibility,
	Visual Basic for Applications contains a WordBasic object. To ensure that the
	WordBasic command and arguments are positioned correctly, use the Position.hlp
	file for Word for Windows version 6.x.
	
	NOTE: If your programming language was written to call WordBasic commands, and
	you are anticipating interacting with the Microsoft Word Visual Basic for
	Applications language for all future development needs, you should convert your
	code from WordBasic to Microsoft Word Visual Basic for Applications.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q163618 WD97: Writing Macro Code for Word 97 and Word 7.x (Branching)
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vba
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
