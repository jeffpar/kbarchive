---
layout: page
title: "Q117531: SFM w/ Olicom Token Ring 16/4 and Intel TokenExpress 16/4"
permalink: kb/117/Q117531/
---

## Q117531: SFM w/ Olicom Token Ring 16/4 and Intel TokenExpress 16/4

	Article: Q117531
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to configure Services for Macintosh on an Olicom 16/4
	Token-Ring Adapter (also known as an Intel TokenExpress 16/4) from Windows NT
	Advanced Server, the following error message appears:
	
	  Apple Talk Router Configuration
	  The Apple Talk Protocol Registry Parameters cannot be read
	  One or more parameters might be missing or contain invalid values.
	
	Upon reboot, the following errors appear in the Event Viewer:
	
	  Event ID: 13 Source: Apple Talk Type: Error
	  Description: No adapter is configured to be the default adapter.
	
	  Event ID: 7000 Source: Service Control Manager Type: Error
	  Description: The Apple Talk Protocol service failed to start due to the
	  following error: A device attached to the system is not functioning.
	
	  Event ID: 7001 Source: Service Control Manager Type: Error
	  Description: The File Server for Macintosh service depends on the Apple Talk
	  Protocol service which failed to start...
	
	  Event ID: 7001 Source: Service Control Manager Type: Error
	  Description: The Print Server for Macintosh service depends on...
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1.This problem was corrected in Windows NT version
	3.5.
	
	
	The Olicom product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: sfm prodnt hdwr ntmac ntnetserv ntadvsrv err msg
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
