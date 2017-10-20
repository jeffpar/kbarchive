---
layout: page
title: "Q299820: HOWTO: Run a DBC Stored Proc with the VFP OLE DB Provider"
permalink: /kb/299/Q299820/
---

## Q299820: HOWTO: Run a DBC Stored Proc with the VFP OLE DB Provider

{% raw %}

	Article: Q299820
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0,7.0
	Operating System(s): 
	Keyword(s): kbActiveX kbATM kbCOMt kbvfp300 kbvfp300b kbvfp500 kbvfp600 kbGrpDSFox kbCodeSnippet kb
	Last Modified: 17-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In versions of Visual FoxPro (VFP) earlier than version 7.0, you cannot directly
	execute a stored procedure in a VFP database from outside VFP. Instead, you must
	use the Microsoft Visual FoxPro (MSVFP) ODBC driver and table triggers. This is
	because only ODBC Level 2 compliant ODBC drivers support this kind of
	functionality, and the MSVFP ODBC driver is ODBC Level 1 compliant, with some
	Level 2 features.
	
	VFP 7.0 ships with an OLE DB provider that can be used to directly execute a
	stored procedure in a VFP database. This article describes how to do this.
	
	NOTE: Purchasing VFP 7.0 is the only way to gain access to this OLE DB Provider;
	it is not posted on the Microsoft Web site, nor does it ship with any version of
	Microsoft Data Access Components (MDAC).
	
	MORE INFORMATION
	================
	
	NOTE: You must have a version of Microsoft Visual FoxPro, the VFP OLE DB
	provider, and ActiveX Data Objects (ADO) on your system for this code to work.
	
	To use the VFP OLE DB provider to run a stored procedure in a VFP database,
	follow these steps in any version of VFP:
	
	1. Open VFP and create a new database. To do this, on the File menu, click New
	  and then click Database. Do not use the wizard.
	
	2. Name the database StoredProcDBC and save it, noting the folder you save it
	  in. The database designer is now shown.
	
	3. On the database menu, select Edit Stored Procedures.
	
	4. Paste the following code in the code window that appears:
	
	  PROCEDURE AddValues(lpVar1, lpVar2)
	  IF PARAMETERS() <2 OR VARTYPE(lpVar1) # 'N' OR ;
	  		VARTYPE(lpVar2) # 'N'
	  	RETURN .F.
	  ENDIF
	  RETURN lpVar1 + lpVar2
	  ENDPROC
	
	5. Save the code and close the code window. Close the database designer.
	
	6. Create a new program. To do this, on the File menu, click New and then click
	  Database.
	
	7. Paste the following code in the code window:
	
	  *-----------------------------------
	  * AUTHOR: Trevor Hancock, Microsoft (trevorh@microsoft.com)
	  * CREATED: 5/23/2001 2:31:06 PM
	  * ABSTRACT: This program runs a stored procedure named
	  *           AddValues() and returns a result. This procedure
	  *           is in a VFP database called StoredProcDBC.DBC
	  *           Taken from Microsoft Knowledge Base article Q299820.
	  *-----------------------------------
	  CLEAR
	  #DEFINE THIS_DIR	SUBSTR(SYS(16),1, ATC("\",SYS(16),OCCURS("\",sys(16)))) 
	  #DEFINE VFP_DBC	 	THIS_DIR + "StoredProcDBC.dbc"
	
	  PUBLIC goRS, goConn
	  LOCAL lcSQLCMD
	
	  CLOSE DATABASES ALL
	  CD (THIS_DIR)
	
	  goConn = CREATEOBJECT("ADODB.Connection")
	  lcSQLCMD = "AddValues(22,9)"
	
	  goConn.OPEN("Provider=vfpoledb;Data Source=" + VFP_DBC)
	
	  ? "Connection State:", goConn.State
	  goRS = goConn.Execute(lcSQLCMD)
	  ? "Stored Procedure Results:", goRS.FIELDS(0).VALUE
	
	  goRS.CLOSE()
	  goConn.CLOSE()
	
	  RELEASE goRS, goConn
	
	8. Save the program to the same folder as the database that you just created.
	  The program name is not important.
	
	9. Run the program.
	
	When this code runs, it calls the stored procedure in the database (.dbc) file
	that you created. The result of the stored procedure is stored to an ADO
	recordset. That value is then printed to _SCREEN. The program passes in two
	parameters, 22 and 9, which the stored procedure sums and returns.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q148865 PRB: Can't Access Stored Procedures in Visual FoxPro Database
	
	Additional query words: OLEDB
	
	======================================================================
	Keywords          : kbActiveX kbATM kbCOMt kbvfp300 kbvfp300b kbvfp500 kbvfp600 kbGrpDSFox kbCodeSnippet kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP700 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0,7.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
