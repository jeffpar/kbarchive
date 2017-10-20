---
layout: page
title: "Q156689: How to Change Print Job Priority in Windows NT Server 4.0"
permalink: /kb/156/Q156689/
---

## Q156689: How to Change Print Job Priority in Windows NT Server 4.0

{% raw %}

	Article: Q156689
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can adjust print performance and the priority used to assign print jobs to
	ports by setting the SchedulerThreadPriority setting in the registry. You can
	also use this entry to improve overall system performance by reducing the
	priority of the Scheduler thread.
	
	MORE INFORMATION
	================
	
	Use the steps below to add or edit the SchedulerThreadPriority value.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Open Registry Editor (Regedt32.exe) and navigate to the following path in the
	  registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Print
	
	2. Click to select the Print key.
	
	3. On the Edit menu, click Add Value.
	
	4. Enter the following information in the Add Value dialog box and click OK:
	
	  Value Name: SchedulerThreadPriority<BR/>
	  Data  Type: REG_DWORD
	
	5. Use the following table to determine what value you want to put in the Data
	  field of the DWORD Editor dialog box:
	
	     Value          Description
	     --------------------------
	     1             Above normal
	     0             Normal (default)
	     ffffffff      Below normal
	
	6. Restart the computer or restart the Spooler service to make the change take
	  effect. To restart the Spooler service, type the following at a command
	  prompt:
	
	  net stop spooler
	  net start spooler
	
	You can use Pviewer.exe from the Windows NT 4.0 Resource Kit to observe the
	thread priority for the fifth thread of the spoolss process. Note that you must
	use the Refresh key in Pviewer.exe to see the change.
	
	You can use System Policy Editor on computers running Windows NT Server 4.0 to
	configure the SchedulerThreadPriority entry for individual computers, or as a
	default configuration for all computers. To do this, perform the following
	steps:
	
	1. Start Poledit.exe and click the icon representing the computer you want to
	  modify.
	
	2. Locate the following path in the Computer Properties dialog box:
	
	     Windows NT Printers\Scheduler Priority
	
	  Assignable values are normal (default) above normal and below normal.
	
	For more information on the use of system policies, see chapter 3 of the Windows
	NT Server 4.0 Concepts and Planning Guide.
	
	
	Additional query words: monitor boost priority enable schedule
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
