---
layout: page
title: "Q178252: Control Unit Image Number Not Available to ESCON Link Service"
permalink: kb/178/Q178252/
---

## Q178252: Control Unit Image Number Not Available to ESCON Link Service

	Article: Q178252
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When implementing an ESCON channel link service (such as the Polaris ESCON
	channel link service), SNA Server was not providing the control unit (CU) image
	number to the link service, which significantly complicates ESCON channel link
	configuration.
	
	CAUSE
	=====
	
	SNA Server was not originally designed to return the control unit image number
	to the channel link service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 (including SP1
	and SP2). This feature has been added to SNA Server 3.0 (post SP2) and allows
	the SNA Server to return the Control Unit image number in dataru[s+24] of the
	Open(Link) response.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Note that the ESCON channel link service must be written to recognize the Control
	Unit image number. Contact your link service vendor to determine if this is the
	case. If so, to make use of this new feature, the updated SNACFG.DLL must be
	applied and the configuration file must be resaved using SNA Server Manager.
	
	MORE INFORMATION
	================
	
	The Polaris ESCON link service version 2.14 (with the v1.12 version of the
	Polaris ESCON configuration DLL) supports the ability to use the Control Unit
	image number. Here is some additional background describing what the control
	unit image number is used for:
	
	The control unit image is an ESCON feature. It allows a physical control unit to
	support up to 16 logical control units. The CU image corresponds to the "CUADD"
	parameter in the CNTLUNIT IOCP macro or the Logical Address in HCD.
	
	The Polaris ESCON link service supports a maximum of 250 devices over a maximum
	of 16 CU images. The change to SNA Server makes it easier for customers to
	configure SNA Server to use ESCON. Currently, in order to allow the customer to
	use multiple CU images, the customer must configure the link service with the
	devices they need on each CU image. Then they use the number in the channel
	address box of the connection to specify an index into a table made from the
	link service configuration. Here's an example:
	
	Actual configuration:
	
	  CU Image  Base Device Address  Num Devices
	     0               20              4
	     2               40              2
	     3               20              4
	
	Channel addresses to input into SNA Server configuration:
	
	  Channel Address   CU Image - Device Address
	       00                  0 - 20
	       01                  0 - 21
	       02                  0 - 22
	       03                  0 - 23
	       04                  2 - 41
	       05                  2 - 42
	       06                  3 - 20
	       07                  3 - 21
	       08                  3 - 22
	       09                  3 - 23
	
	This makes configuration more difficult. With this new feature, customers still
	must configure the link service as before because the ESCON channel adapter
	needs to know at initialization (ie. when SNA Server is started) which devices
	it will be using. But in the connection properties the user can put in address
	20 CU image 0 instead of just address 00 and so on.
	
	The link service configuration has a check box which allows the user to choose to
	use the new method. This is not done automatically. The link service has to be
	told which of the two methods is in use since the field that contains the CU
	image was 0 for old version of SNA Server, but 0 is a valid CU image.
	
	
	Regarding the use of the Polaris ESCON link service, this change will not affect
	users who don't want or need to change their link service configuration. They
	will still be able to update the link service and driver to newer version with
	having to redo any part of their configuration.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
