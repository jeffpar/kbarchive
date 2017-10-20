---
layout: page
title: "Q85377: Windows Err Msg: Error Reading from Drive X"
permalink: /kb/085/Q85377/
---

## Q85377: Windows Err Msg: Error Reading from Drive X

{% raw %}

	Article: Q85377
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to execute an MS-DOS application, Microsoft Windows version 3.1
	may display one of the following error messages:
	
	  Error Reading from Drive X
	
	  -or-
	
	  System Error
	
	  Cannot Read from Drive X:
	
	where X is the current drive.
	
	CAUSE
	=====
	
	The DOSAPP.INI file may be corrupt.
	
	Windows uses the DOSAPP.INI file to store data about MS-DOS applications, such as
	window position and font information.
	
	WORKAROUND
	==========
	
	To correct this problem:
	
	1. Rename the DOSAPP.INI file in the Windows directory to DOSAPP.XXX.
	
	2. Run the MS-DOS application.
	
	Windows will create a new DOSAPP.INI file.
	
	Additional query words: 3.10 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
