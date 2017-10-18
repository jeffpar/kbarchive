---
layout: page
title: "Q254323: Problems Printing to Printer on an AS/400 NetServer"
permalink: kb/254/Q254323/
---

## Q254323: Problems Printing to Printer on an AS/400 NetServer

	Article: Q254323
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg kbprint osr2 win95
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to print from Windows 95 OEM Service Release 2 (OSR2), 2.1
	(OSR2.1), or 2.5 (OSR2.5), you may receive the following message:
	
	  Before you can use the printer '\<servername>\<printername>' it
	  must be setup on your computer. Do you want Windows to setup the printer and
	  continue this operation?
	
	Clicking Yes starts the Add Printer Wizard. The printer icon appears with a red X
	and the following message is displayed:
	
	  \\<servername>\<printername>
	  This network printer is currently offline. You can install the printer now,
	  but you will not be able to print to it until it comes back online.
	
	CAUSE
	=====
	
	This behavior can occur if the printer is connected to an AS/400 NetServer.
	
	RESOLUTION
	==========
	
	The following versions of the Spoolss.dll file work in this environment:
	
	- 4.00.950 8/24/96 (the original version included with OSR2.x)
	- 4.00.951 10/23/96 (the hotfix version referred to in Q159873)
	
	To resolve this issue, install the hotfix described in either of the following
	Microsoft Knowledge Base articles:
	
	  Q159873 Err Msg: SPOOL32 Caused a Stack Fault in Module SPOOLSS.DLL...
	
	  Q167775 Spool32.exe Error When Printing on a Network
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbprint osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
