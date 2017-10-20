---
layout: page
title: "Q145849: ErrMsg: Ir32.dll Set to Read Only Causes Setup to Fail"
permalink: /kb/145/Q145849/
---

## Q145849: ErrMsg: Ir32.dll Set to Read Only Causes Setup to Fail

{% raw %}

	Article: Q145849
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0,3.1,3.11
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Dogs for Windows, version 1.0 
	- Microsoft 500 Nations, version 1.0 
	- the operating system: Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install either Microsoft Dogs or Microsoft 500 Nations on a computer
	running Windows version 3.1 or Windows for Workgroups version 3.11, you may
	receive the following error message:
	
	  The file c:\windows\system\ir32.dll open, which Dogs needs to modify. Please
	  close all other open programs or restart Windows.
	
	  Abort Retry Ignore
	
	CAUSE
	=====
	
	The file Ir32.dll located in the Windows\System folder is set to Read- Only.
	
	RESOLUTION
	==========
	
	Remove the read-only attribute from the Ir32.dll file by doing the following:
	
	1. Open File Manager and locate c:\windows\system\ir32.dll.
	
	  NOTE: If your hard drive is not C drive, or you have renamed your Windows
	  folder use your new names rather than the above names.
	
	2. Click the file, Ir32.dll, to select it.
	
	3. On the File menu, click Properties.
	
	4. Clear the Read-Only check box by clicking it to remove the check mark.
	
	5. Click OK.
	
	Additional query words: 1.0 multi media multimedia multi-media mmtitles setup installation problems
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbOSWinSearch kbHomeProdSearch kbZNotKeyword6 kb500Nations100 kbDogs100 kbOSWin310 kbOSWin311
	Version           : WINDOWS:1.0,3.1,3.11
	
	=============================================================================
	

{% endraw %}
