---
layout: page
title: "Q132307: Logon Script Does Not Run When Computer Name Contains a Space"
permalink: kb/132/Q132307/
---

## Q132307: Logon Script Does Not Run When Computer Name Contains a Space

	Article: Q132307
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log onto a computer running Windows NT, either locally or from another
	Windows NT Server or Workstation, your logon script does not run. It runs
	normally when you log on from a computer running Windows for Workgroups.
	
	CAUSE
	=====
	
	This problem occurs when the Windows NT 3.5 Server primary domain controller
	(PDC) that finds the script fails to parse the computer name correctly because
	of a space in the computer name.
	
	WORKAROUND
	==========
	
	To work around this problem, use an underscore, dash, or another character in
	place of the space in the computer name, or upgrade to Windows NT Server 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	
	Additional query words: 3.50 prodnt log on off
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	
