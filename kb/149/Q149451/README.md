---
layout: page
title: "Q149451: XFOR: Failure While Accessing the Process Table"
permalink: /kb/149/Q149451/
---

## Q149451: XFOR: Failure While Accessing the Process Table

	Article: Q149451
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 23-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Exchange Server can be configured to participate in Directory
	Synchronization as a Requestor (DXA Requestor) to a MSMail PostOffice DirSync
	Server. Improperly including the DXA Requestor in the MSMail PO's Dispatch
	program (from the command line or Dispatch.ini) will result in the following
	error:
	
	  Failure while accessing the process table.
	
	This error can be found in the MSMail Dispatch Monitor and Dispatch.log.
	
	MORE INFORMATION
	================
	
	This error is a result of the MSMail Dispatch program's inability to read the
	Process.glb file of the Requestor. The Dispatch program polls PostOffices on the
	LAN for DirSync events. Dispatch.exe connects to PostOffices by logical drives.
	You specify the location of the PostOffices to be connected and indicate how
	they are to be connected from the command line, or in the Dispatch.ini. In this
	scenario, the Microsoft Exchange Server is a DXA Requestor and is erroneously
	included in the Dispatch process. While polling the DXA Requestor for DirSync
	events, the Dispatch program tries to read the DXA Requestor Connector
	PostOffice's Process.glb file. Although the Connector PO has a GLB subdirectory
	(Exchsrvr\Connect\Msmcon\Maildata\Glb), the Process.glb file is not present.
	
	Unlike MSMail Requestors, the DXA Requestor does not rely on the Dispatch program
	for DirSync processing, rather it processes its own T1 and T3 times. T1 is
	scheduled through the Configuration, Connections, <DXA Requestor>,
	Schedule property page. As for T3, the DXA Requestor dynamically applies the
	changes as soon as they arrive.
	
	Adding MSMail Requestors to the Dispatch.ini is routine for MSMail PostOffices;
	however, a Microsoft Exchange Server should not be added to the Dispatch
	process.
	
	NOTE: This error message will not prohibit the DirSync process from completing
	successfully.
	
	REFERENCES
	==========
	
	For additional information on using Directory Synchronization, refer to Chapter
	14 of the Microsoft Exchange Server Administrator's Guide, "Synchronizing
	Directories with Other Systems."
	
	For additional information on the Dispatch program, refer to Chapter 14 of the
	Microsoft Mail Administrator's Guide, "The Dispatch Program."
	
	For information on performing manual DirSync with Microsoft Exchange Server as
	the Requestor, refer to article Q148309.
	
	Additional query words: faq
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
