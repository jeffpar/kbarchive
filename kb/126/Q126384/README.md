---
layout: page
title: "Q126384: Err Msg: User configuration for parameter Serial1 must ..."
permalink: /kb/126/Q126384/
---

## Q126384: Err Msg: User configuration for parameter Serial1 must ...

	Article: Q126384
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You find the following error message in the System Log of Event Viewer:
	
	  Event ID: 25
	  Source: Serial
	  Type: Error
	  Description: User configuration for parameter Serial1 must have PortAddress.
	
	CAUSE
	=====
	
	This error message occur if you have an empty SerialX (where X is a number
	greater than or equal to 0) subkey in the following Windows NT Registry
	location:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \Serial\Parameters
	
	An empty SerialX key is created in this location if you run Control Panel, choose
	Ports, choose the Advanced button. The empty SerialX key is created even if you
	choose Cancel without making any changes.
	
	RESOLUTION
	==========
	
	To correct this problem, either:
	
	- Run Control Panel, choose Ports, and specify the correct Base I/O Port
	  Address and IRQ settings for the serial port referenced in the error
	  message.
	
	  -or-
	
	- Delete the SerialX key under HKEY_LOCAL_MACHINE\SYSTEM
	  \CurrentControlSet\Services\Serial\Parameters. Deleting this key causes
	  Windows NT to use the serial port settings specified by the firmware. Do not
	  use this workaround if you were previously required to use Control Panel to
	  manually create the entry for the serial port.
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt advanced settings com port base i/o port address irq serial1 serial2 serial3 serial4
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
