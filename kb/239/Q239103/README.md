---
layout: page
title: "Q239103: PRB: Synonyms of DBLinked Tables Do Not Show in Data View Window"
permalink: /kb/239/Q239103/
---

## Q239103: PRB: Synonyms of DBLinked Tables Do Not Show in Data View Window

	Article: Q239103
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbDataview kbOracle kbVBp600 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Oracle synonyms used to connect to DBLinked tables do not show up in the Data
	View window of Visual Basic version 6.0.
	
	RESOLUTION
	==========
	
	Use a View of the DBLinked table instead of a Synonym or use Visual C++'s
	Database Project.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create the following table on one Oracle Server (OracleServer1).
	
	  CREATE TABLE mytable (fld1 number(3,0) PRIMARY KEY, fld2 varchar2(20))
	  INSERT INTO mytable values (100, 'test')
	  INSERT INTO mytable values (200, 'test')
	
	2. Use the following code to create a Data Linked Table and a Synonym to the
	  linked table on another Oracle Server.
	
	  CREATE DATABASE LINK mylink CONNECT TO demo IDENTIFIED BY demo USING 'OracleServer1';
	  CREATE SYNONYM mysynonym FOR mytable@mylink;
	
	  NOTE: "demo" is a global Oracle user name and password.
	
	3. Start Visual Basic 6.0 and open the Data View window.
	
	4. Make the appropriate connections within the Data View Window to the Oracle
	  Server containing the Synonym.
	
	5. Go to the Synonyms folder in the Data View Window and note that the Synonym
	  does not show up.
	
	REFERENCES
	==========
	
	Oracle Online Help
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Matthew Hofacker, Microsoft Corporation
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbDataview kbOracle kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
