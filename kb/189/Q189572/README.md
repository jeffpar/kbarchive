---
layout: page
title: "Q189572: XADM: Removing OWA Using 5.5 Displays Error With 5.5SP1 Installe"
permalink: /kb/189/Q189572/
---

## Q189572: XADM: Removing OWA Using 5.5 Displays Error With 5.5SP1 Installe

	Article: Q189572
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On a computer running Microsoft Exchange Server 5.5 with SP1 installed, when you
	remove Microsoft Outlook Web Access (OWA) using the Exchange Server 5.5 Setup
	program, you may receive the following message:
	
	  Microsoft Exchange Server Setup: setup.exe - Entry Point Not Found
	  The procedure entry point xxxxxxxxxx could not be located in
	  the dynamic link library GAPI32.dll.
	
	WORKAROUND
	==========
	
	To work around the problem, click OK after you receive the error message. Setup
	will continue and the OWA uninstall operation will complete successfully.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Microsoft Exchange Server 5.5
	SP1.
	
	Additional query words: xadm setup gapi xcln owa
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1
	Version           : :5.5,5.5 SP1
	Issue type        : kbbug
	
	=============================================================================
	
