---
layout: page
title: "Q178287: WD97: Track Changes Does Not Mark Some Formatting Changes"
permalink: kb/178/Q178287/
---

## Q178287: WD97: Track Changes Does Not Mark Some Formatting Changes

	Article: Q178287
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbproof
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Track Changes While Editing feature does not mark changes to some formats.
	This includes all paragraph level formats, including changing styles which
	include font-level formats that would be marked if they had been changed
	directly. The following list shows the formats that are not marked and those
	that are marked.
	
	  Format                         Marked (Y/N)
	  -------------------------------------------
	
	  Animation                      N
	  Color                          N
	  Font Typeface                  N
	  Hidden                         N
	  Kerning                        N
	  Language                       N
	  Position                       N
	  Size                           N
	  Spacing                        N
	  All caps                       Y
	  Bold                           Y
	  Double Strikethrough           Y
	  Emboss                         Y
	  Engrave                        Y
	  Italics                        Y
	  Outline                        Y
	  Scale                          Y
	  Shadow                         Y
	  Small caps                     Y
	  Strikethrough                  Y
	  Subscript                      Y
	  Superscript                    Y
	  Underlined                     Y
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The default option for the display of formatting changes is (None). Options
	available to indicate formatting changes include Bold, Italic, Underline and
	Double Underline and/or Color. To set the marking option for formatting, follow
	these steps:
	
	1. On the Tools menu, point to Track Changes, and click Highlight Changes.
	
	2. Click to select the Track Changes While Editing check box.
	
	3. Click Options.
	
	4. Select an option for Mark and a color for "Changed formatting."
	
	5. Click OK twice.
	
	Additional query words: 8.00 redline redlining revision marks
	
	======================================================================
	Keywords          : kbproof 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
