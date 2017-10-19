---
layout: page
title: "Q149062: XCON: Eicon Tech. X.25 Diagnostic Commands for WinNT &amp; Exchange"
permalink: /kb/149/Q149062/
---

## Q149062: XCON: Eicon Tech. X.25 Diagnostic Commands for WinNT &amp; Exchange

	Article: Q149062
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The commands documented below are useful for reporting the current configuration
	and operational status of Eicon Technologies X.25 hardware and "WAN Services for
	Windows NT" software. These details may be requested by Eicon Technologies or
	Microsoft technical support when troubleshooting:
	
	- X.25 hardware and software installation and configuration issues.
	
	  -or-
	
	- Microsoft Exchange Server X.400 MTA-over-X.25 connectivity issues.
	
	MORE INFORMATION
	================
	
	Eicon Technologies's "WAN Services for Windows NT" diagnostic utilities are
	installed (by default) into the <drive>:\WSNT subdirectory. The output of
	these commands can be redirected to a text file using standard MS-DOS
	redirection syntax, for example:
	
	  dir >> dir.txt
	
	If you type the following from the \WSNT subdirectory:
	
	  ECMODULE STATS HDLC
	
	the following information appears on your screen:
	
	EiconCard Loadable Module Management Utility
	ECMODULE 3.03 Rev. 00
	Copyright (c) Eicon Technology Corporation 1995. All Rights Reserved.
	
	HDLC Loadable Module Statistics
	Port number: 01                      Port name: NCEMS3X25
	T1 expired.......: 0                    Retransmissions..:           0
	Underrun.........: 0
	Overrun..........: 0
	                  Sent     Received                      Sent
	Received
	SABM.............: 1         0          XID..............: 0         0
	DISC.............: 0         0          I................: 74785     74941
	UA...............: 0         1          RR...............: 30429     30638
	DM...............: 0         0          RNR..............: 0         0
	FRMR.............: 0         0          Rejects..........: 0         0
	Abort............: 0         0
	Bad type.........:           0
	Bad CRC..........:           0
	Command Completed Successfully.
	
	Typically, equal numbers of SABM and UA are expected. Significant numbers of
	"Abort, Bad Type, Bad CRC, RNR or Rejects" indicates a fundamental problem in
	the hardware, its configuration, or the link to the other site.
	
	If you type the following:
	
	  ECMODULE STATS X25
	
	the following information appears on your screen:
	
	EiconCard Loadable Module Management Utility
	ECMODULE 3.03 Rev. 00
	Copyright (c) Eicon Technology Corporation 1995. All Rights Reserved.
	
	X.25 Loadable Module Statistics
	Port number: 01                      Port name: NCEMS3X25
	
	                    Sent     Received                     Sent
	Received
	Call      request..: 29        428     Data packets......: 38856     38992
	         Confirm..: 424       25      Data segments.....: 68660     68552
	Restart   request..: 1         0       Characters........: 3902364
	3898174
	         Confirm..: 0         1       Receiver Ready....: 35018     35038
	Register  request..: 0         0       Receiver Not Ready: 0         0
	         Confirm..: 0         0       Diagnostic packets: 0         0
	Clear     request..: 29        428     Unknown packets...: 0         0
	         Confirm..: 428       29      Rejects...........: 0         0
	Reset     request..: 0         0
	         Confirm..: 0         0
	Interrupt request..: 0         0
	         Confirm..: 0         0
	Command Completed Successfully.
	
	Information similar to the above is indicative of well running X.25 stack.
	
	If you type the following:
	
	  ECMODULE STATUS HDLC
	
	the following information appears on your screen:
	
	EiconCard Loadable Module Management Utility
	ECMODULE 3.03 Rev. 00
	Copyright (c) Eicon Technology Corporation 1995. All Rights Reserved.
	
	HDLC Loadable Module Status
	Port number: 01                      Port name: NCEMS3X25
	Addressing.................: DTE      Check point timer T1 (msec).: 2900
	Link setup.................: Active   Ack delay timer T2 (msec)...: 200
	Maximum retry count N2.....: 10       Idle probe timer T3 (msec)..: 15000
	Maximum window size K......: 7        Maximum frame size N1 (byte): 144
	
	Protocol state.............: Opened       @09:59:27 Mar 22
	
	Line state.................: Opened       @09:59:27 Mar 22
	
	Trace......................: Off      Trace buffer size (bytes)....: 0
	Trace filter (hex).........: 00       Trace entry size (bytes).....: 0
	Command completed successfully.
	
	The above displays the current configuration and operating status of the X.25
	stack at the HDLC [lowest] layer. Note that "Trace" is "Off". Typically, tracing
	down at the HDLC layer is only performed when troubleshooting X.25 connection
	[link] problems.
	
	If you type the following:
	
	  ECMODULE STATUS X25
	
	the following information appears on your screen:
	
	EiconCard Loadable Module Management Utility
	ECMODULE 3.03 Rev. 00
	Copyright (c) Eicon Technology Corporation 1995. All Rights Reserved.
	
	X.25 Loadable Module Status
	Port number: 01                      Port name: NCEMS3X25
	                              Default  Maximum
	Window size..................: 2        7
	Packet size (bytes)..........: 128      128
	Packet format................: Extended Maximum retry count N3......: 3
	Restart timer T20 (sec)......: 60       Reset timer T22 (sec).......: 60
	Call timer T21 (sec).........: 60       Clear timer T23 (sec).......: 60
	Idle timer (sec).............: 0        Acknowledgement timer (msec): 20
	Two-way VCs configured.......: 4        Permanent VCs configured....: 0
	In-coming VCs configured.....: 0        Out-going VCs configured....: 0
	Trace........................: Off      Trace buffer size (bytes)...: 0
	Trace filter (hex)...........: 00       Trace entry size (bytes)....: 0
	Link activated at............: @09:59:27 Mar 22
	Last restart.................: @09:59:27 Mar 22
	
	VC  Local Address  Remote Address  Type     Status
	---------------------------------------------------------------------------
	No active connection.
	Command completed successfully.
	
	This command reports many of the critical X.25 layer configuration parameters.
	Generally, Window size, Packet size, Packet format should match the other
	party's X.25 configuration to maximize throughput and performance. Note that
	"Trace" is currently "Off". Tracing at the X.25 is useful when troubleshooting
	X.25 connectivity issues and sometimes even application issues (for applications
	that are run across the link).
	
	
	Eicon Technologies technical support can be reached at (214) 490-3270 (U.S.
	only), or on the Internet at:
	
	  http://www.eicon.com
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
