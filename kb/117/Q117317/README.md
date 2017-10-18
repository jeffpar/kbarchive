---
layout: page
title: "Q117317: Client Shutdown Causes Ghosted TCP/IP Connection"
permalink: kb/117/Q117317/
---

## Q117317: Client Shutdown Causes Ghosted TCP/IP Connection

	Article: Q117317
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Even though you turn off a Windows NT TCP/IP client computer, a TCP/IP server
	continues to show a "ghosted" connection to the client. For example, services
	such as FTPSVC show users still logged on, even though they have powered off
	their computers.
	
	CAUSE
	=====
	
	If a TCP/IP client application stops accepting data, the TCP/IP stack will
	buffer a "TCP Windowsize" amount of data on the client before reporting a "zero
	window" back to the sending computer. The sending computer will then stop and
	wait before sending more data. Periodically, it will attempt to send 1 more byte
	as a test to see if the client has recovered. This is called "probing" the
	window. If the client is turned off while the connection is in this state,
	Windows NT will not time out the connection until the client comes back up. The
	undocumented "netstat -x" command can be used to verify whether a connection is
	stuck in this state. See below:
	
	_____________ TCB # 801 _________________
	
	rtxoff = 00000000
	srtt = 00000000
	rttvar = 000004b0
	rttpktsize = 00000000
	lastrttpktsize = 00000000
	ackticks = 0000
	keepcnt = 00004b00
	keeptries = 00000000
	syncnt = 00000000
	backlog = 00000000
	synlist_head = 00000000
	synlist_tail = 00000000
	urgcnt = 00000000
	ip_id = 00000001
	ipopts = 00000000
	ip_flags = 0600e5a1
	ip_maxsz = 00000000
	event_flags = 00000000
	in_putnext_down = 00000000
	*flink = fe850098
	*plink = feb13298
	*tcb_mp = fe92c024
	*tcb_qptr = fe573c90
	tcb_state = 000b (TS_WREQ_ORDREL)
	state = 00008617 (ST_SR, ST_SS, ST_SA, ST_FR, ST_RCV, \*ST_SND,
	>>>ST_PROBING) <<<----------------- State is "PROBING"
	dev = 0321
	work = 00000002 (FL_TXT)
	is_passive = 00 (False)
	opt_flag = 0001 (TO_REUSE_ADDR)
	laddr = 207.46.133.140
	lport = 20
	faddr = 130.202.22.58
	fport = 3188
	iniseq = 074fff8d
	rcvseq = 074fff8f
	rcvws = 2000
	advrcvws = 2000
	maxrcvws = 2000
	finseq = 074fff8e
	rcvuseq = 00000000
	sndseq = 02e9a45a
	lweseq = 02e9a45a
	sndws = 0000  <--------Send windowsize = 0
	congestws = 0e24
	ssthresh = 0600
	maxsndws = 0c00
	sndmax = 4000
	sndbr = 5e1f
	sndcnt = 0000
	sndseg = 05a8
	snduseq = 00000000
	snducnt = 0000
	pseqno = 00000000
	rtxdly = 00000600
	wakeup = 000005c3
	retry = 0333  <-------Retry count is huge (0x333)
	swsticks = 0000
	rtxflg = 00000000
	dlytim = 02e19fe8
	dlyseq = 02e9a3a9
	chead = 00000000
	ctail = 00000000
	cfrag = 00000000
	sndhd = fed280bc
	sndtl = fecea0bc
	sndrem = 00001e1f
	sndoff = 000001e1
	sndbuf = fed280bc
	rtxrem = 00000000
	rtxoff = 000001e1
	srtt = 00000187
	rttvar = 0000004f
	rttpktsize = 000000b1
	lastrttpktsize = 000000b1
	ackticks = 0000
	keepcnt = 00004b0
	
	WORKAROUND
	==========
	
	To work around this problem, manually disconnect sessions that have become
	ghosted.
	
	NOTE: If the client machine is turned back on (with the same IP address), it will
	respond to a window probe with a RST (TCP reset) which will cause the connection
	to be cleaned up. Ghosted or stuck sessions should only occur when the client
	does not comes back up.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in Windows NT
	Workstation and Windows NT Server version 3.5.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1
	
	=============================================================================
	
