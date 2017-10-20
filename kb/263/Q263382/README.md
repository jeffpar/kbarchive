---
layout: page
title: "Q263382: SMS: Logical Disk Has Two Instances of Each Drive After Upgrade"
permalink: /kb/263/Q263382/
---

## Q263382: SMS: Logical Disk Has Two Instances of Each Drive After Upgrade

{% raw %}

	Article: Q263382
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbUpgrade kbsms200preSP3
	Last Modified: 06-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade a Systems Management Server (SMS) site from SMS 1.2 to SMS 2.0,
	you may see two instances of each drive when you click Logical Disks in Resource
	Explorer after you run hardware inventory on the client that you upgraded. This
	is true for hard disks, floppy disk drives, and CD-ROM drives.
	
	CAUSE
	=====
	
	The SMS 1.2 disk data is not removed by SMS 2.0 during the upgrade of the client
	hardware inventory data.
	
	WORKAROUND
	==========
	
	Run the following query against the SMS 2.0 site database to remove the SMS 1.2
	logical disk data.
	
	NOTE: Back up your SMS site database before you run this query.
	
	  
	
	  delete ld1
	  from logical_disk_data ld1
	  join logical_disk_data ld2 
	 on ld1.MachineID=ld2.MachineID
	  and substring(ld1.DeviceID0,1,1)=substring(ld2.DeviceID0,1,1)
	  where ld1.TimeKey < ld2.TimeKey
	
	You can run this query in either ISQL_w (for Microsoft SQL Server 6.5) or SQL
	Query Analyzer (for SQL Server 7.0).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	This problem can cause inaccurate reporting when you query clients for free
	space. The SMS 1.2 disk data is never updated and reflects the free space at the
	time that you upgrade to SMS 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbUpgrade kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
