---
layout: page
title: "Q98849: Adjust Parameters to Connect to LAN Man Over Slow Link"
permalink: /kb/098/Q98849/
---

## Q98849: Adjust Parameters to Connect to LAN Man Over Slow Link

	Article: Q98849
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Data transfer between LAN Manager 2.2 workstations and servers (using NetBEUI
	protocol) can sometimes fail due to slow or congested links, or intermediate
	systems (bridges, routers) with inadequate buffering. You can increase chances
	for successful data transfer by increasing T1 (and possibly dlcretries) on the
	workstation AND the server. You may also need to increase sesstimeout on the
	workstation and the related serverheuristic 15 on the server.
	
	The symptoms of a timeout-related data transfer failure vary depending on the
	type of process running on the workstation. For example, if you are copying
	files to/from the server at the MS-DOS command line, one of the following errors
	may occur:
	
	  NET805: Network device no longer exists reading drive H
	  Abort, Retry, Fail?
	
	where H is the logical drive you were copying files to/from, or
	
	  NET804: Network busy
	  Abort, Retry, Fail?
	
	MORE INFORMATION
	================
	
	On a slow link, you need to increase the "session timeout" and the "frame
	acknowledgment timeout" parameters to eliminate data transfer timeout failures.
	
	Session Timeout
	---------------
	
	When the redirector and server set up a session (NET USE), they can each specify
	to the protocol driver a "session timeout" parameter. Later, whenever the
	redirector or server submits an Server Message Block (SMB) message to the
	underlying protocol driver for transmission on the network, the driver must
	manage to transmit the entire message within the "session timeout" period or it
	returns a timeout error.
	
	This session timeout is exposed differently in the redirector and the server. You
	need to remember that if you have a slow link between redirector and server you
	must increase this "session timeout" on both the redirector (workstation,
	client) side and the server side. On the redirector side, the session timeout is
	exposed by means of the sesstimeout parameter. (Note: sesstimeout also
	determines how long the redirector is willing to wait to receive a response SMB
	message from the server). Contrary to early (pre- LAN Manager 2.2)
	documentation, as of LAN Manager 2.1, sesstimeout applies to MS-DOS REDIR as
	well as OS/2 REDIR.
	
	Configure SESSTIMEOUT as follows (default = 45):
	
	   2-127        Actual value in seconds
	   128-65534    127 seconds
	   65535        Don't timeout (wait forever)
	
	Remember that when you increase this timeout on the redirector, you also normally
	need to increase the related timeout on the server side. The server side session
	timeout is exposed by means of serverheuristic 15. The documentation describes
	this heuristic as "oplock timeout," but does not include the fact that this same
	heuristic is also used to set the "session timeout." The heuristic values
	documented are correct for the oplock timeout, but do not correspond to the
	values used for the session timeout. The following table lists the session
	timeout values that correspond to the range of values that heuristic 15 can be
	set to (default = 1):
	
	   0       34 seconds
	   1       68 seconds
	  2-8      127 seconds
	   9       Don't timeout (wait forever)
	
	Frame Acknowledgment Timeout
	----------------------------
	
	Because the redirector and server can submit an SMB message up to 64K long, but
	the adapter can transmit only small data units (Ethernet can transmit only about
	1500 bytes), NetBEUI breaks the SMB message (that it received from the
	redirector or server) into "frames." It labels them as belonging to the
	start-of-message, middle-of-message or end-of-message, sequences them and hands
	them off to the adapter for transmission on the network. Most data transfer
	between the redirector and server is "reliable connection oriented," which
	implies, among other things, that after NetBEUI transmits frame X it must wait
	for the remote station to send a frame acknowledging receipt of frame X. (For
	simplicity, this explanation ignores protocol optimizations such as windowing.)
	
	The question is: once frame X has been sent, how long will NetBEUI wait to
	receive the frame X acknowledgment? The answer is: it will wait for T1 (default
	0.5 seconds). If the acknowledgment does not arrive within that time, NetBEUI
	tries again as many times as are specified by the dclretries parameter (default
	5), each time doubling the wait period (T1*2, T1*4, T1*8, topping out at
	T1*16).
	
	
	Over a slow link, it takes longer for frame X to get to the remote station, and
	longer for the frame X acknowledgment to get back. So when you are communicating
	with servers across slow links and you increase the "session timeout" on both
	sides as described earlier, you usually also need to increase the "frame
	acknowledgment timeout" (T1) on both sides. And it is usually a good idea to
	increase dlcretries a bit also. Tuning T1 (the timeout) to accommodate the
	average round trip time (and increasing the retries at times when the slow link
	is especially busy), along with the automatic opening up of the timeout period,
	enables the frame- acknowledgment transaction to eventually succeed.
	
	Note 1
	------
	
	Increasing netbiostimeout (and possibly netbiosretries) helps ensure that the
	initial connection (NET USE) succeeds, but does not affect data transfer.
	
	Note 2
	------
	
	- sesstimeout is in the LANMAN.INI file [workstation] section.
	
	- serverhuristic 15 is in the LANMAN.INI file [server] section.
	
	- T1 and dlcretries are in the PROTOCOL.INI file [NetBEUI] section.
	
	- netbiostimeout and netbiosretries are in the PROTOCOL.INI file [NetBEUI]
	  section.
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	
