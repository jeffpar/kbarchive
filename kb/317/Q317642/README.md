---
layout: page
title: "Q317642: FIX: APPC/CPI-C Applications May Not Switch to Active Connection"
permalink: /kb/317/Q317642/
---

## Q317642: FIX: APPC/CPI-C Applications May Not Switch to Active Connection

	Article: Q317642
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP4
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbhis2000fix kbsna400sp4
	Last Modified: 31-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Advanced Program-to-Program Communications/Common Programming Interface for
	Communications (APPC/CPI-C) application that operates properly with one
	connection may stop responding (hang) when the application needs to switch to
	another connection in a Hot Backup or Load Balacing situation.
	
	CAUSE
	=====
	
	SNA Server 4.0 SP4 uses a new load balancing code that does not handle a "lost
	locality message" properly.
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft SNA Server version 4.0 service pack that contains this
	fix.
	
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
	
	  Date         Time    File name
	  -------------------------------------
	  17-Dec-2001  15:35   Wappc32.dll
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	Host Integration Server 2000
	----------------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Host Integration Server 2000 service pack that contains
	this fix.
	
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
	
	  Date         Time    File name
	  -------------------------------------
	  17-Dec-2001  15:35   Wappc32.dll
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	4.0 SP4, and Host Integration Server 2000.
	
	MORE INFORMATION
	================
	
	Microsoft added a "last good server" field to Host Integration Server 2000 and
	SNA Server 4.0 SP4 to prevent unnecessary retries to establish a conversation
	through an active connection. This field is not reset correctly during
	lost-locality processing, so the resource location code makes repeated attempts
	to use the non-existent connection.
	
	If you enable Systems Network Architecture (SNA) Application internal tracing,
	the resulting trace may appear as follows:
	
	LU62CONN for tpcb 0x1472030 rcb 0x1472128 
	tpcb_destl is zero - use locality 3 for rcb 
	not first pass open lu62 
	send non-directed open 
	   srci:0x0001 desti:0x0000 
	send to destl 3 from srcl 0 
	MangleLPIs in from an App 
	XLPI 0004:00:0002->0004:00:0000  CLP 00:00->03:11 
	XLPI 0200:00:0002->0003:11:0000  CLP 00:00->03:11 
	O| XLPI 0200:00:0002->0003:11:0000  CLP 00:00->03:11 
	O| MHTYP:0x0001 MSGTYP:0x01 OPNQUAL:0x01 OPNTYP:0x24 NUMELT:0x02 
	L-table entry is not in use, LVAL=1 
	
	The last entry:
	
	L-table entry is not in use, LVAL=1
	
	indicates the "lost locality message" that the application does not handle
	properly.
	
	Additional query words: Snaservr sp1 sp2 sp3 sp4 1 2 3 4 service pack
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbhis2000fix kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400SP4
	Version           : :4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
