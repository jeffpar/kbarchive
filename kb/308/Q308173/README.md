---
layout: page
title: "Q308173: FrontPage Server Extensions Are Not Installed with IIS 5.1"
permalink: kb/308/Q308173/
---

## Q308173: FrontPage Server Extensions Are Not Installed with IIS 5.1

	Article: Q308173
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install IIS 5.1 on FAT32 partitioned hard disk drive, Microsoft
	FrontPage Server Extensions are not installed by default with IIS 5.1.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When you install IIS 5.1 on FAT32 partitioned disk drive, the following
	FrontPage Server Extensions folders are not installed for security reasons:
	
	  _vti_bin
	  images
	  _private
	  _vti_cnf
	  _vti_pvt
	  _vti_script
	  _vti_txt
	
	If you want to install the FrontPage Server Extensions and the associated folders
	when you install IIS 5.1 on FAT32 partitioned hard disk drive, you must select
	the FrontPage Server Extensions component when you are installing IIS 5.1. To do
	this, follow these steps:
	
	1. In Control Panel, double-click Add/Remove Programs.
	
	2. Click Add/Remove Windows Components.
	
	3. In the Components: list, click to highlight IIS, and then click Details.
	
	4. Click to check the FrontPage 2000 Server Extensions check box.
	
	5. Click OK.
	
	6. Click Next, and then click Finish.
	
	Additional query words: IIS5.1 iis 5
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis510
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
