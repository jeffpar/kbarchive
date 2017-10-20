---
layout: page
title: "Q272239: Programs in Run Key or Startup Group May Not Run"
permalink: /kb/272/Q272239/
---

## Q272239: Programs in Run Key or Startup Group May Not Run

{% raw %}

	Article: Q272239
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv w2000prtmon
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you configure programs to run when you log on by using the Run registry key
	or Startup group, the programs may not run.
	
	CAUSE
	=====
	
	When you run a program, such as Microsoft Windows Media Player or Phone Dialer,
	the Telephony service (Tapisrv.exe) is used. The Telephony service opens the
	HKEY_CURRENT_USER registry hive and keeps the handle to this hive open for a
	specific amount of time, even after you quit the program and log off. Therefore,
	when you log off, the Winlogon.exe program cannot unload the current user
	registry hive because there is an open handle to it through the Telephony
	service.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft. For
	additional information about this fix, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q241572 Roaming Profile May Not Be Saved to the Server
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	perfmon tapisrv winlogon
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv w2000prtmon 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbWinNTS400 kbWinNTW400sp6 kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : winnt:4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
