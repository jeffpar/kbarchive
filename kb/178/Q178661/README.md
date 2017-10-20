---
layout: page
title: "Q178661: SMS: Error - 3201 While Running the Macintosh Inventory Agent"
permalink: /kb/178/Q178661/
---

## Q178661: SMS: Error - 3201 While Running the Macintosh Inventory Agent

{% raw %}

	Article: Q178661
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2 SP3
	Operating System(s): 
	Keyword(s): kberrmsg kbInventory smsinv
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error may occur while running the Macintosh Inventory Agent
	(InvMac):
	
	  Error - 3201
	
	CAUSE
	=====
	
	TCP/IP is not loaded.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	WORKAROUND
	==========
	
	To work around this problem, do any one of the following:
	
	- Ensure that TCP/IP is active and the Load Only When Needed option is
	  disabled. To do this, perform the following steps:
	
	  1. On the Apple menu, point to Control Panels and click TCP/IP.
	
	  2. Click the Options button in the bottom right corner of the TCP/IP window
	     and verify that Make TCP/IP is set to Active and the Load Only When Needed
	     option is not enabled.
	
	  3. Click OK. On the File menu, click Exit to close the TCP/IP window.
	
	  4. Save the changes and restart the Macintosh.
	
	- Obtain the hotfix mentioned in the STATUS section of this article. This fix
	  should have the following timestamp:
	
	     12/5/97  2:03pm      162,975 Invmac.mac
	
	- Apply Systems Management Server 1.2 Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	If you choose to work around this problem by obtaining the hotfix, be aware that
	the Invmac.mac file is compressed, so you must use Hdecomp.exe (found in the
	Support directory of the Systems Management Server 1.2 CD) to expand it. Expand
	the file to a user authentication module (UAM) volume, and place it in the
	Site.srv\Maincfg.box\Client.src\Mac.bin directory of each site server. Macintosh
	clients must run the Systems Management Server Installer script to get the
	updated Invmac.mac file. Note that Hdecomp.exe requires Smsunzip.dll to work
	properly.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: smsinv prodsms
	
	======================================================================
	Keywords          : kberrmsg kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120SP3
	Version           : :1.2 SP3
	Hardware          : MAC
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
