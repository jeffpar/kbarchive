---
layout: page
title: "Q193817: SNA Server Event ID 11 Missing Description Information"
permalink: kb/193/Q193817/
---

## Q193817: SNA Server Event ID 11 Missing Description Information

	Article: Q193817
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,4.0,4.0SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 10-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 4.0, 4.0SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view a Windows NT application event log from a computer running SNA
	Server 4.0, the event viewer may display the following event detail for an Event
	11 message:
	
	Event ID: 11 Source: SNA Server Description: The description for Event ID ( 11 )
	in source ( SNA Server) could not be found. It contains the following insertion
	string(s): 1178
	
	CAUSE
	=====
	
	SNA Server is logging Event 11 as a "Warning", though the message is defined as
	an "Error" in the Snaevent.dll file.
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	Microsoft has confirmed this to be a problem in SNA Server versions 4.0 and 4.0
	Service Pack 1. This problem was corrected in the latest SNA Server version 4.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 and 4.0. This
	problem was first corrected in SNA Server 3.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,4.0,4.0SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
