---
layout: page
title: "Q235723: SNA Windows 3.x Client Displays Warning 956, Won't Unload"
permalink: /kb/235/Q235723/
---

## Q235723: SNA Windows 3.x Client Displays Warning 956, Won't Unload

	Article: Q235723
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0SP1,4.0SP2,4.0SP3
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0SP1, 4.0SP2, 4.0SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After running one or more 16-bit Windows APPC applications on top of the SNA
	Windows 3.x client (on a Windows 95 workstation), the Wnap.exe process may
	display the following error message even though all SNA client applications have
	ended:
	
	  SNA Server Messager
	
	  SNA Server Warning 956
	  SNA Base cannot be terminated while its services are being used.
	
	This problem couldn't be reproduced when running the SNA Windows 3.x client on
	Windows NT. Traces reveal that the APPC applications are not calling
	WinAPPCCleanup prior to termination, contributing to the problem.
	
	CAUSE
	=====
	
	If an APPC application fails to call WinAPPCCleanup before the process
	terminates, the SNA Windows 3.x client software relies on the operating system
	to notify Wnap.exe that the Win16 process has ended. However, when running on
	Windows 95, this was not occurring properly.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	+-------------------------------+
	| File name | Date     | Time   | 
	+-------------------------------+
	| Wnap.exe  | 05/20/99 | 12:06p | 
	+-------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	For all APPC applications, ensure that they properly call WinAPPCStartup when
	the APPC process first starts, and WinAPPCCleanup before the process ends.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0,4.0SP1,4.0SP2,4.0SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
