---
layout: page
title: "Q143002: Csexamp.exe - Client-Server Data Entry Screen for SQL"
permalink: /kb/143/Q143002/
---

## Q143002: Csexamp.exe - Client-Server Data Entry Screen for SQL

	Article: Q143002
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbsample KbClientServer kbDatabase kbServer kbSQL kbvfp300 kbvfp500 kbvfp600 kbS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Csexamp.exe is a sample providing two files, Client.sct and Client.scx, that
	offer a demonstration of creating a basic data-entry screen that works against a
	SQL Server back end.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Csexamp.exe
	  (http://download.microsoft.com/download/fox30std/sample/2/WIN98/EN-US/Csexamp.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The form does not cover all possible error conditions that you may encounter but
	it does handle the process of logging on to SQL Server, establishing a handle,
	and allowing entry of data to the Authors table.
	
	The Authors table was used because it has a primary key constraint on the Auth_ID
	field, and it also requires that some additional conversion work be done to the
	data that is passed through to SQL Server. The field that requires this
	conversion is the Contract field, which is defined as a SQL Server field type of
	'bit.' All code has been thoroughly commented explaining how and why things were
	done in a specific fashion. You must have an ODBC data source to SQL Server 6.x,
	and you will also need to edit the connection code found in the form's Load
	event.
	
	Additional query words: client server structured query language
	
	======================================================================
	Keywords          : kbfile kbsample KbClientServer kbDatabase kbServer kbSQL kbvfp300 kbvfp500 kbvfp600 kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
