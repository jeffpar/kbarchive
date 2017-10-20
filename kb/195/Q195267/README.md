---
layout: page
title: "Q195267: Access 97 Developer's Handbook Comments and Corrections"
permalink: /kb/195/Q195267/
---

## Q195267: Access 97 Developer's Handbook Comments and Corrections

{% raw %}

	Article: Q195267
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Access 97 Developer's Handbook ISBN 1-57231-358-7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Microsoft Access 97 Developer's Handbook,
	ISBN 1-57231-358-7.
	
	The following topics are covered:
	
	- Page 56: Incorrect Code
	
	MORE INFORMATION
	================
	
	Page 56: Incorrect Code
	-----------------------
	
	Page 56, code for retrieving values stored in the array: Change:
	
	     Dim vntElement As Variant
	     For Each vntContent In aMyArray
	     Debug.Print vntContent
	     Next
	
	To:
	
	     Dim vntElement As Variant
	     For Each vntElement In aMyArray
	     Debug.Print vntElement
	     Next
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: ms_press 1-57231-358-7
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
