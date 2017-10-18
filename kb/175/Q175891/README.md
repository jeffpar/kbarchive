---
layout: page
title: "Q175891: XADM: OWA Needs Anonymous and Clear Text Authentication on IIS"
permalink: kb/175/Q175891/
---

## Q175891: XADM: OWA Needs Anonymous and Clear Text Authentication on IIS

	Article: Q175891
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Microsoft Exchange Server version 5.5 is configured to support Outlook Web
	Access (OWA) clients, the Microsoft Internet Information Server (IIS) must be
	configured for Anonymous and (Basic) Clear Text authentication, but only if IIS
	and Exchange Server are not located on the same computer.
	
	MORE INFORMATION
	================
	
	For directory and information store access, the OWA client establishes a MAPI
	login to the Exchange Server computer that it is connected to. When NTLM
	authentication is enabled on the IIS server, OWA can only access information on
	the local server. Any attempts to access information on other folders, such as
	public folders and/or Schedule+ Free/Busy information will fail.
	
	Additional query words: IIS OWA NTLM exfaqold failed inbox
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
