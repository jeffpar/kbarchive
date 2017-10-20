---
layout: page
title: "Q164646: BUG: Windows 95 ODBC Driver Traps During ODBC Installation"
permalink: /kb/164/Q164646/
---

## Q164646: BUG: Windows 95 ODBC Driver Traps During ODBC Installation

{% raw %}

	Article: Q164646
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
	
	When using the ODBC Admin tool to install the ODBC driver on a double-byte
	character set (DBCS) version of Windows 95, the SNA Server 3.0 Windows 95 ODBC
	driver may encounter an access violation (AV).
	
	CAUSE
	=====
	
	The Windows 95 SNA Client setup program copies the TrnsDt"x".dll files into the
	Sna\System directory, instead of <Winroot>\System directory, causing an
	access violation during ODBC driver installation.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below.
	
	The updated module is:
	
	  Clients\Win95\Snafile.inf
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna sna30
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
