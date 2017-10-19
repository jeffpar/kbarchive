---
layout: page
title: "Q241991: TN3270 Emulator Displays Corrupted Data"
permalink: /kb/241/Q241991/
---

## Q241991: TN3270 Emulator Displays Corrupted Data

	Article: Q241991
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A TN3270 emulator display screen may contain corrupted data and characters. The
	display screen appears correctly using a 3270 emulator.
	
	Note: This particular problem does not occur when you use 802.2 DLC and SDLC
	connections to the host. Host connections that use other types of link services
	(for example, Channel) may experience this problem.
	
	CAUSE
	=====
	
	The SNA Server TN3270 service is an RUI Application. If an RUI application
	issues an RUI_READ request, but the RUI library (Winrui32.dll) has more data to
	return than can fit in the calling application's buffer (as specified in
	lua_max_length), Winrui32.dll returns a primary return code of LUA_OK and a
	secondary return code of LUA_DATA_INCOMPLETE. When the RUI application issues a
	subsequent RUI_READ to pick up the remaining data, the data may be corrupted.
	This data corruption can occur in Winrui32.dll if the "FMI" (3270 message) data
	received from the SNA Server computer occurs in a certain sequence.
	
	RESOLUTION
	==========
	
	SNA Server 3.0:
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later for SNA Server 3.0:
	
	+---------------------------------+
	| File name    | Date     | Time  | 
	+---------------------------------+
	| Winrui32.dll | 09/07/99 | 12:10 | 
	+---------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	SNA Server 4.0:
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0, SNA Server 3.0
	Service Pack 1, SNA Server 3.0 Service Pack 2, SNA Server 3.0 Service Pack 3,
	SNA Server 3.0 Service Pack 4, SNA Server 4.0, SNA Server 4.0 Service Pack 1,
	SNA Server 4.0 Service Pack 2, and SNA Server 4.0 Service Pack 3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
