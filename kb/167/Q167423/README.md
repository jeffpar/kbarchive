---
layout: page
title: "Q167423: FIX: CRecordset Members Not in &quot;Add Member Variable&quot; Dialog Box"
permalink: /kb/167/Q167423/
---

## Q167423: FIX: CRecordset Members Not in &quot;Add Member Variable&quot; Dialog Box

{% raw %}

	Article: Q167423
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbtool kbwizard kbDatabase kbMFC kbODBC kbVC kbVC500bug kbVS97sp1fix
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This problem only occurs in the German localized version of Visual C++ 5.0. When
	you have Ctrl+DblClk on a dialog box or "Add Member Variable" in Class Wizard,
	the member variables in the CRecordset class are not displayed.
	
	CAUSE
	=====
	
	The Class Wizard fails to translate the strings.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new MFC SDI AppWizard project (neu MFC einzeines dokument projekte),
	  and name the project Test.
	
	2. In MFC AppWizard - step 2 of 6:
	
	  1. Click "Datenbankansicht mit Dateiunterstunterstutzung" (Database view with
	     file support).
	
	  2. Click Datanquelle... (DataSource...).
	
	  3. In the "Datenbankoptionen" (Database Options) dialog box, connect to an
	     ODBC or DAO database. Select a table from the database.
	
	3. In MFC AppWizard - step 2 of 6 - Click "Fertigstellen" (Finish).
	
	4. Click the ResourceView for the project and open the dialog resource for
	  IDD_TEST_FORM.
	
	5. Add an EditBox.
	
	6. Connect the database fields to the EditBox using one of the following:
	
	   - Press Ctrl+DblClick in the EditBox.
	
	  -or-
	
	   - Start ClassWizard (Ctrl+W), click the Member-Variablen (member variable)
	     tab, select the CTestView class and click "Variable hinzufugen...".
	
	Either method makes the "Member-variable hinzufugen..." (Add Member Variable)
	dialog box appear. The "Name der member variable" listbox should show the member
	variables of the CRecordset derived class CTestSet.
	
	Steps to Work Around this Problem
	---------------------------------
	
	If you need to connect a field to the EditBox, you have to manually add code to
	the CTestView::DoDataExchange() function. For example, if you want to connect to
	the EditBox to the:
	
	  m_pSet->m_StudentID
	
	variable, add the following line to void: "
	
	     void CTestView::DoDataExchange(CDataExchange* pDX)
	
	" (without the quotation marks) which is located in the TextView.cpp file as
	follows:
	
	    DDX_FieldText(pDX, IDC_EDIT1, m_pSet->m_StudentID, m_pSet);
	
	The result should look like the following:
	
	     void CTestView::DoDataExchange(CDataExchange* pDX)
	     {
	        CRecordView::DoDataExchange(pDX);
	        //{{AFX_DATA_MAP(CDbtestView)
	        DDX_FieldText(pDX, IDC_EDIT1, m_pSet->m_StudentID, m_pSet);
	        //}}AFX_DATA_MAP
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbwizard kbDatabase kbMFC kbODBC kbVC kbVC500bug kbVS97sp1fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
