---
layout: page
title: "Q141583: CONN: Setup Error Indicates Duplicate Gateway"
permalink: kb/141/Q141583/
---

## Q141583: CONN: Setup Error Indicates Duplicate Gateway

	Article: Q141583
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the Connection Gateway, you may get the following error
	message:
	
	  Error Detected
	
	  Setup has identified that this is a gateway postoffice for the Microsoft Mail
	  Connection. You cannot reinstall on a previously existing Connection. You may
	  remove the existing Connection and reinstall.
	
	CAUSE
	=====
	
	This error may occur under the following circumstances:
	
	- The postoffice specified is already a Connection Gateway postoffice.
	
	- The database has corruption in the form of discrepancies between the
	  MASTER.GLB and the NETWORK.GLB files. If this is the case, contact Microsoft
	  Product Support Service for further assistance.
	
	
	
	- If the PROXY NET/PROXY Postoffice (PO) (MACNET and MACPO) is already listed
	  in the MACGATE.INI file.
	
	  Notes:
	
	   - This may occur if you try to move the Connections Gateway from one
	     postoffice to another and you copy the MACGATE directory over to the
	     \MAILDATA directory on the new postoffice.
	
	   - Because the original postoffice had the Gateway installed, and it had the
	     Proxy NET/PO entry filled in the MACGATE.INI file, you will have problems
	     during Setup.
	
	RESOLUTION
	==========
	
	The MACGATE directory located in the MAILDATA directory files need to be reset.
	To reset, do the following:
	
	1. From a Macintosh with the Mail for PC Network (PC Mail) PO mounted from
	  Chooser, AppleShare, locate the old MACGATE folder.
	
	2. Highlight the MACGATE folder and rename it. (Any name other then MACGATE is
	  acceptable.
	
	3. From the Macintosh disk for the Connection Gateway GW, run the Installer
	  application. This will create a new MACGATE directory and needed files on PO.
	
	4. From an IBM-compatible computer attached to the PO using the PC disk, run
	  SETUP.EXE, and select Install GW
	
	5. From the Macintosh, log in as Network Manager onto the AppleTalk Mail server
	  that is used for the gateway.
	
	6. From the Mail menu, select Gateway, then Configuration.
	
	7. Check the proxy net and PO names, then select Update. This will synchronize
	  the AppleTalk Mail datafile with the MACGATE.INI file.
	
	
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q109256 Changing Mail Connection Proxy Network & Postoffice
	
	  Q109259 MACGATE.INI File Should Not Be Edited Manually
	
	
	Additional query words: 3.20 mac
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	
