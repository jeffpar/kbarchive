---
layout: page
title: "Q140524: SNA Server Event ID 18 Reports Incorrect Sense Data"
permalink: /kb/140/Q140524/
---

## Q140524: SNA Server Event ID 18 Reports Incorrect Sense Data

{% raw %}

	Article: Q140524
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Sense Data that is logged as part of the Event ID 18 description in the
	Windows NT application log is not logged accurately.
	
	This symptom occurs when SNA Server receives a BIND Negative Response or an
	UNBIND Request for an APPC session and logs Event ID 18 in the Windows NT
	application log.
	
	However, SNA Server traces do show the correct Sense Data for the error that is
	causing Event ID 18 to be logged.
	
	Note: Chapter 9 of the IBM SNA Formats Guide (GA27-3136) details IBM Sense Codes.
	
	CAUSE
	=====
	
	Event ID 18 is logging incorrect Sense Data because of the following two
	problems:
	
	- The secondary sense data (bytes 2 & 3) are being logged to a random
	  value.
	
	- If either the primary or secondary sense data have a value of 8000 or
	  greater, it is logged as FFFF8xxx.
	
	RESOLUTION
	==========
	
	Microsoft has updated the following files to correct this problem:
	
	  <snaroot>\SYSTEM\SNASERVR.EXE
	  <snaroot>\SYSTEM\TRCSERVR.EXE
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10 2.11 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
