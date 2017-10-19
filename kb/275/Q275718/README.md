---
layout: page
title: "Q275718: SNA Server Manager May Stop Responding When You Quit the Program"
permalink: /kb/275/Q275718/
---

## Q275718: SNA Server Manager May Stop Responding When You Quit the Program

	Article: Q275718
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Server Manager or the SNA Server MMC Snap-in may stop responding (hang) when
	you quite the program after you open a large SNA Server configuration file
	(Com.cfg). In addition, the CPU utilization on the system that is running SNA
	Server Manager may spike at 100 percent (%) when you attempt to quit SNA Server
	Manager.
	
	CAUSE
	=====
	
	SNA Server Manager loops when it releases objects from its shared memory list.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	If Dr. Watson is configured as the default debugger, an entry similar to the
	following may be appended to the Drwtsn32.log file:
	
	  
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  0006f6c0  6098d126  00000004 6098c984 01000004 MNGBASE!?GetPtr@CShrMemPool@@QAEPAXK@Z+0x13
	  0006f6c8  6098c984  01000004 011503f0 069b1854 MNGBASE!?MngGetPtr@@YGPAXKPAUMNGPROCESSGLOBAL@@@Z+0x26
	  0006f6fc  60984b65  ffffffff 00000000 003421c0 MNGBASE!?Remove@CShrMemList@@QAEKH@Z+0xe4
	  0006f7c8  609848ad  00000000 003421c0 00000580 MNGBASE!?OrphanManageData@CManage@@AAEXXZ+0x255
	  0006f7d8  6098483a  002467c0 000003d0 609840d4 MNGBASE!?ReleaseManageData@CManage@@AAEXXZ+0x5d
	  0006f7e4  609840d4  00000000 011503f0 01150000 MNGBASE!?QuietRelShare@CManage@@AAEXXZ+0x1a
	  0006f7f8  60988baa  011503f0 01023f28 00245e60 MNGBASE!?ProcTerminate@CManage@@SGXPAUMNGPROCESSGLOBAL@@@Z+0x44
	  0006f814  6770b0e9  6702e2e0 01023f28 00245e60 MNGBASE!?TermSharedManage@@YGXXZ+0xda
	  0006f818  6702e2e0  01023f28 00245e60 0006f878 SNAADMIN!?TermManage@CRootItem@@QAEXXZ+0x49
	  0006f82c  67034ce6  0000000d 00000000 00242220 SNAOLE!?DoVerb@CSnaApplication@@UAEKW4VerbCode@@J@Z+0x40
	  0006f848  01013393  00074af8 0000000d 00000000 SNAOLE!?DoVerb@XSnaObject@CSnaObject@@UAGKW4VerbCode@@J@Z+0x46
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
