---
layout: page
title: "Q116375: FAX: WIN.INI File Entries Added During Installation"
permalink: kb/116/Q116375/
---

## Q116375: FAX: WIN.INI File Entries Added During Installation

	Article: Q116375
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0,3.0a; WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2 
	- Microsoft Mail Gateway to Fax, versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 7 of the "Microsoft Mail Fax User's Guide," says that "Microsoft Fax adds
	the printer driver to the WIN.INI file in the following format":
	
	  [Microsoft Fax, Port]
	
	Under normal circumstances, the Microsoft Fax adds the printer driver to the
	[PrinterPorts] and [Devices] sections in the WIN.INI file.
	
	Here is an example of the default entries added to the WIN.INI file:
	
	  [Microsoft Fax]
	  TempDrive=
	
	  [PrinterPorts]
	  Microsoft Fax=MSFAX,LPT1:,15,45
	
	  [Devices]
	  Microsoft Fax=MSFAX,LPT1:
	
	Additional query words: port docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b kbMailGateFax300 kbMailGateFax300a
	Version           : MS-DOS:3.0,3.0a; WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
