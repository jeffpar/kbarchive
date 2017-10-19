---
layout: page
title: "Q167371: WD97: Changing Orientation After Changing Columns Causes Error"
permalink: /kb/167/Q167371/
---

## Q167371: WD97: Changing Orientation After Changing Columns Causes Error

	Article: Q167371
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage kbdta kblayout
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may receive the following error message:
	
	  Settings you chose for the left and right margins, column spacing, or
	  paragraph indents are too large for the page width in some sections.
	
	When one of the following occurs:
	
	  When you change the page orientation from landscape to portrait.
	
	  -or-
	
	  When you change the paper size of your document. For example, when you change
	  the paper size from Letter 8 1/2 x 11.0 to Executive 7 1/4 x 10 1/2.
	
	CAUSE
	=====
	
	When you use the Columns button on the Standard toolbar, the "Equal column
	width" option is not set. This option forces Word to maintain the same width
	columns based on the size and orientation of the page. When this option is not
	set, Word may not recalculate the page layout information correctly when you
	change the orientation or page size.
	
	NOTE: This problem does not occur when you use the Columns command on the Format
	menu. When you use the Columns command on the Format menu, the "Equal column
	width" option is set by default, thus the page layout information is correctly
	changed when you change the orientation or page size.
	
	WORKAROUND
	==========
	
	To work around this problem, set the columns to an equal width by the following
	steps:
	
	1. On the Format menu, click Columns.
	
	2. Click the box for Equal Column Width and then click OK.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbdta kblayout 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
