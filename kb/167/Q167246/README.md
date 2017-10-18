---
layout: page
title: "Q167246: XCLN: DCOM95 Causes Invalid Page Fault in Awfxcg32.dll"
permalink: kb/167/Q167246/
---

## Q167246: XCLN: DCOM95 Causes Invalid Page Fault in Awfxcg32.dll

	Article: Q167246
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Client for Windows 95, version 4.0 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install DCOM95 that ships with Visual C++ 5.0, Visual Basic 5.0, and
	Visual Studio 97, Microsoft Outlook (and Microsoft Exchange) stop with the
	following message when exiting:
	
	  OUTLOOK caused an invalid page fault in module AWFXCG32.DLL at
	  0137:7f7ef389.
	  Registers:
	  EAX=010f04d8 CS=0137 EIP=7f7ef389 EFLGS=00010206
	  EBX=815df4f4 SS=013f ESP=0062fb58 EBP=0062fd34
	  ECX=0000000c DS=013f ESI=bff7eeed FS=25cf
	  EDX=815d4878 ES=013f EDI=00000000 GS=0000
	  Bytes at CS:EIP:
	  8b 08 85 c9 8d 51 ff 89 10 74 1a e8 e3 96 ff ff
	  Stack dump:
	  0062fd34 7f7e0000 815d48ac 815df4f4 00400850 bff7b9b5 7f7e0000 00000000
	  00000000 7f7e0000 815d48ac 815df4f4 00000000 00000091 815df4f4 c105cf34
	
	MORE INFORMATION
	================
	
	DCOM stands for Distributed Component Object Model. It is essentially a new OLE.
	It replaces all of your old OLE files. It can be removed under the Add/Remove
	Programs in Control Panel. This will fix the problem.
	
	
	This problem has only been seen to occur with MSFAX installed.
	
	For more information about correcting this problem in Outlook 97, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q175314 OL97: Outlook Caused an Invalid Page Fault in AWFXCG32.DLL
	
	
	RESOLUTION
	==========
	
	To resolve this problem, get the latest version of DCOM.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of Microsoft
	Exchange. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	
