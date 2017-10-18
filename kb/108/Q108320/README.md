---
layout: page
title: "Q108320: Open(Station) Documented Incorrectly"
permalink: kb/108/Q108320/
---

## Q108320: Open(Station) Documented Incorrectly

	Article: Q108320
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The format of the Open(Station) request in the SNA Server 2.0 SNA Device
	Interface Specification (SNADIS) is documented incorrectly.
	
	MORE INFORMATION
	================
	
	On page 66 of the "SNA Device Interface Specification" (SNADIS), the last field
	provided in the Open(Station) request is incorrect.
	
	The following entry
	
	  dataru[s+44..s+45]<A0><A0>Maximum BTU size to be used with this station
	
	should be replaced by two fields: a link data field followed by a Maximum BTU
	size field. That is, the last line should become two lines as follows:
	
	  dataru[s+44..s+89]<A0><A0><A0><A0><A0>Copy of Link Data from Open(Link) request
	  dataru[s+90..s+91]<A0><A0><A0><A0><A0>Maximum BTU size to be used with this station
	
	Additional query words: prodsna SNADIS BTU
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
