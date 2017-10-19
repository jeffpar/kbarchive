---
layout: page
title: "Q230525: Changes to Domain Group Initiates Full Domain Synchronization"
permalink: /kb/230/Q230525/
---

## Q230525: Changes to Domain Group Initiates Full Domain Synchronization

	Article: Q230525
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a change is made to a group in a Windows NT 2000 mixed-mode domain (where
	domain controllers have different versions of Windows NT), the Windows NT 3.51
	domain controllers attempt to complete a full domain security account manager
	(SAM) synchronization instead of just replicating the change.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time     Size      File name      Platform
	  -------------------------------------------------------------
	  05/11/99   05:23p   150,576   Netlogon.dll   x86
	  05/11/99   05:26p   229,136   Netlogon.dll   Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	In Windows NT, changes to the SAM database that are replicated across the domain
	are given a unique serial number. For example, a change with a specific serial
	number may represent a change in group membership of a particular group. Another
	change with a different specific serial number may represent a change in a group
	attribute.
	
	In Windows NT 3.51 and Windows NT 4.0, there exists a mechanism to propagate
	group renames. Specifically, if change number N represented a group rename on a
	primary domain controller (PDC), the backup domain controller (BDC) would get
	three changes (or deltas) replicated to it. The first delta contains the new
	name of the account. After the BDC processes this delta, it expects the next
	delta to be delta number N+1. But the PDC sends the BDC a delta saying "the next
	delta is delta N". The PDC then sends the BDC another delta containing the group
	membership of the group.
	
	Windows NT 3.51 does not correctly support the "next delta is delta N" change
	feature. This causes the BDC to perform a full SAM database synchronization.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
