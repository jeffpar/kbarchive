---
layout: page
title: "Q236981: &quot;STOP 0x0000000A&quot; Involving Scsiport.sys in Windows NT 4.0 SP5"
permalink: /kb/236/Q236981/
---

## Q236981: &quot;STOP 0x0000000A&quot; Involving Scsiport.sys in Windows NT 4.0 SP5

{% raw %}

	Article: Q236981
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbWinNT4sp6fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 SP5 
	- Microsoft Windows NT Workstation version 4.0 SP5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	You may experience a "STOP 0x0000000A" error message after applying Windows NT
	4.0 Service Pack 5 (SP5) on a computer with an IBM ServerRaid SCSI adapter. This
	problem can occur depending on the data value of the NumberOfRequests registry
	value associated with the SCSI adapter.
	
	Computers with other SCSI adapters may also experience similar symptoms.
	
	
	CAUSE
	=====
	
	A change was made in SP5 to the algorithm that validates the data value of the
	NumberOfRequests value stored in the following registry key:
	
	  HKEY_LOCAL_MACHINE
	  \SYSTEM\CurrentControlSet\Services\<DriverName>\Parameters\Device<n>
	
	The algorithm in SP5 is flawed and does not return the correct results for any
	value over 255. In particular, the error message listed above results if the
	parameter is set to either 256 or 512.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this problem and obtain the expected results without applying this
	hotfix, restrict the data value of the NumberOfRequests value to the range 16
	through 255.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	Prior to SP5, the algorithm for validating this parameter is also flawed, but
	not in such a way that a "STOP" error message results. In particular, values
	between 256 and 512 are reduced to the range 16 through 255.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTSsearch kbWinNTS400sp5 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
