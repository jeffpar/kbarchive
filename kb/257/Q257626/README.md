---
layout: page
title: "Q257626: Non-Paged Pool Leak Running Internet Explorer 5"
permalink: kb/257/Q257626/
---

## Q257626: Non-Paged Pool Leak Running Internet Explorer 5

	Article: Q257626
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:5; winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Internet Explorer version 5 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Terminal Server clients that are running Internet Explorer 5 from a Citrix
	Metaframe version 1.8 client may cause the Terminal Server CPU usage to jump to
	25 percent for a short period of time and then fall back to normal. Task Manager
	or Performance Monitor shows a decrease in non-paged pool usage that is not
	released after the client quits Internet Explorer. After non-paged pool has been
	exhausted, the computer may crash or log events in the System event log,
	indicating that no non-paged pool is available. The pool tag that is leaking is
	the Proc tag, and the process associated with the tag is "IE."
	
	RESOLUTION
	==========
	
	Disable audio remapping for Citrix ICA clients:
	
	1. Start the Terminal Server Connection Configuration tool from the
	  Administrative Tools menu.
	
	2. Double-click the ICA-<transport> connection to display the Edit
	  Connection dialog box.
	
	3. Click Client Settings.
	
	4. Click to select the Disable Client Audio Mapping check box.
	
	5. Click OK to close all dialog boxes.
	
	MORE INFORMATION
	================
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbIEsearch kbZNotKeyword2 kbIENT400Search kbIE500Search kbZNotKeyword3 kbIE500WinNT400
	Version           : WINDOWS:5; winnt:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
