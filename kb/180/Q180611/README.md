---
layout: page
title: "Q180611: PRB: Cannot Set Default Value for Access (Jet) Text Fields"
permalink: /kb/180/Q180611/
---

## Q180611: PRB: Cannot Set Default Value for Access (Jet) Text Fields

	Article: Q180611
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbDAOsearch kbMFC kbVC500 kbVC600 MSGRAPH
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The DAO SDK, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - The Microsoft Foundation Classes (MFC) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to set the default value for a text field with a string that starts
	with a number (for example, 11North), you will get an error. If you set the DAO
	Struct CDaoFieldInfo fi field member as:
	
	     fi.m_strDefaultValue = _T("11North");
	
	and then call CDaoTableDef::CreateField(fi), DAO throws an exception reporting:
	
	  Syntax error (missing operator) in table-level validation expression. (3320)
	
	If you open the Access table in Design View, click the General Tab, and try to
	enter 11North in the Default Value field, Access displays an error dialog box
	with the message:
	
	  The Expression you have entered contains invalid syntax.
	  You may have entered an operand without an operator.
	
	CAUSE
	=====
	
	The error occurs because Access accepts expressions for the default value.
	(Expressions are operators, constants, functions, literal values, and so on.)
	When the default value begins with a number, Access tries to store the default
	as a number.
	
	RESOLUTION
	==========
	
	You must use double quotes so that Access knows the default value is a string.
	For example, to do this programmatically, the code is:
	
	     fi.m_strDefaultValue = _T("\"11North\"");
	
	If you are working directly with an Access table in Design View, you must start
	the string with a quote. For example, "11North".
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following code reproduces the problem. The code below assumes that you have
	an Access database called "db1.mdb" in the root of the C drive:
	
	Sample Code
	-----------
	
	     void setFI( CDaoFieldInfo &fi)
	     {
	        fi.m_strName = _T("testfield");
	        fi.m_nType = dbText;
	        fi.m_lSize = 50;
	        fi.m_lAttributes = dbFixedField;
	        fi.m_nOrdinalPosition = 2;
	        fi.m_bRequired = FALSE;
	        fi.m_bAllowZeroLength = TRUE;
	        fi.m_lCollatingOrder = dbSortGeneral ;
	        // fi.m_strDefaultValue = _T("\"11North\""); // Corrects the error.
	        fi.m_strDefaultValue = _T("11North"); // Displays the error.
	     }
	
	     void CMy1aDlg::OnBUTcreateTbl()
	     {
	        CDaoDatabase db;
	        try
	        {
	           db.Open(_T("c:\\db1.mdb"));
	           CDaoTableDef td(&db);
	           td.Create(_T("FieldTest"));
	           CDaoFieldInfo fi;
	           setFI( fi);
	           td.CreateField(fi);
	           td.Append();
	
	           CDaoRecordset rs(&db);
	           rs.Open(dbOpenDynaset, _T("Select * from FieldTest"));
	           rs.AddNew();
	           rs.Update();
	           rs.Close();
	           db.Close();
	        }
	     catch(CDaoException *de)
	        {
	           CString strMsg;
	           strMsg.Format(
	           _T("ERROR:CDaoException\n\n")
	           _T("SCODE_CODE      =%d\n")
	           _T("SCODE_FACILITY   =%d\n")
	           _T("SCODE_SEVERITY   =%d\n")
	           _T("ResultFromScode   =%d\n"),
	           SCODE_CODE      (de->m_scode),
	           SCODE_FACILITY   (de->m_scode),
	           SCODE_SEVERITY   (de->m_scode),
	           ResultFromScode (de->m_scode));
	           AfxMessageBox(strMsg);
	           de->Delete();
	        }
	     }
	
	To reproduce this problem in Access, open up a table in Design View. In the
	Default Value Edit field, enter 1abc (without quotation marks) and then click on
	another field.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDAOsearch kbMFC kbVC500 kbVC600 MSGRAPH 
	Technology        : kbAudDeveloper kbDAOsearch kbSDKDAOSearch kbSDKSearch
	Version           : winnt:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
