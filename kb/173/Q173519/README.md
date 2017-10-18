---
layout: page
title: "Q173519: WINS Allows Duplicate Name Registrations Across Slow Link"
permalink: kb/173/Q173519/
---

## Q173519: WINS Allows Duplicate Name Registrations Across Slow Link

	Article: Q173519
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Windows Internet Name Service (WINS) server is operating across a slow
	wide area network (WAN) link, it allows workstations and servers to register
	duplicate names, causing connectivity problems on your network.
	
	CAUSE
	=====
	
	The WINS Server name challenge may time-out on a slow WAN link, which may allow
	a computer to register a duplicate name on the network.
	
	RESOLUTION
	==========
	
	Obtain the fix mentioned below, then use the following steps to configure the
	number of retries and the time interval for the initial retry attempt that WINS
	uses for name challenges and responses:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. Go to the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WINS\Parameters
	
	3. Click Add Value on the Edit menu and type the following information to create
	  two new registry values:
	
	     Value: ChlMaxNoOfRetries
	     Data Type: REG_DWORD
	     Default = 3
	     Description: This parameter determines the number of retries WINS
	                  Server will do for the name challenge query.
	
	     Value: InitChlRetryInterval
	     Data Type: REG_DWORD
	     Default = 500(milliseconds)
	     Default: This parameter sets the initial retry interval for name
	              challenge query. The interval is doubled for each subsequent
	              retries. For example, if ChlmaxNoOfRetries is set to 4 and
	              InitChlRetryInterval is set to 1000, the first retry will be
	              1000ms later and the following retries will be at 2000ms,
	              4000ms, 8000ms, and so on.
	
	4. Exit Registry Editor.
	
	5. Stop the WINS Server by typing the following at a command prompt, then
	  pressing ENTER:
	
	  net stop wins
	
	6. Restart the WINS server by typing the following at a command prompt, then
	  pressing ENTER:
	
	  net start wins
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	When a WINS client sends a name registration request to its WINS Server for a
	name that already exists, the WINS server sends a challenge request to the
	computer that registered earliest. If there is no response to the challenge, the
	WINS server will try two more times at 500-microsecond intervals. This was
	previously a hard-coded value and could not be configured.
	
	If the computer is operating across a slow link, it is possible that the response
	will take too long, causing a time-out on the WINS server. The new computer will
	then be successfully registered on the WINS server, which will cause two
	computers to use the same name on the network.
	
	Additional query words: conflict error
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
