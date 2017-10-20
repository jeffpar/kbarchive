---
layout: page
title: "Q172152: Unable to read the Appletalk Registry Section"
permalink: /kb/172/Q172152/
---

## Q172152: Unable to read the Appletalk Registry Section

{% raw %}

	Article: Q172152
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install Services for Macintosh on a Windows NT Server, the
	following error message may occur:
	
	  Unable to read the Appletalk Registry Section. Please reinstall Appletalk on
	  this machine.
	
	CAUSE
	=====
	
	The network interface card (NIC) driver may not contain a section for media type
	descriptor that is required for Services for Macintosh and the AppleTalk
	protocol.
	
	If Services for Macintosh is already installed, the registry entries may be
	corrupt as a result.
	
	RESOLUTION
	==========
	
	Update the NIC driver with the most recent version of Windows NT.
	
	It may also be necessary to remove and reinstall Services for Macintosh after
	updating the NIC driver. Some or all of the following registry entries may also
	have to be removed before reinstalling the service:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	  HKey_Local_Machine\System\CurrentControlSet\Services
	     \AppleTalk
	     \MacFile
	     \MacPrint
	     \MacSrv
	
	If the Remote Access Service (RAS) is installed, it may be necessary to remove
	the following registry key:
	
	  HKey_Local_Machine\System\CurrentControlSet\Services
	     \asyncmac*
	
	Additional query words: prodnt sfm macfile
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
