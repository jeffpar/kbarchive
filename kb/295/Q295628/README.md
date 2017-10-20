---
layout: page
title: "Q295628: Understanding Active Directory Services Comments and Corrections"
permalink: /kb/295/Q295628/
---

## Q295628: Understanding Active Directory Services Comments and Corrections

{% raw %}

	Article: Q295628
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 07-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Understanding Active Directory Services ISBN 1-57231-721-3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Understanding Active Directory Services,
	ISBN 1-57231-721-3.
	
	The following topics are covered:
	
	- Page 51: Incorrect Statement Regarding LDAP Search Scopes
	
	MORE INFORMATION
	================
	
	Page 51: Incorrect Statement Regarding LDAP Search Scopes
	---------------------------------------------------------
	
	On page 51, in the last paragraph, there is an error regarding the Scope
	parameter of LDAP searching.
	
	Change:
	"2) the base object and its direct subordinates, or..."
	
	To:
	"2) the immediate children of a base object, but excluding the base object
	itself, or..."
	
	Note: Additional information can be found at the following location:
	
	  http://msdn.microsoft.com/library/psdk/adsi/glquery_5jvp.htm
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: 1-57231-721-3 ITBook Blum ADS
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
