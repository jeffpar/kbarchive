---
layout: page
title: "Q149121: XCON: Gateway Address Routing Table Information"
permalink: /kb/149/Q149121/
---

## Q149121: XCON: Gateway Address Routing Table Information

	Article: Q149121
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Each Connector has an associated address space (or spaces) and a Connected Sites
	configuration. Both associations can be defined using the Exchange
	Administration program and can be replicated by the directory to or from
	adjacent sites. As this information is created by configuration and replicated
	by the directory, it is used by the System Attendant and the Message Transfer
	Agent (MTA) to generate a routing table called the Gateway Address Routing Table
	(GWART). Each server maintains its own GWART within its Directory.
	
	The GWART is stored in the ds (on the site Addressing object in the gateway-
	routing-tree attribute); the Ems_rid.dll is the module that generates the GWART
	and can be called from admin ("Regenerate Routing" button) and MAD (based on the
	schedule). Renaming or deleting the GWART text file will have no impact on the
	routing information.
	
	MORE INFORMATION
	================
	
	In order to successfully deliver a message, the MTA compares the recipient of
	the message to the GWART to determine through which group of connectors the
	message can be delivered. The final result of the search provides a group of
	Connectors which can deliver the message to the remote site.
	
	The GWART is kept by the Directory. It can be viewed by an Administrator using
	the Site Addressing Object. The Routing property page displays the routing table
	as it has currently been calculated.
	
	Under normal circumstances, the routing table is rebuilt when changes occur
	(changes are refreshed very quickly). If you want to force a re- calculation,
	click Recalculate Routing. You can view the contents of the GWART by using a
	text editor, such as Notepad. The GWART is located in the EXCHSRVR\MTADATA
	directory. Each time the routing of a server is updated, the GWART is updated
	and a single backup copy is saved for administrative reference only. The
	following is a list of the GWART files and its purposes:
	
	  Filename      Purpose
	  ----------    ----------------------------------
	  GWART0.MTA    Current Routing table text file
	  GWART1.MTA    Routing table prior to last change
	
	Reading The GWART
	-----------------
	
	The GWART can be segmented into three major areas. Each area corresponds with an
	address type, which Exchange uses to send mail. These address types are as
	follows:
	
	  Address Type        Description
	  ------------        --------------------------------------------
	  Distinguised Name   The native Microsoft Exchange Server address
	  (DN)                format. These are reflected as type EX.
	
	  Domain Defined      The format used for custom recipient storage
	  Attribute (DDA)     (for example: MS and SMTP).
	
	  O/R Address         The Native X.400 address type.
	
	Each line of the GWART indicates an available path which the MTA can use to route
	messages to a destination.
	
	  [    Address Space     ] [ cost ] [ connection 1, connection 2, .......]
	  EX, /O=ORGNAME/OU=Site-X , 2      , Connector to Site-A, Connector to
	   Site-B
	
	When the MTA makes a routing decision, it scans through the GWART to find an
	address space that matches the address of the message. If an available address
	space is identified, the MTA routes the message to the associated connector.
	Obtaining details on any GWART entry reveals the associated connector in a
	Routing Details dialog box.
	
	Sample GWART Diagram
	--------------------
	
	For troubleshooting purposes, it is recommended that you view the GWART. You can
	save the GWART as a text file, and open it as a text file using a text editor.
	The following diagram graphically represents the connections for the sample
	GWART listed below:
	
	     To the Internet                   X400 Cloud (GB, Frisco)
	         |                               / 
	         |  IMC                         /  X400 Connector
	         |  Cost = 1                   /   Cost = 1
	         |                            / 
	     + SATURN -----------------------+
	     |                               |
	     |         SITEz                 |
	     +------------------------ PLUTO +
	    /                            |
	   /                             | MS Mail Connector
	  /  Site Connector              | Cost = 1
	 /   Cost = 1                    |
	BSD                           MSNET/PO1
	                             MSNET/PO2
	
	Sample GWART:
	
	  EX,/O=WYNNWARE/OU=FRISCO;,1, Connection to Frisco
	  EX,/O=MICROSOFT/OU=BSD;,1,Site Connector (BSD),
	  MS,MSNET/PO1;,1,MS Mail Connector (PLUTO),
	  MS,MSNET/PO2;,1,MS Mail Connector (PLUTO),
	  SMTP,*;,1,Internet Mail Connector (SATURN),
	  X400,c=GB;a=TMAILUK;p=*,1,Connection to Frisco,
	  X400,c=US;a= ;p=MICROSOFT;o=BSD;,1,Site Connector (BSD),
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
