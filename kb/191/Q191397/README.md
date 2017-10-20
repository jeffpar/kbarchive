---
layout: page
title: "Q191397: XCON: During DRAS Call, Server Unavailable on the Local Network"
permalink: /kb/191/Q191397/
---

## Q191397: XCON: During DRAS Call, Server Unavailable on the Local Network

{% raw %}

	Article: Q191397
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During a Dynamic RAS call to another Exchange Server site, you may receive the
	following message:
	
	  The local Exchange Server is unavailable on the local network.
	
	Furthermore, you will not be able to ping or connect to the other site in anyway.
	
	CAUSE
	=====
	
	During a DRAS connection, the property to "Use default gateway on remote
	network" has been set. As a result, when Exchange Server needs to communicate to
	any computer across a gateway (router), it will assume that the gateway over the
	dial-up network (DUN) connection is the correct one. Local network computers are
	actually able to send packets over the local router to the Exchange Server
	computer, but the Exchange Server computer is replying to the wrong router (over
	the DUN connection), and thus to the wrong network. Communication is never
	established between the Exchange Server computer and local computers physically
	located across the router.
	
	WORKAROUND
	==========
	
	Check the Dial-Up Entry by performing the following steps:
	
	1. From the Start menu, select Programs, Accessories, and click Dial-Up
	  Networking. Select the Phone Book Entry that the Dynamic RAS Connector is
	  using, and click More for a list of options.
	
	2. Select the Edit Entry and Modem Properties option.
	
	3. Select the Server tab.
	
	  a. Under Network Protocols, click TCP/IP Settings and click the Settings
	     button.
	
	  b. Clear the Use Default Gateway on Remote Network check box.
	
	NOTE: This workaround may cause other problems, depending on how the TCP/IP
	network is configured for DUN networking. See the More Information section for
	more details.
	
	MORE INFORMATION
	================
	
	While a dial-up connection is on line, the local dial-up server will no longer
	be able to communicate with any resources that are across the default gateway on
	the remote network. This is due to the fact that all the packets will be
	directed to the default local router and not the remote gateway (router). This
	may cause another problem with DUN. See the "Dynamic RAS Connector White Paper"
	for more details.
	
	Additional query words: Dynamic Ras connection Dial-Up Networking
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
