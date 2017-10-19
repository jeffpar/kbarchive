---
layout: page
title: "Q142483: Encarta 96 Updates: Unexpected Error When Integrating File"
permalink: /kb/142/Q142483/
---

## Q142483: Encarta 96 Updates: Unexpected Error When Integrating File

	Article: Q142483
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 07-MAY-1999
	
	1996
	WINDOWS
	kbusage kbenv kbmm kbprb kbtshoot kberrmsg kbfaq
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 96 Encyclopedia for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to integrate a downloaded Encarta Monthly Update .eyb (Yearbook
	Builder) file, you receive the following error message:
	
	  Unexpected error occurred while unpacking the file c:\program files\microsoft
	  reference\encarta 96 encyc\yearbook\*.eyb
	
	CAUSE
	=====
	
	This error occurs when a Yearbook integration has previously failed. The
	previous attempt created a .ybk (Yearbook) file stub in the Windows folder
	
	RESOLUTION
	==========
	
	To resolve this problem, do the following:
	
	1. Search your hard drive for *.ybk files. For more information about searching
	  for files in Windows, see your Windows printed documentation or online Help.
	
	2. Delete any .ybk files not in the Encarta\yearbook folder.
	
	3. Restart Encarta and click Integrate.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the 1996 edition of Encarta
	Encyclopedia for Windows.
	
	Additional query words: multi media multimedia multi-media mmtitles errors downloads online on-line integrated
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1996
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
