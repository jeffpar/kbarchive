---
layout: page
title: "Q258888: PRB: Error When Query Builder Runs Parameterized Queries"
permalink: /kb/258/Q258888/
---

## Q258888: PRB: Error When Query Builder Runs Parameterized Queries

{% raw %}

	Article: Q258888
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbDataEnv kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbmdac270 kbado270
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Query Builder in the Data Environment of Visual Basic to run
	parameterized queries, you may receive the following error message:
	
	  Provider cannot derive parameter and SetParameterInfo has not been called.
	
	This problem occurs when you use Microsoft Oracle OLE DB Provider.
	
	CAUSE
	=====
	
	Query Builder does not process the parameter information from the Command
	object's property page. To obtain the parameter information, Query Builder calls
	the DescribeParameters function of OLE DB Provider. This error is thrown because
	OLE DB Provider does not support this functionality. Query Builder does not run
	parameterized queries if the provider does not support DescribeParameters.
	
	RESOLUTION
	==========
	
	To work around this problem, use Query Builder to create parameterized queries,
	and set the parameter information on the Command object's property page.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, click Add Data Environment.
	
	3. Right-click the Connection1 object, and then click Properties.
	
	4. Double-click Microsoft OLEDB Provider for Oracle.
	
	5. Type the necessary information to connect to an Oracle server. Make sure that
	  you click Test Connection to verify the information, and then click OK.
	
	6. Right-click the Connection1 object, and then click Add Command.
	
	7. Right-click Command1, and then click Properties.
	
	8. On the General tab of the property page, click SQL Statement, and then click
	  Query Builder.
	
	9. Create a query with a parameter in the WHERE clause. To do this, type a
	  question mark (?) in the Criteria column, or add the query in the SQL code
	  window. For example:
	
	  SELECT * FROM Customers WHERE Name = ?
	
	10. From the Query menu, click Run. You receive the above-mentioned error
	  message.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q240205 PRB: ADO Parameters.Refresh Fails with MSDAORA Provider and
	  Parameterized Query
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp600 kbDataEnv kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbmdac270 kbado270 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
