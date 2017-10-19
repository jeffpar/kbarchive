---
layout: page
title: "Q87206: PROFS: Tools Available to Configure Gateway"
permalink: /kb/087/Q87206/
---

## Q87206: PROFS: Tools Available to Configure Gateway

	Article: Q87206
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail Gateway to IBM PROFS and OfficeVision can be configured and
	customized using Admin program options, gateway program command-line options,
	character translation options, and sample gateway batch files.
	
	The Admin program allows the LAN administrator to define PROFS nodes and user
	addresses and export/import address lists. You can also define connections to
	other indirect PROFS gateways.
	
	The gateway program (HostDisp or VMGATE) has many command-line options that can
	be used to customize the gateway's operation. These options are all listed in
	the LAN administrator's guide; however, you can also print a list by typing
	HostDisp ? (or VMGATE ?) at the MS-DOS prompt.
	
	The translation tables for ASCII/EBCDIC characters can be modified by the gateway
	administrator. If single characters must be changed, the CHARDISP utility
	supplied with the gateway component disks can be used. If you want to use a
	different language character set (for example, Spanish), new translation tables
	can be transferred to the gateway's 191 "A" disk.
	
	With version 3.0 of the Microsoft Mail Gateway to IBM PROFS and OfficeVision,
	sample gateway batch files are provided in the SAMPLES directory on disk 4 of
	the gateway component. There are three batch files, with varying degrees of
	complexity. You can use these files to automate and customize the execution of
	the gateway program.
	
	REFERENCES
	==========
	
	"Microsoft Mail Gateway to IBM PROFS and OfficeVision LAN Administrator's
	Guide"
	
	
	Additional query words: 3.00 pcmail profslan configure customize Admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	
