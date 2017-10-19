---
layout: page
title: "Q258947: WD97: List Item Format Is Not Carried to Next List Item"
permalink: /kb/258/Q258947/
---

## Q258947: WD97: List Item Format Is Not Carried to Next List Item

	Article: Q258947
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you apply formatting to a portion of a list item, Word may not apply
	identical formatting to the second and consecutive items in the list.
	
	For example, in the following list, the first sentence of the first list item is
	bold, and the second sentence is italicized. When you press ENTER and type the
	next list item, the first sentence of the list item is bold, but the second
	sentence is not italicized:
	
	1. This is bold.<A0>This is italic.
	
	2. This is bold.<A0>This is italic.
	
	NOTE: This problem occurs for either numbered or bulleted lists.
	
	
	WORKAROUND
	==========
	
	To work around this problem, after you type the second list item (where the
	formatting does not appear correctly), move the insertion point back to the end
	of the first list item, and then press ENTER. The correct formatting is then
	applied to the new second list item and successive list items when you press
	ENTER. After the list is complete, manually apply the correct formatting to the
	second sentence of the last list item.
	
	NOTE: For automatic lists and formatting to occur in a bulleted or numbered list,
	be sure the automatic list and "Format beginning of list item like the one
	before it" options are selected on the AutoFormat As You Type tab. To do this,
	follow these steps:
	
	1. On the Tools menu, click AutoCorrect.
	
	2. On the "AutoFormat As You Type" tab, make sure the automatic list options are
	  selected. For example, click to select Automatic numbered lists or Automatic
	  bulleted lists or both.
	
	3. Also on the "AutoFormat As You Type" tab, make sure the "Format beginning of
	  list item like the one before it" check box is selected.
	
	4. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For more information about how to create bulleted or numbered lists, click
	"Contents and Index" on the Help menu, click the Index tab in Word Help, type
	the following text
	
	  lists, bullets and numbers
	
	and then double-click the selected text to go to the "Add bullets or numbers to
	lists" topic. If you are unable to find the information you need, ask the Office
	Assistant.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
