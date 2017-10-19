---
layout: page
title: "Q151633: Event ID 7000: The Service Is Already Running"
permalink: /kb/151/Q151633/
---

## Q151633: Event ID 7000: The Service Is Already Running

	Article: Q151633
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
	
	When you boot up a WIndows NT Server, the following message is displayed:
	
	  At least one service or driver failed during system startup.
	
	Using the Event Viewer to examine the Event Log reveals the following data:
	
	  Event ID: 7000
	  Source: Service Control Manager.
	  Description: The <service name> service failed to start due to the
	  following error: An instance of the service is already running.
	
	The service named may be any one of these three devices, as recorded in the
	details of the Event Log entry: Rdr, Srv, or Nwlink Spx/SpxII.
	
	CAUSE
	=====
	
	This problem is caused by having the Srv, Rdr, or Nwlink SPX/SPXII device set to
	start automatically rather than manually, which is the default setting.
	
	WORKAROUND
	==========
	
	There are two ways to work around this problem.
	
	1. Go to Control Panel, Devices, and change the startup mode for the device from
	  automatic to manual, then reboot the system.
	
	2. Run the Registry Editor, and under HKEY_LOCAL_MACHINE look for one of the
	  following three Registry entries, whichever applies:
	
	  SYSTEM\CurrentControlSet\Services\Srv\ 
	  SYSTEM\CurrentControlSet\Services\Rdr\ 
	  SYSTEM\CurrentControlSet\Services\NwlnkSpx
	
	  The entry Start:REG_DWORD will have a HEX value of 2 for automatic startup;
	  for manual startup, set this HEX value to 3. Choose OK then close the
	  Registry Editor. Then shut down and restart the system.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	Additional query words: event 7000
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
