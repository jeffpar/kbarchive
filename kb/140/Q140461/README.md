---
layout: page
title: "Q140461: PC NTMMTA: Err Msg: Service Instance Not Found"
permalink: /kb/140/Q140461/
---

## Q140461: PC NTMMTA: Err Msg: Service Instance Not Found

{% raw %}

	Article: Q140461
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Windows NT Multitasking MMTA (NT MMTA) Dispatch or External instance is
	running, Control Panel, Services shows the instance as started and mail is being
	moved, or Performance Monitor (PerfMon) shows the appropriate number of OS/2
	processes active.
	
	However, when you start a Monitor for the instance from the Mail Service Manager,
	you will get an MS-DOS box that flashes open and closes. In addition, when you
	start a Monitor for the instance from the Command window, you will get the
	following error message:
	
	  Error: Service instance not found. Service may not be running.
	
	CAUSE
	=====
	
	The NT MMTA instance was previously stopped while a Monitor was connected to it.
	The instance was restarted while the Monitor was still open. The running Monitor
	did not connect to the restarted NT MMTA instance (expected behavior), and the
	Monitor was closed.
	
	All subsequent tries to start a Monitor for the restarted NT MMTA instance will
	fail with the symptoms given above.
	
	RESOLUTION
	==========
	
	Stop the problem NT MMTA instance, and start it again. Then start a Monitor for
	the instance; the Monitor should start successfully and connect to the NT MMTA
	instance.
	
	In the future, if an NT MMTA instance has a Monitor running, make sure the
	Monitor is stopped when the instance is stopped.
	
	Additional query words: 3.50 mta
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}
