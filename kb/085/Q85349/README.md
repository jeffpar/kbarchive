---
layout: page
title: "Q85349: FAX: Changes Made to the Mail Database During Installation"
permalink: kb/085/Q85349/
---

## Q85349: FAX: Changes Made to the Mail Database During Installation

	Article: Q85349
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	During installation of the gateway component of the Microsoft Mail Gateway to
	Fax, these changes are made to the Microsoft Mail database:
	
	- An entry for the fax gateway is created in the NETWORK.GLB file.
	
	- A mailbag file is created for the gateway, in the MBG directory.
	
	- A fax subdirectory is created under the mail data directory.
	
	- The following files are copied to the executables directory:
	
	  FAXGTW.EXE
	  MAKEDCX.EXE
	  TIF2DCX.EXE
	  PROFILE.EXE
	
	- The following files are copied to the TPL directory:
	
	  FAXCOV.TPL
	  FAXATT.TPL
	
	- The following files are copied to the FAX directory:
	
	  FAXLOGO.PCX
	  RRS.FAX
	
	- The PROFILE.GLB file is copied is copied to the GLB directory.
	
	During installation of the access component of the Microsoft Mail Gateway to Fax,
	the following changes are made to the Microsoft Mail database:
	
	- The MASTER.GLB and NETWORK.GLB files are verified.
	
	- FAX.GLB is created in the GLB directory.
	
	- FAX.NME is created in the NME directory
	
	- FAX.TPL and FAXSTD.TPL are copied to the TPL directory.
	
	- FAX.HLP is copied to the HLP directory.
	
	In Microsoft Mail version 2.1a, there is no PROFILE.EXE file.
	
	
	Additional query words: 3.00 data 2.1a pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
