---
layout: page
title: "Q153479: XADM: How to Include the Global Address List in the OAB"
permalink: /kb/153/Q153479/
---

## Q153479: XADM: How to Include the Global Address List in the OAB

	Article: Q153479
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 06-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, only the recipients from your Exchange Server site are listed in
	your offline Address Book. This article describes how an Exchange Server
	administrator can include all of the recipients from the global address list in
	the offline Address Book.
	
	MORE INFORMATION
	================
	
	When you install Exchange Server, there is only one recipients container, called
	the Recipients container, in the first site. By default, this Recipients
	container is the only entry in the list of Address Books. (In the DS Site
	Configuration properties, click the Offline Address Book tab to see the list of
	Address Books.)
	
	Exchange Server builds the offline Address Book (based on a configurable
	schedule) from this list of Address Books, so by default, the offline Address
	Book only contains the recipients that are listed in the default Recipients
	container of a site. To generate an offline Address Book that contains all of
	the users in the global address list, perform the following steps:
	
	1. Start the Exchange Server Administrator program.
	
	2. In the left pane, click the Configuration container for the site that you
	  want to change.
	
	3. In the right pane, double-click the DS Site Configuration object. The DS Site
	  Configuration Properties dialog box is displayed.
	
	4. Click the Offline Address Book tab.
	
	5. Perform one of the following sets of steps, as applicable:
	
	   - For Exchange Server version 4.0:
	
	     a. Under "Generate Data Files From the Address Book Container", click
	        Modify.
	
	     b. In the Offline Address Book Container window, click the Global Address
	        List container, and then click OK. The Generate Data Files From The
	        Address Book Container box changes to Global Address List.
	
	   - For Exchange Server versions 5.0 and 5.5:
	
	     a. Click Add.
	
	     b. In the Offline Address Book Container window, click the Global Address
	        List container, and then click OK. The Address Book Container box adds
	        the Global Address List.
	
	6. Click Generate Offline Address Book Now to generate a new offline Address
	  Book that contains all of the recipients available in the Exchange Server
	  organization.
	
	7. Click OK.
	
	After you perform these steps, downloads of the offline Address Book contain all
	of the recipients from the global address list.
	
	Additional query words: GAL OAB admin
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
