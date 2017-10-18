---
layout: page
title: "Q165406: WD97: HTML Page w/Style Tag Doesn't Display in Internet Explorer"
permalink: kb/165/Q165406/
---

## Q165406: WD97: HTML Page w/Style Tag Doesn't Display in Internet Explorer

	Article: Q165406
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save a Word 97 document that contains a style (<STYLE>) tag using
	the Hypertext Markup Language (HTML) converter, the contents of the page may be
	not visible when you view the page using Microsoft Internet Explorer version
	3.0x. The page may be displayed correctly in other Web browsers.
	
	CAUSE
	=====
	
	When Word converts the document to HTML, it adds a space inside the closing
	style tag </STYLE> between the tag name and the closing bracket. Internet
	Explorer does not interpret the tag correctly.
	
	
	WORKAROUND
	==========
	
	To correct the problem, remove the space from the closing style tag:
	
	1. Start Word, and open your HTML document.
	
	2. On the View menu, click HTML Source.
	
	3. Find the closing style tag. It looks like this:
	
	  </Style >
	
	  NOTE: The space appears between the tag name and the closing bracket.
	
	4. Delete the space so that the tag looks like this:
	
	  </Style>
	
	5. On the HTML toolbar, click Exit HTML Source. When you are asked to save
	  changes, click Yes.
	
	You will now be able to see the page in Microsoft Internet Explorer 3.0x. If you
	use Word to make additional changes to the HTML document, then when you save the
	file, Word will save the </Style> tag incorrectly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The <STYLE> element in the HTML language is used to link to style sheet
	information. Style sheets allow you to separate presentation definitions from
	content in HTML documents. Style sheets are very similar to the templates used
	in Microsoft Word.
	
	Additional query words: 97 8.0
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
