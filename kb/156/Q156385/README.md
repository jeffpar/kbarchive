---
layout: page
title: "Q156385: SMS: INVMAC Errors During Initial SMS Inventory"
permalink: /kb/156/Q156385/
---

## Q156385: SMS: INVMAC Errors During Initial SMS Inventory

{% raw %}

	Article: Q156385
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With some Systems Management Server site configurations, an Apple Macintosh
	computer may exhibit errors and appear to stop responding when the initial
	Systems Management Server inventory is taken on that system.
	
	This problem occurs when the Systems Management Server site server is located in
	a different AppleTalk zone than the Macintosh client.
	
	CAUSE
	=====
	
	During the initial installation of the Systems Management Server client, the
	Domain.ini file is copied to the client. This file is later modified and renamed
	to Sms.ini. When the Macintosh restarts, the INVMAC program runs and attempts to
	connect to a Systems Management Server in the AppleTalk zone specified in the
	Domain.ini file to finalize the configuration and to report the initial
	inventory.
	
	By default, the Domain.ini file contains an asterisk (*) that signifies that the
	Macintosh can find the Systems Management Server site server in the Macintosh's
	default zone. If the computer running Systems Management Server that the
	Macintosh is reporting to resides in a different zone than the Macintosh, this
	process fails.
	
	The AppleTalk zone information is gathered by the Invwin32.exe inventory agent
	residing on the Systems Management Server site server, and is written to the
	registry at the following key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Identificaiton
	
	With Systems Management Server 1.2, this information is not always written to the
	registry properly.
	
	WORKAROUND
	==========
	
	Use Regedt32 to modify the Systems Management Server registry to contain the
	AppleTalk zone name.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT or Microsoft Systems
	Management Server to correct them. Microsoft cannot guarantee that any problems
	resulting from the use of Registry Editor can be solved. Use this tool at your
	own risk.
	
	1. Open Regedt32.
	
	2. Navigate to HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Identification.
	
	3. Add a new value called "AppleTalk Zone Name" (without the quotation marks),
	  and make the Data Type REG_SZ. Add the correct AppleTalk zone name for the
	  value.
	
	When the Systems Management Server Maintenance Manager service starts its next
	watchdog cycle, the new registry entry will be picked up, and the Domain.ini
	file will be modified. Once this file has been modified, Macintosh computers can
	be installed, and will inventory properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Systems Management Server version 1.2. For information on obtaining
	the Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	

{% endraw %}
