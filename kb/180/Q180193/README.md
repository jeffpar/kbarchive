---
layout: page
title: "Q180193: FIX: DAO Oracle and the NUMBER Datatype"
permalink: /kb/180/Q180193/
---

## Q180193: FIX: DAO Oracle and the NUMBER Datatype

	Article: Q180193
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.1,5.0,6.0,Build 2.573.4202
	Operating System(s): 
	Keyword(s): kbDAOsearch kbDriver kbOracle kbVBp kbVBp500 kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSuppor
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft ODBC for Oracle version 2.5 Build 2.573.4202 
	- Microsoft Data Access Components version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using DAO/Jet to access an Oracle database, you get either blank rows back
	in a grid or rows filled with #DEFINE (when using Access).
	
	CAUSE
	=====
	
	This behavior is caused by DAO having a problem determining the datatype for
	Oracle columns defined as NUMBER.
	
	RESOLUTION
	==========
	
	This behavior is only exhibited when the Oracle columns have been defined as
	NUMBER. If you define the columns as NUMBER(38,0), which is the equivalent of
	just NUMBER, everything works as expected. When you use DAO/Jet to access an
	Oracle database, you need to specify the size (total digits) and precision for
	table columns of type NUMBER.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the versions of Microsoft
	FrontPage listed at the beginning of this article.
	
	This bug was corrected in MDAC 2.1 Service Pack 2.
	
	You can obtain the latest version of MDAC from the following Microsoft Web site:
	
	  http://www.microsoft.com/data/download.htm
	
	MORE INFORMATION
	================
	
	This problem was identified using Visual Basic 5.0 Enterprise edition, MDAC 1.5
	(see the REFERENCES section below), and Oracle 7.3. You may see different
	behavior with different versions of these components. Following is an example of
	what will work and what will fail when creating an Oracle table that will be
	accessed by DAO/Jet.
	
	This Oracle table definition will fail:
	
	        CREATE TABLE daotest (item_number NUMBER PRIMARY KEY,
	                              depot_number NUMBER);
	
	This Oracle table definition will work:
	
	        CREATE TABLE daotest (item_number NUMBER(38,0) PRIMARY KEY,
	                              depot_number NUMBER(38,0));
	
	If you are using Access, the first example will fill your grid with #DELETE. If
	you are using Visual Basic/DAO, your grid will show the correct number of rows
	but they won't contain any data. You can still insert records but you never get
	the correct display.
	
	REFERENCES
	==========
	
	ORACLE: The Complete Reference by George Koch and Kevin Loney
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q175018 : HOWTO: Acquire and Install the Microsoft Oracle ODBC Driver
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Sam
	Carpenter, Microsoft Corporation.
	
	
	Additional query words: Jet Oracle grid #Define
	
	======================================================================
	Keywords          : kbDAOsearch kbDriver kbOracle kbVBp kbVBp500 kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDAC210SP2fix kbMDACNoSweep 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbODBCSearch kbVB500 kbVB600 kbMDACSearch kbMDAC210 kbODBCOracle25734202 kbODBCOracle250Search
	Version           : :2.1,5.0,6.0,Build 2.573.4202
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
