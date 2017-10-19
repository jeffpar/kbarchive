---
layout: page
title: "Q149681: Cli_&#42;.exe (CLISETUP) Recreates an Empty MS Tree"
permalink: /kb/149/Q149681/
---

## Q149681: Cli_&#42;.exe (CLISETUP) Recreates an Empty MS Tree

	Article: Q149681
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When the MS tree on an SMS client is fully or partially removed, Cli_*.exe
	(MS-DOS, Windows NT, OS/2) recreates an empty MS tree. The missing directories
	are created but no files are copied.
	
	WORKAROUND
	==========
	
	Run Cli_*.exe using the /u (upgrade mode) or /f (verify mode) command line
	option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms inv
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
