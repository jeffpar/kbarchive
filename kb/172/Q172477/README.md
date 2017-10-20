---
layout: page
title: "Q172477: DNS Manager Hangs While Displaying Zone Information"
permalink: /kb/172/Q172477/
---

## Q172477: DNS Manager Hangs While Displaying Zone Information

{% raw %}

	Article: Q172477
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view your Domain Name Service (DNS) zones with DNS Manager, it may stop
	responding. If you check Performance Monitor or Task Manager, then you may
	notice that DNS Manager is using up to 90 percent of the CPU Utilization.
	
	CAUSE
	=====
	
	One or more of your zones may contain more than 65,553 records.
	
	RESOLUTION
	==========
	
	There currently is no resolution for this issue. The DNS server will start and
	continue to function correctly, it is just DNS Manager that stops responding. If
	you have zones with more than 65,553 records, then you will need to edit these
	files using a text editor, such as Notepad.exe or Edit.com.
	
	NOTE: Remember to stop the DNS server before editing the zone files and restart
	the DNS server after you have saved the changes to the zone files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: crash large DNSADMIN
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
