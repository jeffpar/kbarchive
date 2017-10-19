---
layout: page
title: "Q139375: Dependent LU 6.2 Configuration for SNA Server"
permalink: /kb/139/Q139375/
---

## Q139375: Dependent LU 6.2 Configuration for SNA Server

	Article: Q139375
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop kbnetwork kbsetup
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SNA Server can be configured for Dependent LU 6.2.
	
	MORE INFORMATION
	================
	
	Pages 111-115 of the SNA Server 2.1 or 2.11 Admin Guide show a comprehensive
	Independent LU6.2 configuration. Dependent LU6.2 is the same with the following
	differences:
	
	Dependent LU 6.2
	----------------
	
	- Relies on the existence of an SSCP (System Services Control Point) at the
	  host end (VTAM).
	
	- The VTAM locaddr entry for the APPC LU must be greater than 0. In SNA Server,
	  the local address is configured in the Local APPC LU dialog within SNA Admin.
	  For example: DANL109 LU LOCADDR=9,DLOGMOD=APPCMODE
	
	- You must select "LU 6.2 Type: Dependent" under SNA Server Admin local LU
	  properties dialog box.
	
	- Mode definition (Both SNA Server and the host's mode must match)
	
	   - PSERVIC must be: PSERVIC=X'0602000000000000002C00'
	
	   - Parallel session Limit must be 1.
	
	Independent LU 6.2
	------------------
	
	- Does not rely on an SSCP (i.e. VTAM). Independent LU6.2 is supported directly
	  between SNA PU2.1 capable nodes.
	
	- Locaddr in LU Definition must be 0. For example: DANL112 LU
	  LOCADDR=0,DLOGMOD=#INTER
	
	- You must select "LU 6.2 Type: Independent" under SNA Server Admin local LU
	  properties dialog box.
	
	- Mode definition (Both SNA Server and the host's mode must match)
	
	   - PSERVIC must be: PSERVIC=X'0602000000000000002F00'
	
	   - Parallel session limit is not limited to 1, but can be 1.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kb3rdparty kbinterop kbnetwork kbsetup 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbinfo
	
	=============================================================================
	
