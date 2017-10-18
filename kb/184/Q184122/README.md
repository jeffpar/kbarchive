---
layout: page
title: "Q184122: Remote APPC LU Aliases Do Not Appear in 5250 Applet"
permalink: kb/184/Q184122/
---

## Q184122: Remote APPC LU Aliases Do Not Appear in 5250 Applet

	Article: Q184122
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you configure the 5250 Applet in the Session Configuration dialog box, if
	you do not specify the Local APPC LU Alias, the remote LUs configured in SNA
	Server may not be listed in the Remote APPC LU Alias drop-down box.
	
	This behavior may also occur in third-party emulators, if the user does not
	specify the Local APPC LU.
	
	MORE INFORMATION
	================
	
	When a Transaction Program (TP) like the 5250 Applet requests a session from SNA
	Server, and a Local APPC LU is not specified, SNA Server first checks the user
	record to see whether there is a Local LU assigned to the user or group. If not,
	SNA Server then checks for an available LU in the Default Outgoing APPC LU Pool.
	If there are no available LUs, the request is rejected. Therefore, the remote
	LUs do not show up in Session Configuration.
	
	To view the list of remote LUs in the 5250 Applet, do one of the following:
	
	- In SNA Server Manager, check Member of Default Outgoing Local APPC LU Pool in
	  the Local LU properties, under the Advanced tab, and save the configuration.
	
	- Type a Local APPC LU Alias in the 5250 Applet Session Configuration.
	
	- In the Configured Users folder in SNA Server Manager, go into the user (or
	  group) properties, and specify a Local APPC LU under the APPC Defaults tab.
	
	Note that if you use option 2 or 3, APPC Load Balancing will not work. APPC load
	balancing only functions correctly if the Local APPC LUs are members of the
	Default Outgoing APPC Pool and if the Local LUs are not specified anywhere else
	(for example, in the user record or in the application).
	
	For more information on load balancing, see the following Knowledge Base
	article:
	
	  Q128244 SNA Server Load Balancing and Hot Backup
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
