---
layout: page
title: "Q155682: XADM: Info Store Won't transfer Some X.400 Messages to Gateway"
permalink: kb/155/Q155682/
---

## Q155682: XADM: Info Store Won't transfer Some X.400 Messages to Gateway

	Article: Q155682
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 03-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When sending a message from an X.400 system to an SNADS user through the IMC
	Connect-me Gateway, some messages are never delivered to the gateway's MTS-OUT
	folder. The message arrives in the Connect-me queue of the message transfer
	agent. However, Queueviewer does not show it there. If the
	MSExchangeIS/Private/Transport logging level is set to maximum on the server's
	Private Information Store, the following warning appears in the event log:
	
	  Warning 1026 Source MSExchangeIS Private
	  An error occurred with the following call stack:
	  FStartTransferInError() 0000000bb8
	  EcTferInMessage() 0000000bb8
	  EcTraceInfoFromOMObj() 0000000bb8
	  EcTraceEntryFromOMObj() 0000000bb8
	
	CAUSE
	=====
	
	The error code 0000000bb8 (3000) is ecObjectInvalid. This return code is
	generated if the store detects that the OM object for the external trace entry
	is not correct.
	
	When the message is broken into its ASN.1 nodes you can see in the
	TraceInformationElement of the X.400 message that one field is not formed
	correctly. For example the message may have gone through an MTA that stamped it
	like this:
	
	    302E     : Mtrce : TraceInformationElement
	     6314     : Mgbid : GlobalDomainId
	      6104     : Dctry : CountryName
	       1302     : Dcacd : CountryNameISO3166Alpha2      ="us"
	      620A     : Dadmd : AdministrationName
	       1308     : Dadmp : AdminNamePrintable            ="infotest"
	      1300     : Cptbl : PrintableString               =""
	     3116     : Mdsif : DomainSuppliedInformation
	      8011     : Marrt : ArrivalTime             ="960828152308+0000"
	      8201     : Mrtng : RoutingAction              Relayed
	
	The 1300 is the hexadecimal representation of the PrivateDomainIdentifier. The
	length of this field is zero. The 1988 CCITT X.400 recommendations specify that
	this field must have a length of at least one.
	
	Some message transfer agents (MTAs) use an ASN.1 coding convention that states
	that if the length is zero, the field is ignored.
	
	RESOLUTION
	==========
	
	A new version of Store.exe is available from Microsoft. This version will
	deliver this type of message to the Connect-me Gateway. For availability of this
	fix, see below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: EDK Profs Third Party Gateway
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
