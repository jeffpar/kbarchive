---
layout: page
title: "Q141713: Mkecr5xx.sys Reports Wrong I/O in Registry for SoundBlaster 16"
permalink: /kb/141/Q141713/
---

## Q141713: Mkecr5xx.sys Reports Wrong I/O in Registry for SoundBlaster 16

	Article: Q141713
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may experience problems reading compact discs with a CD-ROM drive connected
	directly to a SoundBlaster adapter if you are using Mkecr5xx.sys with the
	default base I/O address listed in the documentation for the adapter.
	
	CAUSE
	=====
	
	The base I/O address used by the SoundBlaster adapter is 10 higher than stated
	in the documentation for these adapters. The base I/O address can be verified by
	checking WinMSD or the Windows NT Registry.
	
	RESOLUTION
	==========
	
	Reset the base I/O address to a different setting that no other device is using.
	The address should be chosen so that it is free for 20 address spaces (for
	example, 0x320-0x33F).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
