---
layout: page
title: "Q142945: Problems Installing SRAM or Flash Memory Cards in Windows 95"
permalink: /kb/142/Q142945/
---

## Q142945: Problems Installing SRAM or Flash Memory Cards in Windows 95

{% raw %}

	Article: Q142945
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
	
	When you insert a PCMCIA SRAM or Flash memory card into a Windows 95- based
	computer that has been configured to use protected-mode PCMCIA card drivers,
	there may be no drive letter in My Computer or Windows Explorer associated with
	the PCMCIA card. This can occur even though the card seems to be recognized
	properly and the appropriate driver is installed.
	
	CAUSE
	=====
	
	PCMCIA SRAM and Flash memory cards must be installed differently than other
	cards that use Windows 95 protected-mode drivers.
	
	RESOLUTION
	==========
	
	SRAM Cards
	----------
	
	To install a PCMCIA SRAM card in Windows 95, the following two entries must be
	placed in the Config.sys file
	
	  device=c:\<windows>\system\csmapper.sys
	  device=c:\<windows>\system\carddrv.exe /slot=<x>
	
	where <windows> is the Windows folder and <x> indicates the number of
	PCMCIA card slots in the computer.
	
	Flash Cards
	-----------
	
	To install a PCMCIA Flash memory card in Windows 95, the following entries must
	be placed in the Config.sys file
	
	  device=c:\<windows>\system\csmapper.sys
	  device=c:\<windows>\system\carddrv.exe /slot=<x>
	  device=c:\<windows>\ms-flash.sys
	
	where <windows> is the Windows folder and <x> indicates the number of
	PCMCIA slots in the computer.
	
	NOTE: The Ms-flash.sys file is not included with Windows 95. This file must be
	provided by the Flash memory card manufacturer.
	
	MORE INFORMATION
	================
	
	The information in this article applies only to installing SRAM and Flash memory
	cards. You may still need to partition and format such cards according to the
	manufacturer's instructions. Please see the documentation provided by the
	manufacturer.
	
	Note that if you use only protected-mode drivers for these cards, you do not have
	access to the cards if you boot your computer to a command prompt.
	
	Additional query words: scram
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
