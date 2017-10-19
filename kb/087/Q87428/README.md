---
layout: page
title: "Q87428: PROFS: How Import/Export Feature Works for PROFS Addresses"
permalink: /kb/087/Q87428/
---

## Q87428: PROFS: How Import/Export Feature Works for PROFS Addresses

	Article: Q87428
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Import/Export function in the Admin program allows the gateway LAN
	administrator to synchronize address lists with the VM host manually.
	
	When you select the Import function (from the Admin program's Gateway menu,
	choose PROFS, then select Import), you can choose to import VM addresses from
	some or all of the VM nodes to which you can connect. The resulting request is
	sent through the gateway, and the Host Access component programs create a file
	of VM user addresses. This file is subsequently downloaded to the MS Mail
	postoffice, and automatically inserted into the database.
	
	When you select Export, the administrator chooses the PROFS gateways to which to
	send the list of local MS Mail users and groups. This list is sent to the
	gateway(s) as a typical MS Mail message with attachments. The Host Access
	component programs forward these items to the VM ID specified to receive such
	lists (DIRECTORY_ID in the PWAINIT EXEC file).
	
	REFERENCES
	==========
	
	"Microsoft Mail Gateway to IBM PROFS and OfficeVision LAN Administrator's
	Guide"
	
	
	Additional query words: 3.00 pcmail profslan import export
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	
