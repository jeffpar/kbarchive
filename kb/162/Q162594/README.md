---
layout: page
title: "Q162594: SNARAS Receives 651 RAS Error After Failed Connection Attempt"
permalink: /kb/162/Q162594/
---

## Q162594: SNARAS Receives 651 RAS Error After Failed Connection Attempt

{% raw %}

	Article: Q162594
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may want to use the NETBIOS interface made available in SNARAS to employ
	Microsoft networking over your existing SNA network, which consists mainly of
	9600 SDLC multidrop links. This would allow you to use Systems Management Server
	remote control facilities and manage your computers running Windows NT Server
	through the Windows NT Administrative Utilities and the SNA Administrator UI.
	
	However, implementing SNARAS over slow SDLC links on WAN networks can result in
	the following errors. When the SNARAS connection is dialed using the remote
	access client phonebook, after 10 seconds or so the following error message
	appears:
	
	  Error 629
	  Port was disconnected by remote machine.
	
	At this point, you have the option to cancel or retry. If you click Retry, after
	about 5 seconds the following error message may appear:
	
	  Error 651
	  Your modem or other connecting device has reported an error.
	
	CAUSE
	=====
	
	The very low network bandwidth being used is insufficient to host the complex
	protocols employed to achieve Microsoft networking. The low bandwidth is further
	eroded as peer entities in all the protocol stacks being used time out request
	and initiate their retransmission routines.
	
	The problem ultimately is the low bandwidth of the end-to-end connection, which
	can be as low as 120 KBps as a result of a mixture of low speed SDLC links
	between FEPs and other SNA traffic over the same links. SNARAS provides a
	guaranteed delivery, but RAS "believes" that it is not guaranteed and this level
	of bandwidth is too low for RAS to use.
	
	RESOLUTION
	==========
	
	Upgrade slow links to links that can adequately handle NetBIOS/Server Message
	Block (SMB) traffic.
	
	MORE INFORMATION
	================
	
	Within the SNARAS components connection timeouts can be seen by employing the
	checked versions of Snaras.dll and Rassna.dll to produce internal tracing, as
	demonstrated below:
	
	RASSNA.DLL internal tracing
	---------------------------
	
	66:d5 RasSna1 SriBindOutgoingComplete: issue connect
	66:d5 RasSna1 SriConnect: sent OK
	66:d5 SriCallback - message 0x14B378 type 259 rc 9
	66:d5 RasSna1 SriConnectComplete: rc=9
	66:d5 RasSna1 SriConnectComplete: failed, rc=9
	66:d5 RasSna1 SriConnectComplete: setting event 000001A4
	66:b6 RasSna1 DeviceWork: Entered
	66:b6 RasSna1 DeviceWork: resetting event 000001A4
	66:b6 RasSna1 DeviceWork: LastError = 651
	66:b6 RasSna1 DeviceWork: Exit rc=651
	
	SNARAS.DLL internal tracing
	---------------------------
	
	66:d5 ProcessAPPCWork - Outstanding verbs on conv 0
	66:d5 RAS_LINE_CONNECTING
	66:d5 RECEIVEANDWAIT complete on AAR, rc1 0, rc2 0
	66:d5 RAWComplete - connect error so terminate line
	66:d5 TermLine - start terminate on line AA
	66:d5 Client, Send TP id=03000000A03A1700
	66:d5 IssueTPEnded - issue TP Ended type 1 on AAS
	
	However, these failures occur as a result of an underlying network failure which
	can be seen if RAS PPP logging is enabled. The logs will show PPP packets get
	received a very long time after they are sent, causing PPP LCP to come down and
	re-negotiate. So LCP goes up and down for a long time until it disconnects. This
	is called a cross connection.
	
	
	Although there are Microsoft Knowledge Base articles that describe how to tune
	timing parameters in the network protocols right up to SMB layer, Microsoft
	network architecture is not designed to work over networks offering such low
	bandwidth.
	
	
	STATUS
	======
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0,4.0
	
	=============================================================================
	

{% endraw %}
