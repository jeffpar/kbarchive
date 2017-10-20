---
layout: page
title: "Q234351: Memory Leak When Performance Counters Are Not Available"
permalink: /kb/234/Q234351/
---

## Q234351: Memory Leak When Performance Counters Are Not Available

{% raw %}

	Article: Q234351
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbtool kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	NEW SECTION page 374
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP4, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a program that attempts to gain access to a performance counter
	that has not been installed, your computer's performance may degrade or the
	computer may stop responding (hang) because of a memory leak. For example, if
	you use the Microsoft Systems Management Server (SMS) 2.0 Healthmon tool on a
	computer that does not have the Microsoft Simple Network Management Protocol
	(SNMP) configured, the computer may hang and you may be required to restart your
	computer periodically.
	
	This problem may also occur if any application, such as system management
	products, tries to access performance counters on the computer in question.
	
	CAUSE
	=====
	
	This problem occurs because memory is not being deallocated correctly when an
	attempt is made to write data to the corresponding performance counter that is
	not available. It may be necessary for you to determine which performance
	counters your program is attempting to update to ensure their availability.
	
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
	
	
	WORKAROUND
	==========
	
	To work around this problem, install the SNMP service on your computer. To do
	this:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Network.
	
	2. On the Services tab, click Add, and then double-click SNMP Service.
	
	3. When you are prompted, type the full path to the installation files folder
	  (for example, D:\I386), click Continue, and then click Close.
	
	4. Reinstall the latest Windows NT 4.0 service pack, and then restart the
	  computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	If you are using the Healthmon tool and you have already installed Windows NT
	4.0 Service Pack 4 with the SMS hotfix, you may also experience this problem.
	For additional information about memory leaks and SNMP, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q196270 SNMP Agent Leaks Memory When Queried
	
	Additional query words: 4.00 SMS healthmon
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbtool kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
