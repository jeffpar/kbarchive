---
layout: page
title: "Q153517: PGC Does Not Look For Current Connections"
permalink: /kb/153/Q153517/
---

## Q153517: PGC Does Not Look For Current Connections

	Article: Q153517
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smsgeneral smspgc kbArtTypeINF
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	Program Group Control (PGC) maps new drive connections even if a current
	connection already exists.
	
	CAUSE
	=====
	
	When running a PGC application that requires a drive letter, PGC does not look
	for an existing connection to the server from which the application is being
	run. Although PGC detects a universal naming convention (UNC) connection, it
	cannot detect a connection that is mapped to a drive letter.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. It has been fixed in Systems Management Server version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbPGC smsgeneral smspgc kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
