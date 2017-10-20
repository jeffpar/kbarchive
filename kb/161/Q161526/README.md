---
layout: page
title: "Q161526: FP97: Heading Style Ignored in Converted Word Document"
permalink: /kb/161/Q161526/
---

## Q161526: FP97: Heading Style Ignored in Converted Word Document

{% raw %}

	Article: Q161526
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbdta
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194213.
	
	MORE INFORMATION
	================
	
	When the Microsoft Word to HTML converter translates a Microsoft Word document
	to HTML, the font tags are added to each paragraph so that the Word document
	looks the same in a browser as it does in the Word program.
	
	For information about the HTML markup language, see the HTML specification at the
	following World Wide Web site:
	
	  http://www.w3.org/MarkUp/
	
	SYMPTOMS
	========
	
	When you open a document in FrontPage Editor that was created in Microsoft Word,
	the format of the converted text does not change when you apply heading style
	formatting to the text.
	
	CAUSE
	=====
	
	The default font in Microsoft Word for Windows 95 version 7.0 is 10-point Times
	New Roman. When you format a Word document in a font other than the default font
	(for example, 12-point Times New Roman), and convert the file to HTML, the HTML
	converter encloses the text in the <font>...</font> tags, like
	this:
	
	     <font face=Arial size=10>text</font>
	
	If you then open the file in FrontPage Editor and apply a Heading 1 style,
	FrontPage encloses the text in the <H1>...</H1> tags, like this
	
	     <H1><font face=Arial size=10>text</font></H1>
	
	causing the font tags to be nested inside the heading tags. When this happens,
	the heading tags are ignored.
	
	WORKAROUND
	==========
	
	If you want to apply a style to a converted Word document, follow these steps:
	
	1. Select the text.
	
	2. From the the Style list on the Format toolbar, click Normal.
	
	3. On the Format menu, click Font. From the Font box in the Font dialog box,
	  select the font you want to use and then click OK.
	
	Additional query words: fp97 word
	
	======================================================================
	Keywords          : kbinterop kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
