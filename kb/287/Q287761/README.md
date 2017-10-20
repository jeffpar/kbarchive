---
layout: page
title: "Q287761: DB2OLEDB Provider Does Not Always Determine Nullability of Data"
permalink: /kb/287/Q287761/
---

## Q287761: DB2OLEDB Provider Does Not Always Determine Nullability of Data

{% raw %}

	Article: Q287761
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupportkbbuglist kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	- Microsoft SNA Server, version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DB2OLEDB provider is not always able to reliably determine the nullability
	of data. As a result of this, in some OpenQuery cases, the DB2OLEDB provider
	will sometimes return DBCOLUMNFLAGS_ISNULLABLE=0 (in other words, nonnullable)
	when the query is prepared, but the actual data indicates ISNULLABLE=1.
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	No fix is available for SNA Server 4.0 at this time.
	
	
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
	
	+---------------------------------+
	| File name    | Date     | Time  | 
	+---------------------------------+
	| MSeidrda.dll | 01/25/01 | 12:00 | 
	+---------------------------------+
	| MSeidb2d.dll | 01/25/01 | 12:00 | 
	+---------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	NOTE: This fix also requires that an update for SQL Server 2000 or SQL 7 to be
	applied. For additional information, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q293758 FIX: Nullability Changes Not Handled by SQL Server with Linked Server
	  Queries to DB2
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	and Host Integration Server 2000.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400SP4
	Version           : :4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
