---
layout: page
title: "Q282240: Critical update message repeats when trying to sign in to MSN Ex"
permalink: kb/282/Q282240/
---

## Q282240: Critical update message repeats when trying to sign in to MSN Ex

	Article: Q282240
	Product(s): The Microsoft Network
	Version(s): 6.0,6.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 6.0, 6.1 
	- The Microsoft Network Version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You attempt to sign in to MSN Explorer, but get a message that a critical update
	must be downloaded first. After the download and installation are complete, you
	get the same critical update message when trying to sign in to MSN Explorer.
	This process repeats indefinitely.
	
	CAUSE
	=====
	
	This is typically caused by a corrupt registration of the file msxml.dll.
	
	RESOLUTION
	==========
	
	1. Click Start.
	
	2. Click Run.
	
	3. Type in regsvr32 msxml.dll and click OK.
	
	After a few seconds, you should receive a message saying that the registration
	was successful.
	
	Additional query words: msn explorer
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN600 kbMSN610 kbMSN700
	Version           : :6.0,6.1
	Issue type        : kbprb kbinfo
	
	=============================================================================
	
