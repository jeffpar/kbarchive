---
layout: page
title: "Q275896: SNA Server Rejects TN3270 Client Data with Sense Code 200D"
permalink: /kb/275/Q275896/
---

## Q275896: SNA Server Rejects TN3270 Client Data with Sense Code 200D

{% raw %}

	Article: Q275896
	Product(s): Microsoft SNA Server
	Version(s): 3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	TN3270(E) clients may intermittently lose their session to the host application.
	This problem occurs when the SNA Server TN3270 client is used to communicate
	with an SAS Statistical Analysis application.
	
	When the failure occurs, the emulator may display a message that indicates that a
	"BRACKET ERROR" was encountered; the actual format of the message may vary
	depending on the TN3270(E) emulator that is used.
	
	The SNA application LUA API traces that are gathered during an occurrence of the
	failure indicate the following return codes on the failed session:
	
	  prim_rc=0x1400 (LUA_UNSUCCESSFUL) sec_rc=0x00000320 (LUA_BRACKET)
	
	In addition, the Microsoft Windows NT application event log may show the
	following events at the time that the failure occurs:
	
	  EventID : 603
	  Source : TN3270 Server
	  Description : TN3270(E) session with client at xxxx.xxxx.xxxx.xxxx (port
	  xxxx)using LU ABCD terminated abnormally because:
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
	
	When this problem occurs, SNA Server receives data from the host with the CD CD
	(Change Direction) and DR1 (Definite Response) bits set, which it passes through
	TN3270 server to the client.
	
	However, the user of the TN3270 client is typing ahead and as a result the client
	then sends some data to the TN3270 server without first sending an ACK for the
	previous data frame from the host that had the DR1 bit set. This causes SNA
	Server to reject this new data frame with a sense code of 200D.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	Microsoft recommends that customers use an emulator that adheres to the IBM
	TN3270 protocol specification.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0, SP1, SP2 and SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
