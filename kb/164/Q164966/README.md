---
layout: page
title: "Q164966: Print Session Status Remains &quot;Spooling&quot;"
permalink: kb/164/Q164966/
---

## Q164966: Print Session Status Remains &quot;Spooling&quot;

	Article: Q164966
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print 3270 print jobs through the SNA Server 3.0 Print Service, the
	first job will print successfully, but all other jobs for that printer LU will
	stop responding, and the status of the printer will display "Spooling"
	indefinitely.
	
	CAUSE
	=====
	
	The host sends an initial BID request to open a bracket for the first document
	to print. The Host Print Service sends a +RSP, and the job is correctly printed.
	If there is a second print job queued on the host when the first job ends, SNA
	Server immediately receives a new BID request from the host. But the Host Print
	Service never sends any response, so the job stops responding.
	
	RESOLUTION
	==========
	
	A fix is available to correct this problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
