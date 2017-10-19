---
layout: page
title: "Q145944: X.400: Using X400adm.exe to Configure Settings"
permalink: /kb/145/Q145944/
---

## Q145944: X.400: Using X400adm.exe to Configure Settings

	Article: Q145944
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The X.400 Gateway Administrators program (X400adm.exe) is designed to help
	configure the local and remote MTAs and settings of the gateway. This program
	must be run against a postoffice with the X.400 gateway, version 3.2 or later.
	
	In cases where this program is executed against a postoffice with a version 3.0
	gateway installed, the gateway had various problems executing correctly.
	
	MORE INFORMATION
	================
	
	The X400adm program must be executed with the following command:
	
	  X400adm.exe Admin -P<password>
	
	where Admin is the administrator of the postoffice and <password> is the
	password on that account. This allows you to set up the MTA information, routing
	information for inbound and outbound mail, addressing, and gateway configuration
	settings.
	
	For additional information on how to use the X400adm.exe program, please see the
	Microsoft Mail Gateway to X.400 "Administrator's Guide," Chapters 5 and 6. In
	addition, the X400adm.exe program provides on-line help for all options
	available.
	
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300 kbMailGatex400320
	Version           : MS-DOS:3.0,3.2
	
	=============================================================================
	
