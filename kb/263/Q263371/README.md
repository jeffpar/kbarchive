---
layout: page
title: "Q263371: Software Inventory Enumerates, Inventories NTFS Reparsed Volumes"
permalink: /kb/263/Q263371/
---

## Q263371: Software Inventory Enumerates, Inventories NTFS Reparsed Volumes

{% raw %}

	Article: Q263371
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200preSP3
	Last Modified: 30-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a computer that is running Microsoft Windows 2000 and is a Systems
	Management Server client has an NTFS file system volume mounted to a folder, the
	Software Inventory client agent inventories the contents of the folder as a
	folder, and then again as a volume.
	
	As a result of this, the Software Inventory process takes a considerably long
	time to complete, particularly on servers where multiple mount points are
	defined. This results in unnecessary time, processor utilization, and disk
	input/output (I/O), and may cause performance issues on servers.
	
	CAUSE
	=====
	
	The Software Inventory client agent cannot distinguish between a normal folder
	and a folder that reparses (input broken down again into small chunks) to a
	volume. If a volume is mounted multiple times, each instance is duplicate work
	for the inventory agent.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : winnt:2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
