---
layout: page
title: "Q249081: Password Synchronization Triggers Occurrences of Event 1314"
permalink: /kb/249/Q249081/
---

## Q249081: Password Synchronization Triggers Occurrences of Event 1314

{% raw %}

	Article: Q249081
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Host Account Synchronization service, also known as SNAHOSTPROCESS, is
	only required if automatic password synchronization is being used. This service
	is not necessary when using Single Sign-On (SSO) with manual password updates.
	
	If the SNAHOSTPROCSS is not being used (not installed or disabled), but the Host
	Account Manager (UDConfig.exe) is set up to replicate passwords, then anytime an
	end user changes their Windows NT password, the following event is recorded in
	the Event Viewer Application log:
	
	  Event 1314 - Type:Warning
	
	  Unable to locate a requested resource Supplied code 0x0
	
	In a large client-install base where end users need to change their Windows NT
	passwords daily (typically due to account policy rules), it is very likely that
	there will be multiple occurrences of event 1314 in the Application log of the
	Event Viewer.
	
	CAUSE
	=====
	
	When an end user changes their Windows NT password, the SNA Password Management
	Process (SNAPMP) attempts to locate the SNAHOSTPROCESS to pass the new Windows
	NT password to the AS/400 or host system. This attempt is made because the Host
	Account Manager is configured to replicate passwords. If the SNAHOSTPROCSS
	service is not installed or disabled, an event 1314 is logged to indicate that
	it could not locate the resource.
	
	RESOLUTION
	==========
	
	If password synchronization is not needed, Microsoft recommends that you
	configure the Host Account Manager for mapped entries, instead of replicated
	entries. For example, if you are viewing the Host Account Manager:
	
	  Use Windows NT Password = Replicated
	  Use This Password = Mapped
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbfaq
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
