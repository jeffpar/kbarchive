---
layout: page
title: "Q226377: XWEB:This Page Cannot be Displayed When Connected w/ OWA to WLBS"
permalink: kb/226/Q226377/
---

## Q226377: XWEB:This Page Cannot be Displayed When Connected w/ OWA to WLBS

	Article: Q226377
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are connected with a browser to an Outlook Web Access (OWA) server, the
	following error message may be displayed if this server is also a part of a
	cluster of Windows Load Balancing Servers (WLBS):
	
	  This page cannot be displayed.
	
	MORE INFORMATION
	================
	
	You may get the above error message if the WLBS service has failed on the server
	your client is connected to. After the service fails, it takes few seconds
	before you are redirected to another WLBS server. The delay where the message,
	"This page cannot be displayed," is displayed is approximately 5 seconds, but
	you may have to refresh your browser to be redirected to your OWA connection. It
	may also be necessary to re-enter your credentials for the server to continue
	using your mailbox.
	
	Being redirected to another OWA server will occur invisibly to you, unless you
	get the above error message and are prompted for credentials. The OWA client
	will not have to supply a different URL or do any other action, and will then be
	able to perform the task which produced the above error message.
	
	Additional query words: convoy
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : WINDOWS:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
