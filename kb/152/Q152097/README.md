---
layout: page
title: "Q152097: FP: Files in Discussion Web Are Overwritten"
permalink: /kb/152/Q152097/
---

## Q152097: FP: Files in Discussion Web Are Overwritten

{% raw %}

	Article: Q152097
	Product(s): Word Front Page
	Version(s): windows:1.1,97
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194245.
	
	SYMPTOMS
	========
	
	When you add a new discussion Web to the current Web, the files of the first
	discussion Web are overwritten.
	
	CAUSE
	=====
	
	The Discussion Web Wizard creates the names of the pages using an algorithm that
	uses the name of the discussion group entered in the wizard. If both of your
	discussion Webs have similar names, the files of the first discussion Web may be
	overwritten. This problem occurs only if both discussion Webs are created in the
	same Web.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1
	--------
	
	Create your second discussion web in a separate subweb. Doing this removes all
	possibility of conflict.
	
	Method 2
	--------
	
	If you want both discussion webs to reside in the same Web, make sure that the
	first four characters of each discussion group are unique. You can do this by
	making sure that either the first four characters of the discussion title are
	different, or by making sure that the title contains two or more words separated
	by spaces.
	
	
	Additional query words: Front Page 97
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage110
	Version           : windows:1.1,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
