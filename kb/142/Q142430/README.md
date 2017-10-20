---
layout: page
title: "Q142430: Cannot View Online Statement"
permalink: /kb/142/Q142430/
---

## Q142430: Cannot View Online Statement

{% raw %}

	Article: Q142430
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.0,1.05,1.2,1.3,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.0, 1.05, 1.2, 1.3, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to view your online statement or other billing option, you may
	receive the following error message:
	
	  Cannot open shortcuts. Please try again later.
	
	CAUSE
	=====
	
	This behavior can occur if the Onlstmt.exe file is missing from the Program
	Files\The Microsoft Network folder.
	
	RESOLUTION
	==========
	
	If the Onlstmt.exe file is missing, extract it from the Windows 95 CD-ROM by
	following these steps:
	
	1. Click Start, Point to Programs and then click MS-DOS Prompt.
	
	2. Change to the drive and folder that contains the Windows 95 CD-ROM.
	
	3. Type the following (from a DOS prompt in the same folder as the Windows 95
	  CAB files):
	
	  "EXTRACT WIN95_07.CAB ONLSTMT.EXE /L C:\PROGRA~1\THEMIC~1" (without the
	  quotation marks)
	
	This will extract the onlstmt.exe file to the Program Files\The Microsoft Network
	folder.
	
	Additional query words: msn
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN105 kbMSN120
	Version           : WINDOWS:1.0,1.05,1.2,1.3,2.0
	
	=============================================================================
	

{% endraw %}
