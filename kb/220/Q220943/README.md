---
layout: page
title: "Q220943: SNA Server Unattended Setup Parameter ServerLoginDomain"
permalink: kb/220/Q220943/
---

## Q220943: SNA Server Unattended Setup Parameter ServerLoginDomain

	Article: Q220943
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the unattended Setup program is used to install the SNA Server software in an
	environment with multiple domains, it may be necessary to specify the
	ServerLoginDomain parameter in the Snasetup.ini file.
	
	MORE INFORMATION
	================
	
	If SNA Server is located in a resource domain, the ServerLoginDomain name should
	be the name of the master domain and not the name of the resource domain where
	SNA Server is actually located. The ServerUserId parameter should be set to
	reflect the user account in the domain specified by ServerLoginDomain. If the
	ServerLoginDomain paramater is set to be the name of the resource domain where
	SNA Server is located, the Setup program will not be able to locate the UserId
	specified in the ServerUserId parameter, and the installation will not complete
	successfully.
	
	REFERENCES
	==========
	
	Additional information about automating SNA Server installations may be found in
	the on-line SNA Server Getting Started documentation.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbinfo
	
	=============================================================================
	
