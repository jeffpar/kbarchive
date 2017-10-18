---
layout: page
title: "Q129786: SNA Server and 802.2 Connection Timers (t1, t2, ti)"
permalink: kb/129/Q129786/
---

## Q129786: SNA Server and 802.2 Connection Timers (t1, t2, ti)

	Article: Q129786
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbusage sna4
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, the SNA Server Admin program sets the t1, t2 and ti timers on all
	802.2 connections to a value of "Default". This article describes the actual
	timer values used by SNA Server when this default setting is configured, as well
	the various DLC timers and default settings.
	
	Tuning the SNA Server 802.2 connection and/or DLC timers may be necessary if
	802.2 connections are dropping due to timeout problems. A timeout may be
	occurring if SNA Server logs Event 23, Qualifier = AE or AF within the Windows
	NT application event log. However, a network monitor or sniffer trace would be
	necessary to confirm if a timeout problem is occurring (as opposed to an
	underlying network or bridge/router problem).
	
	If an SNA Server 802.2 connection timer is changed, the change will take effect
	when the SNA Server service is stopped and restarted.
	
	MORE INFORMATION
	================
	
	DLC Timer Parameters
	--------------------
	
	The following information describes various DLC timer parameters and how DLC
	timer values are calculated.
	
	The DLC class II protocol uses three timers:
	
	  t1 - Response timer
	  t2 - Acknowledgment timer
	  ti - Inactivity timer
	
	The timer values are specified in timer ticks. Each timer requires a short timer
	tick (xxTickOne, where xx is t1, t2, or ti) and long timer tick (xxTickTwo,
	where xx is t1, t2 or ti). The length of these timer ticks are specified within
	the Windows NT DLC Transport driver (in the registry) in 40 millisecond
	increments.
	
	The actual length of each timer (t1, t2, ti) is selected with parameters provided
	by the DLC application (SNA Server in this case) when the DLC_OPEN_SAP,
	DLC_OPEN_STATION, or DLC_MODIFY commands are issued. In these commands, the
	timer value is selected with a number between 1 and 10. If the number is between
	1 and 5, the short timer tick (xxTickOne) is used. The timer value is equal to
	the selected number multiplied by the short timer tick value:
	
	  timer value = selected number * xxTickOne * 40ms
	
	If the selected number is between 6 and 10, the long timer tick (xxTickTwo) is
	used. In this case the timer value is equal to the selected number minus 5
	multiplied by the long timer tick value.
	
	  timer value = (selected number - 5) * xxTickTwo * 40ms
	
	The response timer (t1) is used to detect a failure to receive an acknowledgment
	or a response from the remote link station.
	
	The link station starts t1 when it transmits either an Information (I-frame) or
	Supervisory (S-frame, such as a RR/RNR/REJ) with the poll bit set. The t1 will
	be reset when the station receives a response frame with the final bit set. If
	t1 expires, the link station sends an S-frame with the poll bit set in order to
	query the status of the remote link station. The link station then restarts t1.
	If there is no recovery after the specified number of retries, the link station
	assumes that the link is inoperative and disconnects the link.
	
	The duration of t1 must take into account any delays introduced by the source
	routing bridges or routers separating SNA Server and the remote system. In some
	networks the T1 value will be increased to allow for propogation delay. DLC
	extends the T1 value using an algorithm based on the average poll response time
	of the connection:
	
	Average Poll response time:     Response delay added to T1 and (Ti):
	  40 ms                            0
	  80 ms                           16 * 40 = 640 ms
	 120 ms                           16 * 40 = 640 ms
	 160 ms                           32 * 40 = 1280 ms
	 200 ms                           32 * 40 = 1280 ms
	 240 ms                           48 * 40 = 1920 ms
	 ...
	
	The poll response time is the time it takes for the remote end to respond to a
	frame sent with a Poll bit.
	
	The link station uses the acknowledgment timer (t2) to delay the sending of an
	acknowledgment for a received I-frame. The t2 timer is started when a link
	station receives an I-frame. The t2 timer is reset when a link station sends an
	acknowledgment in an I-frame or in an S-frame. If the t2 expires, the link
	station must send an acknowledgment as soon as possible.
	
	The value of t2 must be less than the value of t1 of the remote station. This
	ensures that the remote link station will receive the acknowledgment before its
	response timer expires.
	
	The inactivity timer (ti) is used to detect an inoperative condition in the
	remote link station or in the transmission medium. If a station does not receive
	any S- or I-frames before its ti expires, it must query the status of the remote
	link station with an S-frame with the poll bit set. If it does not get a
	response after specified number of retries, it disconnects the link.
	
	SNA Server and 802.2 Connection Timers
	--------------------------------------
	
	When an SNA Server 802.2 connection is activated, SNA Server sends a TEST frame
	to the remote network address configured for the connection.
	
	On Token Ring, the local ring is tried first. If there is no response to the TEST
	frame, SNA Server resends the TEST frame with the "all routes broadcast" setting
	enabled which is then forwarded by source routing bridges. If there is source
	routing data present in the TEST frame response from the remote system, then
	long tick timers are used on the connection. Otherwise, short tick timers are
	used.
	
	On Ethernet, since there is no source routing data, the short tick timers are
	always used.
	
	Here are the short tick and long tick timers used by SNA Server:
	
	  Parameter   Short Tick Timer   Long Tick Timer
	  ---------   ----------------   ---------------
	  t1          2                  7
	  t2          2                  6
	  ti          5                  10
	
	These multiplier values are used in conjunction with Windows NT Data Link Control
	transport settings to calculate the actual timer value used on the connection.
	The Windows NT DLC transport is configured with the following default timer
	values:
	
	  t1TickOne = 5
	  t1TickTwo = 25   (hex = 0x19)
	  t2TickOne = 1
	  tT2TickTwo = 10   (hex = 0xa)
	  tiTickOne = 25   (hex = 0x19)
	  tiTickTwo = 125  (hex = 0x7d)
	
	  NOTE: These values are defined in the HKEY_LOCAL_MACHINE subtree of the
	  registry in the  \SYSTEM
	                     \CurrentControlSet
	                       \Services
	                         \DLC
	                           \Parameters
	                             \<network_adapter> directory.
	
	WARNING: Using the Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of the Registry Editor
	can be solved. Use this tool at your own risk.
	
	These default settings yield the following timeout periods:
	
	If SNA Server is connecting to the remote system over Ethernet or Token Ring
	where no source routing bridges are involved, then short tick timers are used,
	giving the following default timer settings:
	
	 t1 timer = 2 * 5  * 40ms = 400ms  (.4 seconds)
	 t2 timer = 2 * 1  * 40ms = 80ms   (.08 seconds)
	 ti timer = 5 * 25 * 40ms = 5000ms (5 seconds)
	
	If SNA Server is connecting to the remote system over Token Ring across source
	routing bridges, then long tick timers are used, giving the following default
	timer settings:
	
	 t1 timer = (7-5)  *  25 * 40ms = 2000ms  (2 seconds)
	 t2 timer = (6-5)  *  10 * 40ms = 400ms   (.4 seconds)
	 ti timer = (10-5) * 125 * 40ms = 25000ms (25 seconds)
	
	The SNA Server ti, t2 and ti timers can be manually set for each connection. The
	maximum value of each timer is 10, which yields the following timeout periods:
	
	 t1 timer = (10-5) *  25 * 40ms = 5000ms  (5 seconds)
	 t2 timer = (10-5) *  10 * 40ms = 2000ms  (2 seconds)
	 ti timer = (10-5) * 125 * 40ms = 25000ms (25 seconds)
	
	To increase these timers further, the DLC transport timer settings must be
	increased within the registry. However, caution should be taken before changing
	these settings.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbusage sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	
	=============================================================================
	
