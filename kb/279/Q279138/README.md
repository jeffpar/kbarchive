---
layout: page
title: "Q279138: FIX: SQL Passthrough Does Not Map SQL_WLONGVARCHAR to Memo"
permalink: kb/279/Q279138/
---

## Q279138: FIX: SQL Passthrough Does Not Map SQL_WLONGVARCHAR to Memo

	Article: Q279138
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet kbVS600sp5 kbVS600sp5f
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SQL Passthrough does not map SQL_WLONGVARCHAR fields that are longer than 255
	characters from Microsoft SQL Server to memo field types in Visual FoxPro.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the latest service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Run the following from the Command window.
	
	NOTE: You need to provide the actual servername, user identification, and
	password for your installation of SQL Server.
	
	  nConnection = SQLSTRINGCONNECT("driver=SQL 
	  Server;Server=servername;UID=sa;pwd=;database=Northwind")
	  ? SQLEXEC(nConnection, "select * from customers where customerid='CACTU'
	  for xml auto,elements", "cust_xml")
	  BROWSE NOWAIT
	  SQLDISCONNECT(nConnection)
	
	After you run the code, the results appear in a cursor with one 255-character
	column. Because the size of this particular field is approximately 351
	characters, Visual FoxPro should return the results to a memo field.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet kbVS600sp5 kbVS600sp5fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
