---
layout: page
title: "Q198126: WD97: Table of Contents Wraps in Online Layout View"
permalink: kb/198/Q198126/
---

## Q198126: WD97: Table of Contents Wraps in Online Layout View

	Article: Q198126
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97 kblayout
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you view a table of contents in online layout view, the page numbers may be
	wrapped to the next line.
	
	CAUSE
	=====
	
	When a table of contents is created, a right-aligned tab is set at the right
	margin. By design, online layout view uses left and right margins of 1.25 inches
	and ignores the actual margins set for the document. If the margins in your
	document are set smaller than 1.25, the table of contents may wrap when you view
	it in online layout view.
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods.
	
	Method 1: Turn on Wrap To Window
	--------------------------------
	
	In online layout view, select the Wrap To Window option to keep the table of
	contents from wrapping. To turn on the Wrap To Window option, follow these
	steps:
	
	1. On the Tools menu, click Options.
	
	2. On the View tab, click Wrap To Window.
	
	3. Click OK.
	
	NOTE: If Document Map is turned on (on the Edit menu, click Document Map), you
	may have to resize the Document Map window after selecting Wrap To Window to
	keep the table of contents from wrapping.
	
	Method 2: Set a minimum size for text displayed in online layout
	----------------------------------------------------------------
	
	While in online layout view, you can set a minimum font size to ensure that your
	document is always legible on the screen.
	
	To set a minimum font size, follow these steps:
	
	1. On the View menu, click Online Layout.
	
	2. On the Tools menu, click Options, and then click the View tab.
	
	3. In the "Enlarge fonts less than" box, enter the minimum font size you want.
	
	4. Click OK.
	
	If these methods do not work, your document may have formatting that makes it
	impossible to keep the table of contents from wrapping in online layout view.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q161667 WD97: Tab Spacing Incorrect in Online Layout View
	
	MORE INFORMATION
	================
	
	For more information about viewing a document in online layout view, click the
	Office Assistant, type "Online Layout," click Search, and then click to view
	"Troubleshoot viewing documents."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Help is not installed on your computer, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words:
	
	======================================================================
	Keywords          : word97 kblayout 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
