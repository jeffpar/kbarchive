---
layout: page
title: "Q279341: OLE DB Provider for DB2 Hangs When Calling Stored Procedure"
permalink: kb/279/Q279341/
---

## Q279341: OLE DB Provider for DB2 Hangs When Calling Stored Procedure

	Article: Q279341
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport kbsna400sp3
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The OLE DB Provider for DB2 hangs when a Stored Procedure is called if the
	output parameters returned by the Stored Procedure are larger than 32 kilobytes
	(KB).
	
	The symptoms that are seen by an end user when this problem occurs may vary
	depending on the application that generates the OLE DB Provider's call to the
	Stored Procedure. In the reported instance of this problem, the Microsoft Visual
	Basic application that initiated the call to the Stored Procedure halted and
	stopped responding when this problem occurred.
	
	CAUSE
	=====
	
	Output parameters returned by a Stored Procedure that are greater than 32 KB in
	size cause the memory that is used by the OLE DB Provider for DB2 for
	communication purposes to be exhausted.
	
	
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
	
	+-------------------------------------+
	| File name    | Date       | Time    | 
	+-------------------------------------+
	| Drda.dll     | 10/20/2000 | 12:20PM | 
	+-------------------------------------+
	| Ddmtcp.dll   | 10/20/2000 | 12:20PM | 
	+-------------------------------------+
	| Db2wappc.dll | 10/20/2000 | 12:20PM | 
	+-------------------------------------+
	
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
	
	+---------------------------------+
	| File name    | Date     | Time  | 
	+---------------------------------+
	| Mseidrda.dll | 01/10/01 | 08:05 | 
	+---------------------------------+
	| Mseidpm.dll  | 01/10/01 | 08:05 | 
	+---------------------------------+
	| Mseidb2d.dll | 01/10/01 | 08:05 | 
	+---------------------------------+
	| Db2oledb.dll | 01/10/01 | 08:04 | 
	+---------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	Service Pack 3 (SP3), SNA Server version 4.0 Service Pack 4 (SP4), and Host
	Integration Server (HIS) 2000.
	
	
	Additional query words: Drda Ddmtcp Db2wappc sp3 his
	
	======================================================================
	Keywords          : kbDSupport kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
