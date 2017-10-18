---
layout: page
title: "Q166547: XCLN: Mac Client Will Not Launch on PowerMacs Without Easy Open"
permalink: kb/166/Q166547/
---

## Q166547: XCLN: Mac Client Will Not Launch on PowerMacs Without Easy Open

	Article: Q166547
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Macintosh client is unable to run on a Power Macintosh if
	the Control Panel Macintosh Easy Open (or Mac OS Easy Open) is not installed.
	This issue does not affect the 68-KB Macintosh, only the PowerMac Microsoft
	Exchange Macintosh client.
	
	MORE INFORMATION
	================
	
	The following error message appears when you try to start the Microsoft Exchange
	Macintosh client without Macintosh Easy Open installed on a PowerMac:
	
	  The application "Microsoft Exchange & Schedule+" could not be opened
	  because "Translation" could not be found.
	
	To workaround this problem, Easy Open (either Macintosh and/or Mac OS) must be
	loaded during startup. To ensure that Easy Open is loaded during startup, do one
	of the following:
	
	- In Control Panel, Extensions Manager, select Macintosh Easy Open and/or Mac
	  OS Easy Open, and then restart.
	
	  -OR-
	
	1. From the finder, go to the System folder.
	
	2. Make sure that the Control Panel(s) Macintosh Easy Open and/or Mac OS Easy
	  Open is present in the System Folder, Control Panels folder, and then reboot.
	
	  -OR-
	
	- Easy Open may not be present in the System Folder or any of its subfolders.
	  To install Easy Open you will need to re-install the Macintosh Operating
	  System.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange Macintosh
	client, version 5.0. This problem was corrected in the latest Microsoft Exchange
	Server 5.0 U.S. Service Pack. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange500Mac
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
