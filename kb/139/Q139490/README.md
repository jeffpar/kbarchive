---
layout: page
title: "Q139490: FIX: Can't Select First Table When Creating DAO Table Recordse"
permalink: /kb/139/Q139490/
---

## Q139490: FIX: Can't Select First Table When Creating DAO Table Recordse

{% raw %}

	Article: Q139490
	Product(s): Microsoft C Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbwizard kbDAOsearch kbDatabase kbMFC kbVC kbVC410fix
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using AppWizard or ClassWizard to create a table-type recordset
	derived from CDaoRecordset, you will not be able to successfully select the
	first table in the list of tables presented. Attempting to do so will result in
	a dialog box bearing the following message:
	
	  You must select one table for this table-type recordset.
	
	RESOLUTION
	==========
	
	To work around this problem, follow this procedure:
	
	1. Instead of selecting a Table recordset type in the wizard, use Dynaset.
	
	2. Edit the implementation (.cpp) file of the resulting recordset and search for
	  the member variable m_nDefaultType. Change the type of recordset by modifying
	  the value that is assigned to that member.
	
	  Change this:
	
	       m_nDefaultType = dbOpenDynaset;
	
	  To this:
	
	       m_nDefaultType = dbOpenTable;
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	Additional query words: kbVC400bug app class wizard
	
	======================================================================
	Keywords          : kbwizard kbDAOsearch kbDatabase kbMFC kbVC kbVC410fix 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
