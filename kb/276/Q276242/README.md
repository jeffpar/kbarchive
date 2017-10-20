---
layout: page
title: "Q276242: SNA Service Table Objects Increased from 1 KB to 4 KB"
permalink: /kb/276/Q276242/
---

## Q276242: SNA Service Table Objects Increased from 1 KB to 4 KB

{% raw %}

	Article: Q276242
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On an SNA Server or Microsoft Windows NT workstation that is running the SNA
	Windows NT client software, the following event may be posted in the application
	log of the event viewer:
	
	  Event ID: 563
	
	  Description: The service table is full: too many network resources active
	
	These events are typically seen on SNA Servers where many different SNA clients
	are running transaction programs (TPs) that can be invoked.
	
	CAUSE
	=====
	
	The Service Table (ST) has reached the maximum objects allowed.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 4.0, 4.0
	SP1, 4.0 SP2, 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.NOTE: There is
	no hot fix for SNA Server 3.0, however this feature is included in Host
	Integration Server 2000. This feature only applies to SNA Server and the SNA
	WinNT client, not the SNA Windows 95 or Windows 98 client.
	
	MORE INFORMATION
	================
	
	All SNA Server services and resources are required to register themselves in the
	SNA Service Table. All SNA Servers (and SNA clients) have there own ST that is
	used internally to manage the resources that are being used on that computer.
	Because the ST is a dynamic-memory allocated table, the SNA Server service (and
	SNA clients) locates the needed services through the ST within that current SNA
	Server subdomain. Some examples are:
	
	- One entry for every SNA Server service that is running in the domain.
	
	- One entry for every SNA Server configuration server (SnaBase) that is running
	  in the domain (that is, primary and back-up servers).
	
	- One entry for each active Windows process that uses the client API interfaces
	  (for example, the 3270 and 5250 Applets each take one entry).
	
	- One entry for every TP that can be invoked that is registered on the client
	  computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
