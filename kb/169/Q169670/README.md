---
layout: page
title: "Q169670: XCON: Incoming Messages from HP OpenMail Include Winmail.dat"
permalink: kb/169/Q169670/
---

## Q169670: XCON: Incoming Messages from HP OpenMail Include Winmail.dat

	Article: Q169670
	Product(s): Microsoft Exchange
	Version(s): WinNT4.0,5.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Attachments on incoming messages from a Hewlett-Packard (HP) OpenMail X.400
	connector may include a Winmail.dat attachment if the Microsoft Exchange Server
	Message Transfer Agent (MTA) is build 995.17 or higher. HP OpenMail can use
	Microsoft Mail clients with an HP MAPI driver.
	
	CAUSE
	=====
	
	The remote system may be sending the Winmail.dat as an FTBP of type
	mapiAttachment. This is the same value being used for attached files. Normally,
	the Winmail.dat file is tagged as type TNEF. When the MTA sees the
	mapiAttachment tag, it assumes it is just another bodypart, and handles it
	accordingly. If the bodypart was tagged as type TNEF, the MTA would parse it out
	and use the details inside.
	
	MapiAttachment uses the OID 0x2a864886f714030a02
	
	TNEF uses the OID 0x2a864886f714030a01
	
	The OID can be seen in the ASN.1 parsed data in the attribute
	P2_RegisteredIdentifier. Microsoft provides an ASN.1 parser in the BackOffice
	Resource Kit called Aspirin.
	
	WORKAROUND
	==========
	
	Configure the HP OpenMail MAPI driver to not generate a Winmail.dat file on
	outgoing messages. This is done in the Msmail.ini file, in the following
	section:
	
	     [OpenDesk Transport]
	     EncodeAttachInfo=1
	
	If EncodeAttachInfo is "0", the Winmail.dat file will not be generated. If it is
	a "1", the Winmail.dat file will be generated.
	
	If the workaround is impractical to implement, see the status section for a
	possible resolution.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
