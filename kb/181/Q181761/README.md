---
layout: page
title: "Q181761: SMS: Cannot Specify an Inventory Scan Interval for SKIPINV"
permalink: kb/181/Q181761/
---

## Q181761: SMS: Cannot Specify an Inventory Scan Interval for SKIPINV

	Article: Q181761
	Product(s): Microsoft Systems Management Server
	Version(s): 1.1,1.2
	Operating System(s): 
	Keyword(s): kbsmsUtil smsutil
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The inventory scan interval is defined for the entire site. SKIPINV, a small
	program that can be used to determine whether or not a Systems Management Server
	client needs to do an inventory scan, uses this inventory scan interval for
	every client. There is no way to force SKIPINV to use an alternate inventory
	scan interval.
	
	WORKAROUND
	==========
	
	To work around this problem, obtain the hotfix mentioned in the STATUS section
	of this article, or wait for the next version of the BackOffice Resource Kit.
	The hotfix should have the following timestamp:
	
	  2/19/98      3:22pm      16,940 Skipinv.exe
	
	With the hotfix, SKIPINV allows you to specify the inventory scan interval
	through the command line, as in the following example:
	
	  SKIPINV 30
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.1 and 1.2.
	
	
	A supported fix is now available for version 1.2, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	To determine whether inventory should be taken, SKIPINV adds the inventory scan
	interval (specified in the Sms.ini file) to the client's last scan time and
	compares it to the client's current time.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsmsUtil smsutil 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : :1.1,1.2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
