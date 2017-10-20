---
layout: page
title: "Q185792: Shared Printers Are Unavailable After a Server Restart"
permalink: /kb/185/Q185792/
---

## Q185792: Shared Printers Are Unavailable After a Server Restart

{% raw %}

	Article: Q185792
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbenv kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you restart your computer running Windows NT, printer shares on your
	computer may no longer be available to other users. The Event log may contain
	the following event:
	
	  Event ID: 19
	  Source: Print
	  Type: Error
	  Category: None
	  Description: Sharing printer failed, <printer name>\<print share name>.
	
	CAUSE
	=====
	
	This problem can occur if the comment field for a shared printer contains more
	than 256 characters, including 2 characters for each new line.
	
	Note that when you initially set up a shared printer with more than 256
	characters in the comment field, one of the following messages may be
	generated:
	
	- Printer settings could not be saved. The RPC server is unavailable.
	
	- Printer settings could not be saved. The data area passed to a system call is
	  too small.
	
	- Printer settings could not be saved. The parameter is incorrect.
	
	
	RESOLUTION
	==========
	
	To allow the system to properly share a logical printer, make sure that the
	printer Comment field does not have more than 256 characters total. As a test,
	you may want to copy the entire comment field into notepad and save the text as
	a file. Check the size (in bytes) of the file to determine whether you have
	exceeded the 256 character limit.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0
	
	======================================================================
	Keywords          : kbenv kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
