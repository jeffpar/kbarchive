---
layout: page
title: "Q149675: XFOR: Error Sending Mail from Exchange out an MHS Gateway"
permalink: /kb/149/Q149675/
---

## Q149675: XFOR: Error Sending Mail from Exchange out an MHS Gateway

{% raw %}

	Article: Q149675
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you try to send mail out a PCMTA connector to a DOS Microsoft MHS gateway,
	you might receive the following error:
	
	  Your message did not reach all or some of the intended recipients.
	
	MORE INFORMATION
	================
	
	Check the following configuration in the Microsoft Exchange Administrator
	program:
	
	1. Verify that the Address Space on the PC Mail Connector has:
	
	  TYPE    Address                   COST
	  MHS                                  1
	
	  If MHS is not a type, use New General to add it. Then Stop and Start the PC
	  Mail Connector service.
	
	2. Verify that the Site, Configuration, Site Addressing Object, Routing Tab for
	  the MHS address is defined properly. If it is not, go back to step one and
	  remove and recreate the address space.
	
	3. Recalculate Routing on the Site, Configuration, Site Addressing Object,
	  Routing tab.
	
	4. On the MS Mail connector Properties Connections tab, verify that the Access
	  component is hanging off the gateway PO. If it is there, but is not shown
	  under the gateway MS Mail PO, remove the access component from the connector
	  PO and reinstall it, so that it is pointing to the MS Mail gateway PO.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
