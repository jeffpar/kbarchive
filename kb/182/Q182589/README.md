---
layout: page
title: "Q182589: Err Msg: RNAAPP Caused an Invalid Page Fault in Module &lt;Unknown&gt;"
permalink: /kb/182/Q182589/
---

## Q182589: Err Msg: RNAAPP Caused an Invalid Page Fault in Module &lt;Unknown&gt;

	Article: Q182589
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg dun win95 kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click a Dial-Up Networking connection, you may receive one of
	the following error messages:
	
	  RNAAPP caused an invalid page fault in module <unknown>.
	
	  Msimn caused an invalid page fault in module <unknown>.
	
	CAUSE
	=====
	
	This error message can occur if Quarterdeck CleanSweep Deluxe is installed on
	your computer.
	
	RESOLUTION
	==========
	
	To work around this behavior, follow these steps:
	
	1. Click Start, click Shut Down, click Restart In MS-DOS Mode, and then click
	  OK.
	
	2. Type the following commands, pressing ENTER after each command:
	
	  " cd progra~1\quarte~1\cleans~1
	  ren csinject.exe csinject.xxx
	  exit " (without the quotation marks)
	
	NOTE: Renaming the Csinject.exe file causes Quarterdeck SmartSweep not to
	automatically start when you start Windows. You must manually start SmartSweep
	to monitor the installation of any programs using CleanSweep.
	
	MORE INFORMATION
	================
	
	For additional information about this issue, contact Quarterdeck Technical
	Support. For information about how to contact Quarterdeck, query in the
	Microsoft Knowledge Base for one of the following articles:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg dun win95 kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
