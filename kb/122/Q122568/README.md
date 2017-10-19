---
layout: page
title: "Q122568: STOP 7B When You Upgrade From Server on COMPAQ DESKPRO"
permalink: /kb/122/Q122568/
---

## Q122568: STOP 7B When You Upgrade From Server on COMPAQ DESKPRO

	Article: Q122568
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbnetwork kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade to Windows NT version 3.5 without using floppy disks on a
	COMPAQ DESKPRO XL series computer, the following STOP message may appear:
	
	  STOP 0x0000007B
	  Inaccessible Boot Device
	
	This message appears when you attempt to install Windows NT with the /b parameter
	and you specify the COMPAQ SSD driver disk (SSD v1.12 - SP0925.EXE) for the
	computer components.
	
	
	WORKAROUND
	==========
	
	To work around this problem, do not use the /b parameter when you install
	Windows NT version 3.5 from a server. Run WINNT.EXE or WINNT32.EXE without any
	parameters; this requires three blank, formatted floppy disks.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	The Compaq products discussed here are manufactured by Compaq Computer Corp., a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: prodnt trap 0x7b xe
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
