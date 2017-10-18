---
layout: page
title: "Q112857: WFWG 3.11: Errors Reinstalling Fonts"
permalink: kb/112/Q112857/
---

## Q112857: WFWG 3.11: Errors Reinstalling Fonts

	Article: Q112857
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running Windows for Workgroups 3.11 and you try to reinstall
	compressed TrueType fonts from floppy disk through Control Panel, your system
	may stop responding (hang), and you may receive the error message below when
	font retrieval is between 3 percent and 20 percent complete:
	
	  An error has occurred in your application. If you choose Ignore, you should
	  save your work in a new file. If you choose Close, your application will
	  terminate.
	
	Choosing the Ignore button has no effect; you must choose Close. If you then
	repeat the steps to reinstall the fonts, the system quits Windows unexpectedly,
	leaving you at an MS-DOS command prompt.
	
	NOTE: These symptoms do not occur if the fonts are in uncompressed form.
	
	RESOLUTION
	==========
	
	Fonts must be manually expanded to a directory on either a floppy disk or the
	hard disk drive before you can reinstall them through Control Panel. For
	example, to reinstall the Arial TrueType font from a floppy disk in drive A to
	the hard disk drive (drive C), you would first use the following command to
	expand the file:
	
	  expand a:\arial.tt_ c:\windows\system\arial.ttf
	
	Then reinstall the font through Control Panel.
	
	To expand all compressed TrueType fonts to a directory (for example, C:\FONTS)
	from a floppy disk in drive A, use the Windows for Workgroups version 3.11
	EXPAND.EXE utility as follows:
	
	  c:\windows\expand -r a:\*.tt_ c:\fonts
	
	
	
	Additional query words: 3.11 tt ttf true type hang hangs gpf gp fault disk 5
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin311 kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
