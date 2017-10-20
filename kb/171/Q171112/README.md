---
layout: page
title: "Q171112: FP: 32-bit TCP/IP Required or IPF Error Starting FP Explorer"
permalink: /kb/171/Q171112/
---

## Q171112: FP: 32-bit TCP/IP Required or IPF Error Starting FP Explorer

{% raw %}

	Article: Q171112
	Product(s): Word Front Page
	Version(s): windows:1.1,97
	Operating System(s): 
	Keyword(s): kberrmsg kbdta
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194357.
	
	SYMPTOMS
	========
	
	When you start FrontPage Explorer, you may receive either of the following error
	messages.
	
	FrontPage 97
	------------
	
	  FrontPage requires 32-bit TCP/IP networking. You do not have 32-bit TCP/IP
	  networking installed. Would you like to see help on how to install it?
	
	FrontPage 1.1
	-------------
	
	  This program has performed an illegal operation and will be shut down.
	  FPEXPLOR caused an invalid page fault in VT11UTL.DLL. FPEXPLOR caused an
	  invalid page fault in VT11WEC.DLL.
	
	CAUSE
	=====
	
	This problem occurs if Win.com is located in the root directory (for example,
	C:\).
	
	RESOLUTION
	==========
	
	Move the Win.com file to your Windows directory. The default location for this
	directory is C:\Windows.
	
	NOTE: Windows will not start if Win.com is renamed or deleted.
	
	MORE INFORMATION
	================
	
	Win.com is required to start Windows 95. If Windows 95 does not find the file in
	the Windows folder, it will look in the root directory of the drive on which
	Windows is installed.
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kberrmsg kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage110
	Version           : windows:1.1,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
