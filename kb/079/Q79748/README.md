---
layout: page
title: "Q79748: Windows 3.0 Accessories Create Files If No Extension Is Given"
permalink: /kb/079/Q79748/
---

## Q79748: Windows 3.0 Accessories Create Files If No Extension Is Given

{% raw %}

	Article: Q79748
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open a file in a Microsoft Windows 3.0 accessory program,
	the program looks for a file with the accessory's default extension. If the file
	cannot be found, the accessory asks you to insert a disk in drive A. If you
	choose the Cancel button, Windows asks if you want to create the file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows version 3.0. This
	problem does not occur in later versions of Windows.
	
	MORE INFORMATION
	================
	
	When you attempt to open a file in a Microsoft Windows 3.1 accessory program,
	the program first looks for a file with the accessory's default extension. Then
	it looks for the file with no extension. If none is found, it returns an error
	similar to the following:
	
	  
	
	  <filename.ext> Cannot find this file. Please verify that correct
	  filename and path are given.
	
	      OK
	
	If you choose OK, Windows returns to the File Open dialog box, thus allowing you
	to correct the filename.
	
	Additional query words: 3.00 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
