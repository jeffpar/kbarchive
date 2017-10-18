---
layout: page
title: "Q234033: XCLN: Exchange 5.5 Upgrade CD Installation Problems"
permalink: kb/234/Q234033/
---

## Q234033: XCLN: Exchange 5.5 Upgrade CD Installation Problems

	Article: Q234033
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 03-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server Outlook Web Access (OWA) may be installed on a
	stand-alone Microsoft Internet Information Server computer, separate from
	Exchange Server. This is usually done to provide more performance for the OWA
	server. However, when you use the Exchange Server 5.5 Upgrade CD to install OWA
	on a new IIS server, Setup fails.
	
	CAUSE
	=====
	
	The Exchange Server 5.5 Upgrade CD will only upgrade components that are already
	in place. Since no prior Exchange Server components exist on a new IIS server,
	Setup has nothing to upgrade.
	
	RESOLUTION
	==========
	
	You might resolve this issue by doing one of the following:
	
	- Run the Exchange Server 5.5 Upgrade CD on a stand-alone IIS computer with the
	  Exchange Server 5.0 Active Server Page components already installed.
	
	
	- Install the Exchange Server 5.0 ASP components on a stand-alone IIS 3.0
	  computer, then run the Exchange Server 5.5 Upgrade CD.
	
	
	- Run the Exchange Server 5.5 Upgrade CD on an Exchange Server 5.0 computer
	  that is already running the Exchange Server 5.0 ASP components.
	
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q180403 XADM: Error Message Trying to Install Exchange 5.5 Upgrade Only
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
