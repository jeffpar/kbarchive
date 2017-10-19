---
layout: page
title: "Q321872: SQL Error -514 Linking to Table That Has More Than 10 Records"
permalink: /kb/321/Q321872/
---

## Q321872: SQL Error -514 Linking to Table That Has More Than 10 Records

	Article: Q321872
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): Kbhostintegserv2000
	Last Modified: 07-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are using a linked table in Microsoft Access with the Host Integration
	Server (HIS) 2000 ODBC Driver for DB2. You connect through TCP/IP to an IBM
	mainframe OS390 system, and you receive the following error message if there are
	more than 10 records stored in the table:
	
	  SQL Error -514 has occurred. Please consult the documentation for your
	  specific DB2 version for a description of the associated Native Error and SQL
	  State.
	
	This problem occurs only when you connect to DB2 on a mainframe host system. The
	problem does not occur when you connect to DB2 on an AS/400 system.
	
	CAUSE
	=====
	
	Because of the way that Access interacts with linked tables, if there are more
	than 10 records stored in a table, the ODBC Driver for DB2 may send a
	Distributed Data Management (DDM) Close Query (clsqry) command to the host
	system in certain situations. When clsqry is sent to DB2 on a mainframe, the
	current SQL statement is always unprepared. When Access tries to fetch the next
	bulk of stored records from the linked DB2 database, the ODBC Driver for DB2
	will issue a DDM Query Answer Set Data (qrydta) command. This command fails
	because it does not have a PREPARE statement in front of it.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Host Integration Server 2000 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix must have the following file attributes or
	later:
	
	  Date         Time    Version     Size       File name
	  --------------------------------------------------------
	  25-Apr-2002  15:37   5.0.0.836   258.320    mseidrda.dll
	  25-Apr-2002  15:37   5.0.0.836   876.816    mseidb2d.dll
	  25-Apr-2002  15:37   5.0.0.836    78.096    mseidb2c.dll
	  
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Host Integration Server 2000
	----------------------------
	
	Microsoft has confirmed this to be a problem in Host Integration Server 2000.
	
	MORE INFORMATION
	================
	
	If you turn on ODBC tracing on the affected computer, you may see a trace output
	similar to the following:
	
	MSACCESS        734-978	EXIT  SQLPrepareW  with return code 0 (SQL_SUCCESS)
			HSTMT               08641790
			WCHAR *             0x0D361F38 [      -3] "SELECT KEY,TEXT,INFODATA  FROM YBI.IMAGES  WHERE KEY = ? OR KEY = ? OR KEY = ? OR KEY = ? OR KEY = ? OR KEY = ? OR KEY = ? OR KEY = ? OR KEY = ? OR KEY = ?\ 0"
			SDWORD                    -3
	
	MSACCESS        734-978	ENTER SQLBindParameter 
			HSTMT               08641790
			UWORD                        1 
			SWORD                        1 <SQL_PARAM_INPUT>
			SWORD                       99 <SQL_C_DEFAULT>
			SWORD                        4 <SQL_INTEGER>
			SQLULEN                   10
			SWORD                        0 
			PTR                0x0D3621C4
			SQLLEN                     0
			SQLLEN *            0x0D3621C0
	..........and so on
	MSACCESS        734-978	ENTER SQLFetch 
			HSTMT               08641790
	
	MSACCESS        734-978	EXIT  SQLFetch  with return code 100 (SQL_NO_DATA_FOUND)
			HSTMT               08641790
	
	MSACCESS        734-978	ENTER SQLFreeStmt 
			HSTMT               08641790
			UWORD                        0 <SQL_CLOSE>
	
	MSACCESS        734-978	EXIT  SQLFreeStmt  with return code 0 (SQL_SUCCESS)
			HSTMT               08641790
			UWORD                        0 <SQL_CLOSE>
	
	MSACCESS        734-978	ENTER SQLBindParameter 
			HSTMT               08641790
			UWORD                        1 
			SWORD                        1 <SQL_PARAM_INPUT>
			SWORD                       99 <SQL_C_DEFAULT>
			SWORD                        4 <SQL_INTEGER>
			SQLULEN                   10
			SWORD                        0 
			PTR                0x0D3621C4
			SQLLEN                     0
			SQLLEN *            0x0D3621C0
	.........and so on
	MSACCESS        734-978	ENTER SQLExecute 
			HSTMT               08641790
	
	MSACCESS        734-978	EXIT  SQLExecute  with return code -1 (SQL_ERROR)
			HSTMT               08641790
	
			DIAG [     ] [Microsoft][ODBC DB2 Driver][DSP1] A SQL error has occurred.  Please consult the documentation for your specific DB2 version for a description of the associated Native Error and SQL State. (-514) (means Coursor not in prepare state)
	
	MSACCESS        734-978	ENTER SQLErrorW 
			HENV                086414F0
			HDBC                08641598
			HSTMT               08641790
			WCHAR *             0x0012D50C (NYI) 
			SDWORD *            0x0012D558
			WCHAR *             0x03761730 
			SWORD                     4095 
			SWORD *             0x0012D548
	
	MSACCESS        734-978	EXIT  SQLErrorW  with return code 0 (SQL_SUCCESS)
			HENV                086414F0
			HDBC                08641598
			HSTMT               08641790
			WCHAR *             0x0012D50C (NYI) 
			SDWORD *            0x0012D558 (-514)
			WCHAR *             0x03761730 [     188] "[Microsoft][ODBC DB2 Driver][DSP1] A SQL error has occurred.  Please consult the documentation"
			SWORD                     4095 
			SWORD *             0x0012D548 (188)
	
	DDM commands are defined by the Open Group. The DDM technical standard stands for
	"Distributed Data Management Architecture." To find out more about Open Group
	and the DDM technical standard, visit the following Web page:
	
	The Open Group Database Interoperability Consortium
	(http://www.opengroup.org/dbiop)
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: ODBC Error 514 prepare
	
	======================================================================
	Keywords          : Kbhostintegserv2000 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
