---
layout: page
title: "Q195769: Events 38 and 92 Logged When Closing 5250 Applet Session"
permalink: /kb/195/Q195769/
---

## Q195769: Events 38 and 92 Logged When Closing 5250 Applet Session

{% raw %}

	Article: Q195769
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following events are logged in the Windows NT Application Event Log after
	disconnecting a 5250 display session in the 5250 Applet included with SNA
	Server:
	
	Event ID: 92
	  Source: SNA APPC Application
	  Description: APPC TP detected abend of SNA subsystem
	
	  Event ID: 38
	  Source: SNA Server
	  Description: APPC session deactivated abnormally
	
	     Qualifier = 0005
	     Connection = <connection name>
	     LU alias = <Local APPC LU Alias>
	     PLU alias = <Remote APPC LU Alias>
	     Mode name = QPCSUPP
	     Session ID = <session ID>
	     LFSID = <LFSID>
	     Client Domain = <client's domain>
	     Client User = <User ID>
	     Client Machine = <TCP/IP Address/NetBIOS name>
	
	These events are logged even though the 5250 display session is properly
	disconnected using the Session Disconnect option.
	
	NOTE: Although this has only been observed with SNA Server's 5250 Applet, it
	could occur with any APPC application that calls the TEST_RTS_AND_POST verb to
	detect direction change for the conversation being used.
	
	CAUSE
	=====
	
	The 5250 Applet included with SNA Server 3.0 Service Pack 2 was modified to use
	the APPC TEST_RTS_AND_POST verb to detect change of direction for its APPC
	conversation. This was done as a performance enhancement. After this change was
	made, disconnecting a 5250 session in the 5250 Applet causes the
	TEST_RTS_AND_POST verb to be cancelled. The mechanism used to cancel this
	outstanding verb causes the Event 92 and 38 to be logged.
	
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 SP2, 3.0
	SP3, 4.0, and 4.0 SP1. We are researching this problem in SNA Server version 3.0
	and will post more information here in the Knowledge Base as it becomes
	available.
	
	This problem was corrected in the latest Microsoft SNA Server version 4.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	In this case, the event 38 and 92 messages are benign and do not indicate a
	problem. However, these events may be logged for other reasons that do indicate
	a problem. The following is a more detailed explanation of the Event 38
	Qualifier 0005 event:
	
	SNA Server sent an UNBIND(Cleanup) message on this session to the remote system
	in order to clean up the session.
	
	CAUSE: This problem can be caused by any one of the following:
	
	- The SNA Server client computer (where the 5250 emulator or APPC/CPIC
	  application is running) has lost its network session to the SNA Server.
	
	- The 5250 emulator or APPC/CPIC application issued a TP_ENDED(HARD) to cause
	  the LU6.2 session to be ended.
	
	- The 5250 emulator or APPC/CPIC application failed abnormally or was ended by
	  the user while in the middle of a conversation.
	
	ACTION:
	If a 5250 user is losing their emulation session unexpectedly (because of the
	client's network session being lost to the SNA Server), capture SNA Server
	client internal trace, a LU6.2 message trace, and an APPC API trace of the
	problem, along with a matching sniffer or Network Monitor trace showing the lost
	network session, and provide them to Microsoft support personnel.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
