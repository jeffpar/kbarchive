---
layout: page
title: "Q313993: BUG: VSS Database Truncates Stored Procedures Larger Than 4 KB"
permalink: /kb/313/Q313993/
---

## Q313993: BUG: VSS Database Truncates Stored Procedures Larger Than 4 KB

{% raw %}

	Article: Q313993
	Product(s): Microsoft SourceSafe
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 32-bit, for Windows 6.0 
	- Microsoft SQL Server 2000 (all editions) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you check in stored procedures that are larger than 4 KB, anything after
	the 4 KB limit is truncated in the Visual SourceSafe (VSS) database. The stored
	procedure is never truncated in the SQL Server database.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	it has not been fully regression tested and should be applied only to computers
	that are experiencing this specific problem.
	
	NOTE: You must have a Visual Studio license agreement to obtain this fix.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version  Size   File name     Platform
	  ----------------------------------------------------------
	  Oct-17-2001  14:17  2.0      398KB  Mdt2dbns.dll  x86 
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This hotfix also resolves the issue in which SQL Server consumes 100 percent of
	the resources of the CPU and adds new stored procedures to the source control,
	as well as the issue in which source control icons do not appear in Visual
	InterDev.
	
	
	Additional query words: sourcesafe interdev sql 2000 trunc truncated stored procedure proc source control
	
	======================================================================
	Keywords          :  
	Technology        : kbSSafeSearch kbSQLServSearch kbAudDeveloper kbSQLServ2000Search kbSQLServ2000 kbSSafe600 kbSSafe32bitSearch
	Version           : :6.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
