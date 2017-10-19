---
layout: page
title: "Q141735: Windows NT Setup Fails on an IBM ThinkPad 760C P120"
permalink: /kb/141/Q141735/
---

## Q141735: Windows NT Setup Fails on an IBM ThinkPad 760C P120

	Article: Q141735
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Windows NT version 3.51 on a P120 MHz IBM ThinkPad
	760C, a STOP Message (blue screen) appears when Setup reboots. Specifically,
	this happens during the initial blue screen (with the progress dots) as drivers
	are loaded. The STOP Message information varies, but is consistently at the same
	place in the boot process.
	
	CAUSE
	=====
	
	The IBM ThinkPad 760C P120 model is only supported by Windows NT if used with
	BIOS revision 91G228.
	
	RESOLUTION
	==========
	
	BIOS revision 91G228 is a BETA version. It is currently available from the IBM
	bulletin board, in directory 37, at (919) 517-0001. The self-extracting filename
	is SYTPF100.EXE. Currently, this is the only version of BIOS on the P120 models
	that works with Windows NT.
	
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
