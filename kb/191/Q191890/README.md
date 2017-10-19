---
layout: page
title: "Q191890: How To Obtain the Checked Build of Latest WinNT 4.0 Service Pack"
permalink: /kb/191/Q191890/
---

## Q191890: How To Obtain the Checked Build of Latest WinNT 4.0 Service Pack

	Article: Q191890
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Checked binaries provide error checking, argument verification, and system
	debugging code not present in the free binaries.
	
	Much of the additional code in the checked binaries is in the form of ASSERT
	macros that test an expression. If the expression evaluates to FALSE, the macro
	generates a kernel debugger error message and breaks into the debugger. This
	lets you immediately determine the cause and location of the error.
	
	Use the free and checked builds of Windows NT as follows:
	
	- Use the free build on the host machine, running WinDbg.
	
	- Use the free build to develop and build a driver. Performance suffers in the
	  checked build due to the additional code that is executed.
	
	- Use the checked build on the target computer to test and debug a driver
	  during the initial phases of its development.
	
	- Use the free build on the target computer to test and debug your driver
	  during the final phases of its development. The final testing of your driver
	  must be done on a free version of the driver running the free build of
	  Windows NT.
	
	The extra protection of the checked build of Windows NT carries some penalties.
	Because of the additional error checking code and debugging information, the
	checked binaries are larger and run slower than the free binaries. This can
	conceal synchronization or other timing-related problems, such as race
	conditions, that become apparent only in the free build.
	
	If you run the checked build of Windows NT without having enabled kernel
	debugging, unexpected system shutdowns can occur. This is because the additional
	checks in the checked build increase the likelihood of encountering a
	breakpoint.
	
	MORE INFORMATION
	================
	
	The checked build of Windows NT 4.0 Service Pack 6a has been posted to the
	following Internet location:
	
	  http://www.microsoft.com/ntserver/nts/downloads/recommended/SP6/SP6build/default.asp
	
	For additional information on how to obtain the free build of the latest Windows
	NT 4.0 service pack, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q152734 How To Obtain the Latest Windows NT 4.0 Service Pack
	
	Additional query words: 4.00 sp6a servpack ntdistrib
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTW400SP6a
	Version           : :4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
