---
layout: page
title: "Q163852: Invalid Operand with Locked CMPXCHG8B Instruction"
permalink: /kb/163/Q163852/
---

## Q163852: Invalid Operand with Locked CMPXCHG8B Instruction

{% raw %}

	Article: Q163852
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbhw kbWinNT400sp4fix kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an Intel processor receives a specific invalid instruction, your computer
	may stop responding (hang). Your computer must be turned off and restarted to
	return to normal operation.
	
	NOTE: Although there is no known operating system or application that issues such
	an invalid instruction, you should be aware that a program can be written
	maliciously to contain such an instruction. The operating system would not trap
	this error, as it should, which results in the processor hang.
	
	CAUSE
	=====
	
	This problem can occur due to an error in the following Intel processors:
	
	- Pentium processor
	
	- Pentium processor with MMX technology
	
	- Pentium OverDrive processor
	
	- Pentium OverDrive processors with MMX technology
	
	NOTE: This problem cannot occur on the following Intel processors:
	
	- Pentium Pro processor
	
	- Pentium II processor
	
	- i486 and earlier processors
	
	This problem is known as "Invalid Operand with Locked CMPXCHG8B Instruction" and
	is erratum 81 on the Pentium processor errata list. For more information, please
	contact Intel or go to the following Intel web site:
	
	  http://support.intel.com/sites/support/
	
	RESOLUTION
	==========
	
	Intel has identified a workaround to this problem that allows the operating
	system to trap the invalid instruction and not pass it to the processor.
	Microsoft has worked closely with Intel to provide the following hotfixes:
	
	Windows NT 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	For your convenience, the English version of this post-SP3 hotfix has been posted
	to the following Internet location. However, Microsoft recommends that you
	install Windows NT 4.0 Service Pack 4 to correct this problem.
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP3/pent-fix/
	
	Windows NT 3.51
	---------------
	
	To resolve this problem for Windows NT 3.51, obtain the following fix.
	
	This fix should have the following time stamp:
	
	  11/24/97  12:42p                49,840 Hal.dll
	  11/24/97  12:42p                48,768 Hal486c.dll
	  11/24/97  12:42p                65,648 Halapic.dll
	  11/24/97  12:42p                46,704 Halast.dll
	  11/24/97  12:42p                81,056 Halcbus.dll
	  11/24/97  12:42p                79,200 Halcbusm.dll
	  11/24/97  12:42p                46,912 Halmca.dll
	  11/24/97  12:42p                67,696 Halmps.dll
	  11/24/97  12:42p                40,480 Haloli.dll
	  11/24/97  12:42p                53,744 Halsp.dll
	  11/24/97  12:42p                49,840 Halws3.dll
	  11/24/97  12:42p                41,072 Halwyse7.dll
	  11/21/97  01:35p               821,904 Ntkrnlmp.exe
	  11/21/97  01:34p               810,016 Ntoskrnl.exe
	
	This hotfix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT351/hotfixes-postSP5/pent-fix/
	
	Windows 95
	----------
	
	A fix for Windows 95 is not yet available.
	
	
	STATUS
	======
	
	Windows NT 4.0
	--------------
	
	Intel has confirmed this to be a problem in the Intel processors listed above.
	This problem was first corrected in Windows NT 4.0 Service Pack 4.0 and Windows
	NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	
	Windows NT 3.51
	---------------
	
	Intel has confirmed this to be a problem in the Intel processors listed above. A
	supported fix is now available from Microsoft, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	Windows 95
	----------
	
	Intel has confirmed this to be a problem in the Intel processors listed above.
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 95 3.50 3.51 4.00 i386 malicious hangs freeze freezes erratum cmpxchg8b compare and exchange 8 bytes cold boot hard
	
	======================================================================
	Keywords          : kbhw kbWinNT400sp4fix kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:3.5,3.51,4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
