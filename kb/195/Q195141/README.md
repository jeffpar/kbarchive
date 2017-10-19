---
layout: page
title: "Q195141: WD97: Soft Page Breaks Appear Misplaced in Tables in Normal View"
permalink: /kb/195/Q195141/
---

## Q195141: WD97: Soft Page Breaks Appear Misplaced in Tables in Normal View

	Article: Q195141
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbdta winword word97 kbtable
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Page breaks in a Word for Windows table in Normal view may not appear as
	expected. Sometimes the page break appears at the sides of the table, and
	sometimes it appears within one or more of the row cells only.
	
	CAUSE
	=====
	
	This behavior depends upon whether there are multiple lines within a table cell
	at the page break and whether "Allow row to break across pages" has been
	selected for the particular row of the table. To find this setting, do the
	following:
	
	1. On the Table menu, click Cell Height and Width, and then select the Row tab.
	
	2. Under Indent from Left, select or clear the "Allow row to break across pages"
	  check box.
	
	MORE INFORMATION
	================
	
	NOTE: In the following examples, the page break is indicated with a dotted line
	(.....).
	
	Example of a table where the page break occurs within an empty row:
	
	    |                            |                            |
	     ---------------------------------------------------------
	    |                            |                            |
	..... ---------------------------------------------------------...........
	    |                            |                            |
	     ---------------------------------------------------------
	    |                            |                            |
	
	Examples of a table where the page break occurs within a row containing one
	paragraph of text:
	
	    |                                                         |
	     ---------------------------------------------------------
	    | This is sample text this is|                            |
	    | sample text this is sample |                            |
	    | text this is sample text   |                            |
	    |............................|                            |
	    | this is sample text this is|                            |
	    | sample text this is sample |                            |
	     ---------------------------------------------------------
	    |                                                         |
	
	  -or-
	
	    |                            |                            |
	     ---------------------------------------------------------
	    |                            | This is sample text this is|
	    |                            | sample text this is sample |
	    |                            | text this is sample text   |
	    |                            |............................|
	    |                            | this is sample text this is|
	    |                            | sample text this is sample |
	     ---------------------------------------------------------
	    |                            |                            |
	
	  -or-
	
	    |                            |                            |
	     ---------------------------------------------------------
	    | This is sample text this is| This is sample text this is|
	    | sample text this is sample | sample text this is sample |
	    | text this is sample text   | text this is sample text   |
	    |............................|............................|
	    | this is sample text this is| this is sample text this is|
	    | sample text this is sample | sample text this is sample |
	     ---------------------------------------------------------
	    |                            |                            |
	
	Examples of a table where the page break occurs in a row containing multiple
	paragraphs:
	
	    |                                                         |
	     ---------------------------------------------------------
	    | This is sample paragraph.  |                            |
	    | This is sample paragraph.  |                            |
	    | This is sample paragraph.  |                            |
	    |............................|                            |
	    | This is sample paragraph.  |                            |
	    | This is sample paragraph.  |                            |
	     ---------------------------------------------------------
	    |                                                         |
	
	  -or-
	
	    |                            |                            |
	     ---------------------------------------------------------
	    |                            | This is sample paragraph.  |
	    |                            | This is sample paragraph.  |
	    |                            | This is sample paragraph.  |
	    |                            |............................|
	    |                            | This is sample paragraph.  |
	    |                            | This is sample paragraph.  |
	     ---------------------------------------------------------
	    |                            |                            |
	
	  -or-
	
	    |                            |                            |
	     ---------------------------------------------------------
	    | This is sample paragraph.  | This is sample paragraph.  |
	    | This is sample paragraph.  | This is sample paragraph.  |
	    | This is sample paragraph.  | This is sample paragraph.  |
	    |............................|............................|
	    | This is sample paragraph.  | This is sample paragraph.  |
	    | This is sample paragraph.  |                            |
	     ---------------------------------------------------------
	    |                            |                            |
	
	Additional query words:
	
	======================================================================
	Keywords          : kbualink97 kbdta winword word97 kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
