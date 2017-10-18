---
layout: page
title: "Q324717: PRB: Connection Stays Pending for AS/400 with Gigabit Adapter"
permalink: kb/324/Q324717/
---

## Q324717: PRB: Connection Stays Pending for AS/400 with Gigabit Adapter

	Article: Q324717
	Product(s): Microsoft SNA Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsna400sp4 Kbhostintegserv2000
	Last Modified: 16-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Currently, IBM has two supported gigabit-capable adapters for AS/400 systems.
	However, neither adapter supports the Systems Network Architecture (SNA)
	protocol at gigabit speeds. One adapter supports SNA at 10/100 speeds, and the
	other adapter supports gigabit only.
	
	Because these AS/400 network adapters do not support SNA traffic, when you try to
	connect from a computer that is running SNA Server or Host Integration Server,
	the connection remains in a pending state. Eventually, the connection reports
	the following event in the Application event log:
	
	  Event 230 - Source: SnaServer
	  Remote station not responding to test commands
	
	MORE INFORMATION
	================
	
	According to the following 1Gb Ethernet Adapter Frequently Asked Question
	(http://www-1.ibm.com/support/techdocs/atsmastr.nsf/PubAllNum/FQ100839) IBM Web
	site:
	
	  The Gigabit Ethernet Adapter Card (feature 2743) is a one gigabit per second
	  input/output adapter (IOA) that supports only TCP/IP and full-duplex mode.
	  The sending and receiving channels can transfer data at approximately one
	  Gbps. The IOA supports the IEEE 802.3 and the Ethernet Version 2 standards.
	  It also supports frame sizes that include 1496 to 8996 bytes. This card
	  attaches to the 2842 PCI IOP, or 2843 PCI IOP.
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words: gigabyte
	
	======================================================================
	Keywords          : kbsna400sp4 Kbhostintegserv2000 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
