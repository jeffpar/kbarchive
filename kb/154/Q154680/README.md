---
layout: page
title: "Q154680: FP: Elements Jump to Bottom of Page Inserting Image, Text"
permalink: /kb/154/Q154680/
---

## Q154680: FP: Elements Jump to Bottom of Page Inserting Image, Text

{% raw %}

	Article: Q154680
	Product(s): Word Front Page
	Version(s): ; WINDOWS:1.1
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194259.
	
	SYMPTOMS
	========
	
	When you insert an image or type text in a new typeface in FrontPage Editor, the
	image or text jumps to a position much lower on the page than it should.
	
	CAUSE
	=====
	
	One or more of the Times New Roman font files may be corrupt (these files are
	located in the \Windows\Fonts folder).
	
	WORKAROUND
	==========
	
	To work around this problem, replace the Times New Roman font files in the
	\Windows\Fonts folder that are not corrupt.
	
	MORE INFORMATION
	================
	
	These font files contain equations that describe the various aspects of the font
	such as baseline, ascender, descender, and so on. When some aspect of the file
	is corrupt, FrontPage Editor may not interpret the size of the font correctly
	(for example, it may appear that the font is much taller than it actually is);
	therefore, any text of a different typeface or a bottom-aligned image may be
	placed below this font because FrontPage Editor interprets the corrupt font as
	being the tallest element on the current line.
	
	Times New Roman is selected by Windows browsers to render the default Normal
	style font of HTML documents.
	
	Additional query words: type style
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage110
	Version           : :; WINDOWS:1.1
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
