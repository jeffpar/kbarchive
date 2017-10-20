---
layout: page
title: "Q150728: Err Msg: This Version of SMS Administrator (Build xxx) Is Not"
permalink: /kb/150/Q150728/
---

## Q150728: Err Msg: This Version of SMS Administrator (Build xxx) Is Not

{% raw %}

	Article: Q150728
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbsmsAdmin smsadmin
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to log on to an SMS database using the SMS Administrator, the
	following error message appears:
	
	  This version of SMS Administrator (Build xxx) is not compatible with the
	  specified database (Build 600).
	
	CAUSE
	=====
	
	This error occurs when you use SQL Server to create an SMS database that
	contains no objects.
	
	RESOLUTION
	==========
	
	To resolve this problem, choose to allow the SMS Setup program to build the SMS
	database on one of the following types of devices:
	
	1. A device that is pre-existing.
	
	2. A device created by the SMS Setup program (if SQL is installed on the site
	  server).
	
	3. A device manually created by you.
	
	The SMS Setup program will automatically create the site database on that device
	so that it occupies the entire device.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsmsAdmin smsadmin 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
