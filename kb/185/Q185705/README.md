---
layout: page
title: "Q185705: TCP/IP Address Changes to NetBIOS Name on Windows 95 SNA Client"
permalink: /kb/185/Q185705/
---

## Q185705: TCP/IP Address Changes to NetBIOS Name on Windows 95 SNA Client

	Article: Q185705
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 22-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you configure the SNA Server client for Windows 95 with multiple sponsor
	servers, the following may be noticed when viewing the Sponsor Server list at a
	later time:
	
	- The sponsor server entries have been changed to NetBIOS names even though
	  they were originally entered as IP Addresses.
	
	- The sponsor server entries may be listed in a different order from the way
	  they were originally listed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 3.0 SP3. We are researching this problem in versions 3.0, 3.0
	SP1, 3.0 SP2, and 3.0 SP3 and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for SNA Server
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The list of sponsor servers can be viewed using the SNA Client Configuration
	(snabase.exe /config) or by using the registry under the following entry:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SnaBase\Parameters\Sponsor
	
	Additional query words: sponsor client Win95
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
