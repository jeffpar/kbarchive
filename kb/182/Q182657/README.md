---
layout: page
title: "Q182657: SNA Server May Use Max BTU Larger Than Connection Can Support"
permalink: kb/182/Q182657/
---

## Q182657: SNA Server May Use Max BTU Larger Than Connection Can Support

	Article: Q182657
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Server may use a Maximum BTU (that is, maximum frame size) length greater
	than the configured host connection can support if the remote device (that is,
	mainframe or AS/400) specifies a maximum frame size greater than 32,000 bytes
	during its XID exchange with SNA Server.
	
	This problem was observed while testing SNA Server using a channel connection to
	a mainframe. The channel link service reported back to the SNA Server service
	that it could support a Maximum BTU length of 16,393 bytes. The mainframe
	indicated that it could support a maximum frame size of 38,400 bytes during the
	XID exchange with SNA Server. Instead of using the smaller value of 16,393, SNA
	Server used 38,400 as the Maximum BTU length.
	
	One of the possible consequences of SNA Server and the remote device using a
	Maximum BTU length greater than the underlying connection (that is, channel,
	802.2/DLC, and so on) can support is an application exception in the SNA Server
	link service.
	
	NOTE: SNA Server service internal and data link control message traces during
	connection activation are needed to determine the Maximum BTU length that will
	be used for the configured connections.
	
	CAUSE
	=====
	
	The SNA Server service does not correctly handle the Maximum BTU length limits
	if the maximum length is greater than 32,000 bytes, because the parameters that
	handle these limits are incorrectly defined as integers instead of unsigned
	short integers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 3.0 SP3. Microsoft is researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem was corrected in the latest SNA Server version 4.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	For more information about how SNA Server determines the Maximum BTU length for
	802.2/DLC connections, please refer to the following Knowledge Base article:
	
	  Q148972 How SNA Server Determines Max BTU Over 802.2 DLC
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
