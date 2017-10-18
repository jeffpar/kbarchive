---
layout: page
title: "Q183551: Unable to Locate Host Column Description File"
permalink: kb/183/Q183551/
---

## Q183551: Unable to Locate Host Column Description File

	Article: Q183551
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB Provider for AS/400 and VSAM, version 1.0, used with:
	   - Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	By default, a Host Column Description (HCD) file is placed in the ..\sna\system
	subdirectory when it is created using the Microsoft Management Console (MMC)
	administration snap-in tool. If the HCD file is subsequently moved to another
	directory, the admin tool cannot locate it. However, it is still located
	properly at run time according to the path and file name used in the data source
	definition.
	
	CAUSE
	=====
	
	
	WORKAROUND
	==========
	
	To work around this problem, keep the HCD file(s) in the ..\sna\system
	subdirectory. If it is necessary to leave the HCD file in the alternate
	subdirectory, it may be edited manually using a text editor instead of editing
	it with the administrative snap-in tool.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 4.0's OLE DB Provider
	for AS/400 and VSAM version 1.00.
	
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbOLEDBSearch kbOLEDBProvSearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
