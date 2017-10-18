---
layout: page
title: "Q150102: HP Netserver Stop Err Msg: Stop 0x0000007F (00000008)"
permalink: kb/150/Q150102/
---

## Q150102: HP Netserver Stop Err Msg: Stop 0x0000007F (00000008)

	Article: Q150102
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you copy a file from another computer to a Hewlett-Packard Netserver that
	is using Busmastering driver with J2585B NIC, the server gives the following
	stop error message:
	
	  Stop 0x0000007F (00000008).
	
	Here (0000008) is a double fault.
	
	CAUSE
	=====
	
	The driver dated 2/16/96 Revision B.01.01 causes this problem.
	
	RESOLUTION
	==========
	
	1. Get the latest drive from the Hewlett-Packard.
	
	For information about how to contact Hewlett-Packard, click the appropriate
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	2. Download file J2585B.exe dated 4/17/96.
	
	3. Extract the file using the /x; the x is case sensitive. This keeps the
	  correct directory structure. The syntax is: J2585.EXE /x
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
