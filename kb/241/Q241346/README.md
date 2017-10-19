---
layout: page
title: "Q241346: Compaq Array Configuration Tool May Not Work on Terminal Server"
permalink: /kb/241/Q241346/
---

## Q241346: Compaq Array Configuration Tool May Not Work on Terminal Server

	Article: Q241346
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are configuring devices on a Fibre Array controller with the Compaq
	Array Configuration utility, you may receive the following error message:
	
	  An internal communications error has occurred when attempting to lock the
	  Compaq Fibre Array Controller in the Fibre Array <YYYYYYYYYYYYYYYYYYY>.
	  You will not be able to configure this controller until the problem is
	  corrected.
	
	CAUSE
	=====
	
	The Compaq Fibre Array system driver creates a symbolic name to be used by the
	configuration utility. Windows Terminal Server incorrectly truncates the
	symbolic name.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	version 4.0, Terminal Server Edition. For additional information, click the
	following article number to view the article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
