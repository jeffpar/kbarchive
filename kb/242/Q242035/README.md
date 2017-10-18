---
layout: page
title: "Q242035: Printer Pooling Improvements in Windows NT 4.0 Service Pack 6"
permalink: kb/242/Q242035/
---

## Q242035: Printer Pooling Improvements in Windows NT 4.0 Service Pack 6

	Article: Q242035
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP6
	Operating System(s): 
	Keyword(s): kbenv kbtool kbWinNT4sp6fix
	Last Modified: 11-JUN-2002
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP6 
	- Microsoft Windows NT Workstation version 4.0 SP6 
	- Microsoft Windows NT Server version 4.0 SP6, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Functionality has been added to Windows NT 4.0 Service Pack 6 (SP6) to improve
	printer pooling in Windows NT. The following problems are addressed:
	
	- A print job hanging on a printer in a printer pool should resume after the
	  error condition has been resolved.
	
	- A print job should not be sent to a printer from a printer pool if the
	  printer is not available. (An exception is a printer status indicating a
	  low-toner state, which is not considered an error. Even if the printer is in
	  this state, the job is sent to the printer.)
	
	- If the print job is not printed within a configurable amount of time, the
	  spooler should be able to redirect the job to the next available printer in
	  the pool.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT Server 4.0 Service Pack 6 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 6.
	
	MORE INFORMATION
	================
	
	To obtain the latest Windows NT 4.0 service pack, click the link below:
	
	  http://www.microsoft.com/Windows/ServicePacks/
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Two registry values have been created under the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Print\Providers
	
	These values can only be configured per server:
	
	- RestartJobOnPoolError (REG_DWORD) - configures the time (in seconds) after
	  which a job in the pool should be restarted if the port is in an error state
	  and the error condition has not been resolved.
	
	  Default value = 0x00000258 (600 seconds = 10 minutes)
	
	- RestartJobOnPoolEnabled (REG_DWORD) - Determines whether a print job to a
	  local printer can be restarted after an error.
	
	  0 - Print jobs cannot be restarted on error.
	  1 - Print jobs can be restarted on error.
	  Default value = 1
	
	To make this work, the spooler must know whether the port is in an error state.
	Therefore, the port monitor must update the spooler with the device status.
	
	
	Some printing pools scenarios that explain the functionality include:
	
	- The most common case is to print a job to a pool/printer that is out of
	  paper. The time for updating the printer status is long enough that the
	  printer buffer becomes full before the spooler determines that the port is in
	  an error state and stops writing to the printer. Because of this, you are
	  informed that writing to printer did not succeed. If the restarting behavior
	  is enabled after ten minutes:
	
	   - If you click Retry, the job is restarted after ten minutes.
	
	   - If you click Cancel, the job is deleted.
	
	   - If you do nothing, the job is restarted after ten minutes and the window
	     is closed when job is restarted.
	
	   - If the restarting behavior is not enabled, the window remains on the
	     screen until you click one of the available options.
	
	- If the error state persists more for longer than the time set by the
	  RestartJobOnPoolEnabled value, the job should be restarted on another port.
	
	- If the port is in an error state but recovers before the time for restarting
	  expires, the job should continue to be printed on the same port.
	
	- If Simple Network Management Protocol (SNMP) is disabled, the job stops
	  responding (hangs) on the same port even if restarting is enabled.
	
	- If SNMP is enabled but the printer does not support SNMP, the job hangs on
	  the same port even if restarting is enabled.
	
	- If SNMP is enabled but the printer turned off, the job hangs on the same port
	  even if restarting is enabled.
	
	- If restarting is disabled, the job hangs on the same port (the same as the
	  current behavior).
	
	- If restarting is enabled after a time less than the time needed for the
	  spooler to determine the status of the device and take the proper action
	  (this a per-port monitor setting), the job hangs until the spooler is
	  informed of the device status and it is restarted afterwards.
	
	NOTE: This fix also includes the fix for the issue described in the following
	Microsoft Knowledge Base article:
	
	  Q239907 Too Many Local Printers Can Cause Unsuccessful Boot
	
	If you install this fix and then upgrade to Service Pack 6, you lose all printers
	if you do not set the UseSoftwareHive registry setting as discussed in the
	article listed above.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTS400sp6 kbWinNTS400search kbNTTermServ400sp6 kbNTTermServSearch kbWinNTW400sp6
	Version           : winnt:4.0 SP6
	Issue type        : kbinfo
	
	=============================================================================
	
