---
layout: page
title: "Q134662: Incorrect Time Reported in the Database for Last Software Scan"
permalink: /kb/134/Q134662/
---

## Q134662: Incorrect Time Reported in the Database for Last Software Scan

	Article: Q134662
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The Last Software Scan time is reported one hour off under the Personal Computer
	Properties, Workstation Status. For example, if you ran inventory at 10:45 on
	7/20/95, it would be reported as follows:
	
	  Last Hardware Scan      7/20/1995  10:45
	  Last Software Scan      7/20/1995  11:45
	
	This happens with Windows NT, Windows for Workgroups, and Windows 95 clients. It
	happens if the inventory is run manually or in a logon script. It also does not
	matter if you collect inventory every day or once a week.
	
	Macintosh and OS/2 clients report correctly.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	
	Additional query words: sms prodsms inventory
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
