---
layout: page
title: "Q85620: Invalid Error When Increasing Size of Permanent Swap File"
permalink: /kb/085/Q85620/
---

## Q85620: Invalid Error When Increasing Size of Permanent Swap File

	Article: Q85620
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you increase the size of an existing permanent swap file in Microsoft
	Windows 3.1, the following message may be displayed:
	
	  Windows will not use more than the virtual memory specified by the
	  Recommended Size. Are you sure you want to create a larger swap file?
	
	This message is displayed even if the swap file size requested is less than the
	maximum size usable by Windows. The message will not affect Windows use of the
	new swap file.
	
	MORE INFORMATION
	================
	
	If you modify the permanent swap file size to be more than the recommended size
	but less than the maximum size, the above message will be displayed. Windows
	will still increase the permanent swap file size.
	
	Additional query words: 3.10 3.1 3.11 swap file
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
