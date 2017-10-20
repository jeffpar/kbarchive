---
layout: page
title: "Q158230: BUG: Changes in an ISAM Table Not Seen by DAO"
permalink: /kb/158/Q158230/
---

## Q158230: BUG: Changes in an ISAM Table Not Seen by DAO

{% raw %}

	Article: Q158230
	Product(s): Microsoft C Compiler
	Version(s): 4.2
	Operating System(s): 
	Keyword(s): kbole kbDAOsearch kbDatabase kbMFC kbVC kbVC400bug kbVC410bug kbVC420bugkbbuglist
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A table-type or dynaset recordset may not see changes made by another recordset
	even though the page timeout setting (set in the registry) has expired for that
	ISAM. The internal recordset cache will not reflect the changes of the table.
	This happens with DAO ISAM types such as FoxPro and Paradox.
	
	RESOLUTION
	==========
	
	The only known way to get the recordset to successfully refresh the cache is to
	call MoveFirst() for the recordset or move a large number of records ahead in
	the recordset so that the cache gets refreshed.
	
	If you choose to call MoveFirst() to refresh the cache, you can get the current
	record position by calling CDaoRecordset::GetBookmark() and then calling
	CDaoRecordset::SetBookmark() after the call to MoveFirst() to get back to the
	record you were on. At that point, the record contains the new contents.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in DAO 3.0 version 3.000.2627.
	Microsoft will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	Additional query words: 4.00 4.10 4.20 kbdsd dbase IISAM pagetimeout
	
	======================================================================
	Keywords          : kbole kbDAOsearch kbDatabase kbMFC kbVC kbVC400bug kbVC410bug kbVC420bug kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC420
	Version           : :4.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
