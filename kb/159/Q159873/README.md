---
layout: page
title: "Q159873: Err Msg: SPOOL32 Caused a Stack Fault in Module SPOOLSS.DLL..."
permalink: /kb/159/Q159873/
---

## Q159873: Err Msg: SPOOL32 Caused a Stack Fault in Module SPOOLSS.DLL...

	Article: Q159873
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbprint win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to print to a network printer in Windows 95, the following
	error message may be displayed
	
	  SPOOL32 caused a stack fault in module SPOOLSS.DLL at <xxxx:xxxxxxxx>
	
	where <xxxx:xxxxxxxx> is series of hexadecimal digits representing the code
	segment and actual address in which the stack fault occurred.
	
	CAUSE
	=====
	
	This problem can occur when the print provider on your computer and the print
	provider on the computer that the network printer is connected to are unable to
	properly communicate with each other. The problem is most likely to occur when
	the Microsoft Client for Microsoft Networks and the Microsoft Client for NetWare
	Networks are both installed on your computer, although the problem is not
	network-related.
	
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbprint win95 kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
