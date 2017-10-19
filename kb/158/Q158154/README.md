---
layout: page
title: "Q158154: WD97: Multiple Line Table Row in Text Box Won't Break"
permalink: /kb/158/Q158154/
---

## Q158154: WD97: Multiple Line Table Row in Text Box Won't Break

	Article: Q158154
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbualink97
	Last Modified: 08-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Some text in a multiple-line table row disappears in a text box.
	
	WORKAROUND
	==========
	
	Use the following methods:
	
	Method 1: Force the table row to break to the next linked text box by inserting
	additional blank lines, or removing unnecessary lines before the table.
	
	Method 2: Resize the text box and/or table to control where the table rows break.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article. Microsoft is researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	If a table row is large and expands to several lines, Microsoft Word permits
	that row to break across page breaks, if needed. When this happens, part of the
	table row would be on one page of the document and the remainder of the same
	table row would be on the next page of the document. This behavior of Word
	tables is selected by default. To check this option, select the Word table then,
	on the Table menu, click Cell Height and Width, then select the Row tab. The
	option that allows for this behavior is "Allow Row To Break Across Pages."
	
	This behavior is not supported inside Text Boxes.
	
	A single-line table row breaks from one text box to the next linked text box, as
	expected. However, a multiple-line table row does not break from one text box to
	the next linked text box until the entire table row is forced out of the current
	text box. This behavior causes a multiple-line table row to be chopped off until
	the entire table row is forced to the next linked text box.
	
	Additional query words: 97 8.0 word8 word97 split flow clipped cropped chopped cutoff
	
	======================================================================
	Keywords          : kbualink97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	
	=============================================================================
	
