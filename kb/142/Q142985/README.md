---
layout: page
title: "Q142985: SBS Install Hangs Computer with Dial-Up Networking and MSDLC32"
permalink: /kb/142/Q142985/
---

## Q142985: SBS Install Hangs Computer with Dial-Up Networking and MSDLC32

	Article: Q142985
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows 95 to a local hard disk from a server-based
	installation of Windows 95, your computer may stop responding (hang) when Setup
	tries to restart the computer.
	
	CAUSE
	=====
	
	The Msbatch.inf file has Dial-Up Networking chosen, and MSDLC32 has been added
	using Infinst.exe. The dial-up adapter does not bind to MSDLC32.
	
	RESOLUTION
	==========
	
	Add the following line to the [Network] section of the Msbatch.inf file:
	
	  RemoveBinding=MSDLC32,*PNP8387
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
