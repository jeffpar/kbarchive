---
layout: page
title: "Q170509: Memory Leak in SERVICES.EXE Causes Performance Degradation"
permalink: /kb/170/Q170509/
---

## Q170509: Memory Leak in SERVICES.EXE Causes Performance Degradation

{% raw %}

	Article: Q170509
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kbfile kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Over time, the Windows NT system responsiveness appears sluggish, and clients
	may report a gradual decrease in system performance.
	
	By tracking the amount of Private Bytes for Services.exe, it can be observed that
	over time it increases without decreasing. This is viewable using Windows NT
	Performance Monitor by choosing the following counter to monitor:
	
	  Object: Process
	  Instance: SERVICES
	  Counter: Private Bytes
	
	CAUSE
	=====
	
	During client authentication on Windows NT servers (non-Domain Controllers), a
	lookup of the current Windows NT domain name is performed. A pointer to the
	Windows NT domain name is saved in a global location without freeing the
	previous Windows NT domain name that is already stored there.
	
	This memory leak problem can effect Microsoft Exchange and Microsoft SNA Server
	when running on a Windows NT server. Each time an Exchange or SNA Server client
	connects to the server over sockets, a small memory leak occurs on the server.
	This eventually causes performance degradation and requires a reboot to
	recover.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: prodnt 4.00 services.exe leaking working set prodsna xgen 469827604 0x1C010014 NCA_STATUS_SERVER_TOO_BUSY
	
	======================================================================
	Keywords          : kbenv kbfile kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
