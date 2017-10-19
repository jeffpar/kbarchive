---
layout: page
title: "Q314752: FIX: adLockBatchOptimistic Slows Down VFP OLE DB Provider"
permalink: /kb/314/Q314752/
---

## Q314752: FIX: adLockBatchOptimistic Slows Down VFP OLE DB Provider

	Article: Q314752
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Visual FoxPro 7.0 OLE DB Provider to create an ActiveX Data
	Objects (ADO) recordset that uses a lock type of adLockBatchOptimistic, when the
	recordset performs a query that returns a single record from a large table, the
	query may take a long time to complete. Creating an index on the field in the
	WHERE clause of the query can improve performance, but not significantly.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0. This problem was first corrected in Visual FoxPro for Windows 7.0
	Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To reproduce the behavior, run the following code. The code creates a large
	FoxPro table and then queries the table using the Visual FoxPro 7.0 OLE DB
	Provider. Although the query returns only a single record, it takes a long time
	to complete.
	
	  *!* Comment the 2nd #DEFINE and uncomment the first
	  *!* to see increased performance.
	  *!* #DEFINE LOC_LockType 1 && adLockReadOnly
	  #DEFINE LOC_LockType  4 && adLockBatchOptimistic
	
	  LOCAL loConn AS ADODB.CONNECTION, ;
	  	loRS AS ADODB.Recordset, ;
	  	lnStartTime AS NUMBER, ;
	  	lnTotalTime AS NUMBER, ;
	  	lnLooper AS INTEGER
	
	  CD JUSTPATH(SYS(16))
	  CLOSE DATA ALL
	  IF !FILE('GreatBigTable.DBF')
	  	WAIT WINDOW "Creating and populating table..." NOCLEAR NOWAIT
	  	CREATE TABLE 'GreatBigTable.DBF' (EID I NOT NULL, ;
	  		NUM I NOT NULL, ;
	  		PYEAR I NOT NULL, ;
	  		ESTATU C(2) NOT NULL, ;
	  		ECODE I NOT NULL, ;
	  		DDATE D NOT NULL, ;
	  		DDATET T NOT NULL, ;
	  		TYPEC C(1) NOT NULL, ;
	  		PLAN I NOT NULL, ;
	  		OPTION I NOT NULL, ;
	  		EOI L NOT NULL)
	
	  	FOR lnLooper = 1 TO 1000000
	  		INSERT INTO GreatBigTable VALUES(lnLooper, ;
	  			lnLooper, ;
	  			lnLooper, ;
	  			"CA", ;
	  			lnLooper, ;
	  			DATE() + lnLooper, ;
	  			DATETIME() + lnLooper, ;
	  			"X", ;
	  			lnLooper, ;
	  			lnLooper, ;
	  			.T.)
	  	ENDFOR
	  	USE IN SELECT("GreatBigTable")
	  	WAIT CLEAR
	  ENDIF
	
	  lnStartTime = 0
	  lnEndTime = 0
	  loConn = CREATEOBJECT("ADODB.Connection")
	  loRS = CREATEOBJECT("ADODB.RecordSet")
	
	  loConn.OPEN("PROVIDER=vfpoledb.1;DATA SOURCE=" + JUSTPATH(SYS(16)))
	
	  WITH loRS
	  	.CursorType = 3 && adOpenStatic
	  	.CursorLocation = 3 && adUseClient
	  	.LockType = LOC_LockType
	  	lnStartTime = SECONDS()
	  	WAIT WINDOW "Query is running..." NOWAIT NOCLEAR
	  	.OPEN("Select * from GreatBigTable where EID= 178441", loConn)
	  	lnTotalTime = SECONDS() - lnStartTime
	
	  	WAIT CLEAR
	  	MESSAGEBOX(TRANSFORM(.RecordCount) + " record return in " + ;
	  		TRANSFORM(lnTotalTime) + " seconds.")
	  ENDWITH
	
	  loRS.CLOSE
	  loConn.CLOSE
	  RELEASE ALL
	
	Additional query words: OLEDB kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
