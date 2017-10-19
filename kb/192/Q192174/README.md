---
layout: page
title: "Q192174: XADM: Removing and Re-Installing the Event Service"
permalink: /kb/192/Q192174/
---

## Q192174: XADM: Removing and Re-Installing the Event Service

	Article: Q192174
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In certain cases you may find it necessary to remove and re-add the Event
	Service service. The following Event IDs may be seen in these cases.
	
	One series of events that might occur, requiring the removal and reinstallation
	of the Event Service is:
	
	  Event ID   : 0
	  Source     : MSExchangeES
	  Type       : Informational
	  Category   : General
	  Description: The Microsoft Exchange Event Service (5.5.1960.3)
	               Started successfully.
	
	  Event ID   : 5
	  Source     : MSExchangeES
	  Type       : Error
	  Category   : General
	  Description: An unexpected MAPI error occurred. Error returned
	               was [0x80004005].
	
	  Event ID   : 1
	  Source     : MSExchangeES
	  Type       : Informational
	  Category   : General
	  Description: The Microsoft Exchange Event Service stopped successfully.
	
	Before removing the Event Service as a solution, verify that this server is a
	public folder server. If the server is not a public folder server, the Events
	Service will not start. For additional information, please refer to the
	following article in the Microsoft Knowledge Base, which explains this
	requirement in more detail:
	
	  Q182082 : XADM: Event Service Won't Start If Alternate PF Server Selected
	
	MORE INFORMATION
	================
	
	Removing the Event Service and re-adding it does not require that you stop any
	other Exchange Server services or reboot the server.
	
	WARNING: Removing the Event Service will cause you to lose all scripts installed
	on the server and all permissions assigned on the Eventconfig_<server
	name> for the server.
	
	Steps to Remove Event Service
	-----------------------------
	
	You will need your Exchange Server CD.
	
	1. Run Setup from the Exchange Server CD.
	
	2. Click on the Add/Remove Button from Setup program.
	
	3. Select Exchange Server, and click on the Change Option button.
	
	4. Clear the Microsoft Exchange Event Service option.
	
	5. Click Ok, then click Continue, and click Yes to remove one component.
	
	6. Check the services under Control Panel Services and be sure the Event Service
	  has been removed.
	
	7. Re-run the Exchange Server Setup, following the same steps, and select the
	  Microsoft Exchange Event Service.
	
	8. Reapply any service packs that were installed on Exchange Server prior to the
	  removal of the Event Service. This, however, requires the stopping of
	  services by the service pack installation.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
