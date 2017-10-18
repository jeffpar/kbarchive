---
layout: page
title: "Q197225: WD97: Text Larger Than Expected or Distorted in Normal View"
permalink: kb/197/Q197225/
---

## Q197225: WD97: Text Larger Than Expected or Distorted in Normal View

	Article: Q197225
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you view a document in normal view, you may notice one or more of the
	following symptoms:
	
	- Text appears slightly larger that you expect or it is out of proportion.
	
	  -or-
	
	- The number of lines in a paragraph changing as the zoom level is changed.
	
	  -or-
	
	- While the ruler is still displayed, the text no longer has any direct visual
	  relationship to it.
	
	Note, however, that the document is displayed correctly in page layout View and
	the text in the printed version of the document is as expected.
	
	CAUSE
	=====
	
	The Wrap To Window check box is selected in the Options dialog box.
	
	The Wrap To Window option allows Word to display fonts on the screen quickly.
	When this option is active, the following advanced display features are
	suppressed in normal view:
	
	- Font kerning adjustments
	
	- WYSIWYG (What You See Is What You Get)
	
	- The At and Ln measurements (these measurements do not appear on the status
	  bar)
	
	
	WORKAROUND
	==========
	
	To work around this problem, follow these steps to clear the Wrap To Window
	check box:
	
	1. On the View menu, click Normal.
	
	2. On the Tools menu, click Options.
	
	3. Click the View tab.
	
	4. Under Window, click the Wrap To Window check box to clear it.
	
	  NOTE: The Wrap To Window option is available only in normal view.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
