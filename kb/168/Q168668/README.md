---
layout: page
title: "Q168668: SNA 3.0 Service Pack 2 Readme.txt File"
permalink: kb/168/Q168668/
---

## Q168668: SNA 3.0 Service Pack 2 Readme.txt File

	Article: Q168668
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a copy of the information in the Readme.txt file included
	in SNA Server 3.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	Microsoft SNA Server Version 3.0 Service Pack 2
	Electronic Release Notes
	
	September 30, 1997
	
	(c) Copyright Microsoft Corporation, 1997
	
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
	
	Ordering the SNA Server 3.0 Service Pack 2 CD
	----------------------------------------------
	
	Microsoft SNA Server 3.0 U.S. Service Pack 2 (SP2) is available 
	in CD media format by ordering from the Microsoft Order Desk
	at (800) 360-7561 (within the U.S., cost is $14.95 plus shipping and
	handling). Customers outside the U.S. should contact their Microsoft 
	subsidiary or local distributor and request the following part number:
	
	 SNA SERVER 3.0 SP2 CD
	 Part Number: 211-00141
	
	SNA Server 3.0 Service Pack 2 (SP2) includes all bug fixes 
	implemented since the initial SNA Server 3.0 release. In addition, 
	the 3.0 SP2 CD includes updated documentation, collateral, sample
	WEB-installable SNA Server Windows 95 client software, and SDK 
	(software development kit) files. 3.0 SP2 includes updated SNA 
	Server and client software for I386 (Intel) and DEC Alpha platforms.
	
	NOTE: Support for MIPS and Power PC platforms have been discontinued 
	and is not included in 3.0 SP2. 
	
	Downloading SNA Server 3.0 Service Pack 2
	------------------------------------------
	
	Self-extracting executable files containing updated 3.0 SP2 
	SNA Server and client files can be downloaded electronically 
	from www.microsoft.com, which points to:
	
	ftp://ftp.microsoft.com/bussys/winnt/sna-public/fixes/sna30/ussp2/ 
	
	The following files comprise the updated SNA Server and client 
	files for SNA Server 3.0 SP2:
	
	 30SP2TXT.EXE  - 3.0 SP2 Release Notes and Help File
	 30SP2IS.EXE   - 3.0 SP2 Server Update (Intel) (NOTE 1)
	 30SP2AS.EXE   - 3.0 SP2 Server Update (Alpha) (NOTE 1)
	 30SP2ICU.EXE  - 3.0 SP2 Windows NT Client Update (Intel)
	 30SP2ACU.EXE  - 3.0 SP2 Windows NT Client Update (Alpha)
	 30SP2CLU.EXE  - 3.0 SP2 Windows 3.x Client Update
	 30SP295U.EXE  - 3.0 SP2 Windows 95 Client Update
	 30SP2IHS.EXE  - 3.0 SP2 Host Security Update (Intel)
	 30SP2AHS.EXE  - 3.0 SP2 Host Security Update (Alpha)
	
	 30SP2ICR.EXE  - 3.0 SP2 Windows NT Client Refresh (Intel)
	 30SP2ACR.EXE  - 3.0 SP2 Windows NT Client Refresh (Alpha)
	 30SP295R.EXE  - 3.0 SP2 Windows 95 Client Refresh
	 30SP2CLR.EXE  - 3.0 SP2 Windows 3.x Client Refresh
	
	For information about changes implemented in 3.0 SP2, see the 
	SNA30SP2.HLP file included in 30SP2TXT.EXE, 30SP2IS.EXE or 
	30SP2AS.EXE.  SNA30SP2.HLP also lists new features added in the 
	service pack and articles describing the symptoms and causes for 
	problems fixed in the service pack. 
	
	NOTE 1: The SNA Server 3.0 SP2 includes updates to the SNA Server, 
	Print Service, TN3270 Service, TN5250 Service, ODBC drivers, AFTP, 
	and Shared Folders Gateway.
	
	Instructions for Decompressing Files
	------------------------------------
	
	All of the above files are Win32 self-extracting executables.  The 
	SNA Server and client update programs automatically extract and run 
	the Update program. For these Update programs to run automatically, 
	the server or client machine must have the following free disk space:
	
	 Server Update (Intel) - 30SP2IS.EXE:  95 MB 
	 Server Update (Alpha) - 30SP2AS.EXE:  105 MB
	 Windows NT Client Update (Intel) - 30SP2ICU.EXE: 28 MB
	 Windows NT Client Update (Alpha) - 30SP2ACU.EXE: 38 MB
	 Windows 95 Client Update         - 30SP295U.EXE: 13 MB
	
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
	
	   30SP2IS /x
	
	The SNA Server Windows 3.x client files (30SP2CLU.EXE, 30SP2CLR.EXE) 
	are Win32 self extracting executables that cannot be run directly 
	from a Windows 3.x machine. The administrator must first run the 
	refresh file and choose a directory to place the extracted files. 
	Windows 3.x clients may then connect across the network and run the 
	Update program to apply the service pack files.
	
	The SNA Server client refresh files (30SP2ICR.EXE, 30SP2ACR.EXE, 
	30SP295R.EXE, 30SP2CLR.EXE) include the full client code, which 
	already includes all 3.0 SP2 files. These refresh files each extract 
	into a user-defined directory, though the setup program is not run 
	automatically.
	
	NOTE: Unlike previous SNA Server service packs, there is no need 
	to extract the executable with the "-d" option.
	
	Installing the Service Pack Files
	---------------------------------
	Both the SNA Server and SNA client files have been updated in 3.0 
	SP2. Updates may be applied in any order -- to the server and/or to 
	the clients. It is recommended that all systems running SNA 
	Server 3.0 (that is, SNA Servers and client computers) are updated 
	to 3.0 SP2. It may not be necessary to update the client computers 
	to SP2 unless you are experiencing a client problem that has been 
	fixed in SP2.
	
	WARNING: This service pack update is intended to be applied on
	systems currently running SNA Server 3.0 server or client software.  
	These updates should NOT be applied over systems running SNA Server 
	2.x releases.
	
	** TO BE APPLIED TO SNA SERVER 3.0 SYSTEMS ONLY!! **
	
	Additional query words: readme release notes servpack snafaqtop
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP2
	Version           : WINDOWS:3.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
