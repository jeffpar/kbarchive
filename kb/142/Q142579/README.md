---
layout: page
title: "Q142579: XCLN: Setup/Attempt to Restart Fails on Windows NT"
permalink: /kb/142/Q142579/
---

## Q142579: XCLN: Setup/Attempt to Restart Fails on Windows NT

	Article: Q142579
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run SETUP.EXE for Microsoft Exchange Electronic Forms Designer on a
	Windows NT computer, the following dialog box may appear when the Electronic
	Forms Designer Setup program tries to restart Windows NT:
	
	  Installation Microsoft
	
	  This Windows application cannot respond to the End Task request. It may be
	  busy, waiting for a response from you or may have stopped executing.
	
	  Select Cancel to return to Windows NT.
	
	  Select End Task to close this application immediately. You will lose any
	  unsaved information in this application.
	
	  Select Wait to give the application 5 seconds to finish what it is doing and
	  then try to close the application again
	
	  [WAIT] [END TASK] [CANCEL]
	
	CAUSE
	=====
	
	This is fairly typical of some 16-bit application setups on Windows NT. The
	system merely has not given the setup routine enough time to shut down.
	Selecting the Wait button on the shut down dialog box will enable the setup
	routine to complete its shut down process.
	
	Additional query words: winnt setup
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT
	Version           : 4.0 5.0
	
	=============================================================================
	
