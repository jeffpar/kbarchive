---
layout: page
title: "Q102020: How to Monitor Disk Performance with Performance Monitor"
permalink: /kb/102/Q102020/
---

## Q102020: How to Monitor Disk Performance with Performance Monitor

{% raw %}

	Article: Q102020
	Product(s): Microsoft Windows NT
	Version(s): ; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Disk performance counters, the Diskperf service, must be started prior to the
	Performance Monitor in order to monitor disk performance. Disk performance
	counters are disabled by default.
	
	MORE INFORMATION
	================
	
	The impact of the Performance Monitor on the overall performance of a system is
	minimal. However, the counters (which are necessary to monitor disk performance)
	will have a slight impact to the overall system performance. For this reason,
	these counters are not started by default. Therefore, for best system
	performance, they should be started prior to beginning disk performance
	monitoring and then terminated.
	
	To enable the Diskperf service, use either of the following two procedures.
	
	Procedure 1
	-----------
	
	1. Choose the Command Prompt icon in the Main group.
	
	2. At the command prompt, type "DISKPERF -Y" (without the quotation marks) and
	  press ENTER. You will receive the following message:
	
	  Disk performance counters on this system are now set to start at boot. This
	  change will take effect after the system is rebooted.
	
	Procedure 2
	-----------
	
	1. Start Control Panel, choose Devices and change the startup value of Diskperf
	  to Boot.
	
	2. Restart your computer.
	
	Once the system is restarted, disk performance monitoring is enabled. After
	monitoring disk performance, you should turn off the Diskperf service.
	
	Use to following command to disable the Diskperf service:
	
	  DISKPERF -N -- This will set the disk performance counters to never start.
	  For best overall system performance issue this command from the command
	  prompt after completing disk performance monitoring.
	
	Other helpful commands that may be issued from the command prompt to assist in
	disk performance monitoring are:
	
	  DISKPERF /? -- Displays help for the DISKPERF command.
	
	  DISKPERF -- Displays the current status of the disk performance counters
	  along with help for the DISKPERF command.
	
	  Diskperf -YE, the E allows monitoring of all NT Software Fault Tolerant sets
	  that utilize the FTDISK device driver. This does not apply to hardware
	  arrays.
	
	
	Additional query words: prodnt physicaldisk physical disk object counter zero
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :; winnt:3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
