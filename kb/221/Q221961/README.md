---
layout: page
title: "Q221961: Err Msg: Rundll32.dll Caused a General Protection Fault in..."
permalink: kb/221/Q221961/
---

## Q221961: Err Msg: Rundll32.dll Caused a General Protection Fault in...

	Article: Q221961
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kberrmsg kbprint win95
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install a PostScript printer driver using the Add Printer
	Wizard, you may receive the following error message:
	
	  Rundll32.dll caused a general protection fault in Pscript.drv.
	
	CAUSE
	=====
	
	This issue can occur if the following lines are present in the [Boot] section of
	the System.ini file:
	
	  system.drv=atmsys.drv
	  atmsystem.drv=system.drv
	
	Adobe Type Manager is the program that inserts these lines.
	
	RESOLUTION
	==========
	
	To resolve this issue, edit the System.ini file to use the default Windows
	system driver. To do this, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "sysedit" (without the quotation marks), and then click
	  OK.
	
	3. In the [Boot] section of the System.ini file, locate the following lines, and
	  then type a semicolon (;) at the beginning of each line:
	
	  system.drv=atmsys.drv
	  atmsystem.drv=system.drv
	
	4. In the [Boot] section of the System.ini file, type the following new line:
	
	  "atm.system.drv=system.drv" (without the quotation marks)
	
	5. On the File menu, click Exit. When you are prompted to save current changes,
	  click Yes.
	
	MORE INFORMATION
	================
	
	
	For information about disabling Adobe Type Manager, see the following article in
	the Microsoft Knowledge Base:
	
	  Q69692 Disabling Adobe Type Manager from Windows
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: win95 win9x gpf postscript pstscript
	
	======================================================================
	Keywords          : kb3rdparty kbenv kberrmsg kbprint win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
