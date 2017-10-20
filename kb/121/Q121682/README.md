---
layout: page
title: "Q121682: SMS: Memory Performance Tuning in Systems Management Server"
permalink: /kb/121/Q121682/
---

## Q121682: SMS: Memory Performance Tuning in Systems Management Server

{% raw %}

	Article: Q121682
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbsms100 kbsms110 kbInventory kbHMan kbSCMan smssiteconfigman
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article addresses how you can set, and how Systems Management Server will
	set, the Working Set for Systems Management Server processes.
	
	The Working Set of a process is the set of memory pages currently visible to the
	process in physical RAM. These pages are resident and available for an
	application to use without triggering a page fault. The size of the Working Set
	of a process is specified in bytes. The minimum and maximum Working Set sizes
	affect the virtual memory paging behavior of a process.
	
	The Systems Management Server Executive service is the most resource intensive
	process in Systems Management Server. The settings described in this article are
	for the Systems Management Server Executive process. Although the settings
	differ, the information in this article can also be applied to other Systems
	Management Server processes such as the Hierarchy Manager, Site Configuration
	Manager, Package Command Manager, and Inventory Agent.
	
	MORE INFORMATION
	================
	
	The operating system allocates Working Set sizes on a first-come, first-served
	basis. For example, if an application successfully sets 40 MB as its minimum
	Working Set size on a 64-MB system, and a second application requests a 40-MB
	Working Set size, the operating system denies the second application's request.
	
	Using this capability to set an application's Working Set size does not guarantee
	that the requested memory will be reserved, or that it will remain resident at
	all times. When the application is idle, or a low-memory situation causes a
	demand for memory, the operating system can reduce the application's Working
	Set.
	
	The net result of establishing an appropriate Working Set for a process is that
	whenever the system can allow it, a [WorkingSet] amount of the process' data
	will be resident in physical memory for greater speed.
	
	To Manually Set the SMS Executive Working Set
	---------------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	In the Registry Editor, traverse to the following key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Components\SMS_Executive
	
	And set this value appropriately (in bytes):
	
	  Working Set Limit (DWORD)
	
	The default value is zero. If you do not set this value, the Systems Management
	Server Executive will auto-tune the amount based on the table below.
	
	In situations where a great deal of RAM is available (40 MB or more), this should
	be set to at least 6 MB (600000 hex). For systems at the low end, the value
	should be about 4 MB. There is no upper limit to the value you can set here, but
	it should seldom be greater than 7 MB.
	
	You cannot use values less than 2 MB or the Systems Management Server Executive
	will set the Working Set back to the auto-tuned value. After you change the
	value, you must restart the Systems Management Server Executive. If you do not
	override the Systems Management Server Executive Working Set size, it will
	automatically self-scale depending on the amount of physical RAM available.
	
	Resetting the Working Set may still be necessary, because having many other
	processes running could still render these figures invalid.
	
	The defaults are:
	
	+-------------------------------+
	| Physical RAM    | Working Set | 
	+-------------------------------+
	| 28 MB or less   | 3.5 MB      | 
	+-------------------------------+
	| 29-33 MB        | 4.5 MB      | 
	+-------------------------------+
	| 33-41 MB        | 5.5 MB      | 
	+-------------------------------+
	| More than 41 MB | 6.5 MB      | 
	+-------------------------------+
	
	Tuning the parameters discussed in this article will not affect the amount of
	memory resource used by Systems Management Server; rather it will only modify
	how the available memory resources are used in an attempt to keep them resident
	as opposed to paged out to disk.
	
	
	Additional query words: prodsms config
	
	======================================================================
	Keywords          : kbnetwork kbsms100 kbsms110 kbInventory kbHMan kbSCMan smssiteconfigman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
