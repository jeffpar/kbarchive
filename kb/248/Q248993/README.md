---
layout: page
title: "Q248993: PRB: Performance Object Is Not Displayed in Performance Monitor"
permalink: /kb/248/Q248993/
---

## Q248993: PRB: Performance Object Is Not Displayed in Performance Monitor

	Article: Q248993
	Product(s): Microsoft Windows NT
	Version(s): 2000
	Operating System(s): 
	Keyword(s): kbKernBase kbOSWin2000 kbPerfMon kbDSupport kbGrpDSKernBase
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When using the Performance Monitor tool (or System Monitor Microsoft Management
	Console [MMC] snap-in) a performance object may unexpectedly fail to appear in
	the Performance Object drop-down list box in the Add To Chart dialog box.
	
	CAUSE
	=====
	
	The problem may occur because the extensible performance DLL is marked as
	"disabled".
	
	RESOLUTION
	==========
	
	The object may be reenabled by setting the "Disable Performance Counters"
	registry value in the Performance subkey of the supported service for the
	extension.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In versions of Windows NT prior to Windows 2000, one bad or defective
	performance DLL is able to render the performance monitoring features of the
	operating system inoperative. To maintain the integrity of the performance data
	and to improve reliability, the performance library of Windows 2000 disables any
	performance DLL that returns data in the incorrect format, causes an unhandled
	program fault, or takes too long to return the performance data (this is usually
	the cause of a library being disabled).
	
	When a performance extension DLL is disabled, the performance counters provided
	by that DLL are not available through Performance Monitor or the Performance
	Data Helper API. Disabled DLLs are not reloaded when the system is restarted.
	
	If a performance extension DLL becomes disabled unexpectedly, check the
	application event log for event 1017 or 1018 (the "disable" events) posted by
	the Perflib source. Then look for other events posted by Perflib that will give
	the reasons why the system disabled the extension. These events should be noted
	if you need to call technical support.
	
	You can try reenabling the extension DLL. If the problem persists (that is, the
	system disables it again) you should contact the vendor of the extension. If the
	object is a Windows 2000 system object (such as the Process object) contact
	Microsoft Product Support Services (PSS).
	
	To reenable an extension DLL, Microsoft recommends that you use the ExCtrlList
	utility from the Windows 2000 Resource Kit. Alternatively, you can use the
	Registry editor tool (Regedit.exe) that ships with Windows 2000.
	
	Reenabling an Extension by Using ExCtrlLst:
	
	1. Start Exctrlst.exe. This is a tool from the Windows 2000 Resource Kit.
	
	2. Select the first item in the Extensible Performance Counters list box.
	
	3. Inspect the Performance Counters Enabled checkbox that appears just below the
	  list box. If the checkbox is selected, the counter is enabled. If it is
	  cleared, then select the checkbox to reenable it.
	
	4. Select the next item in the Extensible Performance Counters list box and
	  repeat the previous two steps until all items have the Performance Counters
	  Enabled checkbox selected.
	
	Reenabling an Extension by Using Regedit.exe:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Regedit.exe. (You cannot use Regedt32.exe because it does not allow
	  searching for registry values.)
	
	2. Click to select the following key
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	
	3. Select Find from the Edit menu.
	
	4. In the Find What field, type "Disable Performance Counters" (without the
	  quotation marks).
	
	5. Click Find Next. This will locate a Performance key that may have this
	  Registry value set to 1.
	
	6. If the Registry value is set to 1, set the value to 0 or delete the Registry
	  value.
	
	7. Press F3 to find the next occurrence of this Registry value.
	
	8. Repeat the previous two steps until there are no Performance keys that have
	  the Disable Performance Counters value set to 1.
	
	NOTE: Often the "Disable Performance Counters" value does not appear in the
	registry. The value can be created and given a DWORD value of 1 to disable
	counters.
	
	Additional query words: perfmon missing
	
	======================================================================
	Keywords          : kbKernBase kbOSWin2000 kbPerfMon kbDSupport kbGrpDSKernBase 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : :2000
	Issue type        : kbprb
	
	=============================================================================
	
