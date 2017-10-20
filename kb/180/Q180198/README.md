---
layout: page
title: "Q180198: BUG: RDO Doesn't Work with Schema and Oracle Stored Procedures"
permalink: /kb/180/Q180198/
---

## Q180198: BUG: RDO Doesn't Work with Schema and Oracle Stored Procedures

{% raw %}

	Article: Q180198
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using RDO v2.0 with Microsoft Oracle ODBC Driver v2.0, you cannot use
	schema names when calling Oracle stored procedures.
	
	CAUSE
	=====
	
	This bug has been traced back to the way RDO v2.0 implements the ODBC API call
	SQLProcedureColumns. When a fundamental change was made to the Microsoft Oracle
	ODBC Driver (moving from v1.0 to v2.0), this bug in RDO v2.0 was exposed.
	
	RESOLUTION
	==========
	
	There is no workaround for this bug in RDO v2.0. If you need to access Oracle
	stored procedures using schema, you have to switch to ADO v1.5 (or later) or use
	the Microsoft Oracle ODBC Driver v1.0. The Microsoft Oracle ODBC Driver v1.0
	shipped with Visual Basic 5.0 Professional and Enterprise editions. The version
	number of this older ODBC driver is 2.00.006325.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in VB 5.0/RDO 2.0. We are researching
	this bug and will post new information here in the Microsoft Knowledge Base as
	it becomes available.
	
	MORE INFORMATION
	================
	
	This bug was identified and reproduced using the Microsoft Oracle ODBC Driver
	v2.0 (from the MDAC 1.5 stack: see the REFERENCES section below for Knowledge
	Base article Q175018), Oracle v7.3, and RDO v2.0 from Visual Basic Enterprise
	Version 5.0. Other versions of these components may produce different results.
	
	As noted above, using the Microsoft Oracle ODBC Driver v1.0 allows you to access
	Oracle stored procedures with schema names. You should note, however, that this
	is not recommended; it is recommended that you switch to ADO v1.5 (or later).
	Please the REFERENCES section below for details about using ADO to access Oracle
	stored procedures.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q175018 : HOWTO: Acquire and Install the Microsoft Oracle ODBC Driver
	
	  Q176936 : INFO: Visual Basic 5.0 Accessing an Oracle Database Using ADO
	
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Sam Carpenter, Microsoft Corporation
	
	Additional query words: rdo oracle stored procedure ado
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
