---
layout: page
title: "Q314656: FIX: OLE DB Provider Can Fail After Updating 512 Records"
permalink: /kb/314/Q314656/
---

## Q314656: FIX: OLE DB Provider Can Fail After Updating 512 Records

	Article: Q314656
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbDatabase kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use ActiveX Data Objects (ADO) and the Visual FoxPro OLE DB provider to
	add records to a table in a loop, the procedure may fail after approximately 512
	records, and the following error message may appear:
	
	  Multiple-step operation generated errors. Check each status value.
	
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
	
	To reproduce the problem, run the following code:
	
	  CD JUSTPATH(SYS(16))
	  CLOSE DATABASES ALL
	  RELEASE ALL
	  CLEAR ALL
	
	  CREATE DATABASE simple_data
	  CREATE TABLE 'SIMPLE.DBF' NAME 'SIMPLE' (RECID I NOT NULL, CALLID I NOT NULL)
	  ALTER TABLE 'SIMPLE' ADD PRIMARY KEY RECID TAG RECID
	  USE
	  CLOSE DATABASES ALL
	
	  LOCAL loConn AS ADODB.CONNECTION, ;
	  	loRs AS ADODB.Recordset, ;
	  	lnCounter AS INTEGER
	
	  loConn = CREATEOBJECT("ADODB.Connection")
	  loConn.OPEN([Provider=VFPOLEDB.1;Data Source=] + JUSTPATH(SYS(16,0)) + ;
	  	[;Mode=ReadWrite;Password="";Collating Sequence=MACHINE])
	
	  loRs = CREATE("ADODB.Recordset")
	  WITH loRs
	  	.ActiveConnection = loConn
	  	.CursorType= 3  && adOpenStatic
	  	.CursorLocation= 3  && adUseClient
	  	.LockType= 3  && adLockOptimistic
	  	.OPEN("simple")
	
	  	FOR lnCounter = 1 TO 1000
	  		@ 10, 10 SAY lnCounter
	  		.AddNew()
	  		.FIELDS("recid").VALUE = lnCounter
	  		.FIELDS("callid").VALUE = lnCounter
	  		.UPDATE
	  	ENDFOR
	  	.CLOSE
	  ENDWITH
	  loConn.CLOSE
	
	  loRS = NULL
	  loConn = NULL
	
	  RELEASE ALL
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbDatabase kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
