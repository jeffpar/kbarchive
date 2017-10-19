---
layout: page
title: "Q294977: XADM: RPC Denial of Service Attack Stops Information Store"
permalink: /kb/294/Q294977/
---

## Q294977: XADM: RPC Denial of Service Attack Stops Information Store

	Article: Q294977
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server 5.5 information store may stop unexpectedly while under a
	remote procedure call (RPC) denial of service attack. A call stack that is
	similar to the following may be logged in the Drwtsn32.log:
	
	  
	
	  FramePtr RetAddr Param1 Param2 Param3 Function Name
	  04eef9b4 77cf3081 00178910 02960296 00000001 ESEBACK!HrRBackupEnd+0x27
	  04eef9cc 77d62aba 6fd12730 04eefa1c 00000001 0x77cf3081
	  04eefcd0 77d62dc6 00000000 00000000 0017da28 0x77d62aba
	  04eefce8 77cf2735 00000001 0016a370 0017da28 0x77d62dc6
	  04eefd1c 77cf26a2 6fd15046 0017da28 04eefdfc 0x77cf2735
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server 5.5 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: JET
	
	+---------------------------+
	| File name   | Version     | 
	+---------------------------+
	| Eseback.dll | 5.5.2654.51 | 
	+---------------------------+
	
	NOTE: Because of file dependencies, this fix requires Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  English (US):
	  DownloadDownload Q304062engi386.exe now
	
	  French:
	  DownloadDownload Q304062frni386.exe now
	
	  German:
	  DownloadDownload Q304062geri386.exe now
	
	  Japanese:
	  DownloadDownload Q304062jpni386.exe now
	
	These files contain the following files:
	
	  
	
	  Dbserver.sch 
	  Dcprods.cat 
	  Dsamain.exe 
	  Ems_rid.dll 
	  Emsmta.exe 
	  Eseback.dll 
	  Infoplog.cfg 
	  Mad.exe 
	  Mtacheck.exe 
	  Mtamsg.dll 
	  Mtaperf.dll 
	  P2.xv2 
	  P42.tpl 
	  P772.tpl 
	  Store.exe 
	  X400om.dll
	
	Release Date: July 24, 2001
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	For additional information about the fixes that are included in this package,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q304062 XGEN: Exchange Server 5.5 Post-SP4 RPC Fixes
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
