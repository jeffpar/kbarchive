---
layout: page
title: "Q313185: INFO: SQL Server Driver for JDBC Does Not Support HTTP Tunneling"
permalink: /kb/313/Q313185/
---

## Q313185: INFO: SQL Server Driver for JDBC Does Not Support HTTP Tunneling

{% raw %}

	Article: Q313185
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 
	Operating System(s): 
	Keyword(s): kbJDBC kbDSupport kbSQLServ2000 kbSQLServSearch kbAudDeveloper kbSystemData
	Last Modified: 03-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SQL Server 2000 Driver for JDBC 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft SQL Server 2000 Driver for JDBC cannot support HTTP tunneling because
	it does not use the HTTP protocol. There is no way for the Microsoft SQL Server
	2000 Driver for JDBC to connect to the standard HTTP port 80 and be redirected
	to the database host and port.
	
	MORE INFORMATION
	================
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For more information about Microsoft SQL Server 2000 Driver for JDBC, see the
	Microsoft SQL Server 2000 Driver for JDBC HTML Help or Online Guide.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbJDBC kbDSupport kbSQLServ2000 kbSQLServSearch kbAudDeveloper kbSystemData 
	Technology        : kbAudDeveloper kbSQLServ2000Search kbSQLServJDBC
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
