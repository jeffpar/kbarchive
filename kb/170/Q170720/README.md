---
layout: page
title: "Q170720: WD97: Saving as HTML Removes Hyperlink &quot;Target&quot; Tag"
permalink: kb/170/Q170720/
---

## Q170720: WD97: Saving as HTML Removes Hyperlink &quot;Target&quot; Tag

	Article: Q170720
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Word, when you open and save an HTML document that contains
	hyperlinks, Word strips out the optional "Target" tag and value if the document
	is saved from online layout view.
	
	For example, the following hyperlink with the Target property
	
	  <A HREF = "HTTP://WWW.MICROSOFT.COM/SUPPORT/" TARGET = "_TOP">Link
	  Text</A>
	
	will be saved in HTML as:
	
	  <A HREF = "HTTP://WWW.MICROSOFT.COM/SUPPORT/">Link Text</A>
	
	CAUSE
	=====
	
	The Target tag allows a hyperlink to be opened in a specific frame. Because Word
	97 does not support HTML frames, Word removes the TARGET= portion of the
	hyperlink text.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- To retain the Target tag property, edit and save the document in HTML Source
	  view.
	
	  -or-
	
	- To preserve hyperlinks containing the target property, use the following
	  steps before you edit the HTML document in online layout view in Word 97.
	
	  Step 1: Change the Hyperlinks to Comments
	  -----------------------------------------
	
	  a. Start Word 97, and open the HTML document.
	
	  b. On the View menu, click HTML Source.
	
	  c. In HTML Source view, on the Edit menu, click Replace.
	
	  d. In the Find What box, type "<A HREF" (without the quotation marks).
	
	  e. In the Replace With box, type "<!-- <A HREF" (without the quotation
	     marks).
	
	  f. Click Replace All.
	
	  g. In the Find What box, type "</A>" (without the quotation marks).
	
	  h. In the Replace With box, type "</A> -->" (without the quotation
	     marks).
	
	  i. Click Replace All.
	
	  j. On the File menu, click Save.
	
	  k. Click the Exit HTML Source toolbar button.
	
	  Step 2: Make Your Changes in Online Layout View
	  -----------------------------------------------
	
	  After you have changed the hyperlinks in your HTML document to comments, you
	  can make changes to your HTML document in online layout. After you have
	  finished editing the HTML document, save the document and then follow the
	  procedure in Step 3 to restore your hyperlinks.
	
	  When the hyperlinks are commented out, they appear as hidden text. (To see
	  hidden text, click the Show/Hide button on the Standard toolbar.)
	
	Step 3: Restore the Hyperlinks
	------------------------------
	
	  a. In Word 97, open your HTML Document.
	
	  b. On the View menu, click HTML Source.
	
	  c. In HTML Source view, on the Edit menu, click Replace.
	
	  d. In the Find What box, type "<!-- <A HREF" (without the quotation
	     marks).
	
	  e. In the Replace With box, type "<A HREF" (without quotation marks).
	
	  f. Click Replace All.
	
	  g. In the Find What box, type "</A> -->" (without the quotation
	     marks).
	
	  h. In the Replace With box, type "</A>" (without the quotation marks).
	
	  i. Click Replace All.
	
	  j. On the File menu, click Save.
	
	  k. Click the Exit HTML Source toolbar button.
	
	Following these steps allows you to safely edit your HTML documents in Word 97
	while maintaining hyperlinks with the Target property.
	
	Additional query words: 8.0 ia internet assistant
	
	======================================================================
	Keywords          : winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
