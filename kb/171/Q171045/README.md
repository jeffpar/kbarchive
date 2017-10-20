---
layout: page
title: "Q171045: FP97: Inserted Form Field Defaults to New Line"
permalink: /kb/171/Q171045/
---

## Q171045: FP97: Inserted Form Field Defaults to New Line

{% raw %}

	Article: Q171045
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194053.
	
	SYMPTOMS
	========
	
	When you insert a form field, the form field is repositioned on a new line
	rather than remaining on the same line as preceding text.
	
	CAUSE
	=====
	
	This behavior occurs because a form field must reside in a form. When you insert
	a form field, FrontPage inserts a line break and creates the form area that
	spans the entire width of the page. If you attempt to insert a form field after
	having typed your text, the form is created below the line of text. This
	behavior is by design.
	
	RESOLUTION
	==========
	
	After you add the form field, place the text inside the form. To do this, follow
	these steps:
	
	1. Select the text you want to move into the form.
	
	2. On the Edit menu, click Cut.
	
	3. Place the insertion point to the left of the form field and then click Paste
	  on the Edit menu.
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
