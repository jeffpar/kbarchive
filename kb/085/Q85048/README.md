---
layout: page
title: "Q85048: FFAPI: How FFAPI is Used in the Other Gateways"
permalink: kb/085/Q85048/
---

## Q85048: FFAPI: How FFAPI is Used in the Other Gateways

	Article: Q85048
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit: FFAPI for Gateways and Applications, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	All Microsoft Mail gateways use the File Format Application Programming
	Interface (FFAPI) to extract mail items from the database and insert mail items
	into the database.
	
	For incoming messages from a foreign system, the gateway processes the mail items
	and spawns *PUT.EXE to insert the mail items in the mail database.
	
	For outgoing messages, the gateway spawns *GET.EXE to extract the mail items from
	the mail database, processes the mail items, and transmits them to the foreign
	system.
	
	
	Additional query words: 3.00 pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch
	Version           : MS-DOS:3.0
	
	=============================================================================
	
