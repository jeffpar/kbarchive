---
layout: page
title: "Q164036: How To Force 128-Bit SSL Connections With IIS 3.0"
permalink: kb/164/Q164036/
---

## Q164036: How To Force 128-Bit SSL Connections With IIS 3.0

	Article: Q164036
	Product(s): Internet Information Server
	Version(s): winnt:3.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	Internet Information Server 3.0 has the capability to force a 128-bit SSL
	connection and reject browsers that attempt to negotiate at a lower encryption
	level. This feature maximizes the security on connection between the client and
	server by forcing the highest possible encryption level.
	
	This feature is undocumented and unsupported at this time. This feature has not
	been regression tested; usage in a production environment may cause
	unpredictable results.
	
	MORE INFORMATION
	================
	
	The US or Canada version of Schannel.dll must be present on the IIS computer for
	this feature to work. This DLL is included in the US and Canada versions of
	Service Pack 2 for Windows NT 4.0. For reference, the version of the DLL should
	be 4.72.1429.1 or higher. The description should be "US/Canada Only, Not for
	Export."
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	The following two registry entries will reject any Web browser that does not
	support 128-bit SSL:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders
	  \SCHANNEL\Ciphers\NULL 0/128
	
	Change the value for ENABLED to 0 (HEX) Default Value: 30 (HEX)
	
	NOTE: This registry entry will default to 0 in Service Pack 3 for Windows NT.
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders
	  \SCHANNEL\Ciphers\RC4 40/128
	
	Change the value for ENABLED to 10000 (HEX)
	Default Value: ffffffff (HEX)
	
	After you make the above changes on the IIS computer, the computer MUST be
	restarted to reinitialize Schannel.dll. The server will now reject any non-
	128-bit clients at the beginning of the SSL negotiation. The browser will simply
	display an error message equivalent to "Connection refused" or "Error in
	security library." The messages will vary because the connection is dropped
	suddenly during the negotiation phase.
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbiisSearch kbiis300
	Version           : winnt:3.0
	Issue type        : kbhowto
	
	=============================================================================
	
