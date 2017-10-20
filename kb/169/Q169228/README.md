---
layout: page
title: "Q169228: Windows NT 3.51 SEC-FIX Causes Remote PerfMon Sessions to Quit"
permalink: /kb/169/Q169228/
---

## Q169228: Windows NT 3.51 SEC-FIX Causes Remote PerfMon Sessions to Quit

{% raw %}

	Article: Q169228
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You apply the security fix (SEC-FIX) to a computer running Windows NT 3.51.
	Later, you run Performance Monitor from another computer running Windows NT to
	monitor the computer running Windows NT 3.51 with SEC-FIX installed.
	
	When you then select either the Thread or Process object within Performance
	Monitor, Performance Monitor quits. You will usually observe that Performance
	Monitor simply "goes away" when you select the Thread or Process object. You do
	NOT normally see any "Application Error" or "Dr Watson" dialog boxes when this
	particular error occurs.
	
	This problem occurs irrespective of whether the monitoring computer is running
	Windows NT 3.51 or 4.0, and irrespective of whether the monitoring computer has
	SEC-FIX installed.
	
	After SEC-FIX has been installed on a computer running Windows NT 3.51, it can no
	longer be monitored fully over the network from another computer.
	
	CAUSE
	=====
	
	There is a problem with the Windows NT 3.51 version of this security fix, which
	causes incorrect Performance Monitor data to be transferred over the network
	when the computer is being monitored remotely. This causes the monitoring
	instance of Performance Monitor to try to access memory to which it has
	insufficient access.
	
	The Windows NT 4.0 version of SEC-FIX does not have this problem.
	
	MORE INFORMATION
	================
	
	This SEC-FIX hotfix is sometimes referred to as the "Red Button" fix.
	
	For additional information on the issues addressed by this security fix, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q143474 Restricting Information Available to Anonymous Logon Users
	
	RESOLUTION
	==========
	
	Obtain the following fix or wait for the next Windows NT service pack.
	
	This fix should have the following timestamp:
	
	  10/22/97  06:02p               181,504 Advapi32.dll (Intel)
	  10/29/97  03:52p               169,504 Winlogon.exe (Intel)
	
	  10/29/97  03:50p               273,168 advapi32.dll (Alpha)
	  10/29/97  03:51p               236,304 winlogon.exe (Alpha)
	
	NOTE: Service Pack 5 and SEC-FIX must be applied to Windows NT 3.51 prior to
	applying this fix.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Windows NT 3.51 version of
	the SEC-FIX security fix. A supported fix is now available, but has not been
	fully regression tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	
	Additional query words: RedButton
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
