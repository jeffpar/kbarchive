---
layout: page
title: "Q164362: Removing a Printer in Print Manager Does Not Remove All Entries"
permalink: /kb/164/Q164362/
---

## Q164362: Removing a Printer in Print Manager Does Not Remove All Entries

{% raw %}

	Article: Q164362
	Product(s): Microsoft Windows NT
	Version(s): WINNT:3.51 4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbui
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft File and Print Services for NetWare versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a logical printer is removed under the Printers folder (Print Manager in
	Windows NT 3.51) that has also been assigned as a print server to a
	NetwareCompatiblePServer port under File and Print services for NetWare (FPNW),
	Print Servers in Server Manager for Domains, registry entries pointing to the
	print server will remain after the printer has been deleted in the Printers
	folder (or Print Manager).
	
	MORE INFORMATION
	================
	
	Logical printers are defined in the registry under the following key:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\FPNW\Bindery\Type03
	
	Print servers are defined in the registry under the following key:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\FPNW\Bindery\Type07
	
	When a logical printer is removed in the Printers folder or Print Manager, the
	entries under the Type07 key remain. Entries under the Type07 key are removed
	when the print server information is removed.
	
	Additional query words: prodnt IPX
	======================================================================
	Keywords          : kbenv kbnetwork kbui 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351 kbFPNW400
	Version           : WINNT:3.51 4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
