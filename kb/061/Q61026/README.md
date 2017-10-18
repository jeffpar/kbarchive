---
layout: page
title: "Q61026: WD97: Unable to Remove Gap Between Heading and Following Text"
permalink: kb/061/Q61026/
---

## Q61026: WD97: Unable to Remove Gap Between Heading and Following Text

	Article: Q61026
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
	
	When you type a heading in a very large point size, a large space is left under
	the letters for descending characters. Any text on subsequent lines is forced
	down below this descender space, regardless of the line spacing you choose.
	
	If you set the line spacing to an absolute number by typing a negative number in
	the Spacing box of the Paragraph dialog box, the space that is limited is on the
	top of the text, not the space left for descenders of that text.
	
	WORKAROUND
	==========
	
	To solve this problem, use the Table feature. By using a table to reduce the
	size of the descender area, you can place text immediately under characters with
	large point sizes.
	
	To reduce the size of the descender area, follow these steps
	
	1. On the Table menu, click Insert Table to create a one-column table with two
	  rows.
	
	2. Place the large heading in the first row and the smaller type in the second
	  row.
	
	3. Click in the first cell and click Cell Height And Width on the Table menu.
	
	4. Click to select the Row tab and set the Height Of Row to Exactly.
	
	5. In the At box, type the number of the font size in the selected row, and then
	  click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	When you enter information into the table, the cells resemble the following:
	
	  ------------------------------
	  |       40-point type        |
	  |  (large descender space)   |
	  ------------------------------
	  |        9-point type        |
	  ------------------------------
	
	After you change the minimum row height for the top cell in this example to -40,
	the cells resemble the following:
	
	  ------------------------------
	  |       40-point type        |
	  ------------------------------
	  |        9-point type        |
	  ------------------------------
	
	The descender space will be removed, and the 9-point type appears immediately
	under the 40-point type.
	
	Additional query words: talbes
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
