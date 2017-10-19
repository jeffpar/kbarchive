---
layout: page
title: "Q169118: Netmon Trace Can Show Why 2004 Warnings Get Logged."
permalink: /kb/169/Q169118/
---

## Q169118: Netmon Trace Can Show Why 2004 Warnings Get Logged.

	Article: Q169118
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Network Monitor can be a useful way of finding out if the line printer daemon
	(LPD) server is actually not responding to the request made by the computer
	running Windows NT Server to accept a line printer remote (TCP/IP printing) job.
	
	MORE INFORMATION
	================
	
	When the LPD repeatedly does not acknowledge a synchronization request from a
	Windows NT line printer remote (LPR) request, an event 2004 warning is created
	in the application log of the computer running Windows NT Server.
	
	
	A normal trace of a LPR job acceptance may look like the following:
	
	Frame Time  Src MAC     Dst MAC     Prot Description
	----- ----  -------     -------     ---- -----------
	26    6.654 NT Server   LPD printer TCP  .A...F, len: 0, seq: 195514116,
	                                        ack: 15205971, win:8571,
	                                        src: 723 dst
	27    6.661 LPD printer NT Server   TCP  .A...., len: 0, seq: 15205971,
	                                        ack: 195514117, win: 105,
	                                        src: 515  dst
	28    6.663 LPD printer NT Server   TCP  .A...F, len: 0, seq: 15205971,
	                                        ack: 195514117, win: 105,
	                                        src:  515  dst
	29    6.663  NT Server  LPD printer TCP  .A...., len: 0, seq:195514117,
	                                        ack: 15205972, win: 8571,
	                                        src: 723  dst
	
	Frames 26 through 29 show a Windows NT server finishing a previous job to the LPD
	printer. The printer acknowledges (ACK) the server's final packet (frame 26) in
	frame 27. Frame 28 is the printer telling the server that it has no more packets
	to send, and frame 29 is the server's ACK of 28.
	
	30    6.733  NT Server   LPD printer TCP ....S., len: 4, seq:195509232,
	                                        ack: 0, win: 8192,src: 724   dst
	31    6.737  LPD printer NT Server   TCP .A.R.., len: 0, seq: 0, ack:
	                                        195509233, win: 0, src: 515   dst
	32    7.180  NT Server   LPD printer TCP ....S., len: 4, seq:195509232,
	                                        ack: 0, win: 8192,src:724   dst
	33    7.185  LPD printer NT Server   TCP .A..S., len: 4, seq:15205974,
	                                        195509233, win: 2144,src: 515  dst
	
	Frame 30 shows the server trying to synchronize with the printer and frame 31 is
	the printer responding to the server that it has reset. The server then sends
	another synchronization packet that the printer then acknowledges (frame 33).
	The server can then begin the process of sending the print job.
	
	
	If the printer does not send the synchronization acknowledgment, but instead
	replies with another reset, the server will again send a synchronization packet.
	The repetition of this process will cause a 2004 event to be logged.
	
	Some LPD printers send this reset frame when they are still busy printing the
	previous job. If all jobs print fine, the warnings can be ignored.
	
	Additional query words: bloodhound
	
	
	There are many other possible causes for an event 2004. For more information,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q142370 Printing to HP Laserjet Printer Results in Event 2004
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
