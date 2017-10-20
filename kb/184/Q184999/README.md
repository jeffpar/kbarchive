---
layout: page
title: "Q184999: SMS: Software Inventory Wrong After Daylight Savings Time Change"
permalink: /kb/184/Q184999/
---

## Q184999: SMS: Software Inventory Wrong After Daylight Savings Time Change

{% raw %}

	Article: Q184999
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbInventory smsinvkbbuglist
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you examine the Packages property within the Systems Management Server
	Administrator program for a client computer running Windows NT, you may notice
	that packages that were once reported are no longer reported.
	
	CAUSE
	=====
	
	Software inventory for a package may have been configured to use the File Time
	property, which scans for files by their "last modified time." On a Windows NT
	system, files are stored on an NTFS partition by using UTC (Universal Time
	Coordinated) for their last modified file times. The last modified time
	displayed for a file in Windows NT Explorer or File Manager shows the adjusted
	last modified time based upon the client computer's time zone setting and
	whether daylight savings time applies.
	
	When performing a software inventory scan based on the file time property, the
	Systems Management Server Inventory Agents for Windows NT (Invwin32.exe and
	Inv32cli.exe) also apply the time zone and daylight savings time setting.
	Therefore, using the File Time property in software inventory can produce a
	change in results after a daylight savings time change, because the last
	modified time for a file will change (based on the time change applied by
	daylight savings time and the time zone under which the file was first
	created).
	
	Another problem occurs when foreign package rules are used that may have been
	defined by a site further up the site hierarchy. If the site defining the
	software inventory rule is in another time zone, or daylight savings time area,
	the file's last modified time for a software package will display its own local
	last modified time based on the time zone and daylight savings time setting. A
	Windows NT client computer running the inventory agent in a different time zone
	with the foreign package rule will not find a match for the package defined
	using the file time because of the application of time zone and daylight savings
	time times to the file's last modified time.
	
	
	WORKAROUND
	==========
	
	Where possible, do not use the Time property in the software inventory rule.
	Instead, create a rule based on another property (such as the file name, date,
	size, and so on) that will produce a consistent match regardless of time or time
	zone.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. A supported fix is now available for version 1.2,
	but has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. Microsoft recommends that you wait for the
	next Service Pack that contains this fix. Contact Microsoft Technical Support
	for more information.
	
	
	Additional query words: prodsms dst timezone
	
	======================================================================
	Keywords          : kbInventory smsinv kbbuglist
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
