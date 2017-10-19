---
layout: page
title: "Q138404: How To Use License Manager on a Windows NT Workstation"
permalink: /kb/138/Q138404/
---

## Q138404: How To Use License Manager on a Windows NT Workstation

	Article: Q138404
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	Windows NT Server 3.51 and 4.0 includes License Manager (LLSMGR.EXE) in the
	Network Administration program group to assist network administrators in
	Managing licensing for computers running Windows NT Server on which they
	Have administrative rights.
	
	To install and run License Manager on a Window NT Workstation computer,
	copy the following files from a computer running Windows NT Server 3.51
	and/or to the %SystemRoot%\SYSTEM32 (or any other) directory on the Windows
	NT Workstation:
	
	  LLSMGR.HLP
	  LLSMGR.EXE
	  LLSRPC.DLL
	
	Also note that in Windows NT 4.0 you must also copy the file CCFAPI32.DLL.
	It is located in the same directory as the above three files.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	Issue type        : kbhowto
	
	=============================================================================
	
