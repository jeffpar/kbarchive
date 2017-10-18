---
layout: page
title: "Q300466: FP: Clicking Reset on Search Results Page Does Not Clear Form"
permalink: kb/300/Q300466/
---

## Q300466: FP: Clicking Reset on Search Results Page Does Not Clear Form

	Article: Q300466
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 15-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2002 
	- Microsoft FrontPage 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click the Reset button on a search page, the Search for text box is
	cleared. When you click the Reset button on a search results page, nothing
	happens.
	
	CAUSE
	=====
	
	This behavior occurs because the initial value of the text box on the search
	form is set to the current search value. According to the FrontPage
	specification, the search component sets the initial value on the search results
	page to the search text. Therefore, when you click the Reset button, the search
	text remains in the text box on the search results page.
	
	WORKAROUND
	==========
	
	To work around this behavior, you can reset the search form using Dynamic HTML
	(DHTML). For additional information about how to do this, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q300467 FP: How to Reset the Search Form Text Box using DHTML
	
	MORE INFORMATION
	================
	
	According to the Hypertext Markup Language (HTML) specification, the Reset
	button in an HTML form is supposed to set the value displayed in a text box back
	to its initial value.
	
	For additional information about HTML syntax, see the following World Wide Web
	Consortium (W3C) web site:
	
	  http://www.w3.org/MarkUp/
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2002 kbFrontPage2000Search kbFrontPage2002Search kbZNotKeyword5
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
