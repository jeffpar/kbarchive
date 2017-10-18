---
layout: page
title: "Q128826: Mac Srv: Server Settings Memory Incorrect on System 7.5"
permalink: kb/128/Q128826/
---

## Q128826: Mac Srv: Server Settings Memory Incorrect on System 7.5

	Article: Q128826
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade the Macintosh running Microsoft Mail for AppleTalk Networks to
	System 7.5, the Mail Server extension may fail to load (a red X will appear in
	the icon), and the following alert will appear:
	
	  The Microsoft Mail Server could not be loaded because there is not enough
	  memory for all your Startup (INIT) documents.
	
	CAUSE
	=====
	
	Under System 7.5, the amount of memory that can be allocated to the Microsoft
	Mail Server has been reduced to approximately 20% of the available memory when
	the Server is run as an extension, versus 50% under older Systems. There is no
	limit (except the amount of available memory) when the Server is run as an
	application.
	
	This limit can be a problem when you upgrade from an older System version to
	System 7.5. If the memory allocation for the Server is greater than 20% of the
	available memory, the Server will not load.
	
	The exact amount of memory that can be allocated to the Mail Server depends upon
	the type of Macintosh and any other System Extensions and Control Panels that
	are loaded at startup.
	
	RESOLUTION
	==========
	
	When you upgrade to System 7.5, do the following steps:
	
	1. From the Apple menu, choose About this Macintosh. Record the amount of memory
	  reported.
	
	2. Log in to Mail as Network Manager.
	
	3. From the Mail menu, choose Server Settings... Set the Server memory
	  allocation to 20% of the memory recorded in step 1.
	
	4. Restart the Macintosh, and install System 7.5
	
	5. Restart the Macintosh again. If the Microsoft Mail Server does not load, then
	  follow the steps below:
	
	If the Macintosh has been upgraded to System 7.5, and the Microsoft server does
	not start, do the following steps:
	
	1. Run Mail Tools.
	
	2. Set the Server Allocation to 20% of the available memory.
	
	3. Restart the Macintosh.
	
	4. If the Server Setting is already at 20%, then reduce the setting by 100K
	  increments until the Server loads.
	
	5. Sign in to Mail as Network Manager. From the Mail menu, choose Server
	  Settings, Server Memory Allocation, and check the amount of memory that can
	  be allocated to Mail.
	
	Alternatively, use Mail Tools to convert the Mail Server to an application, Get
	Info on the server application to set the amount of memory used, and put the
	application in the Startup folder.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
