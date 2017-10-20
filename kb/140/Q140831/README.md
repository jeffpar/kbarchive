---
layout: page
title: "Q140831: Cannot Build APPC Library DTRACS.LIB"
permalink: /kb/140/Q140831/
---

## Q140831: Cannot Build APPC Library DTRACS.LIB

{% raw %}

	Article: Q140831
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	DTRACS.LIB fails to build because the module APPC_C.C does not compile for
	MS-DOS.
	
	MS-DOS support for Windows APPC applications is provided by linking with the
	call-level interface library called DOSACS.LIB. DTRACS.LIB is the traced version
	of DOSACS.LIB, used for debugging an MS-DOS APPC transaction program (TP).
	
	CAUSE
	=====
	
	This problem occurs because full internal tracing is turned on.
	
	RESOLUTION
	==========
	
	The makefile was updated to decrease the hard coded trace severity for
	APPC_C.C.
	
	Microsoft has updated the file <SNA_CD_Root>\SDK\LIB\MSDOS\DTRACS.LIB to
	correct this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
