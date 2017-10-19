---
layout: page
title: "Q122702: Using the System Account as a Service in Windows NT 3.5"
permalink: /kb/122/Q122702/
---

## Q122702: Using the System Account as a Service in Windows NT 3.5

	Article: Q122702
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT allows a service to use either a system account or a user- specific
	account to access resources on a local or remote computer. After you upgrade a
	computer from Windows NT version 3.1 to Windows NT version 3.5, 3.51 or 4.0, the
	service may fail or an "Access Denied" error message may appear if the service
	is using the system account.
	
	MORE INFORMATION
	================
	
	If a service is using the system account to access resources, the service logs
	on with a set of "null credentials." In Windows NT version 3.1, system accounts
	had general access to shares. However, in Windows NT version 3.5, 3.51 and 4.0,
	there is a Server service registry parameter that enables tighter security by
	allowing you to specify by name which shares (and pipes) the system account can
	access.
	
	The Registry parameter is "RestrictNullSessAccess" (without the quotation marks)
	and it defaults to TRUE. Two other parameters, "NullSessionPipes" and
	"NullSessionShares" (without quotation marks) allow you to specify lists of
	share names and pipe names that can be accessed by the system account. In other
	words, by default, the only shares your client's service can access are those
	listed in the "NullSessionShares" parameter value. To change this behavior, the
	administrator can either set "RestrictNullSessAccess" to FALSE, or add the names
	of shares the service needs access to in the "NullSessionShares" parameter value
	on servers where those shares exist.
	
	To disable the "RestrictNullSessAccess" entry, modify the Registry by doing the
	following:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start the Registry Editor (REGEDT32.EXE)
	
	2. From the \HKEY_LOCAL_MACHINE subkey, go to the key:
	
	     \SYSTEM
	       \CurrentControlSet
	         \Services
	           \LanmanServer
	             \Parameters
	
	3. From the Edit menu, select Add Value.
	
	4. For the Value Name, enter RestrictNullSessAccess. For Data Type, select
	  REG_DWORD and choose OK. In DWORD Editor, enter 0 for Data. Choose OK.
	
	5. Exit Registry Editor and restart Windows NT.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
