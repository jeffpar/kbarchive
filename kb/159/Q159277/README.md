---
layout: page
title: "Q159277: TN3270:Trace Files Show Wrong Time Delay"
permalink: /kb/159/Q159277/
---

## Q159277: TN3270:Trace Files Show Wrong Time Delay

{% raw %}

	Article: Q159277
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The init status delay time should be traced in milliseconds, not seconds.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server 2.11 and
	2.11 Service Pack 1 (SP1). This problem was corrected in the latest Microsoft
	SNA Server 2.11 U.S. Service Pack. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Sample Traces:
	
	   >08/31 14:42:35.978 (+ smidgen )  Event=TEV_SNAInitTimerStarted
	    Thread = 0x00000085  Session = 0x002664E0  Socket = 0x00000134
	    Delay = 1000 seconds
	
	TN3270 admin init status delay set to 1 second.
	
	   >08/31 14:59:50.165 (+ smidgen )  Event=TEV_SNAInitTimerStarted
	    Thread = 0x00000050  Session = 0x00266500  Socket = 0x00000014
	    Delay = 15000 seconds
	
	TN3270 admin init status delay is set to 15 seconds.
	
	   >08/31 15:00:35.931 (+ smidgen )  Event=TEV_SNAInitTimerStarted
	    Thread = 0x00000141  Session = 0x002664F0  Socket = 0x00000130
	    Delay = 45000 seconds
	
	TN3270 admin init status delay is set to 45 seconds.
	
	Additional query words: prodsna tn3270
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
