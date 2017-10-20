---
layout: page
title: "Q135966: &quot;A DLL Initialization Routine Failed&quot; Setting Up MS Plus!"
permalink: /kb/135/Q135966/
---

## Q135966: &quot;A DLL Initialization Routine Failed&quot; Setting Up MS Plus!

{% raw %}

	Article: Q135966
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running Microsoft Plus! for Windows 95 Setup, you may receive the
	following error message after you choose the installation folder:
	
	  Custom Action Error
	  A Dynamic Link Library (DLL) initialization routine failed.
	
	CAUSE
	=====
	
	Setup could not load either the Dskapi16.dll or Dskapi32.dll file. This can
	occur if the files are mismatched, or if one of them is zero bytes in size.
	
	RESOLUTION
	==========
	
	Method 1
	--------
	
	Delete or rename both of these files in the Windows\System folder and then run
	Microsoft Plus! Setup again. If you cannot rename or delete the files, restart
	Windows 95 and then try again.
	
	Method 2
	--------
	
	Delete or rename both of these files in the Windows\System folder and then
	extract a new copy of the Dskapi16.dll and Dskapi32.dll files. To do so, type
	the following command at a command prompt
	
	  " extract /a <sdrive>:\plus_1.cab dskapi*.dll /l
	  <hdrive>:\<windir>\system " (without the quotation marks)
	
	where <sdrive> is the drive containing the Microsoft Plus! CD-ROM or floppy
	disk, <hdrive> is the drive containing Windows 95, and <windir> is
	the Windows folder.
	
	For additional information about using the Extract tool, type "extract" (without
	quotation marks) at a command prompt, or see the following article in the
	Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
