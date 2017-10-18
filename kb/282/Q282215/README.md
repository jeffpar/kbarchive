---
layout: page
title: "Q282215: Stop 0x0000001E When You Use User Mode Print Drivers to Print"
permalink: kb/282/Q282215/
---

## Q282215: Stop 0x0000001E When You Use User Mode Print Drivers to Print

	Article: Q282215
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbprint kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to print from a Terminal Server-based client by using a user mode
	printer driver (Umpd.dll), the Windows NT Server version 4.0, Terminal Server
	Edition-based server may generate a the following error message on a blue
	screen:
	
	  STOP 0x0000001E (0xc0000005, 0xa3012bb4, 0x00000000, 0x00000004)
	
	CAUSE
	=====
	
	This problem can occur because spooler tries to display a dialog box to the
	client desktop but the desktop handle is not available.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time             Size       File name   Platform
	  ------------------------------------------------------------
	  07/11/2000  05:45p             170,256  Gdi32.dll   Intel
	  07/11/2000  05:44p             331,536  User32.dll  Intel
	  11/21/2000  08:47p           1,279,824  Win32k.sys  Intel
	  03/01/2001  06:19p             195,856  Winsrv.dll  Intel
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	
	MORE INFORMATION
	================
	
	We have seen a similar problem with HP Design Jet Printers. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q301330 Stop 0x0000001E Error Message Printing with Hewlett-Packard DesignJet
	  Printer Driver from a Terminal Services Client
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbprint kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
