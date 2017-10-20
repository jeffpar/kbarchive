---
layout: page
title: "Q160884: SNA Server and &quot;Bidirectional APPC&quot; Support"
permalink: /kb/160/Q160884/
---

## Q160884: SNA Server and &quot;Bidirectional APPC&quot; Support

{% raw %}

	Article: Q160884
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	APPC is a peer-oriented program-to-program API where either Transaction Program
	(TP) can initiate a conversation. However, APPC / LU6.2 traditionally is
	half-duplex, as defined by IBM in the LU6.2 "base option set". Under half-duplex
	operation, once the converation is established, only one TP has direction to
	send on a conversation at a time. The state of the conversation, as viewed by a
	particular TP, governs which APPC verbs can be issued by the TP at a particular
	time.
	
	IBM now supports "full duplex" APPC where either program can issue both send and
	receive verbs at the same time, as well as non-blocking APPC operation, which
	are relatively new APPC option sets defined by IBM.
	
	These option sets are:
	
	112 -- Full-duplex conversations and expedited data
	113 -- Non-blocking support
	
	IBM defines these option sets in the IBM Transaction Programmer's Reference
	Manual for LU Type 6.2 (IBM document number GC30-3084).
	
	SNA Server does not support option set 112 or 113. SNA Server only supports
	half-duplex operation, though either end can initiate the conversation. SNA
	Server implements non-blocking support for APPC and CPIC API's for 16- bit and
	32-bit Windows per the Windows APPC and CPIC specifications, though these
	specifications do not follow the IBM-defined option set 113.
	
	See Chapter 1 of the SNA Server Reference Guide for a list of LU6.2 option sets
	supported by SNA Server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	
	=============================================================================
	

{% endraw %}
