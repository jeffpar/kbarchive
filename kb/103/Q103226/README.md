---
layout: page
title: "Q103226: SAMPLE: VBCobSQL.exe - Mixed-Language Apps (VB, COBOL, SQL)"
permalink: /kb/103/Q103226/
---

## Q103226: SAMPLE: VBCobSQL.exe - Mixed-Language Apps (VB, COBOL, SQL)

{% raw %}

	Article: Q103226
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly
	Last Modified: 04-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	VBCobSQL.exe demonstrates a mixed-language (Microsoft Visual Basic, COBOL, and
	ESQL) application.
	
	You can use Microsoft(R) Visual Basic(TM), Microsoft COBOL, and Microsoft SQL
	Server to build full-featured client-server applications that use the strengths
	of each product. Visual Basic creates the graphical user interface. Subroutine
	calls are made in the Basic code to COBOL dynamic-link libraries (DLLs). The
	COBOL DLL contains Embedded SQL (ESQL) to request the necessary data from the
	SQL Server. The COBOL DLL manipulates the retrieved data as required, then
	passes the data back to Visual Basic. In other words, Visual Basic is the
	graphical front-end and COBOL DLL is the back-end of the client application.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  VBCobSQL.exe
	  (http://download.microsoft.com/download/platformsdk/sample82/3.1/W31/EN-US/VBCobSQL.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	VBCOBSQL uses the PUBS database from the SQL Server package. The demo makes
	several queries to the PUBS database, such as Author Search and List
	Publications in a Category. It also allows you to insert and delete authors and
	add new publications to the database.
	
	To build VBCOBSQL, you will need Visual Basic version 2.0 Professional Edition,
	Microsoft COBOL version 5.0 or Micro Focus(R) COBOL version 3.0, and Embedded
	SQL Toolkit for COBOL.
	
	In Visual Basic, load the VBCOBDEM.MAK project and build an .EXE file for the
	application. Before building the COBOL DLL that accesses SQL Server, make sure
	that your build environment is set up to build COBOL/SQL Server applications.
	Set the LIB environment variable to include the drive and path of the following
	files:
	
	- LCOBOLW.LIB (supplied with the COBOL compiler)
	
	- COBW.LIB (supplied with the COBOL compiler)
	
	- SQLAKW.LIB (supplied with Embedded SQL for COBOL)
	
	- W3DBLIB.DLL (supplied with Embedded SQL for COBOL)
	
	You also need the object file, CBLWINA.OBJ, supplied with the COBOL compiler. You
	must specify "Mixed Language Support" when you install this file from the COBOL
	disks.
	
	Next, edit the VBCOBSQL.DIR directives file to use your own server, database,
	user ID, and password. There are two ways to build the DLL:
	
	- Run COBC.BAT and COBL.BAT, in that order. The first batch file compiles the
	  DLL and the second links it. VBCOBSQL.DLL will be created.
	
	- Build the DLL using Programmer's WorkBench (PWB). This sample includes the
	  VBCOBSQL.MAK make file to allow you to build with PWB.
	
	Make sure that this DLL is in your current directory or in your PATH. For more
	information on building DLLs, see "COBOL Programming for Windows," Chapter 2
	(Building Dynamic Link Libraries) included with Microsoft COBOL or the Micro
	Focus(R) COBOL User's Guide.
	
	Before running the demo, make sure that the following files are in your current
	directory or in your PATH:
	
	- SQLAKW.DLL (provided with Embedded SQL toolkit for COBOL)
	
	- W3DBLIB.DLL (provided with Embedded SQL toolkit for COBOL)
	
	- DBNMP3.DLL (provided with Embedded SQL toolkit for COBOL)
	
	- CBLWIN.DLL (provided with the COBOL compiler)
	
	- CBLSSEG.DLL (provided with the COBOL compiler)
	
	- VBRUN200.DLL (provided with Visual Basic version 2.0)
	
	To run the demo, run the executable file you created in Visual Basic. You can
	also run the demo interactively in Visual Basic. In the login screen, fill in
	the fields required to log into the PUBS database. If the login is successful,
	you will be in the demo. You can then select SQL options from the menu to
	perform the search/update operations. Use the Help menu items to get more
	information on using the demo and building mixed-language client-server
	applications.
	
	VBCOBSQL is a companion application for the "Building VB/COBOL/ESQL
	Mixed-Language Applications" technical article on the Microsoft Developer
	Network CD.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
