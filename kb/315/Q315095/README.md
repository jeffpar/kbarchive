---
layout: page
title: "Q315095: FIX: WMI Queries Stop Responding on Host Integration Server 2000"
permalink: kb/315/Q315095/
---

## Q315095: FIX: WMI Queries Stop Responding on Host Integration Server 2000

	Article: Q315095
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhis2000 kbhis2000bug
	Last Modified: 17-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If multiple instances of a Windows Management Instrumentation (WMI) application
	(for example Wbemtest.exe) are configured to repeatedly issue WMI queries
	against the same Host Integration Server 2000 (HIS) server, after a while, one
	or more of the instances of Wbemtest stops responding.
	
	When this problem occurs, all of the applications that use the HIS WMI provider
	will fail to return status information and will not function as expected.
	
	CAUSE
	=====
	
	The Host Integration Server 2000 WMI provider encouters a resource deadlock that
	causes all current and later WMI queries to stop responding.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Host Integration Server 2000 Service Pack that contains this fix.
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date         Time      File name
	  -------------------------------------
	  10-Oct-2001  08:37     Wmicomti.dll
	  10-Oct-2001  08:37     Wmihis.dll
	  10-Oct-2001  08:37     Wmisna.dll
	  10-Oct-2001  19:34     Wmisnastatus.dll
	  10-Oct-2001  08:37     Wmisnatrace.dll
	  01-Oct-2001  12:25     Wmicomti.mof
	  01-Oct-2001  12:25     Wmihis.mof
	  05-Oct-2001  10:08     Wmisna.mof
	  11-Oct-2001  12:16     Wmisnastatus.mof
	  01-Oct-2001  12:26     Wmisnatrace.mof
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	
	WORKAROUND
	==========
	
	The only reliable workaround found for this problem is to restart the Windows
	operating system.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q291942 Simultaneous Queries with WMI SNA Provider May Cause System to 'Hang'
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhis2000 kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
