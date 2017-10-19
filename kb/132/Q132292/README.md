---
layout: page
title: "Q132292: At Work Fax Queue Limit"
permalink: /kb/132/Q132292/
---

## Q132292: At Work Fax Queue Limit

	Article: Q132292
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can set At Work Fax to store unsent faxes in a queue for trans-mission at a
	later time. At Work Fax can store a maximum of 75 faxes in the queue at one
	time. If you exceed this number of stored faxes, you may receive one of the
	following error messages:
	
	- A general protection (GP) fault in FAXOPT.DLL.
	
	- An Undeliverable Mail message stating that the fax transport has run out of
	  memory.
	
	Or, the computer may stop responding (hang) or become unstable.
	
	
	MORE INFORMATION
	================
	
	When At Work Fax places a fax in the queue, it renders the message and prepares
	it for transmission by the fax modem, storing the message as a file in the TEMP
	directory. Queued fax messages have a EFSND<nn>.EFX filename, where
	<nn> is a number from 01 to 75.
	
	FAXOPT.DLL is the At Work Fax module that is responsible for managing the queue.
	This module takes EFSND<nn>.EFX files from the TEMP directory and spools
	them to the modem. It also has an internal buffer for keeping track of the
	number of fax messages and the priority of each message.
	
	You may encounter the queue size limitation if you are using a shared network fax
	that has send times set to Cheap Rates rather than ASAP, or if you perform a
	mail merge to Electronic Fax in Microsoft Word for Windows and the number of
	messages sent to the fax queue exceeds 75.
	
	
	Additional query words: 3.11 gpf
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
