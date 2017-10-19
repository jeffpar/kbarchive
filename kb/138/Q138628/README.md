---
layout: page
title: "Q138628: UT1x: MS Access Upsizing Tools Fails with MS SQL Server 6.0"
permalink: /kb/138/Q138628/
---

## Q138628: UT1x: MS Access Upsizing Tools Fails with MS SQL Server 6.0

	Article: Q138628
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Upsizing Tools 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	When you try to upsize a Microsoft Access version 2.0 database to Microsoft SQL
	Server version 6.0, you may receive an error message such as the following:
	
	  ODBC-call failed. [Microsoft][ODBC SQL Server Driver][SQL Server] Column
	  'D.status' is invalid in the select list because it is not contained in
	  either as aggregate function or the GROUP BY clause. [#8120]
	
	
	CAUSE
	=====
	
	The Microsoft Access Upsizing Tools are not designed for use with Microsoft SQL
	Server version 6.0. They are designed only for Microsoft SQL Server version 4.x
	for Windows NT and for Microsoft SQL Server version 4.x for OS/2.
	
	
	STATUS
	======
	
	This behavior is by design.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAccessSearch kbAccessUpsizingTools100
	Version           : WINDOWS:1.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
