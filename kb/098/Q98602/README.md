---
layout: page
title: "Q98602: INFO: Adding a CObList Object to Another CObList"
permalink: /kb/098/Q98602/
---

## Q98602: INFO: Adding a CObList Object to Another CObList

{% raw %}

	Article: Q98602
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbCollectionClass
	Last Modified: 07-MAY-2001
	
	1.00 1.50 1.51 1.52 | 1.00 2.00 2.10 4.00
	WINDOWS             | WINDOWS NT
	kbprg
	
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows 
	   - Microsoft Visual C++ 32-bit Edition 
	-------------------------------------------------------------------------------
	
	When the parameter to the AddHead() or AddTail() member functions of
	CObList specifies a pointer to an object derived from CObList, the
	functions add all the items specified in the argument object to the
	list. To add the CObList object to the list, the application must cast
	the CObList pointer to a CObject pointer.
	
	In the CObList class, the AddHead() and AddTail() functions accept
	either a "CObject *" or a "CObList *" argument. When the functions
	receive a "CObList *", the functions add all the items in the
	specified list to the list. To add the list object to another list,
	cast the list pointer to a CObject pointer. The following sample code
	demonstrates the differences between these methods.
	
	Sample Code
	-----------
	
	     // adds all of the CObject items contained in listSrc to listTarget
	     listTarget.AddTail(&listSrc);
	
	     // adds listSrc as a CObList object to listTarget
	     listTarget.AddTail((CObject *)&listSrc);
	
	SUMMARY
	=======
	
	
	
	Additional query words: kbinf 1.00 1.50 2.00 2.10 2.50 2.51 2.52 3.00 3.10 4.00
	
	======================================================================
	Keywords          : kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbCollectionClass 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
