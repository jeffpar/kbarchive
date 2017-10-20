---
layout: page
title: "Q182778: TN3270 Service Logs Event 702 Messages"
permalink: /kb/182/Q182778/
---

## Q182778: TN3270 Service Logs Event 702 Messages

{% raw %}

	Article: Q182778
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The TN3270 service may frequently log the following message in the Windows NT
	application event log:
	
	  Event ID: 702
	  Source: TN3270 Server
	  Description: Windows API RegQueryValueEx(First Counter) failed with
	  error code 2L (The system cannot find the file specified.) in function
	  PRDGetIndexValues.
	
	NOTE: These messages may be logged anytime the TN3270 service has been installed,
	even if it is not being used. The TN3270 service is installed by default with
	SNA Server version 3.0 and later.
	
	CAUSE
	=====
	
	Some of the registry entries related to the TN3270 Performance Monitor counters
	are not present or are incorrect.
	
	WORKAROUND
	==========
	
	If the TN3270 service is not being used, you may remove it by running the SNA
	Server Setup program and selecting Add/Remove to remove the TN3270 component.
	
	RESOLUTION
	==========
	
	Use the following procedure to unload and reload the Performance Monitor
	Counters for SNA Server and the TN3270 service:
	
	1. Open a Command Prompt on the computer running Windows NT Server where SNA
	  Server is installed.
	
	2. Change to the <snaroot>\system directory (C:\SNA\SYSTEM, by default).
	
	3. Type the following at the command prompt and press ENTER to remove the SNA
	  Server counters:
	
	  unlodctr snaservr
	
	4. Type the following at the command prompt and press ENTER to remove the TN3270
	  counters:
	
	  unlodctr tn3270
	
	  NOTE: If the counters were correctly installed, these commands return text
	  similar to the following:
	
	  Removing counter names and explain text for <service name>
	  Updating text for language 009
	
	  If the counters were not correctly installed, these commands return text
	  similar to the following:
	
	  Counters for <service name> have not been installed yet
	
	5. Type the following at the command prompt and press ENTER to install the SNA
	  Server counters:
	
	  lodctr snaperf.ini
	
	6. Type the following at the command prompt and press ENTER to install the
	  TN3270 counters:
	
	  lodctr tn3perf.ini
	
	NOTE: The INI file contains counters for several languages that may not be
	installed on the system. This will result in a large number of error messages
	scrolling across the Command Prompt window for each of the languages not
	installed. This does not have any adverse effect on the successful installation
	of the counters.
	
	MORE INFORMATION
	================
	
	The TN3270 Performance Monitor counters are contained in the Windows NT registry
	at the following location:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\TN3270\Performance
	
	If the Performance Monitor counters are installed correctly, entries similar to
	the following will be listed when the Performance Key is highlighted:
	
	  Close: REG_EXPAND_SZ: ClosePerformanceData
	  Collect: REG_EXPAND_SZ: ReturnPerformanceData
	  First Counter: REG_DWORD: <counter number>
	  First Help: REG_DWORD: <counter number>
	  Last Counter: REG_DWORD: <counter number>
	  Last Help: REG_DWORD: <counter number>
	  Library: REG_EXPAND_SZ: <drive:>\<snaroot>\system\tn3prf.dll
	  Open: REG_EXPAND_SZ: OpenPerformanceData
	
	where: <counter number> is the Hex value that indicates the counter number
	for the particular counter listed.
	
	In one reported case, the TN3270\Performance registry entries did not include the
	following entries: First Counter, First Help, Last Counter, Last Help. After
	using the process outlined in the Resolution section, all of these entries were
	added and the Event 702 messages were no longer logged.
	
	If the registry entries for the Performance Monitor counters are not correct, the
	TN3270 may log the Event 702 every time the Windows NT Performance Monitor calls
	the OpenPerformanceData function in the TN3270 Performance Monitor DLL
	(tn3prf.dll). These errors may be logged if third- party applications other than
	Performance Monitor are also calling into the Performance Monitor DLLs to gather
	performance-related data.
	
	Please refer to the following Knowledge Base articles for other issues related to
	SNA Server and Performance Monitor:
	
	  Q170840 Installing TN3270 breaks Performance Counters on Windows NT 4.0
	
	  Q169488 Errors When Performance Monitoring SNA Server
	
	  Q180054 Perfmon Trap or Winlogon STOP C000021A When Running Perfmon
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
