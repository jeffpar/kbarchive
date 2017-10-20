---
layout: page
title: "Q148518: XCLN: Err Msg: The MS Exchange Server Could Not Be Opened"
permalink: /kb/148/Q148518/
---

## Q148518: XCLN: Err Msg: The MS Exchange Server Could Not Be Opened

{% raw %}

	Article: Q148518
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange MS-DOS client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When starting Microsoft Exchange MS-DOS Client from MS-DOS, you may receive the
	following error:
	
	  Your MS Exchange Server could not be opened. A network error has occurred.
	  Quit and restart MS Exchange. Microsoft Exchange for MS-DOS ID No: 5866 -
	  80040115
	
	CAUSE
	=====
	
	This error occurs when the full network redirector is not loaded and is not in
	the Autoexec.bat file (on a line stating "net start full") when you boot the
	computer to MS-DOS. When the computer is booted, the full network redirector
	files have not been started or loaded into memory at the MS-DOS level.
	
	RESOLUTION
	==========
	
	Edit the computer's Autoexec.bat file to include the following statement:
	
	     Net Start Full
	
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword3 kbExchange400DOS kbExchange500DOS
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
