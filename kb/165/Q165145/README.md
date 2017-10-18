---
layout: page
title: "Q165145: SMS: An Exception 0E Has Occurred at 0028:3204F83 in VxD"
permalink: kb/165/Q165145/
---

## Q165145: SMS: An Exception 0E Has Occurred at 0028:3204F83 in VxD

	Article: Q165145
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Invdos generates the following error during the hardware inventory of a client
	computer running Windows 95:
	
	  An exception 0E has occurred at 0028:3204F83 in VxD ---. This was called from
	  0028:C0041FDD in VxD NDIS(01) + 00000CED. It may be possible to continue
	  normally.
	
	  Press any key to attempt to continue.
	
	This error occurs on notebook computers which have Chips and Technologies, Inc.
	video adapters and Xircom PE-CE2-10 PC Cards and/or 3Com EtherLink III network
	interface cards installed. After the error occurs, network connectivity is
	lost.
	
	NOTE: This problem may also occur after applying Service Pack 2.
	
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. Create a file named Smssafe.tmp in the Ms\Sms\Data directory on the client
	  computer running Windows 95. The file should contain only the following line:
	
	        Video=Crashed
	
	2. Run inventory on the client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server 1.2 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms win95 NDIS VxD
	
	======================================================================
	Keywords          : kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
