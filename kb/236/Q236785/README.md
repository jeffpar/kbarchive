---
layout: page
title: "Q236785: TN3270 Client Sessions Fail with sec_rc=0x00000320 (LUA_BRACKET)"
permalink: /kb/236/Q236785/
---

## Q236785: TN3270 Client Sessions Fail with sec_rc=0x00000320 (LUA_BRACKET)

	Article: Q236785
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	TN3270(E) Clients may intermittently lose their session to the host application.
	When the failure occurs, the emulator may display a message indicating a
	"BRACKET ERROR" was encountered; the actual format of the message will vary
	depending on the TN3270(E) emulator being used.
	
	SNA Application LUA API traces gathered during an occurrence of the failure
	indicate the following return codes on the failed session :prim_rc=0x1400
	(LUA_UNSUCCESSFUL) sec_rc=0x00000320 (LUA_BRACKET).
	
	Additionally, the Windows NT application event log shows the following events at
	the time the failure occurred:
	
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
	
	BIND negotiation during the client's session Setup determine that Conditional
	Bracket Termination is used as the Bracket protocol on the session.
	
	In accordance with this protocol and as defined in the SNA formats specification,
	SNA Server is rejecting a new Begin_Bracket data message from the client
	emulator because TN Server hasn't acknowledged an earlier End_Bracket request
	sent to the client, which requires a definite response.
	
	Please refer to the IBM SNA Formats manual (GA27-3136)for further details.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	3.0,SP1, SP2, SP3, Microsoft SNA Server version 4.0, SP1 and SP2. This problem
	was first corrected in SNA Server version 4.0 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
