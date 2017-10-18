---
layout: page
title: "Q164663: Windows NT Client Config Tool Sets Incorrect Registry Entry"
permalink: kb/164/Q164663/
---

## Q164663: Windows NT Client Config Tool Sets Incorrect Registry Entry

	Article: Q164663
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Client Configuration Tool (Ntconfig.exe) for the Windows NT SNA Server 3.0
	client incorrectly specifies REG_SZ as the data type for the following registry
	entry:
	
	  HKEY_LOCAL_MACHINE
	     \SYSTEM
	        \CurrentControlSet
	           \Services
	              \SnaBase
	                 \Parameters
	                    \Transports
	
	
	CAUSE
	=====
	
	The Windows NT SNA Client Configuration Tool incorrectly set the data type for
	the Transports registry value to REG_SZ instead of REG_MULTI_SZ.
	
	RESOLUTION
	==========
	
	The Windows NT SNA 3.0 Client Configuration Tool has been updated so that it
	creates the correct data type for this registry value.
	
	The updated file is:
	
	  <Snaroot>\System\Ntconfig.exe
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
