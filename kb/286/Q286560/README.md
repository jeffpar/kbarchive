---
layout: page
title: "Q286560: Interface Unknown Error With DB2 Column Length Greater Than 300"
permalink: kb/286/Q286560/
---

## Q286560: Interface Unknown Error With DB2 Column Length Greater Than 300

	Article: Q286560
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbsna400sp4kbbuglist kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are executing a query against the DB2OLEDB drive, you may experience an
	error message similar to this:
	
	     Interface: Unknown
	     Result: 0x80004005 = E_FAIL
	
	This error will occur if you are trying to retrieve a DB2 data column that is
	more than 300 bytes in length, with the host character code set identifier
	(CCSID) set to "290". The ODBC driver would work fine.
	
	CAUSE
	=====
	
	SNANLS.dll, which handles converting single-byte character stream (SBCS)
	EBCDIC-to-Unicode-to-ANSI and SBCS ANSI-to-Unicode-to-EBCDIC, was overrunning a
	static buffer.
	
	
	RESOLUTION
	==========
	
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
	
	+-------------------------------+
	| Filename   | Date     | Time  | 
	+-------------------------------+
	| SNANLS.dll | 01/22/01 | 12:00 | 
	+-------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0.
	
	Additional query words: db2 db2oledb sna
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbsna400sp4 kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
