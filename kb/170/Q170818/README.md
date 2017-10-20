---
layout: page
title: "Q170818: El59x Driver Shows Only Inbound Traffic with Network Monitor"
permalink: /kb/170/Q170818/
---

## Q170818: El59x Driver Shows Only Inbound Traffic with Network Monitor

{% raw %}

	Article: Q170818
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbnetwork kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 SP3 
	- Microsoft Windows NT Server version 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Network Monitor with a 3Com 3C59X adapter, Network Monitor
	may capture only the data sent to the computer using the adapter. Data sent from
	the computer is never displayed in Network Monitor. This occurs with the
	El59x.sys network card driver that ships with Windows NT version 4.0 and with
	Windows NT version 4.0 Service Pack 3.
	
	RESOLUTION
	==========
	
	Perform the following steps to resolve this problem:
	
	1. Obtain the latest version of El59x.sys from 3Com.
	
	2. Copy the new version of this driver over the previous version in the
	  \%SystemRoot%\System32\Drivers folder.
	
	3. Restart your computer.
	
	Please contact 3Com for additional information.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 and
	Windows NT version 4.0 Service Pack 3. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	
	Additional query words: 3Com netmon
	======================================================================
	Keywords          : kb3rdparty kbhw kbnetwork kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp3 kbWinNTSsearch kbWinNTS400sp3 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
