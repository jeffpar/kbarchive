---
layout: page
title: "Q276355: Microsoft Exchange 2000 Server Administrator's Pocket Consultant"
permalink: /kb/276/Q276355/
---

## Q276355: Microsoft Exchange 2000 Server Administrator's Pocket Consultant

{% raw %}

	Article: Q276355
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 24-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Exchange 2000 Server Administrator's Pocket Consultant ISBN 0-7356-0962-4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Microsoft Exchange 2000 Server
	Administrator's Pocket Consultant, ISBN 0-7356-0962-4.
	
	The following topics are covered:
	
	- Pages 50 And 147: Incorrect Information About Maximum Number Of Storage
	  Groups Allowed
	
	- Page 79: Correction To Allowing Others To Access A Mailbox
	
	- Page 213: Backing Up Exchange Server M Drive Not Recommended
	
	MORE INFORMATION
	================
	
	Pages 50 and 147: Incorrect Information About Maximum Number Of Storage Groups Allowed
	--------------------------------------------------------------------------------------
	
	Pages 50 and 147 state that "Each Exchange server can have up to 16 storage
	groups, and each storage group can have up to 6 databases."
	
	Although the Extensible Storage Engine (ESE) code allows 16 storage groups,
	Exchange 2000 Server only allows a maximum of 4 storage groups containing a
	maximum of 5 databases for each storage group. This limit is enforced inside the
	Exchange System Manager snap-in, so administrators cannot create more storage
	groups than the system allows.
	
	For more information, please read the following Microsoft Knowledge Base
	article:
	
	Q251123: Maximum Number of Storage Groups in Exchange 2000 for Database Capacity
	Planning
	
	
	Page 79: Correction To Allowing Others To Access A Mailbox
	----------------------------------------------------------
	
	On page 79, under "Allowing Others to Access a Mailbox", the steps listed for
	granting access to a mailbox are incorrect. Please replace the 3 steps with the
	following:
	
	1. Start the Active Directory Users and Computers MMC snap-in.
	
	2. On the View menu, make sure that a check mark appears next to the Advanced
	Features command.
	
	3. Locate the Organizational Unit that contains the user who owns the mailbox
	that you want to allow other users to view.
	
	4. Right-click the user that owns the mailbox, and then click Properties.
	
	5. On the Exchange Advanced tab, click Mailbox Rights.
	
	6. Click Add.
	
	7. Select the user or users that you want to allow to use the mailbox, and then
	assign them Full Mailbox Access - Allow permission.
	
	
	Page 213: Backing Up Exchange Server M Drive Not Recommended
	------------------------------------------------------------
	
	On page 213, the first bulleted item in step 4 reads:
	
	"To back up Exchange and Windows 2000 settings, select all hard disk drives where
	Windows 2000 and Exchange 2000 Server are installed. Normally, this means
	backing up the root drive C:\ and the special partition for Exchange Server,
	M:Exchange."
	
	Microsoft does not recommend backing up drive M with file-level backup software.
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: TKBOOK ITBOOK BKOFFICE XCHNG 0-7356-0962-4 STANEK
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch kbZNotKeyword2 kbZNotKeyword3
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
