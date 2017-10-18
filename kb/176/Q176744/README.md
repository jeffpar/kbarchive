---
layout: page
title: "Q176744: XCLN: Installing Outlook on OWA Server Causes Access Failure"
permalink: kb/176/Q176744/
---

## Q176744: XCLN: Installing Outlook on OWA Server Causes Access Failure

	Article: Q176744
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you install a Microsoft Outlook client, version 8.03 on a Microsoft Exchange
	Server computer that has the Outlook Web Access (OWA) component installed, it
	may cause access to calendar information to be unavailable or generate Access
	Denied errors on OWA clients.
	
	CAUSE
	=====
	
	The Outlook Client, version 8.03 installs and registers Active Messaging version
	1.1. This can cause problems with Collaborative Data Objects (CDO) version 1.2
	in the OWA component.
	
	WORKAROUND
	==========
	
	Run the Microsoft Exchange Server Setup program and select reinstall to update
	CDO to version 1.2.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550
	Version           : 5.5
	Issue type        : kbprb
	
	=============================================================================
	
