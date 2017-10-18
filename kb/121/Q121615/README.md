---
layout: page
title: "Q121615: NCP Requirements for LU 6.2"
permalink: kb/121/Q121615/
---

## Q121615: NCP Requirements for LU 6.2

	Article: Q121615
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SNA Server 2.1 Data Sheet incorrectly lists the following host system
	requirements:
	
	- VTAM Version 3 Release 2 or later
	
	- NCP Version 5 Release 2.1 or later
	
	SNA Server is supported against earlier versions of NCP and VTAM software. The
	above version levels were attempting to document host software levels necessary
	to support independent LU6.2 communication. Dependent LU6.2 is supported by
	earlier versions of NCP and VTAM software. While independent LU6.2 supports
	parallel sessions over a single APPC LU, dependent LU6.2 is limited to a single
	session per APPC LU.
	
	There are no known NCP or VTAM version requirements to support host 3270
	configurations or dependent LU6.2.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0
	Issue type        : kbinfo
	
	=============================================================================
	
