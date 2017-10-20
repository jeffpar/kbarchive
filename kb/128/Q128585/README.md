---
layout: page
title: "Q128585: PC Ext: External May Fail to Answer Incoming Calls"
permalink: /kb/128/Q128585/
---

## Q128585: PC Ext: External May Fail to Answer Incoming Calls

{% raw %}

	Article: Q128585
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An asynchronous instance of External may occasionally fail to answer an incoming
	call. When this happens, the phone rings several times, the modem does not go
	off-hook, and the line is not picked up. The caller will see a No Answer
	response to the dial attempt. If the caller attempts a second call, the call
	will often go through without any problem.
	
	For the best results, set up separate instances for your asynchronous connections
	and for these instances, include the MailerDisable and DispatchDisable options
	in the EXTERNAL.INI file.
	
	NOTE: There must be another instance of External that can perform the Mailer and
	Dispatch functions before the options mentioned above can be used. Other steps
	can be taken to minimize the chance of unanswered calls. See the section below
	for additional information.
	
	MORE INFORMATION
	================
	
	External is coded to poll for incoming calls. Thus, External will periodically
	check the communications channel for activity. Ordinarily, External will reach
	one of these polling points during the rings of an incoming call, and it will
	pick up the call.
	
	When factors exist that effect the performance of External, that is, slow its
	cycle, there will be an increased chance of not reaching the polling point while
	the call is occurring.
	
	Here are some factors that can slow External and cause missed incoming calls:
	
	  Slow Network Links
	  Congested Network Links
	  Slow Server Response
	  Slow PC used for External
	  Defective Hardware
	
	These factors should be investigated and conditions improved, if possible.
	
	If a wide area network is involved, it might be possible to use the DrivesWAN
	option of External. This is similar to using the DispatchDisable and
	MailerDisable options, but does not require a second External at the local site.
	DrivesWAN does require that there be other External programs running at other
	sites.
	
	Also, External will not answer incoming calls while it is updating information
	from one of the postoffices. Checks for updates occur at regular intervals
	determined by the IntervalUpdate parameter. An update does not occur at every
	check, but if changes have been made through the Administrator's program
	(ADMIN.EXE) or Import program (IMPORT.EXE), then the update takes place. The
	update interval can be increased so that checks occur less frequently and at
	more controlled times of the day.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
