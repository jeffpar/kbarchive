---
layout: page
title: "Q153609: Alerter Aborts After Deadlocking with Another Process"
permalink: /kb/153/Q153609/
---

## Q153609: Alerter Aborts After Deadlocking with Another Process

{% raw %}

	Article: Q153609
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase kbDataLoader smsgeneral smsdatabase smsdataloader kbArtTypeINF
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	On a busy site, the Systems Management Server Alerter may become deadlocked with
	another Systems Management Server process using the Systems Management Server
	database. This causes the Alerter to abort its cycle and pending alerts will not
	be executed.
	
	Alerter.log displays error messages similar to the following:
	
	  >>Msg>> Your server command (process id 15) was deadlocked with
	  another process and has been chosen as deadlock victim. Re-run your command~~
	  $$<SMS_ALERTER>...
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade to Systems Management Server 1.2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	
	Additional query words: prodsms SQL
	
	======================================================================
	Keywords          : kbnetwork kbDatabase kbDataLoader smsgeneral smsdatabase smsdataloader kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
