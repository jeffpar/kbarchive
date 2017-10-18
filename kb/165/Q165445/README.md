---
layout: page
title: "Q165445: XCON: How to Configure TP4 Protocol over Routers"
permalink: kb/165/Q165445/
---

## Q165445: XCON: How to Configure TP4 Protocol over Routers

	Article: Q165445
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When configuring the TP4 protocol over routers, if the router is capable of
	understanding the ES-IS protocol there is no need to specify static routes or
	default gateways. If the router doesn't understand the ES-IS protocol, you might
	need to add Static Routes to the OSIRTE file.
	
	This file is located in your %windir%\system32\drivers\etc directory. The file
	includes comments on how to add routing table entries.
	
	
	The following is a sample OSIRTE file.
	
	  ;
	  ;       Static Routing table entries use the format as follows:
	  ;
	  ;       NSAP:MAC/X.121 address:Priority:CardChoice
	  ;
	  ;       Where;
	  ;       NSAP = The remote ES's NSAP you want to communicate with
	  ;
	  ;       MAC = The ethernet address and is always an Hex format
	  ;
	  ;       X.121 address must be encoded in hex as 703701020304..and so on
	  ;
	  ;       Priority =  0 or 1.
	  ;
	  ;       CardChoice = ndis device name. I know it is cumbersome
	  ;       Use the System-CurrentControl-services-Isotp-Linkage->bind of RegDB
	  ;       Key values as shown. (NOTE: Streams is omitted from ndis_dev name)
	  ;
	  ;       NO BLANK SPACES ALLOWED IN THESE ENTRIES
	  ;       RemoteNSAP can be ASCII. A $ implies HEX encoding for 1st & 2nd
	  ;       field.
	  ;
	  ;       Lets take an example. If you want to route a destination whose
	  ;       NSAP is FIRSTPLACE on Etherlink 3 card to an IS system whose
	  ;       MAC address is 010203040506 the entry would loook like
	  ;
	  ;       FIRSTPLACE:$010203040506:1:\Device\Elnk31
	  ;
	  ; The static routes are as defined below
	  ;
	  ; The 1st line is priority 0 route for NSAP 474747(hex)
	  ; The 2nd line is alternate route for NSAP GEE ( hex:474747)
	  ; Where as 2rd line is highest priority for NSAP GGG but on FDDI card.
	  ; Now the card with subnet id = 0 will be the 1st one used.
	  ;
	  ;$474747:$112233445566:0:\Device\Elnk31
	  ;GGG:$010203040506:1:\Device\Elnk31
	  ;GGG:$010203040506:0:\Device\SkFddiFe2
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
