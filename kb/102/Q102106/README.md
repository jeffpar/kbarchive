---
layout: page
title: "Q102106: PROFS: Using the IBM SENDFILE Command with PROFS Gateway"
permalink: kb/102/Q102106/
---

## Q102106: PROFS: Using the IBM SENDFILE Command with PROFS Gateway

	Article: Q102106
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to PROFS, version 3.0 
	-------------------------------------------------------------------------------
	
	The IBM VM operating environment allows you to send individual files
	from one VM ID to other VM IDs on the same node or on other connected
	VM nodes, through the use of the IBM SENDFILE command.
	
	With version 3.0 of Microsoft Mail Gateway to PROFS, VM users can send
	individual files and information to users on a Microsoft Mail postoffice
	using the same SENDFILE command.
	
	To send information to Microsoft Mail users, use this format for the
	SENDFILE command:
	
	  sendfile <filename> <filetype> <filemode> to
	  <username> at <gtwynode>
	
	
	You can also send files by using the IBM SPOOL and PUNCH commands.
	
	REFERENCES
	==========
	
	- IBM VM "Command Reference Guide"
	
	- Microsoft Mail Gateway to PROFS and OfficeVision
	
	Additional query words: 3.00 sendfile files
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	
