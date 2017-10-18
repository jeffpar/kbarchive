---
layout: page
title: "Q181617: WD97: How to Create Multiple Tables of Contents in Same Document"
permalink: kb/181/Q181617/
---

## Q181617: WD97: How to Create Multiple Tables of Contents in Same Document

	Article: Q181617
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfield
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to create more than one table of contents in one
	document using Microsoft Word 97 for Windows.
	
	MORE INFORMATION
	================
	
	To create more than one table of contents, follow these steps:
	
	1. Create a separate bookmark for each section of the document for which you
	  want to create a table of contents. To create the bookmark:
	
	  a. Select the entire section and then click Bookmark on the Insert menu.
	
	  b. In the Bookmark Name text box, type a name for the bookmark, for example
	     "part1" (without the quotation marks), and then click Add.
	
	2. Repeat step 1 for each section of the document for which you want to build a
	  separate table of contents.
	
	3. If you will be generating the table of contents based on the built-in heading
	  styles, then apply the styles as required. If you will be generating the
	  table of contents with other styles, then apply those styles as required.
	
	4. If you will be using TC fields to generate the table of contents, then mark
	  the text that you want to include in the table as follows:
	
	  a. Select the text that you want to include and then press ALT+SHIFT+O.
	
	     The Mark Table of Contents Entry box will appear.
	
	  b. To assign a different indent level to the text, change the number in the
	     level box.
	
	  c. Choose Mark when you're done.
	
	  Word will create a TC field in the document that contains the text that you
	  selected. Note that you can also insert a TC field in your document by
	  clicking Field on the Insert menu. Under Categories, click Index And Tables,
	  click TC under Fields, and then type the desired text.
	
	5. To create the Table of Contents for the first section that you bookmarked,
	  follow these steps:
	
	  a. Place the insertion point where you want the table of contents for that
	     section to appear.
	
	  b. On the Insert Menu, click Field. In Categories select Index and Tables,
	     and then under Field names, select TOC, and then click Options to bring up
	     the Field Options dialog box.
	
	  c. Choose the \b switch and click Add to Field, and then type in the bookmark
	     name after the switch. For example "TOC \b part1" (without the quotation
	     marks). Click OK twice.
	
	     Word will default to building the table of contents based on the built-in
	     heading styles if no other switches are added to the field.
	
	  d. The following are examples of some other switches that can be added to the
	     field:
	
	  \f builds a TOC using TC field entries
	  \t builds a TOC using other Style names
	  \o builds a TOC using Heading Styles (outline levels)
	
	  NOTE: If you want to build the TOC using Heading styles as well as TC fields
	  or other Styles, then you must add the \o switch as well as the \f and \t
	  switches.
	
	6. Repeat steps 3-5 for each section of the document for which you want to
	  create a separate table of contents.
	
	For more information about table of contents fields, click Contents And Index on
	the Help menu, click the Index tab in Word Help, type the following text
	
	  fields, index
	
	and then double-click the selected text to go to the "Use field codes for
	indexes, tables of contents, or other tables" topic. If you are unable to find
	the information you need, ask the Office Assistant.
	
	This procedure can also be used to create multiple indexes or tables of
	authority.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q154025 WD: How to Have More Than One Index in a Document
	
	Additional query words: 8.00 table tables contents many
	
	======================================================================
	Keywords          : kbfield 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
