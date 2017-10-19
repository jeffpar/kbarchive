---
layout: page
title: "Q238185: Unnecessary Security Failure Audit (Event 577)"
permalink: /kb/238/Q238185/
---

## Q238185: Unnecessary Security Failure Audit (Event 577)

	Article: Q238185
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbWinNT400PreSP7Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a Remote Procedure Call-based (RPC-based) client/server
	program, the following entry may be logged in the Security event log:
	
	  Event ID: 577 Source: Security Type: Failure Audit Category: Privilege Use
	  User: <User> Computer: <Computer>
	  Text:
	  Privileged Service Called:
	  Server: NT Local Security Authority / Authentication Service
	  Service: LsaRegisterLogonProcess()
	  Primary User Name: SYSTEM
	  Primary Domain: NT AUTHORITY
	  Primary Logon ID: (0x0,0x3E7)
	  Client User Name: <User>
	  Client Domain: <Domain>
	  Client Logon ID: (0x0,0x1234)
	  Privileges: SeTcbPrivilege
	
	CAUSE
	=====
	
	The security audit occurs while the RPC subsystem acquires the user's
	credentials for authenticated RPC. There are two ways for the code to do this.
	If the first method does not succeed, the second method is tried. In this case,
	the first method (calling the local security authority [LSA] directly) does not
	succeed and generates an Audit Failure entry.
	
	Note that this audit does not indicate a security breach; you can safely ignore
	it.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to systems
	that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Size    File name     Platform
	  --------------------------------------------------
	  05-Jan-2000  02:55  36,112  Ntlmssps.dll  Intel
	  05-Jan-2000  02:55  59,664  Security.dll  Intel
	  05-Jan-2000  02:47  60,176  Ntlmssps.dll  Alpha
	  05-Jan-2000  02:47  99,600  Security.dll  Alpha
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem was first observed in connecting to Microsoft SQL Server 6.5 with
	ISQL/W by using Multi-protocol as a transport. Failure auditing of "User of User
	Rights" must be active to receive this Security Audit event.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
