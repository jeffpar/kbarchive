---
layout: page
title: "Q165267: SMS: Snmpelea 3006 Events Rapidly Fill the Application Log"
permalink: /kb/165/Q165267/
---

## Q165267: SMS: Snmpelea 3006 Events Rapidly Fill the Application Log

	Article: Q165267
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbSNMP smssnmp
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Event Viewer's System log becomes full on a computer running Windows NT
	Server, you may see the following event in the Application log:
	
	  Event 3006:
	  Source SNMPELEA
	
	  Description: Error read log event record. Handled specified is ###.
	  Return code from read event log is ###.
	
	This message repeats continuously. Both the handle number and the return code
	'###' may change each time the event is logged.
	
	WORKAROUND
	==========
	
	Setting the event log to overwrite events will provide a temporary workaround.
	To change the event log configuration, follows these steps:
	
	1. Click the Start button, point to Programs, point to Administrative Tools, and
	  then click Event Viewer.
	
	2. On the Log menu, click Log Settings.
	
	3. Change Settings for Application Log.
	
	4. Click Overwrite Events as Needed and then click OK.
	
	5. On the Log menu, click Clear All Events.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Systems Management Server version 1.2. For information on obtaining
	the Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsms snmp extension agent
	
	======================================================================
	Keywords          : kbnetwork kbSNMP smssnmp 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
