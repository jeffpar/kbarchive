---
layout: page
title: "Q193145: WD97: How to Have More Than One Index in a Document"
permalink: /kb/193/Q193145/
---

## Q193145: WD97: How to Have More Than One Index in a Document

{% raw %}

	Article: Q193145
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to create multiple indexes within one document. You
	may want to create multiple indexes, for example, when you need to have an index
	at the end of each section or chapter as well as at the end of your document.
	
	MORE INFORMATION
	================
	
	To create multiple indexes, use one of the following methods:
	
	- Use Method 1 to index words that you need to include in an index for separate
	  sections in a multiple-section document.
	
	- Use Method 2 if you do not have a multiple-section document but want to have
	  multiple indexes based on a certain category.
	
	Method 1
	--------
	
	Use this method to index words that you need to include in an index for separate
	sections in a multiple-section document:
	
	1. Create a bookmark for each section of the document for which you want to
	  create an index. (NOTE: Omit this step for an index for the entire document.)
	  To create the bookmark:
	
	  a. Select the entire section, and then click Bookmark on the Edit menu.
	
	  b. In the Bookmark Name text box, type a name for the bookmark, for example
	     "section1" (without quotation marks), and then click Add.
	
	  c. Repeat steps a and b for each section of the document.
	
	2. Mark the index entries. To do this, follow these steps:
	
	  a. Select the text for which you want to create the index entry.
	
	  b. On the Insert menu, click Index And Tables, and then click the Index tab.
	
	  c. Click Mark Entry. The text that you selected in step a appears in the Main
	     Entry text box in the Mark Index Entry dialog box. If you want to create a
	     sublevel index entry, type the word or phrase in the Subentry text box. To
	     include a third sublevel, type the subentry text in the Subentry box,
	     followed by a colon, followed by the word or phrase you want to use for
	     the third-level entry. Choose any other options that you want.
	
	  d. Click Mark All.
	
	     Word examines each paragraph of your document, matching it to the text that
	     you specified in the Main Entry and Subentry boxes, and inserts an XE
	     field immediately following the first occurrence of that word in each
	     paragraph.
	
	  e. Click in the document, and select the next word or phrase that you want to
	     index. NOTE: This dialog box is "modeless," which means that while the
	     dialog box is on the screen, you can click in the text area and continue
	     editing.
	
	  f. Return focus to the Mark Index Entry dialog box by clicking the dialog
	     box, and then click Mark All.
	
	  g. Repeat steps e and f for each word you want to index.
	
	3. Insert the Index Fields.
	
	  a. Position the insertion point where you want the first index, and then
	     click Field on the Insert menu.
	
	  b. In the Categories list box, select Index And Tables. In the Field Names
	     list box, choose Index.
	
	  c. Click Options.
	
	  d. In the Switches list box, select the \b switch, and then click Add to
	     Field. The \b switch specifies an area of the document for which you
	     created a bookmark. (See step 1.)
	
	  e. In the Field Codes text box, position the insertion point after the \b and
	     type the name of the bookmark that you created in step 1. For example, if
	     you created a bookmark for the first section called "Section1" (without
	     quotation marks) the Field Codes text box should resemble the following:
	
	  Index \b section1
	
	  f. Repeat steps a through e for each of the remaining sections of the
	     document.
	
	  To add an index at the end of the document, position the insertion point where
	  you want to build the index, click Index And Tables on the Insert menu, click
	  the Index tab, and then click OK.
	
	Method 2
	--------
	
	Use this method if you do not have a multiple-section document but want to have
	multiple indexes based on a certain category:
	
	1. Mark the index entries. To do this, follow these steps:
	
	  a. Select the text for which you want to create the index entry.
	
	  b. On the Insert menu, click Index and Tables, and then click the Index tab.
	
	  c. Click Mark Entry. The text that you selected in step a appears in the Main
	     Entry text box in the Mark Index Entry dialog box. If you want to create a
	     sublevel index entry, type the word or phrase in the Subentry text box. To
	     include a third sublevel, type the subentry text in the Subentry box,
	     followed by a colon, followed by the word or phrase that you want to use
	     for the third-level entry. Choose any other options that you want.
	
	  d. Click Mark All. Word examines each paragraph of your document, matching it
	     to the text that you specified in the Main Entry and Subentry boxes, and
	     inserts an XE field immediately following the first occurrence of that
	     word in each paragraph.
	
	  e. Click in the document, and select the next word or phrase that you want to
	     index. NOTE: This dialog box is "modeless," which means that while the
	     dialog box is on the screen, you can click in the text area and continue
	     editing.
	
	  f. Return focus to the Mark Index Entry dialog box by clicking the dialog
	     box, and then click Mark All.
	
	  g. Repeat steps e and f for each word that you want to index.
	
	2. You will need to manually edit the index entry fields to specify in which
	  index you want the entry to appear. The \f switch defines an entry type. For
	  example, the entry for the field { XE "Selecting Text" \f "a"} is included
	  only in an index inserted by the field { INDEX \f "a" }. The default entry
	  type is "i."
	
	  a. View field codes by pressing ALT+F9.
	
	  b. Each index entry field that you want to include in a specific index will
	     need to be marked with an identifying letter. For example all index
	     entries that you want to appear in Index "a" will be marked as:
	
	  { XE "Selecting Text" \f "a"}
	
	     All index entries that you want to appear in Index "b" will be marked as:
	
	  { XE "Selecting Text" \f "b"}
	
	3. Insert the Index Fields.
	
	  a. Position the insertion point where you want the first index, and then
	     click Field on the Insert menu.
	
	  b. In the Categories list box, select Index And Tables. In the Field Names
	     list box, select Index.
	
	  c. Click Options.
	
	  d. In the Switches list box, select the \f switch, and then click Add To
	     Field. The \f switch defines the entry type.
	
	  e. In the Field Codes text box, position the insertion point after the \f and
	     type the letter that represents the category that you created in step 1.
	     For example:
	
	  { Index \f "a"}
	
	  f. Repeat steps a through e for each index you want to create in each
	     category.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q125937 How to Create a Table of Contents or an Index with Field Codes
	
	Additional query words: many several more 8.0 8.00
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
