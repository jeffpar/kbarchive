---
layout: page
title: "Q180023: WD97: Some Menu Commands Unavailable (Document Protection)"
permalink: kb/180/Q180023/
---

## Q180023: WD97: Some Menu Commands Unavailable (Document Protection)

	Article: Q180023
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under certain conditions, you may be unable to access all of the commands in
	Word, or you may be unable to move the insertion point to certain areas of the
	document.
	
	NOTE: Unavailable menu commands appear grayed or dimmed on the Word menus.
	Keyboard commands that edit or format text and graphics are also unavailable.
	
	CAUSE
	=====
	
	This problem may occur if document protection is enabled. The "More Information"
	section of this document lists commands that are unavailable when document
	protection is enabled.
	
	NOTE: It is possible to customize all of the menus, keyboard commands, and so
	forth, with AutoNew macros. Also, add-in products (such as Microsoft Internet
	Explorer or Microsoft Bookshelf) modify menu choices.
	
	Customization may also produce the behavior described in the "Symptoms" section
	of this article.
	
	WORKAROUND
	==========
	
	To gain access to all of the menu commands and areas of a document, unprotect
	the document.
	
	To unprotect a document, click Unprotect Document on the Tools menu.
	
	MORE INFORMATION
	================
	
	To protect a Word document for Tracked Changes, Comments, or Forms, follow these
	steps:
	
	1. On the Tools menu, click Protect Document.
	
	2. Click either Tracked Changes, Comments, or Forms, and then click OK.
	
	The following lists which commands are unavailable when your document is
	protected:
	
	Protected for Forms in a Protected Section
	------------------------------------------
	
	  Menu           Unavailable
	  ------------------------------------------------------------------------
	
	  File           Page Setup
	
	                 NOTE: Properties is available; however, you cannot make
	                 changes to the document properties as they are
	                 unavailable.
	
	  Edit           All commands are unavailable except Cut, Copy, Paste,
	                 Clear, Go To.
	
	  View           Outline, Master Document, Header And Footer, Footnotes,
	                 Comments
	
	  Insert         All commands are unavailable except AutoText, Picture
	
	  Format         All commands are unavailable except Background
	
	                 NOTE: Background is available; however, the options under
	                 Background are not available.
	
	  Tools          All commands are unavailable except Language,
	                 AutoCorrect, Track Changes, Unprotect Document, Macro,
	                 Options
	
	  Table          All commands are unavailable except Hide/Show Gridlines
	
	Protected for Forms in an Unprotected Section
	---------------------------------------------
	
	  Menu           Unavailable
	  -----------------------------------------------------------------------
	
	  File           Page Setup
	
	                 NOTE: Properties is available; however, you cannot make
	                 changes to the document properties as they are
	                 unavailable.
	
	  Edit           All commands are unavailable except Repeat, Paste,
	                 Paste Special, Clear, Find, Replace, Go To
	
	  View           Outline, Master Document, Header And Footer, Footnotes,
	                 Comments
	
	  Insert         Page Numbers, Comment, Footnote, Caption,
	                 Cross-Reference, Index And Tables, Text Box, Bookmark
	
	  Format         Bullets And Numbering, Borders And Shading, Drop Cap,
	                 Text Direction, AutoFormat, Style Gallery,
	                 Format AutoShape/Picture
	
	                 NOTE: Background is available, however the options under
	                 Background are not available.
	
	  Tools          Word Count, AutoSummarize, Merge Documents, Mail Merge,
	                 Envelopes And Labels, Letter Wizard, Templates And
	                 Add-Ins, Customize
	
	  Table          All commands are available as in a normal Word document.
	                 If no table is selected in the unprotected section, then
	                 only Insert Table, Formula, and Hide/Show Gridlines are
	                 available.
	
	                 If a table is selected in an unprotected section, then
	                 all commands are available except Draw Table and Sort.
	
	Protected for Tracked Changes
	-----------------------------
	
	  Menu           Unavailable
	  -----------------------------------------------------------------------
	
	  File           All commands are available
	
	                 NOTE: Properties is available; however, you cannot make
	                 changes to the document properties as they are
	                 unavailable.
	
	  Edit           Paste As Hyperlink, Links
	
	  View           Footnotes, Comments
	
	  Insert         All commands are available
	
	  Format         Text Direction
	
	  Tools          All commands are available
	
	  Table          If no table is selected, then only Draw Table, Insert
	                 Table, Sort, Formula, Hide/Show Gridlines are available.
	
	                 If a table is selected, then all commands are available.
	
	Protected for Comments
	----------------------
	
	  Menu           Unavailable
	  -----------------------------------------------------------------------
	
	  File           Page Setup
	
	                 NOTE: Properties is available; however, you cannot make
	                 changes to the document properties as they are
	                 unavailable.
	
	  Edit           All commands are unavailable except Repeat, Copy,
	                 Select All, Find, Replace, Go To
	
	  View           Footnotes, Comments
	
	  Insert         All commands are unavailable except AutoText, Comment,
	                 Picture
	
	  Format         All commands are unavailable except Background
	
	                 NOTE: Background is available; however, the options under
	                 Background are not available.
	
	  Tools          Spelling And Grammar, Word Count, AutoSummarize, Mail
	                 Merge, Envelopes And Labels, Letter Wizard
	
	  Table          If no table is selected, then only Hide/Show Gridlines
	                 is available.
	
	                 If a table is selected, then all commands are unavailable
	                 except Select Row, Select Column, Select Table, Headings,
	                 Hide/Show Gridlines
	
	Additional query words: dim dimmed grey greyed gray grayed out not available disabled
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
