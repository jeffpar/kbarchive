---
layout: page
title: "Q140816: EHNAPPC Data Stream Header Data Being Passed to TP"
permalink: /kb/140/Q140816/
---

## Q140816: EHNAPPC Data Stream Header Data Being Passed to TP

{% raw %}

	Article: Q140816
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
	
	When using mapped APPC conversations with the Enhanced Router API (EHNAPPC.DLL),
	transaction programs (TPs) receive the extra data even though they should not.
	
	CAUSE
	=====
	
	When sending data, the SNA Server EHNAPPC.DLL is passing the extra 4-byte Basic
	APPC conversation header into the APPC data stream when using a MAPPED
	conversation. However, it should ignore the 4-byte header. The header consists
	of:
	
	- 2 bytes that are reserved for LL field designation.
	
	- 2 bytes for the length of the data field.
	
	RESOLUTION
	==========
	
	Microsoft modified the EHNAPPC.DLL file so that it only passed up the data to
	the transaction program, not the 4-byte header.
	
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
