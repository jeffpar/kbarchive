---
layout: page
title: "Q249917: Stop 0x00000050 on Terminal Server with Lexmark Printer Driver"
permalink: /kb/249/Q249917/
---

## Q249917: Stop 0x00000050 on Terminal Server with Lexmark Printer Driver

{% raw %}

	Article: Q249917
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to print from a Terminal Server client computer to a Lexmark
	printer, you may receive a STOP 0x50 error message.
	
	RESOLUTION
	==========
	
	To work around this behavior, perform the following procedures:
	
	1. Obtain the generic Lmpcin41.dll printer driver from Lexmark.
	
	2. On both the Terminal Server computer and the print server, replace the
	  existing Lexmark printer driver with the Lmpcin41.dll printer driver.
	
	3. On each Terminal Server client, delete the Lexmark printer and then create a
	  new printer that points to the new printer driver.
	
	MORE INFORMATION
	================
	
	Using the generic Lmpcin41.dll printer driver resolves the STOP error message,
	but it also disables some of the features of your printer.
	
	For information about how to contact Lexmark International, Inc., click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
