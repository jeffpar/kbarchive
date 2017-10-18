---
layout: page
title: "Q151824: FoxPro Query May Return Inaccurate Results with FPNW"
permalink: kb/151/Q151824/
---

## Q151824: FoxPro Query May Return Inaccurate Results with FPNW

	Article: Q151824
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 22-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run a query in FoxPro and the temp files for the client are located on
	a File and Print Services for NetWare (FPNW) server, your results may be
	incorrect. This appears to only happen with Netx clients. VLM clients do not
	appear to be affected in any way.
	
	WORKAROUND
	==========
	
	Use one of the three methods below to resolve this issue:
	
	- Locate the temp files on the client or on a NetWare server.
	
	  -OR-
	
	- Use the VLM client.
	
	  -OR-
	
	- Contact Microsoft Product Support for a software update.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	NetWare version 3.51. This problem was corrected in the latest Windows NT 3.51
	U.S. Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt FPNW
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbServicesNetwareSearch kbFPNW351
	Version           : winnt:3.51
	
	=============================================================================
	
