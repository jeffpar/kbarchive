---
layout: page
title: "Q180411: XADM: Anonymous User Count Not Included in Active User Count"
permalink: /kb/180/Q180411/
---

## Q180411: XADM: Anonymous User Count Not Included in Active User Count

{% raw %}

	Article: Q180411
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Active User Count as displayed in Performance Monitor does not include users
	who are connected to the information store via an anonymous connection.
	
	MORE INFORMATION
	================
	
	To get the total number of users connected to an information store, do the
	following:
	
	1. Start Performance Monitor. PerfMon is located in Programs/Administrative
	  Tools/Performance Monitor.
	
	2. From PerfMon, click the + (plus) toolbar shortcut.
	
	3. In the Object drop-down box, scroll up to the MSExchangeIS Object, and select
	  it.
	
	4. In the Counter scroll window, select Anonymous User Count, then select Add.
	
	5. In the Counter scroll window, select User Count, then select Add.
	
	The combination of these two counters gives you the total number of connected
	users at any one time.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
