---
layout: page
title: "Q118786: FFAPI: The Role of Application FFAPI"
permalink: kb/118/Q118786/
---

## Q118786: FFAPI: The Role of Application FFAPI

	Article: Q118786
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit: FFAPI for Gateways and Applications, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Application FFAPI and Gateway FFAPI are similar in that they allow you to
	send/receive messages from/to an MMFF (Microsoft Mail File Format) file. They
	differ in that Application FFAPI sends/receives messages as a single Microsoft
	Mail user while Gateway FFAPI sends/receives messages as a pseudo Microsoft Mail
	postoffice. This difference makes Application FFAPI resemble the MS-DOS client.
	
	APPPUT.EXE (or the large-model version, LAPPPUT.EXE) allows you to "put" an MMF
	file message into the Microsoft Mail database, where it is treated the same as
	any other message. For example:
	
	  APPPUT -iname:password -dm -f2 xyz.txt
	
	APPGET.EXE (or the large model version, LAPPGET.EXE) allows you to "get" a
	message from the Microsoft Mail database and put it into an MMFF file. For
	example:
	
	  APPGET -iname:password -dm -f2 xyz.txt
	
	APPDIR.EXE (or the large model version, LAPPDIR.EXE) allows you to get a
	postoffice address list from the Mail system and place it in an output file. For
	example:
	
	  APPDIR -iname:password -dm -leNET/PO1 xyz.txt
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch
	Version           : MS-DOS:3.0
	
	=============================================================================
	
