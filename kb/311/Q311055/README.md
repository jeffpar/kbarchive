---
layout: page
title: "Q311055: Programs That Call DsGetDcName() on the SRP May Not Work"
permalink: kb/311/Q311055/
---

## Q311055: Programs That Call DsGetDcName() on the SRP May Not Work

	Article: Q311055
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6a
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP6a 
	- Microsoft Windows NT Workstation version 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing the Security Rollup Package (SRP), some Active Directory
	Service Interfaces (ADSI) code may no longer work if the Active Directory Client
	Extensions for Windows NT 4.0 are not installed. You may receive error messages
	such as:
	
	  Microsoft VBScript runtime error '800a0046' Permission denied: 'GetObject'
	
	For additional information about the SRP, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q299444 Post-Windows NT 4.0 Service Pack 6a Security Rollup Package (SRP)
	
	CAUSE
	=====
	
	The Dnsapi.dll file was not included with the ADSI add-on for Windows NT 4.0.
	This has been corrected with the ADSI client that is included with the Active
	Directory Client Extensions for Windows NT 4.0.
	
	
	RESOLUTION
	==========
	
	Method 1
	--------
	
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
	
	  Date         Time   Version        Size     File name
	  ------------------------------------------------------
	  08-Dec-2000  11:01  5.0.2195.2649  135,440  Dnsapi.dll
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	Method 2
	--------
	
	Instead of installing the hotfix from method 1, you can also resolve this problem
	by installing the Active Directory Client Extensions for Windows NT 4.0 from the
	following Microsoft Web site:
	
	  http://www.microsoft.com/ntworkstation/downloads/Other/adclient.asp
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbWinNTW400SP6a
	Version           : :4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
