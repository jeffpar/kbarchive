---
layout: page
title: "Q140506: Print Jobs Sent to SFM Printer Hang in Spooler After Printing"
permalink: /kb/140/Q140506/
---

## Q140506: Print Jobs Sent to SFM Printer Hang in Spooler After Printing

{% raw %}

	Article: Q140506
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Print jobs sent to Services for Macintosh (SFM) AppleTalk-attached printers may
	be held in the queue for up to ten minutes after they have printed out before
	the job is deleted and the next job can be printed. After printing, Print
	Manager displays the job with a size of zero bytes.
	
	CAUSE
	=====
	
	When the Services for Macintosh (SFM) print monitor finishes sending data to a
	printer, it follows with a printer access protocol (PAP) message with the end of
	file (eof) flag set. Most printers will respond with a PAP eof, but some Apple
	LaserWriters (e.g. Apple LW 16/xxx) will respond to a PAP EOF with an AppleTalk
	Transaction Protocol (ATP) release.
	
	This causes the SFM print monitor to wait for the timer to expire. The timer was
	hard-coded to 10 minutes in 3.51. Thus the print queues were waiting 10 minutes
	between print jobs.
	
	
	RESOLUTION
	==========
	
	The timer value has been changed to 30 seconds in Windows NT Service Pack 4,
	which should help in most instances.
	
	For information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	PAP eof is passed within an ATP request from machine to machine. The AppleTalk
	stack then passes the PAP packet on to the SFM Print Monitor. Since some
	printers do not respond with a PAP eof, but instead an ATP release, the
	AppleTalk stack processes the packet as an ATP request. Since the packet does
	not contain additional PAP information the request does not get passed up to the
	higher protocol.
	
	For additional information on AppleTalk printing, please see the following
	Microsoft Knowledge Base article:
	
	  ARTICLE-ID: Q152553
	  TITLE : Print Jobs from MAC OTI Clients May Hang in WinNT Print Queue
	
	
	Additional query words: prodnt 3.51
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
