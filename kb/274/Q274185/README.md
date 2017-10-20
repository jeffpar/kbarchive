---
layout: page
title: "Q274185: LocalLU for Invoking TPs is Documented Incorrectly in CPI-C SDK"
permalink: /kb/274/Q274185/
---

## Q274185: LocalLU for Invoking TPs is Documented Incorrectly in CPI-C SDK

{% raw %}

	Article: Q274185
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbdocerr kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400Pre
	Last Modified: 21-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Server 4.0 CPI-C Programmer's Guide online Help incorrectly documents
	the "LocalLU" registry parameter for both the SNA Server Microsoft Windows NT
	client and SNA Server Microsoft Windows 95 and Microsoft Windows 98 client. The
	Windows NT client and Windows 9x client are documented as follows:
	
	  Location in Windows NT registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SNABase \Parameters
	  TPname:REG_SZ:localLUalias
	
	  Location in Windows 9x registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SNABase \Parameters
	  TPname:REG_SZ:localLUalias
	
	However, the correct syntax for the SNA Server Microsoft Windows NT client is as
	follows:
	
	  Location in Windows NT registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SNABase\Parameters
	  \Client <exename>:REG_SZ:localLUalias
	
	Note that EXENAME is the CPI-C program name (Win32 executable name). For example,
	to force the APING sample program to use a Local LU alias of "LOCAL", the
	registry setting should be specified as follows:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaBase\Parameters
	  \Client APING:REG_SZ:LOCAL
	
	Location in Windows 9x registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SnaBase\Parameters \Client
	  <exename>:REG_SZ:localLUalias
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
