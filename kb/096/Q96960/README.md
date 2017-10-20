---
layout: page
title: "Q96960: MS-DOS Shell Clock Does Not Update When POWER Is Running"
permalink: /kb/096/Q96960/
---

## Q96960: MS-DOS Shell Clock Does Not Update When POWER Is Running

{% raw %}

	Article: Q96960
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running POWER with MS-DOS Shell, the clock in the lower-right
	corner (on the message bar) is not updated when the machine is in the power
	conservation mode.
	
	CAUSE
	=====
	
	This problem occurs because of the design of Shell. Shell uses an internal
	counter and updates the time display when this counter reaches 65535. Under
	normal circumstances, the counter reaches 65535 approximately one time per
	minute. When POWER is loaded, the rate at which the counter is incremented is
	slowed considerably. As a result, the time display is updated approximately one
	time per hour.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS Shell version 6.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 6.00 timer apm idle
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	

{% endraw %}
