---
layout: page
title: "Q242350: SQL Server 7.0 Administrator's Companion Comments and Correction"
permalink: /kb/242/Q242350/
---

## Q242350: SQL Server 7.0 Administrator's Companion Comments and Correction

{% raw %}

	Article: Q242350
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 22-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft SQL Server 7.0 Administrator's Companion ISBN 1-57231-815-5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Microsoft SQL Server 7.0 Administrator's
	Companion, ISBN 1-57231-815-5.
	
	The following topics are covered:
	
	- CD-ROM: Windows NT 4.0 Service Pack 4 Is Not Included
	
	- Page iv: ?Determining? Not In Title Of Chapter 32
	
	- Page iv: The Title Of Appendix C Is Incorrect
	
	- Page 96: Formula To Determine Total CPU Write Time Is Incorrect
	
	- Page 734: Incorrect Information About Differential Backup
	
	- Page 821: The First Page Of Appendix A Is 822, Not 823
	
	MORE INFORMATION
	================
	
	CD-ROM: Windows NT 4.0 Service Pack 4 Is Not Included
	-----------------------------------------------------
	
	The autorun screen for the SQL Server 7.0 Evaluation CD states that Windows NT
	4.0 SP4 is included on a second CD.
	
	There is only one CD included. Please see the System Requirements on the last
	page of the book:
	
	"Windows NT 4.0 Service Pack 4 is not included on the companion CD. You can
	download this Service Pack from the Internet at
	http://www.microsoft.com/windows/downloads/."
	
	
	Page iv: ?Determining? Not In Title Of Chapter 32
	-------------------------------------------------
	
	On page iv of the Contents At A Glance, Chapter 32 is titled Determining Common
	Performance Problems. However, the actual chapter, starting on page 798, is
	titled Common Performance Problems.
	
	
	Page iv: The Title Of Appendix C Is Incorrect
	---------------------------------------------
	
	On page iv, in the Appendix C title, change:
	"SQL Server Configuration Options"
	
	To:
	"DBCC Commands"
	
	
	Page 96: Formula To Determine Total CPU Write Time Is Incorrect
	---------------------------------------------------------------
	
	On page 96, in step 8, the formula for determining the total CPU write time is
	incorrect.
	
	Change:
	CPU write time = (writes/sec) * (CPU write time)
	
	To:
	total CPU write time = (writes/sec) * (CPU time for a single write) * (work
	period)
	
	
	Page 734: Incorrect Information About Differential Backup
	---------------------------------------------------------
	
	On page 734, under Restoring from a Differential Backup, change:
	"To restore from a differential backup, you must first restore from a full backup
	and then restore all of the differential backups that have been created since
	the last full backup. Remember, a differential backup is used to back up
	information that has changed since the last full or differential backup."
	
	To:
	"To restore from a differential backup, you must first restore from a full backup
	and then restore the last differential backup. Remember, a differential backup
	is used to back up information that has changed since the last full backup."
	
	
	Page 821: The First Page Of Appendix A Is 822, Not 823
	------------------------------------------------------
	
	On page 821 (Part VI opener), in Appendix A change:
	"SQL Server Configuration Options 823"
	
	To:
	"SQL Server Configuration Options 822"
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: 1-57231-815-5 TKBOOK ITBOOK SQL
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
