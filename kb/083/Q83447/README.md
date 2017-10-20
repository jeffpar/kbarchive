---
layout: page
title: "Q83447: Windows Err Msg: Cannot Read Drive I or Drive I Does Not Exist"
permalink: /kb/083/Q83447/
---

## Q83447: Windows Err Msg: Cannot Read Drive I or Drive I Does Not Exist

{% raw %}

	Article: Q83447
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Use of the MS-DOS versions 4.x GRAPHICS.COM file in your AUTOEXEC.BAT file may
	cause one of the following error messages to appear in Windows 3.1 File
	Manager:
	
	  Cannot read drive I
	
	  -or-
	
	  Error reading drive I
	
	  -or-
	
	  Drive I does not exist
	
	CAUSE
	=====
	
	Some applications, such as Harvard Graphics, install GRAPHICS.COM. If you are
	using MS-DOS 4.x, this error may occur after you install Windows 3.1.
	
	If you choose the OK button when the error appears, File Manager displays all of
	the legitimate drive icons, but the files within the subdirectories are
	inaccessible.
	
	This error does not occur with later versions of MS-DOS.
	
	
	WORKAROUND
	==========
	
	To correct the problem, remove the reference to the MS-DOS 4.x GRAPHICS.COM file
	from the AUTOEXEC.BAT file.
	
	KBCategory: kbtool kberrmsg
	KBSubcategory: win31 wfw wfwg
	
	Additional query words: doesn't access 3.10 error reading directory drive 1 does not exist I
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
