---
layout: page
title: "Q200781: FP: Save Results File Name Is Accessible from HTML Source"
permalink: /kb/200/Q200781/
---

## Q200781: FP: Save Results File Name Is Accessible from HTML Source

{% raw %}

	Article: Q200781
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you create a Web page that uses the FrontPage Save Results component to
	save the information from a form to a file on the server, it is possible to
	determine the name of the file by reading the HTML source and then opening the
	file remotely via the Web browser.
	
	MORE INFORMATION
	================
	
	All of the configuration information that FrontPage uses in the Save Results
	component is encoded directly into the HTML file, as opposed to a separate
	configuration file. Anyone viewing the HTML document with a browser capable of
	viewing the HTML source can read the configuration parameters of the Save
	Results component.
	
	As a result, when you create a Save Results component in an HTML file,
	unauthorized browsers can read the file name of the file containing your
	results.
	
	When you use a Save Results component to store sensitive information from a
	publicly viewable Web page, Microsoft recommends storing the results file in a
	hidden directory. Although storing files in the _private folder does not make
	them inaccessible, it prevents these pages or their contents from being found
	using search capabilities in FrontPage.
	
	Hidden directories are directories that begin with an underscore "_" character.
	These directories can be named anything such as "_vbscript", "_sample",
	"_hidden", and so on.
	
	Additional query words: 97 save results bot component file view
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
