---
layout: page
title: "Q185824: WD97: Selected Paragraph Marks Not Removed When Deleted"
permalink: /kb/185/Q185824/
---

## Q185824: WD97: Selected Paragraph Marks Not Removed When Deleted

	Article: Q185824
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 08-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you select and delete some of the text and the paragraph mark of a
	paragraph, the paragraph mark is not deleted, and the remaining text of the
	edited paragraph does not merge with the following paragraph.
	
	CAUSE
	=====
	
	Word preserves the formatting of text and paragraphs when the following
	conditions are true:
	
	- The selected text has a different paragraph style (or different paragraph
	  formatting) applied than the following paragraph.
	
	  -and-
	
	- The "Use smart cut and paste" check box is selected (on the Tools menu, click
	  Options, and then click the Edit tab).
	
	WORKAROUND
	==========
	
	Use one of the following methods to work around this problem:
	
	Method 1: Delete the Text Before Deleting the Paragraph Mark
	------------------------------------------------------------
	
	Select and delete just the unwanted text of the paragraph, and then select and
	delete the unwanted paragraph mark. When you delete the unwanted paragraph mark,
	the following paragraph acquires the style or paragraph formatting of the edited
	paragraph.
	
	Method 2: Clear the "Use Smart Cut and Paste" Option
	----------------------------------------------------
	
	If you want the paragraphs to be merged automatically when the selection is
	deleted, clear the "Use smart cut and paste" check box. To do this, use the
	following steps:
	
	1. On the Tools menu, click Options, and then click the Edit tab.
	
	2. Click to clear the "Use smart cut and paste" check box.
	
	3. Click OK.
	
	Now when you delete the selection, the following paragraph acquires the style or
	paragraph formatting of the edited paragraph.
	
	MORE INFORMATION
	================
	
	This behavior does not occur when the text selection (selected text and
	paragraph mark) and the following paragraph have the same style or paragraph
	formatting. When you delete the selection, the entire selection, including the
	paragraph mark and its line break, is removed. The paragraph following the text
	selection moves up to where the selection began. In this case, the "Use smart
	cut and paste" option has no effect.
	
	This behavior does not occur if the selection includes only the paragraph mark.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
