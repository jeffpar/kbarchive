---
layout: page
title: "Q145886: How to Distinguish Between SNA Server 2.11 and 2.11 SP1."
permalink: /kb/145/Q145886/
---

## Q145886: How to Distinguish Between SNA Server 2.11 and 2.11 SP1.

	Article: Q145886
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SNA Server version 2.11 U.S. Service Pack 1 is a cumulative build of all fixes
	to SNA Server version 2.11. SNA Server is shipped in U.S. and Japanese versions.
	No other localized versions are available.
	
	MORE INFORMATION
	================
	
	The following are methods to determine whether you have SNA Server 2.11 or SNA
	Server 2.11 with Service Pack 1:
	
	1. Run the SNA Server version checking utility (SNAVER.EXE):
	
	   - Run <snaroot>\system\snaver
	
	   - Select the Browse button
	
	   - Select snaadmin.exe in <snaroot>\system\ directory
	
	   - The version will be:
	
	  211.0.294 for 2.11
	
	  211.0.309 for 2.11 SP1
	
	  NOTE: SNAAdmin version can also be checked by loading SNA Server Admin and
	  selecting Help, and then "About SNA Server Admin".
	
	2. Check the SNA Server Program group:
	
	  Under 2.11 SP1, the "SNA Server Service Pack #1" icon appears by default in
	  the SNA Server group icon.
	
	3. Check the registry:
	
	  Under /HKLM
	          /Software
	            /Microsoft
	              /SNA Server
	                /CurrentVersion
	                  SNAVersion: REG_SZ: 2.11
	
	  -or-
	
	                  
	                  SNAVersion: REG_SZ: 2.11 Service Pack 1
	
	4. Check the dates on the binaries:
	
	  SNA Server 2.11 Service Pack 1: SNAServr.exe - 1/5/96
	
	  SNA Server 2.11         : SNAServr.exe - 6/27/95
	
	
	
	To find out more information on bug fixes and enhancements that distinguish SNA
	Server 2.11 from SNA Server 2.11 SP1, see the SNASP1.HLP file that accompanies
	the Service Pack.
	
	Additional query words: prodsna 2.11 sp1 bug fix
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbinfo
	
	=============================================================================
	
