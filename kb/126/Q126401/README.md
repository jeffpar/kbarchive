---
layout: page
title: "Q126401: Err Msg: &quot;Not Enough Server Storage is Available to Process...&quot;"
permalink: kb/126/Q126401/
---

## Q126401: Err Msg: &quot;Not Enough Server Storage is Available to Process...&quot;

	Article: Q126401
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While running Windows NT, the following error message appears:
	
	  Not enough server storage is available to process this command.
	
	CAUSE
	=====
	
	This indicates that Windows NT does not have enough paged pool memory available
	to process a command. This can happen when the PagedPoolSize is either set too
	small or when an application does not re-allocate memory correctly.
	
	Insufficient PagedPoolSize may be due to the fact that the INITIAL.INF file that
	shipped with Windows NT contains the following lines:
	
	Ifstr(i) $(STF_PRODUCT) == "LanmanNT"
	Ifstr(i) $(!STF_DOMAIN_ROLE) == "DC"
	
	  Debug-Output "SETUP.INF: AddPdcMachineAccount for PDC of new domain..."
	  LibraryProcedure STATUS, $(!LIBHANDLE),
	  AddPdcMachineAccount $(!STF_COMPUTERNAME)
	  Debug-Output "SETUP.INF: AddPdcMachineAccount returned: "$(STATUS)
	
	Endif
	shell "REGISTRY.INF" MakeQuotaEntries 48 24 Endif
	
	The call to REGISTRY.INF only happens for Windows NT servers, not workstations.
	The parameters passed to REGISTRY.INF are PagedPoolSize (48) and
	RegistrySizeLimit (24). The PagedPoolSize value over-rides the value calculated
	at bootup based on physical memory. The algorithm for calculating PagedPoolSize
	at bootup produces values approximating the physical memory size of the computer
	up to a maximum of 192 megabytes.
	
	For additional information on this algorithm, please see the following article(s)
	in the Microsoft Knowledge Base:
	
	  Q126402: PagedPoolSize and NonPagedPoolSize Values in Windows NT 3.5
	
	WORKAROUND
	==========
	
	This problem can be worked around by using the registry editor to zero out the
	PagedPoolSize parameter.
	
	WARNING: Using the Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of the Registry Editor
	can be solved. Use this tool at your own risk.
	
	The page pooled memory management parameters are located in:
	
	  HKEY_LOCAL_MACHINE
	    \SYSTEM
	      \CurrentControlSet
	        \Control
	          \Session Manager
	            \Memory Management
	
	If the error is due to an application not re-allocating memory correctly, normal
	troubleshooting using tools such as Performance Monitor, or PMON.EXE (from the
	Windows NT Resource Kit) should be employed to isolate the problem component.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Advanced Server
	version 3.1 and Windows NT Server version 3.5. This problem was corrected in
	Windows NT version 3.51.
	
	Additional query words: prodnt 3.10 poolcalc
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : WinNT:3.1,3.5,3.51,4.0
	
	=============================================================================
	
