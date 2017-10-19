---
layout: page
title: "Q183962: WD97: Box Border Produces Unexpected Results"
permalink: /kb/183/Q183962/
---

## Q183962: WD97: Box Border Produces Unexpected Results

	Article: Q183962
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
	
	When you select multiple, contiguous paragraphs within a Microsoft Word document
	and then apply a box border to that selection, Word will create multiple boxes
	around the paragraphs instead of around the entire selection of text.
	
	CAUSE
	=====
	
	One or more of the paragraphs has been formatted with either a left or right
	indent. This behavior is by design of Microsoft Word.
	
	WORKAROUND
	==========
	
	To place one box border around contiguous paragraphs that have different
	indentations, use one of the following methods.
	
	Method 1: Use the Drawing Toolbar
	---------------------------------
	
	To place one box border around contiguous paragraphs that have different
	indentations, follow these steps:
	
	1. On the View menu, point to Toolbars, and select Drawing to activate the
	  Drawing toolbar. By default, it will appear at the bottom of your document
	  screen.
	
	2. On the Drawing toolbar, click Rectangle and draw a box around the paragraphs
	  where you desire a box border.
	
	If the rectangle covers your text, do the following to adjust its settings:
	
	1. On the Drawing toolbar, click Draw, point to Order, and then select Send
	  Behind Text.
	
	2. Adjust its size with the sizing handles.
	
	3. Change the line width by clicking the Line Style icon on the Drawing toolbar
	  and selecting the point size of the line you want to use.
	
	Method 2: Use a Table
	---------------------
	
	To work around this problem by using a table, follow these steps:
	
	1. On the Table menu, click Insert table.
	
	2. Type 1 in the Number Of Columns in the Number Of Rows boxes, respectively.
	  Click OK.
	
	3. Copy or type the desired text inside the table cell.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q177031 WD: Box Border Incorrect When Applied to Multiple Paragraphs
	
	  Q169532 WD97: Paragraph Borders Displayed Erratically with Objects
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
