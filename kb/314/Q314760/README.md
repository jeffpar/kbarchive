---
layout: page
title: "Q314760: Microsoft Access 2002 Visual Basic for Applications Step by Step"
permalink: /kb/314/Q314760/
---

## Q314760: Microsoft Access 2002 Visual Basic for Applications Step by Step

{% raw %}

	Article: Q314760
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 19-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Access 2002 Visual Basic For Applications Step By Step ISBN 0-7356-1358-3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Microsoft Access 2002 Visual Basic for
	Applications Step by Step, ISBN 0-7356-1358-3.
	
	The following topics are covered:
	
	- Page 159: Error In Step 10 Code Sample
	
	MORE INFORMATION
	================
	
	Page 159: Error In Step 10 Code Sample
	--------------------------------------
	
	The Step 10 code sample on page 159 contains an error.
	
	Change:
	
	  rst.FindFirst "SubscriberID = " " & List0
	
	To:
	
	  rst.FindFirst "SubscriberID = " & List0
	
	
	Additional query words: 0-7356-1358-3
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
