---
layout: page
title: "Q170122: FP: Opening Web Generates Out of Date Text Index Warning"
permalink: /kb/170/Q170122/
---

## Q170122: FP: Opening Web Generates Out of Date Text Index Warning

{% raw %}

	Article: Q170122
	Product(s): Word Front Page
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbdta
	Last Modified: 22-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q193956.
	
	SYMPTOMS
	========
	
	In Microsoft FrontPage, when you open a Web that contains a WebBot Search
	component, you receive the following message:
	
	  This FrontPage web contains an out of date text index. Recalculate content
	  for this web? (This may take several minutes).
	
	
	RESOLUTION
	==========
	
	Click OK to recalculate the content and disable the warning message using the
	following steps:
	
	1. On the Tools menu, click Options, and then click the General tab.
	
	2. Click to clear the "Warn when text index is out of date" check box.
	
	3. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The Customer Support, Discussion, and Project Web templates contain WebBot
	Search components that generate this message. The Corporate Presence Wizard has
	the option to include a WebBot Search component which, if selected, will also
	generate this message.
	
	Additional query words: recalculate hyperlinks
	
	======================================================================
	Keywords          : kberrmsg kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword kbFrontPage97Search kbFrontPageMac kbZNotKeyword3 kbFrontPageMacSearch
	Version           : :1.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
