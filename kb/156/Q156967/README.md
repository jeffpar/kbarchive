---
layout: page
title: "Q156967: SNA Server Performance Degrades Running LUA Application"
permalink: /kb/156/Q156967/
---

## Q156967: SNA Server Performance Degrades Running LUA Application

{% raw %}

	Article: Q156967
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbprogramming
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an LUA application (or 3270 application that uses the LUA flavor of
	the SNA Server 3270 Emulator Interface Specification), SNA Server performance
	may degrade if the application is receiving a large number of frames and SNA
	exception response protocol is being used on the session.
	
	CAUSE
	=====
	
	This problem can occur if exception response protocol is used on an LU type 0,
	1, 2, or 3 session, and the application does not periodically send "courtesy
	acknowledgments" to SNA Server, as documented in the SNA Considerations section
	in Chapter 2 of the SNA Server "LUA Programmer's Guide" (included below).
	
	If an LUA application developer encounters this problem, the application should
	issue "courtesy acknowledgments" periodically (say, after every 10 frames
	received or so), as described below.
	
	If a customer suspects a problem in this area, see the information below for
	instructions on generating SNA Server traces to provide to the LUA application
	developer or to SNA Server support personnel.
	
	MORE INFORMATION
	================
	
	Chapter 2 of the SNA Server "LUA Programmer's Guide" includes the following
	information regarding "courtesy acknowledgments":
	
	"SNA Server keeps a record of requests received from the host in order to
	correlate any response sent by the application with the appropriate request.
	When the application sends a response, SNA Server correlates the response with
	the data from the original request, and can then free the storage associated
	with it.
	
	If the host specifies exception response only (a negative response may be sent
	but a positive response should not be sent), SNA Server must still keep a record
	of the request in case the application subsequently sends a negative response.
	If the application does not send a response, the storage associated with this
	request cannot be freed.
	
	Because of this, SNA Server allows the LUA application to issue a positive
	response to an exception-response-only request from the host (this is known as a
	courtesy acknowledgment). The response is not sent to the host, but is used by
	LUA to clear the storage associated with the request."
	
	
	If the LUA application does not issue courtesy acknowledgments in this scenario,
	the following behavior may be observed using Microsoft Windows NT Performance
	Monitor utility:
	
	- The "private bytes" memory counter for the SNASERVR.EXE process will steadily
	  increase while the LUA application receives data.
	
	- Processor CPU usage may steadily increase
	
	- Data throughput on the LUA session will decrease
	
	Also, if SNA Server tracing is enabled, the SNA Server may encounter unexpected
	delays up to 45 seconds before responding to client requests.
	
	To determine if this problem is occurring, the following traces should be
	captured and provided to the LUA application developer, or to SNA Server support
	personnel:
	
	- Stop the LUA application
	
	- Run SNATRACE, focus on the SNA Server service and turn on Data Link Control
	  (DLC) and 3270 message tracing, set the trace file size to a large value
	  (say, 5000000 or 5 MB) and select Apply.
	
	- Start the LUA application and run a sample transaction.
	
	- Return to SNATRACE and select Clear All. The resulting trace files can be
	  found in <Snaroot>\System\Nodemsg?.trc.
	
	To send a courtesy acknowledgment, the LUA application should write a response
	containing a zero-length data message, setting the RH to indicate a response and
	by setting the TH to have the sequence number (SNF) of the RECEIVE verb that is
	being acknowledged. A SLI_SEND or RUI_WRITE indicates a response if it has the
	response bit set in the RH in the verb control block. The bits to set are:
	
	  lua_rh.rri = 1 /* response */
	  lua_rh.ri = 0 /* positive response*/
	
	Also, if you use an SLI application, the lua_message_type in the SLI_SEND command
	must be set to indicate a response (LUA_MESSAGE_TYPE_RSP). This is described in
	Chapter 4 of the [ASCII 147]LUA Programmer's Reference.[ASCII 148]
	
	Additional query words: sp1 prodsna
	
	======================================================================
	Keywords          : kb3rdparty kbprogramming 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
