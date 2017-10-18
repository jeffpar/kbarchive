---
layout: page
title: "Q313608: HOWTO: Replace a DLL with Its Checked Version for Testing"
permalink: kb/313/Q313608/
---

## Q313608: HOWTO: Replace a DLL with Its Checked Version for Testing

	Article: Q313608
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to replace a dynamic-link library (DLL) with its
	checked version.
	
	MORE INFORMATION
	================
	
	The checked version of a DLL contains debug statements that are removed in the
	release version of a DLL. You can use these debug statements to isolate a
	problem in the DLL while you are debugging.
	
	To replace a DLL with its checked version, follow these steps:
	
	1. Check whether the DLL that the Technical Support personnel sent is the
	  compressed version or the expanded version.
	
	2. If the DLL is the expanded version, you can use the DLL as is.
	
	  If the DLL is the compressed version, use the Resource Kit utility
	  (Expand.exe) to uncompress the DLL. Type the following command at a command
	  prompt:
	
	  "expand.exe <compressed dllname> <expanded name>" (without the
	  quotation marks)
	
	3. Log on to the system in safe mode to work around the Microsoft Windows 2000
	  File Protection feature.
	
	4. Rename the existent DLL.
	
	5. Copy the checked version of the DLL to the same folder. You can obtain the
	  checked version of a DLL from Microsoft Technical Support. For more
	  information, refer to the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx
	
	6. Reboot the system in normal mode.
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbinfo
	
	=============================================================================
	
