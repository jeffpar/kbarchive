---
layout: page
title: "Q314650: FIX: Error Updating Table with Empty Date Using VFP OLEDB Provid"
permalink: /kb/314/Q314650/
---

## Q314650: FIX: Error Updating Table with Empty Date Using VFP OLEDB Provid

{% raw %}

	Article: Q314650
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Visual FoxPro (VFP) 7.0 OLEDB provider to create an ActiveX
	Data Objects (ADO) recordset on a Visual FoxPro table that has a date-type
	field, the following error may occur when you use the ADO UPDATE() method to
	update the values in a record that contains an empty date-type field:
	
	  Multiple-step operation generated errors. Check each status value.
	
	This error occurs even if you do not attempt to modify the value of the date-type
	field in the record.
	
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
	
	To reproduce the problem, paste the following code in a new program (.prg) file
	and run it:
	
	  ON ERROR DO ERR_HAND
	
	  CLEAR
	  CD JUSTPATH(SYS(16))
	  LOCAL loCONN AS ADODB.Connection, ;
	  	loRS AS ADODB.Recordset, ;
	  	lcConnStr as String
	
	  ERASE MyDBF.*
	  CREATE TABLE MyDBF (sys_cust N(8), cust_no c(6), ddate d)
	  INSERT INTO MyDBF VALUES (12345678,"CUST12",{})
	  USE IN MyDBF
	
	  lcConnStr = [Provider=VFPOLEDB.1;Data Source=] + JUSTPATH(SYS(16,0))
	  loCONN = CREATEOBJECT("ADODB.Connection")
	  loRS = CREATEOBJECT("ADODB.Recordset")
	
	  loCONN.Mode = 12
	  loCONN.CursorLocation = 3
	  loCONN.OPEN(lcConnStr)
	
	  WITH loRS
	  	.OPEN("select * from MyDBF", loCONN, 1, 3)
	  	.FIELDS(0) = 543543
	  	.FIELDS(1) = "222001"
	  	.FIELDS(2)= DATE()
	  	.UPDATE()
	  	.CLOSE
	  ENDWITH
	  	
	  loRS = NULL
	  loCONN.CLOSE
	  loCONN = NULL
	
	  RELEASE ALL
	  WAIT WINDOW "Update successful..." NOWAIT NOCLEAR 
	  USE MYDbf
	  BROWSE
	  USE IN SELECT("MYDBF")
	  WAIT CLEAR
	
	  *~~~~~~~~~~~~~~
	  PROCEDURE ERR_HAND
	  	ON ERROR
	  	AERROR(aTest)
	  	_CLIPTEXT = aTest(3)
	  	DISPLAY MEMORY LIKE aTEST
	  	RELEASE ALL
	  	CLOSE DATABASES ALL
	  	CLEAR ALL
	  	CANCEL
	
	When you run this code using the VFP 7.0 version of the VFP OLEDB Provider, the
	error mentioned in the "Symptoms" section occurs. When you use the VFP 7.0 SP1
	version of the VFP OLEDB Provider, no error occurs and the UPDATE() call is
	successful.
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
