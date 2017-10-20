---
layout: page
title: "Q155370: FIX: Wizards May Display Invalid Table Names for CRecordset"
permalink: /kb/155/Q155370/
---

## Q155370: FIX: Wizards May Display Invalid Table Names for CRecordset

{% raw %}

	Article: Q155370
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbwizard kbVC420bug kbVC500fix kbGrpDSTools
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The AppWizard, included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When selecting ODBC database support in the AppWizard or ClassWizard, the list
	of table names contains entries that are invalid.
	
	CAUSE
	=====
	
	AppWizard and ClassWizard incorrectly handle table names.
	
	RESOLUTION
	==========
	
	A possible workaround to this problem is to create your recordsets using an
	alternate datasource, such as an Access MDB file, which contains the same table
	and column definitions as your original datasource. Then change your code to
	access the correct datasource instead.
	
	If your table names contain 30 characters or more, it may help to rename them to
	have fewer than 30 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	version 5.0.
	
	Additional query words: SQL Server
	
	======================================================================
	Keywords          : kbwizard kbVC420bug kbVC500fix kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbAppWizard
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
