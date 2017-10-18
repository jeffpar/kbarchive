---
layout: page
title: "Q314735: FIX: Garbled Field Name Returned with VFPOLEDB Provider on Win95"
permalink: kb/314/Q314735/
---

## Q314735: FIX: Garbled Field Name Returned with VFPOLEDB Provider on Win95

	Article: Q314735
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): KbClientServer kbDatabase kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0, used with:
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a computer that is running Windows 95, you use the Visual FoxPro (VFP) OLEDB
	Provider to create an ActiveX Data Objects (ADO) recordset based on a VFP table.
	When you reference one of the fields in the table, one of two problems may
	occur:
	
	- If you reference the field name by the fields collection index number (for
	  instance, "RS.Fields(0).Name"), garbled output appears.
	
	- If you reference the field name directly by specifying the field name (for
	  instance, "Fields("f1").Name"), the following errors may occur:
	
	  Microsoft Visual Basic error message
	
	  Item can not be found in the collection corresponding to the requested name
	  or ordinal.
	
	  Visual FoxPro error message
	
	  Member FIELDS does not evaluate to an object.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the VFP OLEDB Provider installed
	with Visual FoxPro 7.0. This problem was first corrected in Visual FoxPro for
	Windows 7.0 Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use Visual FoxPro 7.0 to build the following code into a new executable
	  (.EXE) file:
	
	  #DEFINE adUseClient             3
	  #DEFINE adOpenStatic            3
	  #DEFINE adLockBatchOptimistic   4
	
	  CD JUSTPATH(SYS(16))
	  ERASE TestDBF.*
	  CREATE TABLE TestDBF (F1 c(5))
	  INSERT INTO TestDBF VALUES ("HELLO")
	  USE IN SELECT("TestDBF")
	
	  LOCAL loRS AS ADODB.RecordSet, ;
	  	loConn AS ADODB.CONNECTION
	
	  loConn = CREATEOBJECT("ADODB.Connection")
	  loRS = CREATEOBJECT("ADODB.RecordSet")
	
	  loConn.CursorLocation = adUseClient
	  loConn.OPEN("Provider=vfpoledb;Data Source=" + JUSTPATH(SYS(16)))
	
	  loRS.OPEN("SELECT * FROM TestDBF", loConn, adOpenStatic, adLockBatchOptimistic)
	  WITH loRS
	  	MESSAGEBOX("Fieldname should be f1.  It is " + .FIELDS(0).NAME)
	  	MESSAGEBOX("Fieldname should be f1.  It is " + .FIELDS("F1").NAME)
	  ENDWITH
	
	  loRS.CLOSE
	  loConn.CLOSE
	
	  RELEASE ALL
	
	NOTE: This sample code requires ADO, which does not ship with Windows 95 but is
	included with the Microsoft Data Access Components (MDAC) package. You can
	obtain the latest version of MDAC from the following Web site:
	
	  http://www.microsoft.com/data/download.htm
	  (http://www.microsoft.com/data/download.htm)
	
	2. Install the executable and the pre-SP1 release version of the Visual FoxPro
	  OLEDB Provider on a Windows 95 computer.
	
	3. Run the EXE to see the error messages.
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : KbClientServer kbDatabase kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
