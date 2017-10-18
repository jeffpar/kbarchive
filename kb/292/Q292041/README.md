---
layout: page
title: "Q292041: Heap Coruption in Windows NT RPCSS Service with DCOM Calls"
permalink: kb/292/Q292041/
---

## Q292041: Heap Coruption in Windows NT RPCSS Service with DCOM Calls

	Article: Q292041
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Rpcss.exe may generate an access violation (C0000005) in the RtlAllocateHeap
	function when activating or deactivating an ATL DCOM EXE server.
	
	CAUSE
	=====
	
	This problem can occur when the DCOM garbage collector frees some heap memory
	that is allocated for the static endpoint structure at a wrong address. This
	corrupts the heap free list for the process.
	
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
	
	  File name
	  ---------
	  Ole32.dll
	  Rpcss.exe
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods:
	
	- The heap corruption does not occur if you use dynamic endpoints in the DCOM
	  configuration.
	
	- Maintain DCOM alive by using a client connection. This avoids the DCOM
	  garbage collector cleanup.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400search kbWinNTS400 kbWinNTSEnt400SP6a
	Version           : :4.0,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
