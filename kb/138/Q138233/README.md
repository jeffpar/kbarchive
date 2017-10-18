---
layout: page
title: "Q138233: FIX: Memory Leak When Scroll Database Designer in Windows 95"
permalink: kb/138/Q138233/
---

## Q138233: FIX: Memory Leak When Scroll Database Designer in Windows 95

	Article: Q138233
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbenvkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro, scrolling in the Database Designer decreases the amount of
	available System and GDI resources. If available resources fall below 10% you
	receive this message:
	
	  Ninety percent or more of your system resources are in use. To free up system
	  resources, quit any programs that you are not using. If you do not, your
	  computer may stop responding.
	
	If resources are not released and continue to fall, you receive this error
	message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	WORKAROUND
	==========
	
	Close the files you're currently working with, and restart Visual FoxPro to
	release system resources. Wherever possible, avoid scrolling in the Database
	Designer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Scroll in the Database Designer while running the Resource Meter that is
	  shipped with Windows 95. You will see the System and GDI resources decrease.
	  To find the Resource Meter, on the Start menu, click Programs, then click
	  Accessories, and click System Tools. Click Resource Meter to put an icon in
	  the lower-right corner of your screen. Double-click this icon to see the
	  Resource Meter window.
	
	2. Open the database designer and use the scroll bars to move up and down in the
	  Database Designer. The amount of memory that is lost each time you scroll
	  depends on the number of tables you have in your Database Designer window.
	
	Additional query words: VFoxWin fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          : kbenv kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
