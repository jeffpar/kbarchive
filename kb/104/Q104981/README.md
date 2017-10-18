---
layout: page
title: "Q104981: X400: Using the Mailer -MD Option to Improve Performance"
permalink: kb/104/Q104981/
---

## Q104981: X400: Using the Mailer -MD Option to Improve Performance

	Article: Q104981
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.2 of Microsoft Mail Gateway to X.400 includes the undocumented switch
	-MD to disable its Mailer component. The Mailer component distributes incoming
	messages on a Microsoft Mail for PC Networks postoffice.
	
	NOTE: This option can only be used when another process that also contains the
	Mailer code is not disabled and is running against the same Microsoft Mail
	postoffice. This other process can be the External Mail program (EXTERNAL.EXE)
	or any other gateway.
	
	MORE INFORMATION
	================
	
	Mailer is the component in the X.400 gateway that distributes a piece of mail to
	a user's mailbag or the outgoing queue of an externally defined postoffice.
	Mailer contains code that is shared among all gateways and the External Mail
	program executable files. If this component was not shared, all gateways would
	require the External Mail program to be running against the same postoffice as
	well.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
