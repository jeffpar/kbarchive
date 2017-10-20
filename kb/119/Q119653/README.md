---
layout: page
title: "Q119653: VTAM 3.4.2 PTF UY97878 Solves LU6.2 Problem"
permalink: /kb/119/Q119653/
---

## Q119653: VTAM 3.4.2 PTF UY97878 Solves LU6.2 Problem

{% raw %}

	Article: Q119653
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbhw kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 kbHar
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you activate and use independent LU6.2 sessions through an IBM 3172
	interconnect controller (configured as an external adapter) attached to VTAM
	version 3.4.2, the LU6.2 session may hang or APPC allocation errors may occur.
	
	SNA Server does not encounter these problems when communicating through an IBM
	37x5 front end processor, to VTAM 3.4.2.
	
	RESOLUTION
	==========
	
	This problem is solved when you apply IBM PTF #UY97878, which includes an update
	to VTAM 3.4.2, when VTAM is implementing a boundary function.
	
	Contact IBM to request this update.
	
	The IBM product discussed here is manufactured by International Business Machines
	Corp. (IBM), a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding this product's performance or reliability.
	
	MORE INFORMATION
	================
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbhw kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 kbHardware 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	
	=============================================================================
	

{% endraw %}
