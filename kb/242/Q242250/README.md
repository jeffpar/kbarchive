---
layout: page
title: "Q242250: XFOR: Exchange Connectors Require Separate Service Pack Install"
permalink: kb/242/Q242250/
---

## Q242250: XFOR: Exchange Connectors Require Separate Service Pack Install

	Article: Q242250
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Exchange Server connectors use the Microsoft Exchange Connectivity Controller.
	When you run the standard Update.exe program to update the Exchange Server
	computer, the Exchange Connectivity Controller requires a separate service pack
	installation. You can perform the Exchange Connectivity Controller service pack
	installation by running another executable in the folder for that specific
	connector.
	
	MORE INFORMATION
	================
	
	To apply the service pack for the following Exchange Server connectors
	
	- Microsoft Exchange Calendar Connector
	
	- Microsoft Exchange Connector for Lotus Notes
	
	- Microsoft Exchange Connector for Novell GroupWise
	
	- Microsoft Exchange Connector for IBM OfficeVision/VM (PROFS) (also known as
	  Microsoft Exchange Connector for IBM OV/VM)
	
	- Microsoft Exchange Connector for SNADS
	
	from the root of the CD-ROM, run the executable files that are located in the
	following folder
	
	  Eng\Exchconn\Setup\<platform>
	
	where <platform> is either the I386 processor platform for computers with
	Intel processors or the Alpha processor platform for computers with Digital
	Equipment Corporation (DEC) or Compaq Alpha processors.
	
	The following table describes which subfolder corresponds to the appropriate
	connector service pack setup.
	
	+------------------------------------------------------------------------+
	| Folder  | Connector                                                    | 
	+------------------------------------------------------------------------+
	| Calcon  | Microsoft Exchange Calendar Connector                        | 
	+------------------------------------------------------------------------+
	| Ntsconn | Microsoft Exchange Connector for Lotus Notes                 | 
	+------------------------------------------------------------------------+
	| Gwxconn | Microsoft Exchange Connector for Novell GroupWise            | 
	+------------------------------------------------------------------------+
	| Ovvconn | Microsoft Exchange Connector for IBM OfficeVision/VM (PROFS) | 
	+------------------------------------------------------------------------+
	| Snaconn | Microsoft Exchange Connector for SNADS                       | 
	+------------------------------------------------------------------------+
	
	To apply the service pack, run the executable file in the appropriate folder.
	
	For example, for the Exchange Connector for Lotus Notes you need to run the
	Ntsconn.exe executable file that is located in the
	SPCD\Eng\Exchconn\Setup\I386\Ntsconn folder.
	
	Additional query words: calcon notescon gwconn profs coco
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
