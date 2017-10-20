---
layout: page
title: "Q239707: TN3270 Clients May Fail to Reconnect to a Host Session"
permalink: /kb/239/Q239707/
---

## Q239707: TN3270 Clients May Fail to Reconnect to a Host Session

{% raw %}

	Article: Q239707
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix kbsna400sp2
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When TN3270 emulators are connecting through the TN3270 server (included with
	SNA Server 4.0 Service Pack 2) to a host session, the TN3270 emulators may fail
	to automatically reconnect if the session is terminated unexpectedly. The TN3270
	emulator will reconnect to a host session if the user presses the Enter key.
	
	The following message may be displayed in the TN3270 emulator window when the
	host session is terminated unexpectedly:
	
	  TN3270E Service Error 505
	
	  SNA API verb <verb> failed.
	
	NOTE: This message may not be displayed in the same manner for all TN3270
	emulators.
	
	When TN3270 emulators are configured to automatically connect, they successfully
	reconnect to a host session after receiving the previous error message. This
	occurs without any user intervention when they are connecting to a host session
	through a TN3270 server, included with SNA Server versions prior to 4.0 Service
	Pack 2 (SP2).
	
	CAUSE
	=====
	
	The TN3270 server in SNA Server 4.0 SP2 was updated to use Windows NT I/O
	Completion Ports to provide performance improvements. It is the use of I/O
	Completion Ports that causes this particular problem to occur. Therefore, the
	TN3270 server included with earlier versions of SNA Server does not exhibit this
	behavior.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	SP2. This problem was first corrected in SNA Server version 4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	For additional information about a similar TN3270 issue with SNA Server 4.0 SP2,
	please click the article number(s) below to view the article(s) in the Microsoft
	Knowledge Base:
	
	  Q230220 Emulators May Fail to Reconnect After Inactivity Timeout
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP2
	Version           : WINDOWS:4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
