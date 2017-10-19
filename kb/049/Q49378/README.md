---
layout: page
title: "Q49378: Label Command Does Whole Word Search, Not Text Search"
permalink: /kb/049/Q49378/
---

## Q49378: Label Command Does Whole Word Search, Not Text Search

	Article: Q49378
	Product(s): Microsoft Programming Utilities
	Version(s): 2.2,3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbCodeView kbDebug kbVC
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 2.2, 3.0, 3.11, 3.14, 4.0, 4.01, 4.05, 4.1 
	- Microsoft CodeView for Windows, versions 3.0, 3.05, 3.06, 3.07, 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The CodeView debugger Search menu includes a Label command to search for a
	label. Unlike the Find command, which searches in the source code for any
	regular expression, the Label command searches the CodeView debugging
	information for an assembly language label.
	
	This search is not a text search and does not support regular expressions. To
	find a label, specify the name of the label as the search string. In addition,
	if the Case Sense option is selected in the Options menu, the label is found
	only if the case of each letter matches exactly.
	
	MORE INFORMATION
	================
	
	For example, to find the code for the standard C stack-checking function
	"_chkstk", choose Label from the Search menu, type "__chkstk" (without the
	quotation marks), and press ENTER. CodeView switches the display to assembly
	language mode, if it was not already, and positions the line with the label
	__chkstk at the top of the window. Two underscores are required because C
	prepends an underscore to every label (the original function name is
	"_chkstk").
	
	If the label is not available, or if you type it in incorrectly, CodeView returns
	an "Unknown Symbol" error. For example, "_chkstk" "chkstk" "__chk" and
	"__chkstks" each fail to match the example above. If Case Sense is on, an
	attempt to find the label "__CHKSTK" also fails.
	
	Additional query words: kbinf 2.20 3.00 3.50 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly kbCodeView kbDebug kbVC 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView220DOS kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS kbCodeView300 kbCodeView305 kbCodeView306 kbCodeView307 kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :2.2,3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	
	=============================================================================
	
