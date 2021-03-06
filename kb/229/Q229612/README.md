---
layout: page
title: "Q229612: SAMPLE: Mfceqaado.exe Shows How to Use English Query w/MFC &amp; ADO"
permalink: /kb/229/Q229612/
---

## Q229612: SAMPLE: Mfceqaado.exe Shows How to Use English Query w/MFC &amp; ADO

{% raw %}

	Article: Q229612
	Product(s): Microsoft C Compiler
	Version(s): 2.1,2.5,2.6,6.0,7.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbATM kbDatabase kbVC600 kbEngQuery kbGrpDSVCDB kbGrpDSMDAC kbDSupport
	Last Modified: 26-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft English Query, version 7.0 
	- ActiveX Data Objects (ADO), versions 2.1, 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Mfceqado.exe is an English Query ADO Visual C++ sample that uses ADO in a Visual
	C++ MFC application to query SQL Server statements generated by the English
	Query engine. The sample uses DataGrid Control version 6.0 (OLEDB) to display
	the results.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  MfcEqAdo.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	Description of Important Files:
	
	Dbinter.cpp: English Query module to execute and display SQL languge.
	
	HistoryDlg.cpp: English Query file that implements History and Suggested
	Questions dialog box.
	
	ListClarifyDlg.cpp: English Query file that implements List Clarification dialog
	box.
	
	Mfcequi.cpp: A front-end UI for English query.
	
	MfcequiDlg.cpp: Main dialog box for a front-end UI for English Query.
	
	Nlinter.cpp: Interface to English Query Engine Object Model.
	
	ListClarifyDlg.cpp: Implements Query Window dialog box.
	
	ShowSQLDlg.cpp: Implements Show SQL dialog box.
	
	The English Query code used in this sample is very similar to the MFCUI C++
	Remote Data Objects (RDO) English Query sample that ships with the SQL Server
	7.0 CD-ROM.
	
	Refer to the following Microsoft Knowledge Base article for more information on
	how to use DataGrid Control with ADO in Visual C++:
	
	  Q229029 SAMPLE: AdoDataGrid.exe Demonstrates Using ADO with DataGrid
	
	Steps to Run Sample:
	
	1. Build and run Mfcequi.exe.
	
	2. Specify an English Query (EQ) application (.eqc) file and a question (.eqq)
	  file in the Welcome dialog box. You can use either the Pubs.eqc or
	  NorthWind.eqc sample EQ files that are installed by EQ in the samples folder.
	
	3. Click Start Application in the Welcome dialog box.
	
	4. Choose a SQL Server 7.0 data source in the ODBC Administrator dialog box that
	  displays when you click Start Application.
	
	5. Enter an English sentence to query into the main query dialog box. For
	  example, enter the following query for the pubs database if you select
	  Pubs.eqc in step 2:
	
	  How many authors live in Oakland ?
	
	6. Click Submit to run the query. The English Query parses the English statment
	  to generate SQL language. The application uses ADO to submit the SQL
	  statement to SQL Server. The DataGrid displays the results. Click Show SQL to
	  see SQL language command sent to SQL Server.
	
	REFERENCES
	==========
	
	For additional information on the EQ Object Model used in the sample, please
	search the English Query Help Online with the words "Object Model".
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbSample kbATM kbDatabase kbVC600 kbEngQuery kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbADO250 kbADO260 kbfaq
	Technology        : kbVCsearch kbSQLServSearch kbAudDeveloper kbADOsearch kbADO210 kbADO250 kbADO260 kbEngQuery700 kbVC600 kbVC32bitSearch kbEngQuerySearch
	Version           : :2.1,2.5,2.6,6.0,7.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
