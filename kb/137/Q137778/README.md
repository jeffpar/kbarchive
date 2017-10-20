---
layout: page
title: "Q137778: Setup Fails or Data Corruption Occurs w/ Conner CFP1060S Drive"
permalink: /kb/137/Q137778/
---

## Q137778: Setup Fails or Data Corruption Occurs w/ Conner CFP1060S Drive

{% raw %}

	Article: Q137778
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50 3.51 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows NT Setup on your PC-compatible computer with a Conner
	CFP1060S SCSI hard disk installed, the installation of Windows NT fails. If
	Setup does not fail, you experience data corruption during normal usage.
	
	CAUSE
	=====
	
	The version of your Conner CFP1060S is designed for non PC-compatible computers,
	and therefore does not work properly in your PC-compatible computer.
	
	There are two versions of the Conner CFP1060S SCSI hard disk: PC-compatible and
	non PC-compatible. To verify that you have the non PC-compatible hard drive
	model, check the hard disk interface connector:
	
	- The non PC-compatible model has an 80-pin connector with an additional
	  adapter that converts the 80-pin connector to 50 pins. In addition, this
	  drive has the labeling "Conner CFP1060S w/SCA 80pin-50pin adapter."
	
	- The PC-compatible model has a standard 50-pin SCSI connector.
	
	RESOLUTION
	==========
	
	To resolve the problem if you have the non PC-compatible model, replace it with
	a PC-compatible drive.
	
	According to Conner Technical Support the Conner CFP1060S drive has been
	discontinued in the 50-pin PC-compatible format.
	
	For additional information, contact Conner Peripherals at (800) 426-6637.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words: prodnt 4.0
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50 3.51 4.00
	
	=============================================================================
	

{% endraw %}
