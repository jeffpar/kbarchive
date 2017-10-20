---
layout: page
title: "Q153462: Err Msg: Event 4010: Unable to Get the Local Computer Name"
permalink: /kb/153/Q153462/
---

## Q153462: Err Msg: Event 4010: Unable to Get the Local Computer Name

{% raw %}

	Article: Q153462
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following event may be reported in the Application Event Viewer Log when you
	start Performance Monitor and add items to the chart on systems. It only occurs
	on a system where a 15 character computer name is used and simple network
	management protocol (SNMP) service is installed. The event is as follows:
	
	  Event ID 4010
	  Source: Perfctrs
	  Desc: Unable to get the Local Computer Name. GetLastError code in data:
	  Data: 0000006f
	
	Counters such as Network Interface, TCP, and others may not be visible within
	Performance Monitor in this situation.
	
	CAUSE
	=====
	
	Performance Monitor allocates insufficient storage space to hold the computer
	name.
	
	RESOLUTION
	==========
	
	Obtain the fix mentioned below under STATUS.
	
	WORKAROUND
	==========
	
	Reduce the length of the computer name to 14 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodnt 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
