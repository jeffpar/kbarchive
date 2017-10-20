---
layout: page
title: "Q84882: Windows Err Msg: Cannot Find File -EMBEDDI.BMP"
permalink: /kb/084/Q84882/
---

## Q84882: Windows Err Msg: Cannot Find File -EMBEDDI.BMP

{% raw %}

	Article: Q84882
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to embed or link a Windows Paintbrush image from another
	application (such as Windows Write or Microsoft Excel for Windows), the
	following error message may be displayed:
	
	  Cannot find file -EMBEDDI.BMP.
	  Check to ensure the path and filename are correct.
	
	CAUSE
	=====
	
	Using Microsoft Windows operating system version 3.0 Paintbrush to perform an
	OLE function within Windows 3.1 will cause the above error message to appear
	when an attempt is made to insert a Paintbrush Picture object within a Microsoft
	Windows operating system version 3.1 compound document. To eliminate this
	problem, install the Windows 3.1 version of Paintbrush.
	
	To install the Windows 3.1 version of Paintbrush:
	
	1. Delete the Windows 3.0 versions of PBRUSH.EXE, PBRUSH.DLL, and PBRUSH.HLP
	  files from the Windows 3.1 directory.
	
	2. Run Windows Setup from the Main group window, and choose Add/Remove Windows
	  Components from the Options menu.
	
	3. Choose the Files button beside Accessories, and choose Paintbrush and
	  Paintbrush Help. Choose the OK button and the Paintbrush files will be copied
	  and expanded from the original disks.
	
	MORE INFORMATION
	================
	
	When Windows 3.0 is upgraded to Windows 3.1, the PBRUSH.EXE, PBRUSH.DLL, and
	PBRUSH.HLP files may not be updated. This may be due to the lack of disk space
	(which Setup detects, and does not allow all files to be installed) or due to
	the user choosing not to install Paintbrush and Paintbrush Help in a Custom
	Setup. In either situation, the Windows 3.0 Paintbrush files may remain in the
	Windows 3.1 directory.
	
	Additional query words: 3.10 3.11 regedit dynamic data exchange dde graphic image
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
