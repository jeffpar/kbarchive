---
layout: page
title: "Q161969: LPR Printing Device Reports an Error If Printer Not Available"
permalink: kb/161/Q161969/
---

## Q161969: LPR Printing Device Reports an Error If Printer Not Available

	Article: Q161969
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint kbWinNT400sp4fix
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Service Pack 5 (SP5) for Windows NT version 3.51 or Service
	Pack 2 (SP2) or 3 (SP3) for Windows NT version 4.0, you may receive one of the
	following error messages:
	
	- There was an error writing to the IP address.
	
	  -or-
	
	- Unexpected Network Error
	
	CAUSE
	=====
	
	This problem occurs when a line printer remote (LPR) printing device does not
	respond for 15 minutes. A debug timer is being set for 15 minutes of no
	connection to the printer.
	
	An LPR printing device may stop responding if the printer is out of paper or if
	it is taken offline.
	
	This error can also happen if the host name fails to resolve to an IP address.
	The fix referenced below does not take care of this issue. This issue can be
	worked around by providing a proper host name resolution method, such as DNS or
	HOSTS file.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q185892
	  TITLE : Unwanted Popup Message While Printing to an LPR Printer
	
	RESOLUTION
	==========
	
	To work around this problem and resume printing, clear the dialog box at the
	server.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 SP5. A
	supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	Prior to installing one of the service packs listed above, Windows NT logs an
	event 2004 to the event log and continues retrying the print job until it is
	cancelled.
	
	Additional query words: lpd popup
	
	======================================================================
	Keywords          : kbprint kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
