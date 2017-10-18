---
layout: page
title: "Q195808: XCLN: Unexpected Behavior Downloading GAL with Exchange Client"
permalink: kb/195/Q195808/
---

## Q195808: XCLN: Unexpected Behavior Downloading GAL with Exchange Client

	Article: Q195808
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When downloading the offline Address Book (OAB) from a Microsoft Exchange Server
	computer using the Microsoft Exchange Client, the global address list may not be
	downloaded correctly. Instead, another Address Book container or Address Book
	view may be downloaded.
	
	MORE INFORMATION
	================
	
	This behavior is by design.
	
	This situation occurs when all of the following conditions are met:
	
	- The client version is earlier than Exchange Client 5.0 Service Pack 1.
	
	- The Microsoft Exchange Server 5.0 or later computer is configured to use
	  multiple Address Books in the OAB.
	
	- The global address list is included as one of the Address Books in the OAB.
	
	As an example, assume the following two containers are added to the OAB under the
	DS Site Configuration container:
	
	  Global Address List
	  Recipients
	
	In this situation, Exchange Client 4.0 or 5.0 will download the Recipients
	container, instead of the global address list.
	
	Additional query words: moab wrong incorrect synchronize
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
