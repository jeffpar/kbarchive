---
layout: page
title: "Q263702: XFOR: Service Pack Update Does Not Upgrade All Connectors"
permalink: /kb/263/Q263702/
---

## Q263702: XFOR: Service Pack Update Does Not Upgrade All Connectors

	Article: Q263702
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following connectors are not automatically updated when you upgrade to
	Exchange Server 5.5 Service Pack 3 (SP3) or Exchange Server 5.5 Service Pack 4
	(SP4):
	
	- Microsoft Exchange Connector for Lotus Notes
	
	- Microsoft Exchange Connector for Novell GroupWise
	
	- Microsoft Exchange Connector for SNADS
	
	- Microsoft Exchange Connector for IBM OfficeVision/VM
	
	MORE INFORMATION
	================
	
	To upgrade the connectors to Microsoft Exchange Server 5.5 SP3, go to the SP3
	compact disc, and then switch to the folder that contains the files for the
	connector that you wish to upgrade. The directories are as follows:
	
	- Connector for Lotus Notes:
	  <Language>\Exchconn\Setup\<Platform>\Setup\Ntsconn
	
	- Connector for Novell GroupWise:
	  <Language>\Exchconn\Setup\<Platform>\Setup\Gwconn
	
	- Connector for SNADS:
	  <Language>\Exchconn\Setup\<Platform>\Setup\Snaconn
	
	- Connector for OfficeVision/VM:
	  <Language>\Exchconn\Setup\<Platform>\Setup\Ovvconn
	
	where <Language> is the installed language for the server (for example, Eng
	is English), and where <Platform> is the processor platform (for example,
	I386 for Intel processors).
	Double-click the executable in the directory.
	
	For more information, see the Readme.rtf file that is located in the
	Exchsrvr\Connect\Exchconn folder of the SP3 compact disc after you install the
	connectors.
	
	Additional query words: update
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5 SP3,5.5 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
