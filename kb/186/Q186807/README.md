---
layout: page
title: "Q186807: How to Reinstall Certificate Server and Keep the CA"
permalink: /kb/186/Q186807/
---

## Q186807: How to Reinstall Certificate Server and Keep the CA

	Article: Q186807
	Product(s): Internet Information Server
	Version(s): WINNT:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Certificate Server version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to remove and reinstall Microsoft Certificate Server
	version 1.0 while retaining the original certificate authority (CA).
	
	MORE INFORMATION
	================
	
	To remove and reinstall Microsoft Certificate Server version 1.0, follow these
	steps:
	
	1. From the Start menu, point to Programs, and point to Windows NT 4.0 Option
	  Pack.
	
	2. Click Windows NT 4.0 Option Pack Setup.
	
	3. Click Next, click Add/Remove, click to deselect Certificate Server, and then
	  click Next again.
	
	4. Click Finish and restart your computer.
	
	5. Repeat steps 1 and 2.
	
	6. Click Next, click Add/Remove, click to select Certificate Server, and then
	  click Next again.
	
	7. Type the same location for the Shared Folder that was used on the original
	  installation of Certificate Server.
	
	8. Click to select Show Advanced Configuration and click Next.
	
	9. Click to select Use Existing Keys and select the original CA from the list.
	
	  NOTE: The CA will normally be named the same as the computer.
	
	10. Click Next. (You may alter the CA Description at this point, but none of the
	  other information.)
	
	11. Click Next and click Finish.
	
	12. From the Start menu, point to Settings, and click Control Panel.
	
	13. Double-click Services, click Certificate Server, and then click Start.
	
	Additional query words: certsrv root key secure certificate ca
	
	======================================================================
	Keywords          :  
	Technology        : kbCertServSearch kbZNotKeyword3 kbCertServ100
	Version           : WINNT:1.0
	Issue type        : kbhowto
	
	=============================================================================
	
