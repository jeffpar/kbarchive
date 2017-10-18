---
layout: page
title: "Q190021: XADM: Messages Sitting in IMS Inbound Queue Waiting Delivery"
permalink: kb/190/Q190021/
---

## Q190021: XADM: Messages Sitting in IMS Inbound Queue Waiting Delivery

	Article: Q190021
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On an Exchange Server computer that hosts a working Internet Mail Service
	(Internet Mail Connector in version 4.0), after changing the "forward all
	messages to host" IP address in the Connections\Message Delivery property page
	of the IMS, inbound mail may start to sit in the Inbound Waiting Delivery queue
	of the IMS and the administrator may start receiving the following
	notifications:
	
	  Internal processing error 4115. Message from the spool file J9QXJV0J
	  (J9ZffVLD) seems to be looping through the routing extension of the
	  Internet Mail Service (IMS). Please check that the routing DLL is
	  configured properly.
	
	The Administrator account, specified in the Internet Mail property page of the
	Internet Mail Service, gets the following notification:
	
	 From: System Administrator <postmaster@example.microsoft.com >
	    To: Administrator <Administrator@example.microsoft.com >
	    Subject: Notification: Inbound Mail Failure
	    Date: Wednesday, April 30, 1997 1:25 PM
	 
	  The following recipients did not receive the attached mail. Reasons are
	  listed with each recipient:
	
	  <administrator@example.microsoft.com >
	       administrator@example.microsoft.com
	  MSEXCH:IMS:Org Name:Site Name:Server Name 0 (00120270) Too Many Hops
	  <ddatsomo@example.microsoft.com > ddatsomo@example.microsoft.com
	  MSEXCH:IMS:Org Name:Site Name:Server Name 0 (00120270) Too Many Hops
	
	In Event Viewer, you might find the following error:
	
	  Unable to submit, send, or transfer out a message. Check
	     pr_recipient_number,
	     pr_recipient_type, pr_report_time. From MSExchangeIS private.
	
	Enabling and inspecting the SMTP protocol logging shows that the inbound messages
	were successfully received.
	
	CAUSE
	=====
	
	The Internet Mail Service may be configured to route mail to its own server.
	There are two ways to work around this incorrect configuration.
	
	WORKAROUND
	==========
	
	- If you are selecting "Reroute incoming SMTP mail using POP3" in the Internet
	  Mail Service Routing property page, then you must remove your own domain name
	  from the routing table in this property page. Also you must stop both the
	  Internet Mail Service and the MTA services, or better yet, restart the
	  server. If you do not stop these two services and restart them, the SMTP
	  routing changes will not take effect.
	
	  If there are no POP3 clients connected to this Exchange Server computer,
	  select the other option, "Do not route."
	
	- Check the Connected sites tab within the Property page of the IMS and remove
	  any entries in this property page if this Internet Mail Service is not
	  connecting to another Exchange Server site.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
