---
layout: page
title: "Q263211: AS/400 APPC Controller Goes to RCYPND When Connection Is Stopped"
permalink: /kb/263/Q263211/
---

## Q263211: AS/400 APPC Controller Goes to RCYPND When Connection Is Stopped

{% raw %}

	Article: Q263211
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If SNA Server has an active LU6.2 (APPC) session to an IBM AS/400 system over a
	switched line (for example Token Ring or Ethernet), and the connection or SNA
	Server service is stopped, the APPC controller on the AS/400 may change to an
	RCYPND (Recovery Pending) state. When you restart SNA Server or the connection,
	the connection remains in a Pending state until the AS/400 APPC controller is
	manually varied off and on again by an AS/400 administrator.
	
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	RESOLUTION
	==========
	
	Contact IBM to obtain the latest cumulative PTF for the appropriate OS/400
	version. To order the latest cumulative PTF from IBM, use the following IBM
	order numbers:
	
	- OS/400 V4R1 - SF99410
	
	- OS/400 V4R2 - SF99420
	
	- OS/400 V4R3 - SF99430
	
	- OS/400 V4R4 - SF99440
	
	Specific PTF information for the appropriate OS/400 release is as follows:
	
	- OS/400 V3R1 - There is no PTF fix for this release. V3R1 is not Y2K compliant
	  and IBM no longer supports this release.
	
	- OS/400 V3R2 - The latest cumulative PTF is 98139, but it does not contain the
	  fix. You need to order the fix separately. The fix is included in the V3R2
	  Y2K Group PTF SF99201. You can also get the individual PTF for V3R2 through
	  SF56344.
	
	- OS/400 V4R3 - The latest cumulative fix is 9077 and includes this fix. The
	  V4R3 Y2K Group PTF SF99200 (same number for V3R7 - V4R4) also includes the
	  fix. The individual PTF for this fix is SF53861.
	
	- OS/400 V4R4 - The V4R4 Y2K Group PTF 9049 includes this fix. The individual
	  PTF for this fix is SF58794.
	
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	

{% endraw %}
