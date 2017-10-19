---
layout: page
title: "Q140382: SNA Server Internal Traces Do Not Log SNA Server Version"
permalink: /kb/140/Q140382/
---

## Q140382: SNA Server Internal Traces Do Not Log SNA Server Version

	Article: Q140382
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
	
	The SNA Server version number is not logged in SNA Server internal traces when
	they are enabled for diagnostic purposes.
	
	This symptom occurs whether the internal traces are enabled on the SNA Server
	computer or SNA Server client computers.
	
	RESOLUTION
	==========
	
	Microsoft has updated the file <snaroot>\SYSTEM\SNATRC.DLL to improve SNA
	Server tracing. SNA Server now queries the SNA Server version information from
	certain SNA Server files. When the internal trace files are created or wrapped,
	the file names and their versions are written as part of the file header. The
	following are the SNA Server files for which version information is obtained:
	
	  SNABASE.EXE
	  SNASERVR.EXE
	  SNADMOD.DLL
	  SNALINK.DLL
	  SNALINK.EXE
	  SNACFG.DLL
	  SNAMANAG.DLL
	  SNAADMIN.EXE
	
	Note: The update only applies to the SNA Server server and the 32-bit SNA Server
	clients (Windows NT & Windows 95). The update does not apply to 16- bit
	(Windows 3.x) clients.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10 2.11 3.50 3.51 snatrace
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
