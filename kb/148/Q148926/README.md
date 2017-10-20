---
layout: page
title: "Q148926: Mfc30.dll File Required to Submit E-forms on MSN"
permalink: /kb/148/Q148926/
---

## Q148926: Mfc30.dll File Required to Submit E-forms on MSN

{% raw %}

	Article: Q148926
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.0,1.05,1.2,1.3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.0, 1.05, 1.2, 1.3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you submit an e-form on MSN, The Microsoft Network, you may receive the
	following error message:
	
	  Error Starting Program
	  A required .DLL file, C:\WINDOWS\SYSTEM\MFC30.DLL, was not found.
	
	CAUSE
	=====
	
	The Mfc30.dll file is missing. Microsoft Exchange and MSN require this file to
	submit e-forms on MSN.
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods:
	
	- Reinstall Windows 95 using the Custom option.
	
	- Extract the Mfc30.dll file from your original Windows 95 disks or CD-ROM to
	  the Windows\System folder. The Mfc30.dll file is located in the Win95_02.cab
	  cabinet file.
	
	  For information about using the Extract tool, type "extract" (without
	  quotation marks) at a command prompt, or see the following article in the
	  Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	Additional query words: msn
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN130 kbMSN105 kbMSN120
	Version           : WINDOWS:1.0,1.05,1.2,1.3
	
	=============================================================================
	

{% endraw %}
