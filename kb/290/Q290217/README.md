---
layout: page
title: "Q290217: SQL Server 2000 Administrator's Companion Comments and Correctio"
permalink: /kb/290/Q290217/
---

## Q290217: SQL Server 2000 Administrator's Companion Comments and Correctio

{% raw %}

	Article: Q290217
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft SQL Server 2000 Administrator's Companion ISBN 0-7356-1051-7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Microsoft SQL Server 2000 Administrator's
	Companion, ISBN 0-7356-1051-7.
	
	The following topics are covered:
	
	- Page 128: Formula To Determine Total CPU Write Time Is Incorrect
	
	- Page 149: Incorrect SQL Server 2000 Licensing Information
	
	- Page 886: Incorrect Information About Differential Backup
	
	- Page 912: Incorrect Information About Differential Backup
	
	MORE INFORMATION
	================
	
	Page 128: Formula To Determine Total CPU Write Time Is Incorrect
	----------------------------------------------------------------
	
	On page 128, item 8, the formula for determining the total CPU write time is
	incorrect.
	
	Change:
	" CPU write time = (writes/sec) * (CPU write time) " (without the quotation
	marks)
	
	To:
	" total CPU write time = (writes/sec) * (CPU write time) * (work period) "
	(without the quotation marks)
	
	
	Page 149: Incorrect SQL Server 2000 Licensing Information
	---------------------------------------------------------
	
	On page 149 in step 17, there is an error in the description of SQL Server 2000
	licensing.
	
	The following sentence is incorrect and should be disregarded, per the Microsoft
	SQL Server product team:
	
	"You could choose to limit SQL Server to just two of four processors. In that
	case you would be required to purchase only two processor licenses."
	
	Other references to SQL Server 2000 licensing in this title are correct.
	
	
	Page 886: Incorrect Information About Differential Backup
	---------------------------------------------------------
	
	On page 886 there is an incorrect statement made about differential backup and
	the restoration thereof.
	
	On page 886, under Differential Backups, change:
	"Restoring a differential backup requires the restoration of the last full backup
	and all differential backups that have occurred since the last full backup."
	
	To:
	"Restoring a differential backup requires the restoration of the last full backup
	and the last differential backup."
	
	
	Page 912: Incorrect Information About Differential Backup
	---------------------------------------------------------
	
	On page 912 there is an incorrect statement made about differential backup and
	the restoration thereof.
	
	On page 912, under Restoring from a Differential Backup, change:
	"To restore from a differential backup, you must first restore from a full backup
	and then restore all of the differential backups that have been created since
	the last full backup. Remember, a differential backup is used to back up
	information that has changed since the last full or differential backup."
	
	To:
	"To restore from a differential backup, you must first restore from a full backup
	and then restore the last differential backup. Remember, a differential backup
	is used to back up information that has changed since the last full backup."
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: TKBOOK ITBOOK SQL 0-7356-1051-7 GARCIA REDING WHALEN DELUCA
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
