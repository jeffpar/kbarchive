---
layout: page
title: "Q139113: SNA Server Event 38, Qualifier 0004 and 0005 Not Documented"
permalink: kb/139/Q139113/
---

## Q139113: SNA Server Event 38, Qualifier 0004 and 0005 Not Documented

	Article: Q139113
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server Reference Guide documents the "qualifier" codes that are used
	when SNA Server logs Event 38 in the Windows NT application event log. However,
	qualifier 0004 and 0005 are not documented in the Reference Guide, and the
	information that appears in the event log is limited.
	
	Microsoft has updated the code that contains the event log text to correct this
	problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The following information describes the conditions under which Event 38 are
	logged, including a more complete description of each possible qualifier code.
	
	Event 38: APPC session deactivated abnormally
	
	Qualifier:
	
	0002 = The session was deactivated because of a temporary (retry) error,
	      and may be retried.
	
	      CAUSE: This can occur when the SNA Server connection to the remote
	      system has been lost.
	
	      ACTION: Look for an Event 23 error and check it's qualifier code.
	      The SNA Server Reference Guide lists the possible qualifier codes
	      and likely causes. For an 802.2 link, qualifier AE and AF indicate
	      timeout (or possible media or bridge/router problems) on your LAN
	      and will require a LAN trace to diagnose, along with your SNA Server
	      configuration file. Pass this information to Microsoft support
	      personnel.
	
	0003 = The session was deactivated because of a permanent (no retry)
	      error, such as a parameter mismatch. Contact the administrator of
	      the partner LUs system to determine which parameters are mismatched.
	
	      CAUSE: A configuration mismatch exists between SNA Server and the
	      remote system, or the remote system's session has been reset while
	      the SNA Server's conversation remained active.
	
	      ACTION: Capture an SNA Server data link control (DLC) and LU6.2
	      message trace of the problem. Pass these traces along with your
	      SNA Server configuration file and your Windows NT application event
	      log to Microsoft support personnel.
	
	0004 = SNA Server unbound the session due to a protocol violation by the
	      partner LU.
	
	      CAUSE: SNA Server detected a protocol violation from the remote
	      system on the session.
	
	      ACTION: Capture an SNA Server data link control (DLC) and LU6.2
	      message trace of the problem and provide to Microsoft support
	      personnel.
	
	0005 = SNA Server sent an UNBIND(Cleanup) message on this session to
	      the remote system in order to clean up the session.
	
	      CAUSE: This can be caused by any one of the following:
	
	      1. The SNA Server client machine (where the 5250
	         emulator or APPC/CPIC application is running) has
	         lost it's network session to the SNA Server.
	
	      2. The 5250 emulator or APPC/CPIC application issued 
	         a TP_ENDED(HARD) to cause the LU6.2 session to be
	         ended.
	
	      3. The 5250 emulator or APPC/CPIC application failed
	         abnormally or was ended by the user while in the 
	         middle of a conversation.
	
	      ACTION: If a 5250 user is losing their emulation session
	      unexpectedly (due to the client's network session being lost to the
	      SNA Server), capture SNA Server client internal trace, LU6.2 message
	      trace and APPC API trace of the problem, along with a matching
	      sniffer or network monitor trace showing the lost network session
	      and provide to Microsoft support personnel.
	
	To enable SNA client internal tracing, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q123256 Enabling SNA Server Windows 3.x Client Traces
	
	Additional query words: prodsna 3.5 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
