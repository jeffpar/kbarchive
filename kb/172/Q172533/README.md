---
layout: page
title: "Q172533: SMS: Invmac Fails to Perform Resync"
permalink: /kb/172/Q172533/
---

## Q172533: SMS: Invmac Fails to Perform Resync

	Article: Q172533
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbusage kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Personal Computer Properties only displays the Identification and Network
	Monitor groups for some Macintosh clients.
	
	CAUSE
	=====
	
	INVMAC fails to perform resynchronization (resync).
	
	WORKAROUND
	==========
	
	To work around this problem, do any one of the following:
	
	- Delete the Macintoshes' history file, found on the Systems Management Server
	  site server, along with its reference in the History.map file.
	
	- Obtain the hotfix mentioned in the STATUS section below. This fix should have
	  the following timestamp:
	
	     11/6/97  7:15pm               162,753 Invmac.mac
	
	- Wait for and apply Systems Management Server 1.2 Service Pack 4.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	If you choose to work around this problem by obtaining the hotfix, be aware that
	the Invmac.mac file is compressed, so you must use Hdecomp.exe (found in the
	Support directory of the Systems Management Server 1.2 CD) to expand it. Expand
	the file to a user authentication module (UAM) volume, and place it in the
	Site.srv\Maincfg.box\Client.src\Mac.bin directory of each site server. Macintosh
	clients must run the Systems Management Server Installer script to get the
	updated Invmac.mac file.
	
	
	Additional query words: smsinv prodsms data loader dataloader
	
	======================================================================
	Keywords          : kbusage kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Hardware          : MAC
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
