---
layout: page
title: "Q326817: FIX: &quot;Reserved Error (-7743)&quot; Error Message with ODBC for DB2"
permalink: /kb/326/Q326817/
---

## Q326817: FIX: &quot;Reserved Error (-7743)&quot; Error Message with ODBC for DB2

{% raw %}

	Article: Q326817
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhis2000 kbhis2000bug
	Last Modified: 30-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to select DB2 tables that contain fields that are specified as
	SMALLINT, you may receive the following error message:
	
	  Reserved Error (-7743); there is no message for this error.
	
	This behavior occurs only if you are using the ODBC Driver for DB2 that comes
	with Host Integration Server 2000 (HIS). SNA Server 4.0 does not experience this
	problem.
	
	CAUSE
	=====
	
	When an application calls the ODBC SQLGetData function, the ODBC Driver for DB2
	incorrectly returns a 4-byte value for the data type SMALLINT. The SMALLINT data
	type should return a 2-byte value.
	
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
	  18-Mar-2002  23:19  5.0.0.836    876,816   Mseidb2d.dll       
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Host Integration Server 2000.
	
	MORE INFORMATION
	================
	
	This error occurs when the underlying Jet engine tries to retrieve information
	about the indexes of the table by using SQLStatistics, and then later tries to
	retrieve the data in a field by using SQLGetData.
	
	A field definition may be the folowing: 
	           Name: Type
	           Size: Smallint
	
	The following is the result of calling SQLGetdata in the ODBC Test application
	(ODBCTE32.EXE in the Microsoft ODBC Software Development Kit (SDK)):
	
	In: Statementhandle = 0x009D1BF0, ColumnNumber = 7, 
	TargetType = SQL_C_DEFAULT=99, TargetValuePtr = 0x001552B0, BufferLength = 12, 
	StrLen_or_IndPtr = 0x00172E88
	Return: SQL_SUCCESS=0
	Out:*TargetValuePtr = 0x03000000, *StrLen_or_IndPtr = 4
	
	The Length of the SMALLINT data type is incorrectly returned as a 4-byte value;
	the value of Length should be only 2 bytes.
	
	Additional query words: 7743 ODBC SQLGetData DB2
	
	======================================================================
	Keywords          : kbhis2000 kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
