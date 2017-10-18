---
layout: page
title: "Q268086: Windows NT MA Not Supported for Connecting to Windows 2000"
permalink: kb/268/Q268086/
---

## Q268086: Windows NT MA Not Supported for Connecting to Windows 2000

	Article: Q268086
	Product(s): Microsoft Windows NT
	Version(s): 2.1,2.2
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, versions 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows NT Management Agent is not supported for connecting to
	Microsoft Windows 2000 Active Directory.
	
	The supported method for connecting to Windows 2000 Active Directory is the
	Active Directory Management Agent, which is supplied with Microsoft
	Metadirectory Services version 2.2.
	
	MORE INFORMATION
	================
	
	The limitations of the Windows NT Management Agent include:
	
	- The Windows NT Management Agent has no knowledge of the Universal Groups used
	  in Windows 2000 Native Mode domains.
	
	- The Windows NT Management Agent cannot handle the numerous user attributes
	  that are used in Windows 2000.
	
	- The Windows NT Management Agent does not support delta operations, requiring
	  that a full discovery be performed each time.
	
	- Microsoft does not support use of the Windows NT 4.0 Management Agent for
	  connecting to a Windows 2000 Active Directory domain.
	
	Additional query words: Microsoft Metadirectory Services via zoomit MMS
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbMMSSearch kbMMS210 kbMMS220
	Version           : :2.1,2.2
	Issue type        : kbinfo
	
	=============================================================================
	
