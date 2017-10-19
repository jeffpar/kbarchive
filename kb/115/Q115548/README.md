---
layout: page
title: "Q115548: FAX: Err Msg: Profile Error: Incorrect or Missing Printer Path"
permalink: /kb/115/Q115548/
---

## Q115548: FAX: Err Msg: Profile Error: Incorrect or Missing Printer Path

	Article: Q115548
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Mail Gateway to FAX generates the following error message upon
	startup:
	
	  Profile error: Incorrect or Missing PRINTER PATH description
	
	CAUSE
	=====
	
	The Fax gateway requires access to the Microsoft Mail utility PPB.EXE--part of
	the Microsoft Mail MS-DOS workstation software used to access .DCX-formatted fax
	images. This message indicates that the gateway cannot find this file.
	
	If the fax software directory SATISFAX is missing from the gateway postoffice
	\MAILDATA structure, the above error can occur.
	
	This error can also occur if the FAX gateway files: DCX2TIF.EXE and TIF2DCX.EXE
	are missing from the mail executable directory where FAXGTW.EXE is installed.
	
	RESOLUTION
	==========
	
	PPB.EXE must be accessed in the location specified in the printer path field of
	the PROFILE.GLB file.
	
	Install the Microsoft Mail MS-DOS workstation software; in addition to PPB.EXE,
	the software contains files that enable the Fax gateway to print incoming faxes
	and a printer driver.
	
	To install the MS-DOS workstation software:
	
	1. Install the Microsoft Mail MS-DOS client.
	
	2. Modify the PROFILE.GLB printer path field to select the drive and path of the
	  MS-DOS client. Use the PROFILE.EXE editor.
	
	3. Run the MS-DOS client DISPLAY.EXE program and select Setup, Other, Driver to
	  select a printer driver. This creates the file SNAPSHOT.DRV.
	
	4. Run the PROFILE.EXE editor and change the Fax In field to SPOOL or
	  SPOOL+VIEW. This enables the Fax gateway to print incoming faxes.
	
	NOTE: If you do not want to install the workstation software, the PPB.EX$ file is
	located on Disk 7 of versions 3.2 and 3.5 Microsoft Mail for PC Networks disks.
	
	If the fax software directory SATISFAX is missing, restore the directory and its
	subdirectories from backup or reinstall the fax board software.
	
	Additional query words: 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax300 kbMailGateFax300a
	Version           : MS-DOS:3.0,3.0a
	
	=============================================================================
	
