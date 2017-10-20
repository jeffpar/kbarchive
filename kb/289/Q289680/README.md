---
layout: page
title: "Q289680: Migrating From Windows NT 4.0 To Windows 2000 Training Kit Comme"
permalink: /kb/289/Q289680/
---

## Q289680: Migrating From Windows NT 4.0 To Windows 2000 Training Kit Comme

{% raw %}

	Article: Q289680
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 30-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS MCSE Training Kit, Migrating from Microsoft Windows NT 4.0 to Microsoft Windows 2000 ISBN 0-7356-1239-0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book MCSE Training Kit, Migrating From Microsoft
	Windows NT 4.0 To Microsoft Windows 2000, ISBN 0-7356-1239-0.
	
	The following topics are covered:
	
	- CD-ROM: Incorrect Evaluation Software Name On Label
	
	- Page 32: Incorrect Information In Table 2.1
	
	- Page 219: Incorrect Down-Level Domain Names In Figure 8.9
	
	- Page 229: Incorrect Reference To Windows NT Domain
	
	- Page 261: Inaccurate Netdom Function
	
	- Page 441: Missing Answers
	
	MORE INFORMATION
	================
	
	CD-ROM: Incorrect Evaluation Software Name On Label
	---------------------------------------------------
	
	The companion CD for this book includes an Evaluation Edition of Windows 2000
	Advanced Server. However, the CD label incorrectly reads: "Microsoft Windows
	2000 Server Evaluation Edition 120-day Limit on Use."
	
	The corrected label should read: "Microsoft Windows 2000 Advanced Server
	Evaluation Edition 120-day Limit on Use."
	
	
	Page 32: Incorrect Information In Table 2.1
	-------------------------------------------
	
	On page 32, Table 2.1 contains incorrect information about Windows 2000 hardware
	requirements. For the correct Windows 2000 hardware requirements, please refer
	to the following URL:
	
	http://www.microsoft.com/windows2000/server/evaluation/sysreqs/default.asp
	
	
	Page 219: Incorrect Down-Level Domain Names In Figure 8.9
	---------------------------------------------------------
	
	On page 219, in Figure 8.9,
	
	Change:
	"migrate.microsoft.com
	sales.migrate.microsoft.com"
	
	To:
	"migrate.name.com
	sales.migrate.name.com"
	
	
	Page 229: Incorrect Reference To Windows NT Domain
	--------------------------------------------------
	
	On page 229, in the second bulleted paragraph, remove the last sentence:
	
	"If it's a Windows NT domain, you'll need success and failure Group Management
	auditing enabled on the source PDC."
	
	Windows NT domain cannot be part of a Windows 2000 forest.
	
	
	Page 261: Inaccurate Netdom Function
	------------------------------------
	
	On page 261, in the paragraph below the "Important" paragraph,
	
	Change:
	"It can move computers - workstations, servers, and domain controllers - from one
	domain to another."
	
	To:
	"It can move computers - workstations and servers - from one domain to another."
	
	
	Page 441: Missing Answers
	-------------------------
	
	On page 441, the answers to the four questions on page 180 are missing. The
	answers should appear as follows:
	
	+-----------------------------------------------------+
	| Objects                     | A  | B  | C | D  | E  | 
	+-----------------------------------------------------+
	| migkit.microsoft.com domain | 63 | 19 | 6 | 25 |    | 
	+-----------------------------------------------------+
	| Europe OU                   | 41 | 19 | 8 | 16 |    | 
	+-----------------------------------------------------+
	| Publicity OU                | 41 | 19 | 7 | 16 | 31 | 
	+-----------------------------------------------------+
	| Press OU                    | 91 | 19 | 7 | 31 | 31 | 
	+-----------------------------------------------------+
	
	+-----------------------------------------------------+
	| Objects                     | A  | B  | C | D  | E  | 
	+-----------------------------------------------------+
	| migkit.microsoft.com domain | 63 | 19 | 6 | 25 |    | 
	+-----------------------------------------------------+
	| Europe OU                   | 41 |    | 8 | 16 |    | 
	+-----------------------------------------------------+
	| Publicity OU                | 41 |    | 7 | 16 | 31 | 
	+-----------------------------------------------------+
	| Press OU                    | 91 |    | 7 | 31 | 31 | 
	+-----------------------------------------------------+
	
	+-----------------------------------------------------+
	| Objects                     | A  | B  | C | D  | E  | 
	+-----------------------------------------------------+
	| migkit.microsoft.com domain | 63 | 19 | 6 | 25 |    | 
	+-----------------------------------------------------+
	| Europe OU                   | 41 | 19 | 8 | 16 |    | 
	+-----------------------------------------------------+
	| Publicity OU                |    |    | 7 |    | 31 | 
	+-----------------------------------------------------+
	| Press OU                    | 91 |    | 7 | 31 | 31 | 
	+-----------------------------------------------------+
	
	+-----------------------------------------------------+
	| Objects                     | A  | B  | C | D  | E  | 
	+-----------------------------------------------------+
	| migkit.microsoft.com domain | 63 | 19 | 6 | 25 |    | 
	+-----------------------------------------------------+
	| Europe OU                   | 41 | 19 | 8 | 16 |    | 
	+-----------------------------------------------------+
	| Publicity OU                | 41 | 19 | 7 | 16 | 31 | 
	+-----------------------------------------------------+
	| Press OU                    | 91 |    |   | 31 |    | 
	+-----------------------------------------------------+
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: TKBOOK WIN2000 0-7356-1239-0 CHAI
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
