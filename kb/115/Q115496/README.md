---
layout: page
title: "Q115496: SMTP: Configuring the Mail Routing Host Without DNS"
permalink: /kb/115/Q115496/
---

## Q115496: SMTP: Configuring the Mail Routing Host Without DNS

	Article: Q115496
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	Mail Routing Host
	-----------------
	
	The Microsoft Mail Gateway to SMTP depends on a mail routing host in the
	TCP/IP network to route its mail. This is the host defined in the
	Administrator program under Gateway, SMTP, Setup, in the IP Address of SMTP
	Router field. The mail routing host is sometimes referred to as the smart
	host.
	
	The mail routing host routes mail in two ways:
	
	1. Domain name service (DNS)
	
	2. Hosts file, usually kept in \ETC\HOSTS
	
	For details on the DNS, see the application note "Configuring the SMTP
	Gateway and DNS" (GW0645).
	
	Hosts File Contents
	-------------------
	
	The hosts file is a flat file on the mail routing host that consists of
	two vital pieces of information: IP addresses and host domain names.
	
	The gateway computer must have an entry in the host file, and so must the
	domain names assigned to Microsoft Mail postoffices. Domain names are
	assigned in the Administrator program, under Gateway, SMTP, Address Map,
	in the SMTP domain field.
	
	For example, the entries in the hosts file for the gateway computer
	MSMAILGWY.COMPANY.COM at IP address 123.123.4.5 that has Mail postoffice
	domain names of HQ.COMPANY.COM and SALES.COMPANY.COM, would look like this:
	
	  123.123.4.5 MSMAILGWY.COMPANY.COM
	  123.123.4.5 HQ.COMPANY.COM
	  123.123.4.5 SALES.COMPANY.COM
	
	This ensures that mail addressed to SPARKY@HQ.COMPANY.COM is routed to
	the gateway computer by the SMTP host for processing by Mail.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
