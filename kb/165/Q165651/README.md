---
layout: page
title: "Q165651: Some SNA Server Binaries Show Incorrect Version"
permalink: kb/165/Q165651/
---

## Q165651: Some SNA Server Binaries Show Incorrect Version

	Article: Q165651
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
	
	The following SNA Server files do not show the correct version when using the
	Snaver.exe program or when you view the Properties page:
	
	  Hostsec.dll
	  Snaadmin.dll
	  Snaole.dll
	  Snapage.dll
	  Snawiz.dll
	
	The files may show a version of "1,0,0,1" which is incorrect.
	
	CAUSE
	=====
	
	The files were built with incorrect version information.
	
	NOTE: This will not affect the functionality of the product.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: explorer snaexp save configuration
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
