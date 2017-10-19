---
layout: page
title: "Q270106: PRB: VFP ODBC Driver in COM DLL Under MTS Package May Hang"
permalink: /kb/270/Q270106/
---

## Q270106: PRB: VFP ODBC Driver in COM DLL Under MTS Package May Hang

	Article: Q270106
	Product(s): Microsoft FoxPro
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCOMt kbODBC kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A client application calls a FoxPro Component Object Model (COM) .dll file in an
	Microsoft Transaction Server (MTS)/COM+ package. Under certain circumstances,
	the client application may hang. This behavior can occur when:
	
	- The COM DLL accesses a FoxPro datasource through ODBC.
	
	- The Fetch Data In Background option is set to YES for the ODBC connection
	  that is used by the .dll server.
	
	RESOLUTION
	==========
	
	To work around this problem, deselect the Fetch Data in Background option on the
	DSN, either visually or through code.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create the COM Server:
	
	1. Copy the TESTDATA database to the computer that is running MTS/COM+.
	
	2. Create a new project in Microsoft Visual FoxPro called "VFP_PROB" (without
	  the quotation marks).
	
	3. Save the following code to a new program and add it to the project. (Remember
	  to change the DATA_PATH constant to a valid path. It needs to point to a
	  local directory on your MTS/COM+ computer.)
	
	  *********** START SERVER CODE **************
	  DEFINE CLASS SERVER AS CUSTOM OLEPUBLIC
	  	PROCEDURE GETDATA(lcSQLCmd, lcFetchOn)
	  		LOCAL lcDSN, lnSQLHand, lnSQLSuccess, lcFDIB, ;
	  			lcRetVal,lnStartTime,lnEndTime,lcQueryDuration
	
	                  *!* Change path appropriately for your computer.
	  		#DEFINE DATA_PATH "C:\DATA\TESTDATA.DBC"
	  		
	  		lcFDIB = IIF(lcFetchOn,"YES","NO")
	
	  		lcDSN = "DRIVER=Microsoft Visual FoxPro Driver;" + ;
	  			"UID=;Deleted=Yes;Null=Yes;Collate=Machine;BackgroundFetch=" + lcFDIB + ";" + ;
	  			"Exclusive=No;SourceType=DBC;SourceDB=" + DATA_PATH + ";"
	
	  		lnSQLHand = SQLSTRINGCONNECT(lcDSN)
	  		IF lnSQLHand < 0
	  			lcRetVal = THIS.RaiseError()
	  			RETURN lcRetVal
	  		ENDIF
	
	  		lnStartTime = DATETIME()
	  		lnSQLSuccess = SQLEXEC(lnSQLHand,lcSQLCmd,"ResultSet")
	  		lnEndTime = DATETIME()
	  		lcQueryDuration = TRANSFORM(ROUND(lnEndTime - lnStartTime,0)) + " seconds"
	  		IF lnSQLSuccess < 0
	  			lcRetVal = THIS.RaiseError()
	  			RETURN lcRetVal
	  		ENDIF
	
	  		lcRetVal = TRANSFORM(RECCOUNT("ResultSet")) + ;
	  			" Records Returned In ~ " + lcQueryDuration + ;
	  			". 'Fetch Data In Background' = " + lcFDIB + "."
	  		USE IN ResultSet
	  		SQLDISCONNECT(0)
	  		CLOSE DATABASES ALL
	  		RETURN lcRetVal
	  	ENDPROC
	
	  	PROCEDURE RaiseError
	  		LOCAL laErrArray[1], lcErrMsg
	  		AERROR(laErrArray)
	  		lcErrMsg = laErrArray(3)
	  		SQLDISCONNECT(0)
	  		RETURN lcErrMsg
	  	ENDPROC
	
	  ENDDEFINE
	  ***************** END SERVER CODE ***********
	
	4. Build the project into a multi-threaded COM server (.dll).
	
	5. With a text editor, open the .vbr file that was generated when you built the
	  .dll file (it is in the same directory as the .dll). Make note of the CLSID
	  because you need it later.
	
	6. Take the .dll and .tlb files to your computer running MTS/COM+. Add them to a
	  package.
	
	For additional information on this process, click the article numbers below to
	view the articles in the Microsoft Knowledge Base:
	
	  Q191623 HOWTO: Distribute VFP COM Components used with MTS
	
	  Q223406 HOWTO: Create an Empty MTS Package to Add Components for ASP
	
	Create the Clients:
	
	1. Copy the following code to a program file in a new instance of Microsoft
	  Visual FoxPro.
	
	2. Change the COM_CLSID and COM_SERVER constants to the CLSID you made note of
	  earlier, and also change the name of your MTS/COM+ computer.
	
	3. Save the program as four different file names (1.prg, 2.prg, 3.prg, 4.prg,
	  for example).
	
	4. Start three more instances of Microsoft Visual FoxPro, and then run the four
	  separate programs, one in each instance.
	
	Eventually, all four instances of FoxPro stop processing queries.
	
	  *********** START CLIENT CODE ***********
	  LOCAL loVFPCOM, lnCaseNum, lcSQLCmd, lcExitKey, lcYear
	
	  #DEFINE FetchData 	.T.
	  #DEFINE lnLower 	1
	  #DEFINE lnUpper 	5
	  #DEFINE COM_CLSID	"{6F5C4280-C6B4-4D84-936D-57E4AFFB843F}"
	  #DEFINE COM_SERVER	"\\MYSERVER"
	
	  loVFPCOM = CREATEOBJECTEX(COM_CLSID,COM_SERVER)
	
	  DO WHILE .T.
	  	lnCaseNum = INT((lnUpper - lnLower + 1) * RAND( ) + lnLower)
	  	DO CASE
	  		CASE lnCaseNum = 1
	  			lcYEAR  = "1992"
	  		CASE lnCaseNum = 2
	  			lcYEAR = "1993"
	  		CASE lnCaseNum = 3
	  			lcYEAR = "1994"
	  		CASE lnCaseNum = 4
	  			lcYEAR = "1995"
	  		CASE lnCaseNum = 5
	  			lcYEAR = "1996"
	  	ENDCASE
	  	lcSQLCmd = "SELECT * " + ;
	  		"FROM  testdata!customer INNER JOIN testdata!orders " + ;
	  		"ON  Customer.cust_id = Orders.cust_id " + ;
	  		"WHERE YEAR( Orders.order_date) = " + lcYEAR 
	
	  	? "Starting query..."
	  	? loVFPCOM.GETDATA(lcSQLCmd,FetchData)
	  	WAIT "Requery in 3 seconds. Press 'q' to exit..." TO lcExitKey TIMEOUT 3
	  	? ""
	  	IF lcExitKey = "q"
	  		EXIT
	  	ENDIF
	  ENDDO
	  RELE ALL
	  *********** END CLIENT CODE ***********
	
	To see this work, edit the four client programs and change the #DEFINE FetchData
	to .F.
	
	REFERENCES
	==========
	
	For additional information about the Fetch Data In Background option on the
	Microsoft Visual FoxPro ODBC driver, click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q236019 PRB: ASP App Using ADO with Visual FoxPro ODBC Driver Stops IIS
	
	  Q175801 PRB: Accessing FoxPro Table in ASP Returns Error 80040e14
	
	  Q269881 PRB: Problems with Visual FoxPro Driver Fetch Data In Background
	  Option
	
	(c) Microsoft Corporation 200, All Rights Reserved. Contributions by Trevor
	Hancock, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCOMt kbODBC kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
