---
layout: page
title: "Q296163: DB2 OleDB Provider Fails To Return Data On OLAP DrillThrough"
permalink: /kb/296/Q296163/
---

## Q296163: DB2 OleDB Provider Fails To Return Data On OLAP DrillThrough

	Article: Q296163
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhis2000
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you browse data from a Host Integration Server (HIS) 2000 Ole DB Provider
	for DB2 data source by using the drillthrough feature of an online analytical
	processing (OLAP) cube, you may receive the following error message:
	
	  Error Status = 0xFFFFFFF8, Error Code = 0x00000000, External Error Code =
	  0x80040E14, (Microsoft DB2 OLE DB Provider) A SQL error has occurred. Please
	  consult the documentation for your specific DB2 version for a description of
	  the associated Native Error and SQL State. SQLSTATE: 26501, SQLCODE: -514.
	
	RESOLUTION
	==========
	
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
	
	+---------------------------------+
	| File Name    | Date     | Time  | 
	+---------------------------------+
	| Db2oledb.dll | 04/02/01 | 16:31 | 
	+---------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Host Integration Server 2000.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhis2000 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
