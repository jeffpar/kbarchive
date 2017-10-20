---
layout: page
title: "Q314653: FIX: Index Created via ADOX/VFP OLEDB Provider Contain TRANSFORM"
permalink: /kb/314/Q314653/
---

## Q314653: FIX: Index Created via ADOX/VFP OLEDB Provider Contain TRANSFORM

{% raw %}

	Article: Q314653
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbCOMt kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283kbfaq
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft ActiveX Data Objects Extensions (ADOX) and the Visual
	FoxPro OLE DB provider to create an index on a column in a Visual FoxPro table,
	the index is created successfully, but it contains the Visual FoxPro TRANSFORM
	function.
	
	CAUSE
	=====
	
	Transform is used to handle an index with multiple fields with different data
	types. For example, on a table with c1 (character type) and n1 (numeric type)
	fields, one can specify an index on both fields (c1, n1). Visual FoxPro treats
	an index with multiple fields as an expression. In this case, the expression
	should be c1 + transform(n1), or transform(c1) + transform(n1).
	
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
	
	The Visual FoxPro 7.0 SP1 OLE DB provider uses the TRANSFORM function only when
	the index expression being created contains more than one column.
	
	Steps to Reproduce Behavior
	---------------------------
	
	To reproduce the problem, run the following code. The code uses ADOX to create an
	index on a character-type column in a Visual FoxPro table, and then displays a
	Wait window with the index tag expression it created. Note that the TRANSFORM
	function is used on the single-column expression.
	
	  #DEFINE ThePath ADDBS(JUSTPATH(SYS(16)))
	  CD (ThePath)
	  CLEAR ALL
	  RELEASE ALL
	  CLOSE DATABASES ALL
	  ERASE MyData_*.*
	  MakeData()
	   
	  LOCAL loCatalog AS ADOX.CATALOG, ;
	   loTable AS ADOX.TABLE, ;
	   loIndex AS ADOX.INDEX, ;
	   loCols AS ADOX.COLUMNS, ;
	   loCacheConn AS ADODB.CONNECTION
	   
	  loCacheConn = NEWOBJECT('ADODB.Connection')
	   
	  WITH loCacheConn
	   .ConnectionString = "Provider=VFPOLEDB.1;" + ;
	    "Data Source=" + ThePath + "MyData_DBC.dbc;" + ;
	    "Collating Sequence=MACHINE"
	   .CursorLocation= 3  && adUseClient
	   .Mode = 16 && adModeShareDenyNone
	   .OPEN
	  ENDWITH
	   
	  loCatalog = NEWOBJECT('ADOX.Catalog')
	  loTable = NEWOBJECT('ADOX.Table')
	  loIndex = NEWOBJECT('ADOX.Index')
	   
	  loCatalog.ActiveConnection = loCacheConn
	  loTable = loCatalog.TABLES("MyData_DBF")
	   
	  WITH loIndex
	   .NAME = "myindex"
	   .COLUMNS.APPEND("state")
	  ENDWITH
	   
	  loTable.INDEXES.APPEND(loIndex)
	   
	  loCacheConn.CLOSE
	  loCacheConn = NULL
	  loCatalog = NULL
	  loTable = NULL
	  loIndex = NULL
	   
	  USE MyData_DBF
	  WAIT WINDOW "Index Expression: " + SYS(14,1)
	  USE
	   
	
	  *~~~~~~~~~~~~~~~~~~~~~~~~~~
	  PROCEDURE MakeData
	   CLOSE DATA ALL
	   CREATE DATABASE 'MyData_DBC.DBC'
	   CREATE TABLE 'MyData_DBF.DBF' NAME 'MyData_DBF' (STATE C(2) NOT NULL)
	   CLOSE DATA ALL
	
	REFERENCES
	----------
	
	For additional information about ADOX, refer to the following Knowledge Base
	article:
	
	  Q198534 INFO: ADOX Readme File Included with ADO 2.1 Components
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbCOMt kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbfaq
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
