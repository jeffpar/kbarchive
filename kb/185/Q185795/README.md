---
layout: page
title: "Q185795: WD97: ErrMsg: &quot;... Unable to Open the Data Source&quot; Using ODBC"
permalink: /kb/185/Q185795/
---

## Q185795: WD97: ErrMsg: &quot;... Unable to Open the Data Source&quot; Using ODBC

{% raw %}

	Article: Q185795
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Mail Merge command in Microsoft Word 97 by using a Microsoft
	Access 97 query with ODBC as a data source and the database table is a SQL
	Server link table, the following error message may appear:
	
	  Word was unable to open the data source.
	
	CAUSE
	=====
	
	When you use ODBC, you do not receive a dialog box allowing you to enter the
	password, because the password needed to open your SQL data source is not passed
	through Microsoft Access to the SQL server.
	
	RESOLUTION
	==========
	
	When you insert the link table in the Microsoft Access database, click to select
	the "Save password" check box in the Link Tables dialog box.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q101084 ACC: Storing SQL Database Login IDs and Passwords Locally
	
	  Q101375 ACC: How to Query SQL Server Tables Without Linking/Attaching
	
	
	Additional query words: sequel
	
	======================================================================
	Keywords          : kbdta word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
