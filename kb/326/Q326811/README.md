---
layout: page
title: "Q326811: FIX: ODBC Driver for DB2 Maps DATE Fields to Text When You Link"
permalink: /kb/326/Q326811/
---

## Q326811: FIX: ODBC Driver for DB2 Maps DATE Fields to Text When You Link

	Article: Q326811
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhis2000 kbhis2000bug
	Last Modified: 01-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft ODBC Driver for DB2 to link a table from Microsoft Access
	(all versions), you may get incorrect values when the selected fields are
	defined as DATE data type fields.
	
	CAUSE
	=====
	
	The Micorosft ODBC Driver for DB2 is returning a SQL_TYPE_DATE,TIME,TIMESTAMP
	data type.
	
	This data type is not known by Microsoft Access (all versions), because Access is
	only ODBC 2.0 compliant. Microsoft Access maps this data type to the default
	data type TEXT.
	
	RESOLUTION
	==========
	
	Host Integration Server 2000
	----------------------------
	
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
	
	  Date         Time   Version      Size      File name
	  ---------------------------------------------------------
	  21-Jun-2002  17:13  5.0.0.866    880.912   Mseidb2d.dll       
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Host Integration Server 2000.
	
	Additional query words: ODBC Access DATE DB2
	
	======================================================================
	Keywords          : kbhis2000 kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
