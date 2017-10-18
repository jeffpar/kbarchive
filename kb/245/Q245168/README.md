---
layout: page
title: "Q245168: WINS, DHCP Do Not Start After Upgrade to Command AntiVirus 4.54."
permalink: kb/245/Q245168/
---

## Q245168: WINS, DHCP Do Not Start After Upgrade to Command AntiVirus 4.54.

	Article: Q245168
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade to Command AntiVirus for Microsoft Windows NT Server 4.0 with
	F-PROT Professional version 4.54 by Software Systems, Inc., the Windows Internet
	Naming Service (WINS) and Dynamic Host Control Protocol (DHCP) services may not
	start. Event Viewer may record Event ID 7023, which indicates a damaged WINS or
	DHCP database. However, when you remove the database files and allow WINS and
	DHCP to recreate the files, the WINS and DHCP services still may not start.
	
	CAUSE
	=====
	
	The cause is unknown.
	
	RESOLUTION
	==========
	
	To work around this issue, disable the Command AntiVirus service in Control
	Panel, and then restart the computer:
	
	1. In Control Panel, double-click Services.
	
	2. In the Service box, click Command Antivirus.
	
	3. Click Startup.
	
	4. In the Startup Type box, click Disabled.
	
	5. Click OK, and then restart the computer.
	
	MORE INFORMATION
	================
	
	For more information about Command AntiVirus, visit the following Command
	Software Systems, Inc. Web site:
	
	  http://www.commandcom.com/
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
