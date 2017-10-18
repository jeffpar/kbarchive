---
layout: page
title: "Q185833: Memory Leak in Rasman.exe on Compaq Systems"
permalink: kb/185/Q185833/
---

## Q185833: Memory Leak in Rasman.exe on Compaq Systems

	Article: Q185833
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On Compaq systems where the Remote Insight Board (RIB) is installed, the Remote
	Access Connection Manager Service (Rasman.exe) progressively consumes available
	memory at the rate of 4 KB approximately every two seconds.
	
	CAUSE
	=====
	
	The Compaq Remote Insight Board device (RIBWAN) is configured to accept incoming
	calls when it should be configured for "Dial out only" operation.
	
	RESOLUTION
	==========
	
	In Remote Access Service properties (Remote Access Setup), configure the RIBWAN
	device for "Dial out only" operation.
	
	MORE INFORMATION
	================
	
	The Remote Insight Board can be installed on Compaq Proliant and Prosignia
	systems (with the exception of the Prosignia 200). This device is not used to
	accept incoming RAS calls, and so should not be configured to accept them.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
