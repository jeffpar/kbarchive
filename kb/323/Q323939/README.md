---
layout: page
title: "Q323939: FIX: &quot;Not Enough Memory&quot; Err Msg  When You Retrieve a NULL Date"
permalink: /kb/323/Q323939/
---

## Q323939: FIX: &quot;Not Enough Memory&quot; Err Msg  When You Retrieve a NULL Date

	Article: Q323939
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhis2000fix kbhis2000bugkbbuglist kbfixlist
	Last Modified: 05-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the OLE DB provider for DB2, if you use a stored procedure to
	retrieve a date value that is populated with a null value, you may receive the
	following error message:
	
	  "Not enough memory to complete this operation"
	
	
	RESOLUTION
	==========
	
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
	
	The English version of this fix has the file attributes (or later) that are
	listed in the following table. The dates and times for these files are listed in
	coordinated universal time (UTC). When you view the file information, it is
	converted to local time. To find the difference between UTC and local time, see
	the Time Zone tab in the Date and Time tool in Control Panel.
	
	  Date         Time   Version      Size      File name
	  -------------------------------------------------------
	  03-Jun-2002  08:35  5.0.0.836    262,416   Mseidrda.dll
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhis2000fix kbhis2000bug kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug kbhostintegserv2000
	Solution Type     : kbfix
	
	=============================================================================
	
