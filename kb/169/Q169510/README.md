---
layout: page
title: "Q169510: FP: How to Set Up a Multilingual Web in FrontPage"
permalink: /kb/169/Q169510/
---

## Q169510: FP: How to Set Up a Multilingual Web in FrontPage

{% raw %}

	Article: Q169510
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194087.
	
	SUMMARY
	=======
	
	This article describes how to set up a multilingual Web so that visitors to your
	Web can view your content in their choice of language, such as English, Spanish,
	or German.
	
	MORE INFORMATION
	================
	
	To set up a multilingual web in FrontPage Explorer, follow these steps:
	
	1. Set up the default home page in the <Root Web>.
	
	2. Create a subweb for each language you want.
	
	3. Set the default language property and HTML encoding for each subweb. To do
	  this, follow these steps:
	
	  a. On the Tools menu, click Web Settings.
	
	  b. Click the Language tab.
	
	  c. From the Default Web Language list, select the language you want to use.
	
	  d. From the Default HTML Encoding list, select the type of HTML encoding you
	     want. Click Apply.
	
	  e. Click OK.
	
	  If your FrontPage web is hosted on a supported UNIX web server, you are done.
	  If not, go to step 4.
	
	4. On the FrontPage compact disc, open the \frontpg\misc folder. There are five
	  *.msg files in this folder--one for each language. Copy the *.msg file you
	  want to use to the <frontpageroot>\version2.0\bin folder on the hard
	  disk.
	
	For more information about subwebs, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q148414 FP: How to Add Subwebs and Create Links to Subwebs
	
	Additional query words: 97 bilingual german japanese italian french language
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97Search kbZNotKeyword3
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
