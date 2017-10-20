---
layout: page
title: "Q131746: Cannot Start TAPI-Aware Programs"
permalink: /kb/131/Q131746/
---

## Q131746: Cannot Start TAPI-Aware Programs

{% raw %}

	Article: Q131746
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start a program that supports the Telephony Application
	Programming Interface (TAPI), you may receive the following error message:
	
	  Error Starting Program
	
	  The TAPI32.DLL file cannot start. Check the file to determine the problem.
	
	CAUSE
	=====
	
	The TOOLHELP.DLL file is missing or damaged, or has been replaced by another
	program. The TOOLHELP.DLL file should be located in the Windows\System folder.
	
	RESOLUTION
	==========
	
	Use the EXTRACT command to replace the TOOLHELP.DLL file. To extract the file,
	use the following command
	
	  extract /l <drive letter>:\<windows>\system <filename.cab> toolhelp.dll
	
	where <drive letter> indicates the letter designating the drive containing
	the Windows 95 floppy disk or CD-ROM, <windows> is the Windows 95 folder,
	and <filename.cab> is the name of the cabinet file containing the
	TOOLHELP.DLL file. For example,
	
	From disk 4:
	
	  extract /l c:\windows\system win95_04.cab toolhelp.dll
	
	From the Windows 95 CD-ROM:
	
	  extract /l c:\windows\system win95_03.cab toolhelp.dll
	
	For information about using the EXTRACT command, type
	
	  " extract /? " (without the quotation marks)
	
	at a command prompt.
	
	
	
	MORE INFORMATION
	================
	
	For information about other issues that can cause the problem described in this
	article, please see the following article in the Microsoft Knowledge Base:
	
	  Q138835 Error Message: GP Fault in Mmsystem.dll
	
	======================================================================
	Keywords          : kbenv kberrmsg win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
