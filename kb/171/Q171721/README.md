---
layout: page
title: "Q171721: FP: Reset Button on Search Results Page Does Not Clear Form"
permalink: /kb/171/Q171721/
---

## Q171721: FP: Reset Button on Search Results Page Does Not Clear Form

{% raw %}

	Article: Q171721
	Product(s): Word Front Page
	Version(s): windows:97, macintosh:1.0
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194415.
	
	SYMPTOMS
	========
	
	When you click the Reset button on a search results page, nothing happens.
	
	CAUSE
	=====
	
	This behavior occurs when you enter search criteria, click Search on the form,
	and then click Reset on the results page. This behavior does not occur on the
	search form.
	
	The Search component sets the default value for the search results page to the
	query text. Therefore, when you click Reset, the query text remains in the text
	box on the search results page. This functionality was implemented to inform you
	about your query.
	
	NOTE: When you use the Search component, you cannot set the default value that
	appears in the text box.
	
	When you create an HTML page, you can specify default values for form fields.
	Clicking Reset on a form field resets the form fields to their default values.
	When you load a form for the first time, the search field is blank. If you type
	some text in the search field and then click Reset, the search field no longer
	contains your search text (it is blank). When you type text in the search field
	and then click Search, the search results page contains the query string. In
	other words, when the page is loaded, it contains the query string as the
	default value for the form field. Clicking Reset does not delete the search
	string from the search results page.
	
	Additional query words: 97 fp97
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : windows:97, macintosh:1.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
