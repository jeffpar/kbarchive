---
layout: page
title: "Q138016: TN3270 Init Status Delay Timer"
permalink: kb/138/Q138016/
---

## Q138016: TN3270 Init Status Delay Timer

	Article: Q138016
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork sna4
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The TN3270 Service can be configured to support the "Init Status Delay" timer.
	This timer inhibits the TN3270 Server from sending status messages to the TN3270
	client during session establishment. To enable the "Init Status Delay" timer, do
	the following:
	
	SNA Server 2.11
	---------------
	
	- Go to TN3270 Admin, Select the Options button.
	
	- Input the desired value.
	
	- Select OK
	
	- You must restart the TN3270 service for the changes to take effect.
	
	SNA Server 3.0
	--------------
	
	- Under TN3270 Servers folder, select the TN3270 Server you wish to change.
	
	- Go to the View | Properties to display the &lt;TN3270 Server&gt;
	  Properties dialog box.
	
	- Select the Settings tab and input the desired value.
	
	- Select OK
	
	- You must restart the TN3270 service for the changes to take effect.
	
	When a client connects to the TN3270 Server, the TN3270 Server sends the TN3270
	client messages to display on the client terminal, such as "Client request
	pending" or "host LU found". To avoid a flurry of these messages if the
	connection comes up quickly, the TN3270 Server does not send any of the messages
	while the Init Status Delay timer is running.
	
	MORE INFORMATION
	================
	
	The following example shows the client receiving multiple status messages while
	an SDLC link service is activating. The timer is set for 2 seconds as noted in
	these outputs:
	
	  TEV_SNAInitTimerStarted
	  Delay=2000 seconds
	
	NOTE: The trace file shows this value incorrectly by a factor of x1000 seconds.
	
	>10/04 15:26:54.957 (+ smidgen )  Event=TEV_SNAInitTimerStarted
	Thread = 0x0000010E  Session = 0x002661D0  Socket = 0x00000144
	Delay = 2000 seconds
	
	>10/04 15:26:56.960 (+  1 secs )  Event=TEV_SNAInitTimerPopped
	Thread = 0x0000010E  Session = 0x002661D0  Socket = 0x00000144
	
	>10/04 15:26:56.980 (+ smidgen )  Event=TEV_TCPSendIssued
	Thread = 0x0000010E  Session = 0x002661D0  Socket = 0x00000144
	Number of bytes = 151
	000000  05c5 1140 4013 1d60 11c1 50e3 d5f3 f2f7  |.E.  ..-.A&TN327|
	000010  f040 e285 99a5 8983 8540 d485 a2a2 8187  |0 Service Messag|
	000020  8540 f5f2 f311 c260 11c3 f0e3 8885 4084  |e 523.B-.C0The d|
	000030  81a3 8140 9389 9592 4089 a240 8183 a389  |ata link is acti|
	000040  a581 a389 9587 4086 9699 40d3 e440 e2c4  |vating for LU SD|
	000050  d3c3 f1f0 4b11 c540 11c6 50e8 96a4 4094  |LC10..E .F&You m|
	000060  81a8 4083 9695 a389 95a4 8540 a396 40a6  |ay continue to w|
	000070  8189 a36b 4096 9940 a385 9994 8995 81a3  |ait, or terminat|
	000080  8540 a896 a499 40a2 85a2 a289 9695 4b11  |e your session..|
	000090  c760 11c8 f0ff ef                        |G-.H0..         |
	
	>10/04 15:27:23.288 (+ smidgen )  Event=TEV_SNAInitTimerStarted
	Thread = 0x0000010E  Session = 0x002661D0  Socket = 0x00000144
	Delay = 2000 seconds
	
	>10/04 15:27:25.291 (+  1 secs )  Event=TEV_SNAInitTimerPopped
	Thread = 0x0000010E  Session = 0x002661D0  Socket = 0x00000144
	
	>10/04 15:27:25.291 (+ smidgen )  Event=TEV_TCPSendIssued
	Thread = 0x0000010E  Session = 0x002661D0  Socket = 0x00000144
	Number of bytes = 140
	000000  05c5 1140 4013 1d60 11c1 50e3 d5f3 f2f7  |.E.  ..-.A&TN327|
	000010  f040 e285 99a5 8983 8540 d485 a2a2 8187  |0 Service Messag|
	000020  8540 f5f2 f511 c260 11c3 f0e3 8885 40d7  |e 525.B-.C0The P|
	000030  e440 89a2 4081 83a3 89a5 8540 8696 9940  |U is active for |
	000040  d3e4 40e2 c4d3 c3f1 f04b 11c5 4011 c650  |LU SDLC10..E .F&|
	000050  e896 a440 9481 a840 8396 95a3 8995 a485  |You may continue|
	000060  40a3 9640 a681 89a3 6b40 9699 40a3 8599  | to wait, or ter|
	000070  9489 9581 a385 40a8 96a4 9940 a285 a2a2  |minate your sess|
	000080  8996 954b 11c7 6011 c8f0 ffef            |ion..G-.H0..    |
	
	The last example shows the timer set to 200 seconds, and the timer being
	canceled. The client does not receive any status messages because the link
	activates before the timer expires.
	
	NOTE: The timer is set for 200 seconds TEV_SNAInitTimerStarted: Delay=200000
	seconds. The trace file shows this value incorrectly by a factor of x1000
	seconds.
	
	>10/04 15:25:06.000 (+ smidgen )  Event=TEV_SNAInitTimerStarted
	Thread = 0x00000105  Session = 0x002661D0  Socket = 0x00000014
	Delay = 200000 seconds
	
	>10/04 15:25:37.025 (+ smidgen )  Event=TEV_SNAInitTimerCanceled
	Thread = 0x00000105  Session = 0x002661D0  Socket = 0x00000014
	
	NOTE: In this example, it took the link 31 seconds to activate.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbinterop kbnetwork sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400
	Version           : WINDOWS:2.11,3.0,4.0
	
	=============================================================================
	
