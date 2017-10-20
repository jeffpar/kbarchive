---
layout: page
title: "Q252303: IDC Script Sample with Multiple SQL Statements"
permalink: /kb/252/Q252303/
---

## Q252303: IDC Script Sample with Multiple SQL Statements

{% raw %}

	Article: Q252303
	Product(s): Internet Information Server
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): kbDSupport kbiis300 kbiis400
	Last Modified: 16-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Internet Database Connector (IDC) Scripting can support multiple complex SQL
	statements in one script. This provides a convenient way for using IDC to
	develop dynamic Web pages. The corresponding .htx file must be modified to allow
	multiple SQL query results to be shown from the browser. The sample IDC scripts
	shipped with Internet Information Server 3.0 and 4.0 only give samples of one
	SQL statement per IDC file.
	
	MORE INFORMATION
	================
	
	The syntax for a IDC Script (sample) with multiple SQL statements:
	
	  Datasource:mydatasrc_name
	  Template: result.htx
	  SQLStatement:
	
	  SELECT  field1, field2 from Table1
	  +Where field1=%Variable_Name%
	
	  AND
	
	  SELECT fld1, fld2, fld3 from Table2
	  +Where fld1="field_data"
	
	  Password:
	  Username:
	
	As shown in this sample, you can use "AND" to connect multiple SQL statements.
	
	The user input variable is indicated by "%Variable_Name%".
	
	In the corresponding .htx pages, you must use one
	"<%Begindetail%>...<%Enddetail%>" session for each SQL SELECT
	statement.
	
	
	The following Web site may be helpful if migrating from IDC to ASP:
	
	  http://msdn.microsoft.com/workshop/server/toolbox/toolbox.asp
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q161172 ACC97: How to Use IDC Files to Query a Secure MS Access Database
	
	  Q162975 ACC97: Permissions Necessary to View HTML, IDC, and ASP Files
	
	  Q142845 How to Use SQL Functions in *.IDC Scripts
	
	Additional query words: IDC HTX, Internet Database Connectivity
	
	======================================================================
	Keywords          : kbDSupport kbiis300 kbiis400 
	Technology        : kbiisSearch kbiis400 kbiis300
	Version           : :3.0,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
