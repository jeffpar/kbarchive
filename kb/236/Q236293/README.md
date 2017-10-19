---
layout: page
title: "Q236293: Spooler Service Stops When Using Windows 95/98 Printer Driver"
permalink: /kb/236/Q236293/
---

## Q236293: Spooler Service Stops When Using Windows 95/98 Printer Driver

	Article: Q236293
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On your computer running Windows NT, the Spooler service may stop responding
	(hang) and one or more of the following error messages may be appear in the
	Event Viewer System log:
	
	  Spoolss.exe. Initialization of the dynamic link library failed.
	
	  %SystemRoot%\System32\Hpbcom.dll failed - the process is terminating
	  abnormally.
	
	CAUSE
	=====
	
	These error messages may indicate that your computer is attempting to use an
	incorrect third-party printer driver. The Hpbcom.dll file is part of the Hewlett
	Packard (HP) JetAdmin software for Windows 95 or Windows 98. This software is
	not supported on Windows NT Server or Windows NT Workstation even though you can
	successfully install this software on Windows NT.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove the JetAdmin software:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Add/Remove Programs.
	
	2. Click to select the JetAdmin software from the list of installed software,
	  and then click Add/Remove.
	
	3. Click Yes, click Yes when prompted to remove the shared files that are no
	  longer in use, and then click Yes to restart the computer.
	
	
	NOTE: JetDirect is no longer supported by HP. SDI (Simple Device Installation) is
	now used to install network printers. For more information on this, see:
	
	  http://www.hp.com/cgi-bin/cposupport /ccsearch/getdoc?doc=bpj05973
	
	  or
	
	  http://www.hp.com/cposupport/network ing/support_doc/bpj06765.html
	
	HP recommends a new software admin package (TCP/IP / IPX/SPX Based). For further
	information see:
	
	  http://www.hp.com/cgi-bin/cposupport /ccsearch/getdoc?doc=bpj06723
	
	  or
	
	  http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc? doc=bpj06724
	
	Additional query words: printing hangs
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
