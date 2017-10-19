---
layout: page
title: "Q182576: PRB: NT Client Does Not Support Dynamic Def of Invokable TPs"
permalink: /kb/182/Q182576/
---

## Q182576: PRB: NT Client Does Not Support Dynamic Def of Invokable TPs

	Article: Q182576
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot dynamically define invokable Advanced Program-to-Program
	Communication or Common Programming Interface for Communications (APPC/CPIC)
	transaction programs (TPs) on an SNA Server Windows NT client. When a new
	invokable TP is defined in the registry, you must stop and restart the SnaBase
	process to recognize the presence of the new TP.
	
	NOTE: The SNA Server Windows 95 client has supported this feature since SNA
	Server version 3.0.
	
	CAUSE
	=====
	
	The SNA Server Windows NT client was not originally designed to support the
	dynamic definition of new invokable TPs.
	
	RESOLUTION
	==========
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack.
	
	For additional information and to download this service pack, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	After you apply this update, any Windows NT program may notify the SnaBase
	service that a new TP has been installed on the computer by signaling the
	SNABASE_NEWTP_EVENT event. When this event is signaled, SnaBase re-reads the
	local registry to find the newly installed, invokable TPs.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
