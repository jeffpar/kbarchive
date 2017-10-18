---
layout: page
title: "Q233366: SNA Server 3.0 Service Pack 4 Readme.txt File"
permalink: kb/233/Q233366/
---

## Q233366: SNA Server 3.0 Service Pack 4 Readme.txt File

	Article: Q233366
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0SP4
	Operating System(s): 
	Keyword(s): kbsna300sp4
	Last Modified: 27-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a copy of the information in the Readme.txt file included
	in SNA Server 3.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	Microsoft SNA Server Version 3.0 Service Pack 4
	Electronic Release Notes
	
	Revision History:
	- 5/26/99: Initial posting
	
	Copyright Microsoft Corporation, 1997, 1998, 1999
	
	These materials are provided "as-is," for informational purposes 
	only.
	
	Neither Microsoft nor its suppliers makes any warranty, express 
	or implied with respect to the content of these materials or the 
	accuracy of any information contained herein, including, without 
	limitation, the implied warranties of merchantability or fitness 
	for a particular purpose. Because some states/jurisdictions do 
	not allow exclusions of implied warranties, the above limitation 
	may not apply to you.
	
	Neither Microsoft nor its suppliers shall have any liability for 
	any damages whatsoever including consequential incidental, direct, 
	indirect, special, and loss profits. Because some states/ 
	jurisdictions do not allow exclusions of implied warranties, the 
	above limitation may not apply to you. In any event, Microsoft's 
	and its suppliers' entire liability in any manner arising out of 
	these materials, whether by tort, contract, or otherwise shall 
	not exceed the suggested retail price of these materials.
	
	=====================================================================
	
	Ordering the SNA Server 3.0 Service Pack 4 CD
	----------------------------------------------
	
	Microsoft SNA Server 3.0 U.S. Service Pack 4 (SP4) is available 
	in CD media format under part number 211-00334. The CD can be 
	ordered by customers within the U.S. and Canada through the Microsoft 
	Order Desk at (800) 360-7561. The cost is US $14.95 (CDN $19.95) plus 
	customer service and handling charges of US $7.95 (CDN $12) per order. 
	Customers outside the U.S. should contact their Microsoft subsidiary 
	or local distributor and request the SNA Server 3.0 SP4 CD part 
	number 211-00334.
	
	SNA Server 3.0 Service Pack 4 (SP4) includes all bug fixes 
	implemented since the initial SNA Server 3.0 release. In addition, 
	the 3.0 SP4 CD includes updated documentation, collateral, sample
	WEB-installable SNA Server Windows 95 client software, and SDK 
	(software development kit) files. SNA 3.0 SP4 includes updated SNA 
	Server and client software for I386 (Intel) and DEC Alpha platforms.
	
	NOTE: Support for MIPS and Power PC platforms have been discontinued 
	and is not included in 3.0 SP4. 
	
	Downloading SNA Server 3.0 Service Pack 4
	------------------------------------------
	
	Self-extracting executable files containing updated 3.0 SP4 
	SNA Server and client files can be downloaded electronically 
	from www.microsoft.com, which points to:
	
	ftp://ftp.microsoft.com/bussys/winnt/sna-public/fixes/sna30/ussp4/ 
	
	The following files comprise the updated SNA Server and client 
	files for SNA Server 3.0 SP4:
	
	 30SP4TXT.EXE  - 3.0 SP4 Release Notes and Help File
	 30SP4IS.EXE   - 3.0 SP4 Server Update (Intel) (NOTE 1)
	 30SP4AS.EXE   - 3.0 SP4 Server Update (Alpha) (NOTE 1)
	 30SP4ICU.EXE  - 3.0 SP4 Windows NT Client Update (Intel)
	 30SP4ACU.EXE  - 3.0 SP4 Windows NT Client Update (Alpha)
	 30SP4CLU.EXE  - 3.0 SP4 Windows 3.x Client Update
	 30SP495U.EXE  - 3.0 SP4 Windows 95 Client Update
	 30SP4IHS.EXE  - 3.0 SP4 Host Security Update (Intel)
	 30SP4AHS.EXE  - 3.0 SP4 Host Security Update (Alpha)
	
	For information about changes implemented in 3.0 SP4, see the 
	SNA30SP4.HLP file included in 30SP4TXT.EXE, 30SP4IS.EXE or 
	30SP4AS.EXE.  SNA30SP4.HLP also lists new features added in the 
	service pack and articles describing the symptoms and causes for 
	problems fixed in the service pack. 
	
	NOTE 1: The SNA Server 3.0 SP4 includes updates to the SNA Server, 
	Print Service, TN3270 Service, TN5250 Service, ODBC drivers, AFTP, 
	and Shared Folders Gateway.
	
	Instructions for Decompressing Files
	------------------------------------
	
	All of the above files are Win32 self-extracting executables.  The 
	SNA Server and client update programs automatically extract and run 
	the Update program. For these Update programs to run automatically, 
	the server or client machine must have the following free disk space:
	
	 Server Update (Intel) - 30SP4IS.EXE:  95 MB 
	 Server Update (Alpha) - 30SP4AS.EXE:  107 MB
	 Windows NT Client Update (Intel) - 30SP4ICU.EXE: 28 MB
	 Windows NT Client Update (Alpha) - 30SP4ACU.EXE: 38 MB
	 Windows 95 Client Update         - 30SP495U.EXE: 13 MB
	
	When running Update automatically, please note the following:
	
	- before update is run, all files are automatically extracted to the 
	 directory where the TMP, TEMP, or WINROOT environment variable is 
	 pointing (trying in that order). So, if the SET command shows that 
	 TMP=C:\TMP , and C: does not have sufficient storage to extract the 
	 files, change TMP to point to a drive which has sufficient space.  
	 For example:  
	
	   SET TMP=D:\TEMP
	
	- to extract the files into a separate directory without running update
	 automatically, run the service pack update file using the /x option. 
	 For example:
	
	   30SP4IS /x
	
	- Once the files have been extracted using the "/x" option, the Update 
	 program may be invoked manually to apply the service pack. Use the 
	 "UPDATE /?" command to view the command line options to support 
	 quiet and batch mode installation options.
	
	The SNA Server Windows 3.x client file (30SP4CLU.EXE) is a Win32
	self extracting executable that cannot be run directly from a 
	Windows 3.x machine. The administrator must first run the file
	and choose a directory to place the extracted files. Windows 3.x 
	clients may then connect across the network and run the Update 
	program to apply the service pack files.
	
	The update files upgrade existing SNA Server 3.0, 3.0 SP1, 3.0 SP2,
	or 3.0 SP3 systems to SNA Server 3.0 SP4. Unlike previous service 
	packs, no 3.0 SP4 client refresh binaries are provided for installation 
	of new client systems. For new client systems, install a previous
	version of the SNA 3.0 client software (any service pack) and apply 
	the 3.0 SP4 Update.
	
	NOTE: Unlike previous SNA Server service packs, there is no need 
	to extract the executable with the "-d" option.
	
	Installing the Service Pack Files
	---------------------------------
	Both the SNA Server and SNA client files have been updated in 3.0 
	SP4. Updates may be applied in any order -- to the server and/or to 
	the clients. It is recommended that all systems running SNA 
	Server 3.0 (that is, SNA Servers and client computers) are updated 
	to 3.0 SP4. It may not be necessary to update the client computers 
	to SP4 unless you are experiencing a client problem that has been 
	fixed in SP4.
	
	WARNING: This service pack update is intended to be applied on
	systems currently running SNA Server 3.0 server or client software.  
	These updates should NOT be applied over systems running SNA Server 
	2.x or 4.x releases.
	
	** TO BE APPLIED TO SNA SERVER 3.0 SYSTEMS ONLY!! **
	
	Additional query words: release notes servpack
	
	======================================================================
	Keywords          : kbsna300sp4 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0SP4
	
	=============================================================================
	
