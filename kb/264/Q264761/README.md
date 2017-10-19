---
layout: page
title: "Q264761: FP98: Server Error When You Create a Web"
permalink: /kb/264/Q264761/
---

## Q264761: FP98: Server Error When You Create a Web

	Article: Q264761
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 18-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to create a Microsoft FrontPage web, you may receive an error
	message similar to the following:
	
	  Server error: creating web <WEB NAME>
	  C:\Program Files\Microsoft
	  FrontPage\version3.0\isapi\_vti_bin\_vti_adm\admin.dll is not a file, please
	  check frontpage root setting.
	
	CAUSE
	=====
	
	This behavior can occur if the permissions for the admin.dll file are not
	correct.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Click Start, point to Find, and then click "Files or Folders".
	
	2. Type "admin.dll" (without the quotation marks) in the "Search for files or
	  folders named" box.
	
	3. In the "Look in" box, select the drive on which Microsoft Windows NT is
	  located, and then click Search Now.
	
	4. Right-click admin.dll.
	
	5. Click Properties on the shortcut menu.
	
	6. Click the Security tab, and then click the Permissions button.
	
	7. In the Name box, check to ensure that the EVERYONE, or at least INTERACTIVE,
	  NETWORK, and SYSTEM, is listed.
	
	8. If any of the names listed in step 7 are not present, click Add.
	
	9. Select INTERACTIVE (if required), and then click Add.
	
	10. Repeat step 9 for NETWORK and SYSTEM, and then click OK.
	
	11. In the Name box, click INTERACTIVE.
	
	12. Under Allow, click to select the Read check box.
	
	13. Repeat steps 11 and 12 for NETWORK.
	
	14. In the Name box, click SYSTEM.
	
	15. Ensure that all check boxes are selected under Allow, and then click OK.
	
	Additional query words: ocsso front page
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch _IKkbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
