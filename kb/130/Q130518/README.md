---
layout: page
title: "Q130518: User-Level Security Prevents Point and Print Functionality"
permalink: /kb/130/Q130518/
---

## Q130518: User-Level Security Prevents Point and Print Functionality

	Article: Q130518
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kberrmsg kbprint kbusage win95 kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using file and printer sharing for Microsoft Networks with
	user-level security enabled, a client computer may not be able to use the
	Windows 95 Point and Print functionality.
	
	When you attempt to drag a shared printer to the Printers folder, or drag a
	document to the icon for a shared printer from a Windows 95 client computer, you
	may receive one of the following error messages:
	
	  The file 'DMCOLOR.DLL' on Network printer driver files could not be found.
	
	  Setup could not find a file on the specified path. Please specify a new path,
	  and then click OK.
	
	  Resource type is not correct.
	
	The Point and Print feature should locate and copy all the necessary files
	automatically.
	
	CAUSE
	=====
	
	This issue can occur if user-level security is enabled on the Windows 95 server
	and the client does not have access rights to the Windows\System folder.
	
	RESOLUTION
	==========
	
	To resolve this issue, grant the client read-only access to the Windows\System
	folder on the Windows 95 server. To do this, follow these steps:
	
	1. Click Start, point to Programs, and then click Windows Explorer.
	
	2. Double-click the Windows folder.
	
	3. Right-click the System folder, then click Sharing.
	
	4. Click Add to add the client computer with read-only access rights.
	
	  NOTE: You can add The World with read-only access rights to add all clients at
	  once.
	
	MORE INFORMATION
	================
	
	When you share a printer using file and printer sharing for Microsoft Networks,
	a hidden share called Printer$ is created. The Printer$ share is the
	Windows\System folder on the Windows 95 server. The Printer$ share provides a
	source for the printer drivers for the shared printer.
	
	When a client uses Point and Print, the client computer is directed to the
	Printer$ share to obtain the necessary printer drivers during the Point and
	Print installation of the shared printer. When the server uses user-level
	security, a lack of rights to the Windows\System folder for the client computer
	prevents Point and Print from being able to read the files from the Printer$
	share.
	
	======================================================================
	Keywords          : kberrmsg kbprint kbusage win95 kbPrinting 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
