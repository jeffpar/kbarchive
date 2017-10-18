---
layout: page
title: "Q275708: TN3270E Bracket Error Because of Race Condition"
permalink: kb/275/Q275708/
---

## Q275708: TN3270E Bracket Error Because of Race Condition

	Article: Q275708
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	TN3270(E) clients may intermittently lose their session to the host application.
	When the failure occurs, the emulator may display a message indicating that a
	"BRACKET ERROR" was encountered; the actual format of the message varies
	depending on the TN3270(E) emulator that is being used.
	
	SNA application LUA API traces that are gathered during the failure indicate the
	following return codes on the failed session:
	
	  prim_rc=0x1400 (LUA_UNSUCCESSFUL) sec_rc=0x00000320 (LUA_BRACKET)
	
	In addition, the Microsoft Windows NT application event log shows the following
	events at the time the failure occurred:
	
	  EventID : 603
	  Source : TN3270 Server
	  Description : TN3270(E) session with client at xxxx.xxxx.xxxx.xxxx (port xxxx)
	  using LU ABCD terminated abnormally because:
	  TN3270E Service Error 505
	  SNA API verb WRITE failed. Failure described as:
	  RUI Write verb has completed with primary rc of Unsuccessful and secondary rc
	  of Bracket Protocol Error.
	  Explanation : A TN3270(E) client session was terminated abnormally
	
	  EventID : 309
	  Source : TN3270 Server
	  Description : WRITE failed with LUA_UNSUCESSFUL / LUA_BRACKET for
	  xxxx.xxxx.xxxx.xxxx(port xxxx)
	  Explanation : An SNA API call failed
	
	CAUSE
	=====
	
	The TN3270 server received direction on the session on an RQD chain, and should
	have discarded any queued data from the client. Instead, the server attempted to
	send the queued data to the host, and subsequently received the bracket error.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
