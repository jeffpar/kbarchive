---
layout: page
title: "Q316746: TN3270E Print Jobs Have &quot;Spooling&quot; Status and Do Not Print"
permalink: /kb/316/Q316746/
---

## Q316746: TN3270E Print Jobs Have &quot;Spooling&quot; Status and Do Not Print

	Article: Q316746
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbsna400sp3 kbhis2000 kbhis2000bug kbsna400sp4
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a host application sends multiple TN3270E print-job requests that are
	delimited by a begin bracket (BB) and end bracket (EB) sequence, the first print
	job may print successfully, but the next print job remains in the print queue
	with a status of "spooling."
	
	NOTE: This issue affects only TN3270E print sessions, not TN3287 sessions.
	
	CAUSE
	=====
	
	This behavior occurs because the TN3270 service fails to send the PRINT-EOJ data
	type to a TN3270E print emulator to signal the end of a print job when it
	receives the EB sequence from the host application.
	
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	There is no fix for this issue in SNA Server 4.0 Service Pack 3 (SP3) and SP4.
	
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	+---------------------------------+
	| File name    | Date     | Time  | 
	+---------------------------------+
	| tn3servr.exe | 02/06/02 | 09:37 | 
	+---------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The PRINT-EOJ data type was added to the TN3270E specification in Request for
	Comments (RFC) 2355, which replaces RFC 1647. The PRINT-EOJ data type was added
	to provide support for an end-of-job indicator for TN3270E print jobs.
	
	For more information about the PRINT-EOJ data type, browse to the following
	Internet Engineering Task Force (IETF) Web site to see RFC 2355:
	
	  http://www.ietf.org/rfc/rfc2355.txt
	
	TN3287 printing support was added to the TN3270 specification in RFC 1646.
	
	For more information about TN3287, browse to the following IETF Web site to see
	RFC 1646:
	
	  http://www.ietf.org/rfc/rfc1646.txt
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q149303 TN3287 Support Added to the TN3270 Server
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3 kbhis2000 kbhis2000bug kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
