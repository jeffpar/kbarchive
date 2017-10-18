---
layout: page
title: "Q148996: Attachmate Advanced Coax Adapter Fails w/Event 23 Qualifier 11"
permalink: kb/148/Q148996/
---

## Q148996: Attachmate Advanced Coax Adapter Fails w/Event 23 Qualifier 11

	Article: Q148996
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Attachmate Advanced Coax Adapter may fail with Event 23, Qualifier 11 (DSR
	failure) if the hardware resources are not set to the following:
	
	      Base Address: CE000
	  I/O Port address: 2D0
	               IRQ: 2
	
	
	These settings must also match on the card using jumper settings. See the
	Attachmate Coax adapter documentation for details on how to change these
	settings.
	
	The SNA Server IBM DFT driver must be selected in SNA Server Setup if you use the
	Attachmate Advanced Coax Adapter, which emulates an IBM 3278/3279 Emulation
	adapter.
	
	KBCategory: kb3rdparty
	KBSubcategory: sna3rdparty
	
	Additional query words: 2.00 2.10 2.11 2.11.sp1 service pack 1
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbinfo
	
	=============================================================================
	
