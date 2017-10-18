---
layout: page
title: "Q325068: FIX: ODBC Driver for DB2 May Cause Jet Error"
permalink: kb/325/Q325068/
---

## Q325068: FIX: ODBC Driver for DB2 May Cause Jet Error

	Article: Q325068
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to a host database through Microsoft Access or Microsoft Excel
	by using the Host Integration Server ODBC Driver for DB2, and you use a data
	source name (DSN) to link tables or to import tables, you may receive the
	following error messages:
	
	  "The Microsoft Jet database engine could not find the object '<Table
	  Name>'. Make sure the object exists and that you spell its name and path
	  name correctly."
	
	  -or-
	
	  "Can't access table <Table Name>"
	
	This may occur when the table name contains special characters such as an
	underscore (_). For example, a table name such as "aaa_bbb" can cause this
	problem.
	
	
	CAUSE
	=====
	
	The jet provider that is used by Excel and Access passes the table name to the
	provider as "aaa\_bbb" (for example). The Host Integration Server ODBC Driver
	for DB2 incorrectly parses the backslash (\) (or escape) character.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Host Integration Server 2000 service pack
	that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix has the file attributes (or later) that are
	listed in the following table. The dates and times for these files are listed in
	coordinated universal time (UTC). When you view the file information, it is
	converted to local time. To find the difference between UTC and local time, use
	the Time Zone tab in the Date and Time tool in Control Panel.
	
	  Date         Time   Version        Size   File name
	  ---------------------------------------------------------
	  21-Jun-2002  11:13  5.0.0.866    880,912  Mseidb2d.dll
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Host Integration Server 2000.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug kbhostintegserv2000
	Solution Type     : kbfix
	
	=============================================================================
	
