---
layout: page
title: "Q200903: FP98: Allow Scripts or Programs to be run is Unavailable"
permalink: /kb/200/Q200903/
---

## Q200903: FP98: Allow Scripts or Programs to be run is Unavailable

	Article: Q200903
	Product(s): Word Front Page
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 01-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you make a folder in a FrontPage Web executable, you notice that the Allow
	Scripts or Programs To Be Run option in not available (it is grayed out).
	
	MORE INFORMATION
	================
	
	This can occur if you have a disk-based-web open in FrontPage Explorer. You will
	need to host this web on a Web server to have the option.
	
	NOTE: The NoexecutableCgiUpload=1 parameter in the frontpg.ini file could also
	cause this problem.
	
	To find out if you have a disk-based-web open, follow these steps:
	
	1. On the Tools menu in FrontPage Explorer, click Web Settings.
	
	2. On the Configuration tab, you will notice a file location path. If this path
	  starts with a drive letter, you have a disk-based-web open. A server-based
	  web will have a Web server path with http://.
	
	For additional information about creating new FrontPage webs, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q176134 FP98: How to Create a New Web in Microsoft FrontPage 98
	
	For additional information about disk-based webs, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q173437 FP98: Some FrontPage Components Do Not Work on Disk-Based Webs
	
	Additional query words: asp
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch _IKkbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3
	Version           : WINDOWS:
	Issue type        : kbinfo
	
	=============================================================================
	
