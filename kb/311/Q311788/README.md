---
layout: page
title: "Q311788: Programming Microsoft SQL Server 2000 With XML Comments And Corr"
permalink: /kb/311/Q311788/
---

## Q311788: Programming Microsoft SQL Server 2000 With XML Comments And Corr

{% raw %}

	Article: Q311788
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 31-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Programming Microsoft SQL Server 2000 with XML ISBN 0-7356-1369-9 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Programming Microsoft SQL Server 2000 With
	XML, ISBN 0-7356-1369-9.
	
	The following topics are covered:
	
	- Page 230: The Second Instance Of 1234 Should Be In Double Quotation Marks
	
	MORE INFORMATION
	================
	
	Page 230: The Second Instance Of 1234 Should Be In Double Quotation Marks
	-------------------------------------------------------------------------
	
	On page 230,
	
	Change:
	
	  "....either <Order OrderNo = '1234'> or <Order OrderNo = '1234'>.  To an XML parser, these tags are the same."
	
	To:
	
	  "....either <Order OrderNo = '1234'> or <Order OrderNo = "1234">.  To an XML parser, these tags are the same."
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: DEVBOOK 0-7356-1369-9 Malcolm
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
