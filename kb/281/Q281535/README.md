---
layout: page
title: "Q281535: PRB: Error Debugging Procedure with sql_variant Input Parameter"
permalink: /kb/281/Q281535/
---

## Q281535: PRB: Error Debugging Procedure with sql_variant Input Parameter

{% raw %}

	Article: Q281535
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbSQLServ kbTSQL kbVC600 kbGrpDSVCDB kbDSupport kbSQLServ2000
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft SQL Server 2000 (all editions) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Visual C++ 6.0 to run or debug a SQL Server 2000 stored procedure
	with a sql_variant type input parameter, the following error message occurs:
	
	  "22001[Microsoft][ODBC SQL Server Driver]String data, right truncation"
	
	MORE INFORMATION
	================
	
	Microsoft SQL Server 2000 introduces a new data type called sql_variant. You can
	use the sql_variant data type to store values of various SQL Server-supported
	data types except text, ntext, image, timestamp, and sql_variant. In Visual C++
	6.0, you cannot run or debug a SQL Server 2000 stored procedure with an input
	parameter of type sql_variant.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Database Project in Visual C++ 6.0.
	
	2. Switch to the project's Data View.
	
	3. From the Insert menu, click New Database Item. This opens the Insert Database
	  Item dialog box. Select Stored Procedure from the Database Item list box, and
	  then click OK.
	
	4. In the Edit window, create a stored procedure as follows:
	
	  Create Procedure Test @test sql_variant
	  As
	  return 5
	
	5. Execute or debug the project.
	
	6. A message box appears with the following error message:
	
	  "22001[Microsoft][ODBC SQL Server Driver]String data, right truncation"
	
	REFERENCES
	==========
	
	For more information, refer to the Visual Studio 6.0 Service Pack 5 Readme.txt
	file.
	
	Additional query words: vs vstudio sp5 sql_variant stored procedure sproc
	
	======================================================================
	Keywords          : kbDatabase kbSQLServ kbTSQL kbVC600 kbGrpDSVCDB kbDSupport kbSQLServ2000 
	Technology        : kbVCsearch kbSQLServSearch kbAudDeveloper kbSQLServ2000Search kbVC600 kbSQLServ2000 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
