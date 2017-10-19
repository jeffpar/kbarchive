---
layout: page
title: "Q174033: XFOR: Performance Tuning a 16Mbps Token Ring Network for PROFS"
permalink: /kb/174/Q174033/
---

## Q174033: XFOR: Performance Tuning a 16Mbps Token Ring Network for PROFS

	Article: Q174033
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible for Microsoft Exchange Administrators to improve performance of
	the Microsoft Exchange PROFS connector over the Microsoft SNA Server connection.
	The following information may be helpful in reaching that goal.
	
	MORE INFORMATION
	================
	
	The following actions improve the performance of the PROFS connector over SNA:
	
	1. Maximizing the SNA Basic Transmission Unit (BTU) size.
	
	  On a 16Mbps SNA Token-Ring network, the maximum SNA BTU size is 16393. To
	  support this configuration the Token Ring Driver must be able to handle this
	  packet size. In the Control Panel, click the Network icon, click the Adapters
	  tab, and configure the Token Ring driver. If the maximum size is not
	  configurable, consult your card vendor for the maximum packet size permitted.
	  For maximum performance, select a reasonable packet size above 1K byte on a
	  token ring network.
	
	2. Update BTU in the 802.2 setup profile.
	
	  In the SNA, select a BTU size that is smaller than the packet size. A
	  reasonable BTU size ranges between 1929 and 16393 bytes (16K+9). This
	  parameter must be less than or equal to the VTAM MAXDATA size. The RSCS PARM
	  Buffer Size can be configured to control the RU size of the mail session.
	  Configure the RSCS PARM B parameter to support RU size larger than 3K. This
	  can be accomplished using an updated version of WINRUI32.DLL supplied by
	  Microsoft or in the latest Microsoft SNA Server Service Pack.
	
	3. Configuring the Host side:
	
	  The VTAM MAXDATA parameter should be configured to take advantage of the
	  token-ring high bandwidth. It must match the BTU size specified in the SNA
	  Server mentioned above.
	
	4. For information about Maximizing the IND$FILE 3270 Host file Transfer
	  Throughput, please see the following article in the Microsoft Knowledge
	  Base:
	
	  Q125881 Maximizing IND$FILE 3270 Host File Transfer Throughput
	
	Additional query words: linakge sna profs 802.5
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
