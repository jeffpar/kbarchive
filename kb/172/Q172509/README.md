---
layout: page
title: "Q172509: Explorer Erroneously Generates Event 560 - Write Failures"
permalink: /kb/172/Q172509/
---

## Q172509: Explorer Erroneously Generates Event 560 - Write Failures

{% raw %}

	Article: Q172509
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Explorer to view directories and files, a Security Audit Failure
	Event 560 may be generated. A typical Security Event might be:
	
	  8/5/97   8:11:45 PM  Security Failure Audit
	  Object Access  560
	  <USERNAME>
	  <MACHINE NAME>
	  Object Open:
	     Object Server: Security
	     Object Type:   File
	     Object Name:   <FILE PATH\NAME>
	     New Handle ID: -
	     Operation ID:  {0,195446}
	     Process ID: 2156888096
	     Primary User Name:   <USERNAME>
	     Primary Domain:   <DOMAIN NAME>
	     Primary Logon ID: (0x0,0x2EA46)
	     Client User Name: -
	     Client Domain: -
	     Client Logon ID:  -
	     Accesses    SYNCHRONIZE
	        ReadAttributes
	        WriteAttributes
	
	CAUSE
	=====
	
	The local user having only Read and Execute (RX) Permissions may cause this when
	the files are being audited for Write failures.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Use File Manager instead of Explorer and these errors will not be generated.
	
	- Do not audit write failures on files that only have Read and Execute access.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: winnt prodnt explore exploring open view winfile lock Secevent viewer detail NtfsDisableLastAccessUpdate
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	
	=============================================================================
	

{% endraw %}
