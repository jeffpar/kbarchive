---
layout: page
title: "Q131786: SNA Setup Fails When Installing 33rd DLC 802.2 Link Service"
permalink: /kb/131/Q131786/
---

## Q131786: SNA Setup Fails When Installing 33rd DLC 802.2 Link Service

	Article: Q131786
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to install the 33rd SNA Server DLC 802.2 link service, SNA Server
	Setup fails with the following error:
	
	  The installation process failed
	
	CAUSE
	=====
	
	The SNA Server setup program generates a unique link service name during
	installation of SNA Server DLC 802.2 link services. The link service names are
	generated as follows:
	
	  SNADLC1, SNADLC2, ... SNADLC9, SNADLCA, SNADLCB ... SNADLCU
	
	However, after SNADLCU, the link service name generation fails, causing a link
	service name of SNADLC to be generated for the 32nd, and all additional, link
	services. When the 33rd link service is installed (with a name of SNADLC), the
	32nd link service already exists with that name.
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade to SNA Server version 2.11. Link service names
	are now generated using 1 or 2 digit index with base 36. For example:
	
	  SNADLC1, SNADLC2, ... SNADLC9, SNADLCA, ... SNADLCZ, SNADLC10, SNADLC11,
	  SNADLC12, ... SNADLC19, SNADLC1A ... SNADLC1Z, SNADLC20, ...
	
	There is no workaround for customers using SNA Server 2.0 or 2.1. These versions
	are limited to 32 unique 802.2 link services.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0 and 2.1.
	This problem was corrected in SNA Server version 2.11.
	
	
	MORE INFORMATION
	================
	
	This restriction only affects customers who want SNA Server to emulate more than
	32 physical units to the same host system, through a single host TIC address. In
	this configuration, a unique link service must be defined for each PU, where
	each link service would be configured with a unique local SAP address. For more
	information, see Q107192.
	
	Because multiple connections to the same AS/400 are not supported, AS/400
	connections are not affected For more information, see Q131625.
	
	SNA Server supports up to 128 unique 802.2 connections over a single 802.2 link
	service. The restriction described here affect only configurations involving
	more than 32 802.2 link services.
	
	Each 802.2 link service configured over a given adapter must have a unique SAP
	address. The first SNA SAP address is 0x4, with subsequent SAP addresses
	specified in multiples of 4 (for example, 0x04, 0x08, 0x0c, 0x10, 0x14, etc.),
	through 0xEC (addresses from 0xF0-FF can't be used). Because the SAP address is
	a single digit, only 59 SNA SAP addresses (and, thus SNA DLC 802.2 link
	services) can be configured over one adapter.
	
	Because the problem exists in SNA Setup when generating a link service name,
	regardless of the number of LAN adapters installed in the server, adding a
	second LAN adapter does not alleviate the problem.
	
	Additional query words: prodsna 2.00 2.10 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
