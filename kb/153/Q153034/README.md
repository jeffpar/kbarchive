---
layout: page
title: "Q153034: ACC95: Table Is Not Exported Using the Upsizing Tools"
permalink: kb/153/Q153034/
---

## Q153034: ACC95: Table Is Not Exported Using the Upsizing Tools

	Article: Q153034
	Product(s): Microsoft Access Distribution Kit
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kberrmsg kbusage
	Last Modified: 17-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Upsizing Tools 7.0 
	- Microsoft Access for Windows 95, version 7.0 
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	When you use the Microsoft Access for Windows 95 Upsizing Tools to upsize your
	Microsoft Access database to Microsoft SQL Server, your selected tables are not
	exported to Microsoft SQL Server. When you view the report created by the
	Upsizing Tools, you may receive the following error message:
	
	  TABLE: <Table Name> was skipped, or export failed.
	
	CAUSE
	=====
	
	In the properties of your ODBC Data Source you have the "Convert OEM to ANSI
	Characters" check box checked, and you have selected a translator.
	
	RESOLUTION
	==========
	
	You can use the following steps to work around this behavior:
	
	16 bit ODBC
	-----------
	
	1. In Control Panel, click the ODBC icon. Find your ODBC Data Source and click
	  Setup.
	
	2. Click the Select button in the Translation section and click to select <No
	  Translator>. Then click to clear the "Convert OEM to ANSI Characters
	  Option.
	
	32 bit ODBC
	-----------
	
	1. In Control Panel, clich the 32bit ODBC icon. Find your ODBC Data Source and
	  click Configure.
	
	2. Click Next three times. You should see the question: "Do you want to perform
	  character set translation?"
	
	3. Check the "Do not perform character translation" option.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbusage 
	Technology        : kbAccessSearch kbAccess97 kbAccess97Search kbAccess95Search kbZNotKeyword3 kbAccess700 kbAccessUpsizingTools700
	Version           : 7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
