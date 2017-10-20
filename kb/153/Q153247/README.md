---
layout: page
title: "Q153247: Despooler Uses More Bytes After Move to a Helper Server"
permalink: /kb/153/Q153247/
---

## Q153247: Despooler Uses More Bytes After Move to a Helper Server

{% raw %}

	Article: Q153247
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbDespooler smsdespooler smssetup smsgeneral kbArtTypeINF
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After moving the Despooler service on to a helper server, approximately every
	five minutes the number of both paged and non-paged bytes used by the SMS
	Executive (Smsexec.exe) increases by one.
	
	CAUSE
	=====
	
	When Smsexec.exe goes through the thread list and finds the internal registry
	key of the SMS_DESPOOLER = NULL, it adds 192 bytes every minute to both the
	system pool non-paged and paged bytes. The actual smsexec.log message is as
	follows:
	
	~Going through the thread list...   $$<SMS_EXECUTIVE><Sat Dec 02 15:16:59
	1995~><thread=D5>
	~Internal registry key is NULL for thread SMS_DESPOOLER
	$$<SMS_EXECUTIVE><Sat Dec 02 15:16:59 1995~><thread=D5>
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0 and 1.1. This problem has been corrected in Systems Management
	Server version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbDespooler smsdespooler smssetup smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
