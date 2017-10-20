---
layout: page
title: "Q296616: Windows 2000 Professional At a Glance Comments and Corrections"
permalink: /kb/296/Q296616/
---

## Q296616: Windows 2000 Professional At a Glance Comments and Corrections

{% raw %}

	Article: Q296616
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 21-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows 2000 Professional At a Glance ISBN 1-57231-839-2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Windows 2000 Professional At a Glance, ISBN
	1-57231-839-2.
	
	The following topics are covered:
	
	- Page 51: Incorrect Information About Change Directory Command
	
	MORE INFORMATION
	================
	
	Page 51: Incorrect Information About Change Directory Command
	-------------------------------------------------------------
	
	On page 51, the table at the top of the page that outlines MS-DOS commands for
	changing folders contains incorrect information in the second and third
	entries.
	
	Change:
	
	+-----------------------------------+
	| Command | Result                  | 
	+-----------------------------------+
	| cd ...  | Moves up two folders.   | 
	+-----------------------------------+
	| cd .... | Moves up three folders. | 
	+-----------------------------------+
	
	To:
	
	+---------------------------------------+
	| Command     | Result                  | 
	+---------------------------------------+
	| cd ..\..    | Moves up two folders.   | 
	+---------------------------------------+
	| cd ..\..\.. | Moves up three folders. | 
	+---------------------------------------+
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: EUBOOK EUAAG WIN2K 1-57231-839-2 JOYCE MOON
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
