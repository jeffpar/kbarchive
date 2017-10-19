---
layout: page
title: "Q87186: PROFS: Using Microsoft Comm Server and the PROFS Gateway"
permalink: /kb/087/Q87186/
---

## Q87186: PROFS: Using Microsoft Comm Server and the PROFS Gateway

	Article: Q87186
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Comm Server version 1.1 with the DCA-DFT emulation API works with all
	versions of the Microsoft Gateway to IBM PROFS and OfficeVision.
	
	MORE INFORMATION
	================
	
	When you instal the gateway, the Install program prompts for the type of 3270
	emulation program being used. Select option 3 (for DCA-nonCUT or DCA-DFT). This
	copies the correct version of the HostDisp (or VMGATE) program to the
	executables directory.
	
	Installing Comm Server on the gateway PC is done separately, by following the
	instructions supplied with the Comm Server product. Below is a sample batch
	file, showing how Comm Server is loaded on a typical gateway PC. This batch file
	assumes that LAN Manager is already loaded, and the workstation is logged into
	the network.
	
	  SET PATH=C:\COMMSRV\RBIN;%path%
	
	  @REM DO NOT DELETE -- Comm Server setup begins mark
	  lh SHARE
	  lh c:\COMMSRV\DEV\COMNDIS 5
	  lh c:\COMMSRV\RBIN\REMNAP \\comsvr
	  @REM DO NOT DELETE -- Comm Server setup ends mark
	
	  c:\commsrv\rbin\dos3270m
	
	In the above batch file, the gateway PC is connecting to a server called
	"\\comsvr".
	
	
	Additional query words: 3.00 pcmail profslan CommServer 3270 DCA-DFT
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	
