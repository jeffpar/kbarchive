---
layout: page
title: "Q178875: ORALONG.EXE: Use RDO with Oracle LONG/LONG RAW Datatypes"
permalink: /kb/178/Q178875/
---

## Q178875: ORALONG.EXE: Use RDO with Oracle LONG/LONG RAW Datatypes

	Article: Q178875
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.1 SP2,2.5,5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbDatabase kbRDO kbVBp500 kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO210sp
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Data Access Components versions 2.1 SP2, 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "Working with LONG, LONG RAW and VARCHAR2(2000) Oracle Datatypes" white
	paper is intended to clarify the handling of the Oracle datatypes LONG, LONG RAW
	and VARCHAR2(2000) when they are used with Microsoft Visual Basic and Remote
	Data Objects (RDO). A sample project is attached that illustrates storing and
	retrieving these datatypes. The project uses straight Visual Basic 5.0 RDO code
	to store and retrieve this data as well as using stored procedures.
	
	NOTE: It is not recommended to store BLOB or Long Text data in a table. A more
	efficient way is to store file pointers in the table that will locate the actual
	files. Other Microsoft white papers go into detail on this method.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Oralong.exe
	  (http://download.microsoft.com/download/vb50ent/Sample20/1/W9XNT4/EN-US/Oralong.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	OraLong.exe is a self-extracting file that will, after execution, produce a
	Microsoft WORD 7.0 document (Ora_Long.DOC), an HTML document (Ora_Long.HTM) and
	a Microsoft Visual Basic 5.0 project named Oracle_Long.VPB. The document
	thoroughly describes the Visual Basic application included and gives pointers
	about using Oracle LONG, LONG RAW and VARCHAR(2000) datatypes.
	
	Also included in the file list is a .txt file named Ora_Long.OSP that has all the
	Oracle PL/SQL scripts necessary to support the Visual Basic application. Run
	Ora_Long.OSP from Oracle SQL*PLUS to create the table and stored procedures on
	your Oracle server.
	
	After downloading OraLong.exe, place it in a new folder and run the file to
	extract the supporting files for this white paper.
	
	In addition to Visual Basic, you will need to have MDAC installed.
	
	For additional information about acquiring and installing MDAC, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q175018 : HOWTO: Acquire and Install the Microsoft Oracle ODBC Driver
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Ron Nelson, Microsoft Corporation
	
	Additional query words: Oralong oracle long raw
	
	======================================================================
	Keywords          : kbfile kbDatabase kbRDO kbVBp500 kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO210sp2 kbMDAC210SP2 kbMDAC250 kbMDACNoSweep 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbMDACSearch kbMDAC210SP2 kbMDAC250
	Version           : :2.1 SP2,2.5,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
