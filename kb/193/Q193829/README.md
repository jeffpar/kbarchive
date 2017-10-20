---
layout: page
title: "Q193829: SNAPMP Memory Leak After Host-Initiated Password Change"
permalink: /kb/193/Q193829/
---

## Q193829: SNAPMP Memory Leak After Host-Initiated Password Change

{% raw %}

	Article: Q193829
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a password change is received and processed, a memory leak of 150 bytes
	per password change is observed.
	
	CAUSE
	=====
	
	The Windows NT Account Synchronization service is responsible for synchronizing
	passwords between a host and a Windows NT domain.
	
	SNAHOSTPROCESS and SNAPMP work together to synchronize host-initiated password
	changes. SNAHOSTPROCESS is controlled by the Host Account Synchronization
	service. SNAHOSTPROCESS sends host-initiated password changes to SNAPMP via
	encrypted RPC. SNAPMP is not releasing the memory allocated for RPC responses
	during this process.
	
	RESOLUTION
	==========
	
	SNA Server version 3.0
	----------------------
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. To resolve this problem, contact Microsoft
	Product Support Services to obtain the fix. For a complete list of Microsoft
	Product Support Services phone numbers and information on support costs, please
	go to the following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  File Name     Date       Time
	  ------------------------------
	  Snapmp.exe   09/15/98   11:42
	  Hostproc.exe 09/15/98   11:42
	
	NOTE: Due to file dependencies, the most recent fix that contains the above files
	may also contain additional files.
	
	
	SNA Server version 4.0
	----------------------
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
