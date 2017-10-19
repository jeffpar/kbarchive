---
layout: page
title: "Q308927: CNOS Negotiation May Fail with &quot;Modename not recognized&quot; Error"
permalink: /kb/308/Q308927/
---

## Q308927: CNOS Negotiation May Fail with &quot;Modename not recognized&quot; Error

	Article: Q308927
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbhis2000bug kbsna400sp4
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Advanced Program-to-Program Communications (APPC) or Common Programming
	Interface for Communications (CPI-C) application may fail to establish a session
	even if it is using the correct session settings (such as Local APPC LU, Remote
	APPC LU, or Mode).
	
	CAUSE
	=====
	
	Establishing an APPC session requires a successful Change Number of Sessions
	(CNOS) negotiation. When a CNOS negotiation fails for a LU-LU-mode triplet, the
	host sends a CNOS reply with the reply modifier field set to indicate the
	problem that has been encountered. However, when SNA Server submits a subsequent
	CNOS request, it does not clear the reply modifier field. This may cause the
	CNOS to fail even if the correct LU-LU-mode triplet was used.
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next SNA Server version 4.0 service pack that contains this fix.
	
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
	later:
	
	+------------------------------------+
	| File name    | Date        | Time  | 
	+------------------------------------+
	| Snaservr.exe | Jan-30-2001 | 17:23 | 
	+------------------------------------+
	| Trcservr.exe | Jan-30-2001 | 17:23 | 
	+------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	Host Integration Server 2000
	----------------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Host Integration Server 2000 service pack that contains this fix.
	
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
	later:
	
	+------------------------------------+
	| File name    | Date        | Time  | 
	+------------------------------------+
	| Snaservr.exe | Jan-30-2001 | 17:03 | 
	+------------------------------------+
	| Trcservr.exe | Jan-30-2001 | 17:03 | 
	+------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	SNA Server 4.0
	--------------
	
	Microsoft has confirmed this to be a problem in SNA Server versions 4.0, 4.0 SP1,
	4.0 SP2, 4.0 SP3, and 4.0 SP4.
	
	Host Integration Server 2000
	----------------------------
	
	Microsoft has confirmed this to be a problem in Host Integration Server 2000.
	
	MORE INFORMATION
	================
	
	If SNA Server Data Link Control (DLC) message tracing is enabled, the resulting
	trace may appear as follows:
	
	  01020201->0C160000 DLC DATA
	                     DAF:7D OAF:04 ODAI:on  Normal
	                     RQE FMD FI MC DR1
	
	  ---- Header  at address 0138618C, 1 elements ----
	  0B01000C 10112E00 7D040002 01006601     <........}.....f.>
	
	  ---- Element at address 01D7E428, start 10, end 25 ----
	  0890000D 0502FF00 03D00000 0206F100     <..............1.>
	
	The ATTACH is sent out against the CNOS TP 0x'06F1', as follows:
	
	  ----------------------------------------------- 06:57:04.0151
	  01020201->0C160000 DLC DATA
	                     DAF:7D OAF:04 ODAI:on  Normal
	                     RQE FMD EC DR1 CD
	
	  ---- Header  at address 01393B18, 1 elements ----
	  07058C00 10112E00 7D040003 0100CB00     <........}.......>
	
	  ---- Element at address 01DC2FB8, start 10, end 37 ----
	  01902000 19121002 02000000 00340032     <.. ..........4.2>
	                 ^^ ^^
	  00020008 D4F6F2D7 F0F0F240              <....M62P002@    >
	
	A CNOS is sent to the host using the correct mode name, as follows:
	
	  ----------------------------------------------- 06:57:04.0245
	  0C160000->01020201 DLC DATA
	                     DAF:04 OAF:7D ODAI:on  Normal
	                     RQE FMD BC EC DR1 PI CEB
	
	  ---- Header  at address 01397F8C, 1 elements ----
	  07058C00 10112E00 047D0001 01006601     <.........}....f.>
	
	  ---- Element at address 01D9C7C8, start 10, end 37 ----
	  03910100 19121008 02000000 00340032     <.j...........4.2>
	                 ^^ ^^
	  00020008 D4F6F2D7 F0F0F240              <....M62P002@    >
	
	but is failing with 0802 (indicated above with ^^^^).
	
	However, when you look at the CNOS request in the previous frame, you can see
	that the reply modifier field is set to X'02' (indicated by ^^^^), or
	"abnormal--mode name not recognized", showing that a previous CNOS request
	failed.
	
	According to the IBM SNA Formats (GA27-3136) guide, reserved fields such as the
	reply modifier should be set to 0x'00'.
	
	Future levels of the protocol may use reserved fields and will depend on
	back-level implementations. It is important for the sender to set reserved
	fields to zero.
	
	
	Additional query words: CNOS reply modifier
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbhis2000bug kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
