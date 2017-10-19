---
layout: page
title: "Q153642: Program Group Control (PGC) Unable to Open Application Database"
permalink: /kb/153/Q153642/
---

## Q153642: Program Group Control (PGC) Unable to Open Application Database

	Article: Q153642
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you run Program Group Control (PGC), you may receive the following error:
	
	  Could not open the application database.
	
	CAUSE
	=====
	
	When your CurrentLogonServer is unavailable, PGC may fail to look for any other
	SMS logon servers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server versions 1.0 and 1.1. This problem was corrected in Microsoft Systems
	Management Server version 1.2.
	
	Additional query words: distribution prodsms pgc
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
