---
layout: page
title: "Q215493: XFOR: Message Flow through the SNADS Connector"
permalink: /kb/215/Q215493/
---

## Q215493: XFOR: Message Flow through the SNADS Connector

{% raw %}

	Article: Q215493
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes message flow between Exchange Server and the Exchange
	SNADS Connector.
	
	MORE INFORMATION
	================
	
	Message Flow from Exchange Server to SNADS
	------------------------------------------
	
	1. Message is passed by the Exchange Server information store to the connector's
	  MTS-OUT folder if on same Exchange Server computer. Otherwise, the message
	  transfer agent (MTA) routes it to the Exchange Server computer where the
	  SNADS Connector is installed, and places it in the connector's MTS-OUT
	  folder.
	
	2. The SNADS Connector picks up the message from MTS-OUT, looks up the directory
	  entries for the recipients, and places the message in the READYOUT folder.
	
	  NOTE: Specifically, the process Lsmexout.exe, listed in Exchange Connectivity
	  Administrator's Process Manager as "Transfer from Exchange for SNADS," or
	  "LME-SNADS-MEXOUT," is responsible for the above action. In the Queues tab of
	  the Notes Connector Property page, MTS-OUT is called "Outbound from
	  Exchange," and READYOUT is called "Outbound to SNADS."
	
	3. The SNADS connector receives the message from the MTS-OUT folder and puts it
	  into the READYOUT folder.
	
	4. The SNADS connector then translates it into an intermediary GML structure
	  (similar to DIA), breaks out the attachments into separate messages, and
	  places the message header(s) (one for the body, one for each attachment) into
	  the Exchsrvr\Connect\Exchconn\Q\Snads.in.in as a file with the extension
	  .rdy, and places the message body (*.tmp) and attachments (*.att) into
	  separate files in the Exchsrvr\Connect\Exchconn\Q\Objects directory.
	
	  NOTE: Specifically, the process Lsmexdia.exe, listed in Exchange Connectivity
	  Administrator's Process Manager as "Exchange to SNADS Transform," or
	  "LME-SNADS-MEXDIA," is responsible for the above action.
	
	5. The SNADS Connector then picks up the *.rdy file (and associated files), and
	  sends a SNADS distribution to the SNADS-compliant partner mail system over an
	  LU 6.2 session. When the partner mail system indicates that it has received
	  the distribution, the SNADS Connector removes the *.rdy file and associated
	  files.
	
	  NOTE: Specifically, the process Lssne.exe, listed in Exchange Connectivity
	  Administrator's Process Manager as "Outbound SNADS Server," or
	  "LME-SNADS-OUT," is responsible for the above action.
	
	Message Flow from SNADS to Exchange Server
	------------------------------------------
	
	1. The SNADS Connector listens to receive an incoming allocate from the partner
	  mail system, receives a SNADS distribution over an LU 6.2 session, and
	  generates a file in the Exchsrvr\Connect\Exchconn\Q\Dia2mex.in directory
	  (extension *.rdy) containing the message header, and generates a file in
	  Exchsrvr\Connect\Exchconn\Q\Objects directory (extension *.snd) containing
	  the message body (or document/binary file).
	
	  NOTE: Specifically, the process Lssne.exe, listed in Exchange Connectivity
	  Administrator's Process Manager as "Inbound SNADS Server," or "LME-SNADS-IN,"
	  is responsible for the above action.
	
	2. The SNADS Connector picks up the *.rdy file (and associated files) from the
	  Exchsrvr\Connect\Exchconn\Q\Dia2mex.in directory, translates the message into
	  Microsoft internal format, and puts the message in the READYIN folder.
	
	  NOTE: Specifically, the process Lsdiamex.exe, listed in Exchange Connectivity
	  Administrator's Process Manager as "SNADS to Exchange Transform," or
	  "LME-SNADS-DIAMEX," is responsible for the above action.
	
	3. The SNADS Connector then verifies the validity of the recipients, and puts
	  the message into the MTS-IN folder.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
