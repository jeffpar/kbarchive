---
layout: page
title: "Q255672: CAPS LOCK Functionality Is Inverted When Client Logs On"
permalink: kb/255/Q255672/
---

## Q255672: CAPS LOCK Functionality Is Inverted When Client Logs On

	Article: Q255672
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The CAPS LOCK functionality may be inverted during Terminal Server client logon.
	This affects only Service Pack 4 and 5 for Windows NT 4.0 Terminal Server. If
	CAPS LOCK is turned on when a Terminal Server client is started, its function is
	inverted (lowercase characters are produced). If it is off, uppercase characters
	are produced. This continues until after the logon process is finished. The CAPS
	LOCK operation then returns to normal.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	WORKAROUND
	==========
	
	Make sure that CAPS LOCK is turned off before starting the Terminal Server
	client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServSearch
	Version           : winnt:4.0 SP4,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
