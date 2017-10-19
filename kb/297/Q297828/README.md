---
layout: page
title: "Q297828: XADM: ESEPERF!CollectPerformanceData Causes Winlogon to Crash"
permalink: /kb/297/Q297828/
---

## Q297828: XADM: ESEPERF!CollectPerformanceData Causes Winlogon to Crash

	Article: Q297828
	Product(s): Microsoft Exchange
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a,5.5,5.5 SP1,5.5 SP2,5.5 S
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use Performance Monitor to collect data from the Database performance
	object on Windows NT 4.0-based servers that are running Exchange Server 5.5, you
	may receive an error message on a blue screen.
	
	CAUSE
	=====
	
	Windows NT 4.0 uses the Winlogon.exe process to collect performance data for
	programs that are runnning on the server. This problem can occur if a problem in
	Eseperf.dll, a dynamic link library (DLL) that Winlogon.exe uses to collect
	performance data from the Exchange Server Extensiable Storeage Engine (ESE),
	causes an access violation in the Winlogon process. Because Winlogon is
	considered a critical service for Windows NT 4.0, the server displays an error
	message on a blue screen when this service becomes unavailable.
	
	This problem only occurs on computers that are running Windows NT 4.0. Microsoft
	Windows 2000 is not dependent on Winlogon to collect performance-related data,
	so Windows 2000 does not display an error message on a blue screen.
	
	
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
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Eseperf.dll | 5.5.2655.4 | 
	+--------------------------+
	
	NOTE: Because of file dependencies, this fix requires Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a,5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
