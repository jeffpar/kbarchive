---
layout: page
title: "Q140779: WinLogon &quot;Shutdown and Power Off&quot; Menu Option"
permalink: /kb/140/Q140779/
---

## Q140779: WinLogon &quot;Shutdown and Power Off&quot; Menu Option

{% raw %}

	Article: Q140779
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows NT 3.5x Resource Kit states on page 632 of Volume 1 that you can
	change the Registry setting for "PowerdownAfterShutdown" so that a new entry -
	"Shutdown and Power off" - appears on the WinLogon menu.
	
	
	If you change this entry and select the new option from the menu, the machine
	performs a "Shutdown and Restart" and does not power off the system. This occurs
	even if the machines BIOS supports Plug and Play power down options such as the
	ones in Win95.
	
	MORE INFORMATION
	================
	
	The OEM would have to write their own HAL to support this option. Setting the
	registry value enables the system to send the HAL a power down request. The x86
	MS supplied HALs do not know what to do with the request. (we do not call BIOS
	at anytime after initial boot). It is intended for an OEM who has supplied a HAL
	which can support the power down request.
	
	Additional query words: prodnt power off
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
