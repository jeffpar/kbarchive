---
layout: page
title: "Q321079: SNABase Service May Not Start Properly with Events 561 and 624"
permalink: /kb/321/Q321079/
---

## Q321079: SNABase Service May Not Start Properly with Events 561 and 624

	Article: Q321079
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool
	Last Modified: 22-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you restart your computer, the SNABase service may not start properly. When
	this occurs, an event 561 may be logged in the Application Event log, and this
	may be followed by an event 624. Note that an event 624 indicates that an
	Snadump.log file has been created.
	
	Event 561 Details
	-----------------
	
	  Event Type: Error
	  Event Source: SNA Base Service
	  Event Category: None
	  Event ID: 561
	  Description:
	  Write to mailslot or socket failed, rc = 53
	
	  EXPLANATION
	  A Win32 WriteFile() or winsock sendto() call failed. The return code is shown.
	
	Event 624 Details
	-----------------
	
	  Event Type: Warning
	  Event Source: SNA Server
	  Event Category: None
	  Event ID: 624
	  Description:
	  Creating dump file C:\sna\traces\snadump.log for SNABASE.EXE
	
	  EXPLANATION
	  A process (value) ended abnormally due to a protection violation or internal
	  unrecoverable error condition. Diagnostic information about this has been
	  automatically created by SNA Server. If a serious error is logged at the same
	  time as the Event 624, then this likely was the cause of this Event 624.
	
	CAUSE
	=====
	
	When the SNABase service starts up, it initializes the various network
	transports that it is configured to use. Retrieval of the domain name of the
	local computer is part of this startup process. If the SNABase service is set
	for automatic startup, a timing issue in this process may occur when the server
	restarts. If this occurs, the SNABase service mistakenly interprets that it has
	already cached the domain name of the local computer. The SNABase service then
	tries to use a blank domain name when it opens a mailslot. This attempt does not
	succeed, and the symptoms that are listed in the "Symptoms" section of this
	article may occur.
	
	WORKAROUND
	==========
	
	To work around this problem, set the SNABase service to manual startup.
	
	NOTE: If the SNA Server service is set for automatic startup, you may also have
	to change it to manual startup.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	An SNABase Internal trace file (Napintx.atf) of this problem looks similar to
	the following:
	
	11:12:18.0406 semfdmo1.c(1220)   sbpdinit_dll_int Opening Broadcast mailslot SNADMOD
	11:12:18.0406 semfdmo1.c(1248)   sbpdinit_dll_int NT domain is
	11:12:18.0406 semfdmo1.c(1258)   sbpdinit_dll_int Open LM IP mailslot \\*\MAILSLOT\SNADMOD
	11:12:18.0406 semflm.c(2109)     BLDMN Mailslot: \\*\MAILSLOT\SNADMOD
	11:12:18.0406 semflm.c(1840)     OPMSL Open Mailslot \\*\MAILSLOT\SNADMOD
	11:12:18.0406 semflm.c(1853)     OPMSL CreateFile returned rc = 53, handle = -1
	11:12:18.0406 semfdmo1.c(1261)   sbpdinit_dll_int Open normal LM SNADMOD mailslot
	11:12:18.0406 semflm.c(2109)     BLDMN Mailslot: \\*\MAILSLOT\SNADMOD
	11:12:18.0406 semflm.c(1840)     OPMSL Open Mailslot \\*\MAILSLOT\SNADMOD
	11:12:18.0406 semflm.c(1853)     OPMSL CreateFile returned rc = 53, handle = -1
	11:12:18.0406 semfdmo1.c(1266)   sbpdinit_dll_int Open IP mailslot failed, rc 53
	11:12:18.0406 semfdmo1.c(1281)   sbpdinit_dll_int OpenMslot failed, error 53
	11:12:18.0406 dmodlog.c(105)     SNLOG Logging 2 chars, level = 16, msgnum = 561
	11:12:18.0406 dmodlog.c(224)     NTLOG Log Thread 724 (id 1344) and Log Event created OK
	11:12:18.0406 dmodlog.c(384)     LOGTH Log thread started
	11:12:18.0406 dmodlog.c(275)     NTLOG pLog at 00086998, pTokenUser at 000869B4
	11:12:18.0406 dmodlog.c(327)     NTLOG Signaling the Logging thread
	11:12:18.0406 dmodlog.c(494)     LOGTH Logging msg id c0000231 num 561 pLog->iLevel 16 string 53
	
	
	Additional query words: null
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
