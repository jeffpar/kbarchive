---
layout: page
title: "Q165463: WINS Admin Shows Huge Version ID for WINS Records"
permalink: kb/165/Q165463/
---

## Q165463: WINS Admin Shows Huge Version ID for WINS Records

	Article: Q165463
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the WINS database with the WINS Administration utility, you may
	see a large number for the owner Highest ID as well as several records owned by
	that WINS Server with a large version ID.
	
	This does not cause any problem as far as replication and other WINS- related
	operations are concerned.
	
	
	CAUSE
	=====
	
	This problem is related to Jet Database. WINS depends on the JET database to
	provide the version ID. If JET returns a large version ID for a record, WINS
	will use this to replicate to its Push or Pull partners.
	
	RESOLUTION
	==========
	
	To resolve this problem, use Winscl.exe (part of the Windows NT Resource Kit) to
	remove the record with large version ID from the owner of the WINS database, as
	well as from the replication partners showing the large version number.
	
	For more information about WINSCL usage, please see the following Microsoft
	Knowledge Base article:
	
	  ARTICLE-ID: Q137582
	  TITLE : Using WINSCL.EXE
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
