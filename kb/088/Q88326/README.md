---
layout: page
title: "Q88326: Unable to Exit Paintbrush with Earlier DLL Files Installed"
permalink: /kb/088/Q88326/
---

## Q88326: Unable to Exit Paintbrush with Earlier DLL Files Installed

{% raw %}

	Article: Q88326
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you exit from Paintbrush (PBRUSH.EXE) and choose not to save changes,
	Paintbrush may remain active if earlier versions of OLECLI.DLL and OLESVR.DLL
	are in the WINDOWS\SYSTEM directory.
	
	If the file dates of OLECLI.DLL and OLESVR.DLL are earlier than 3/10/92, they
	should be replaced with the files from the Windows 3.1 disks. On the 5.25-inch
	disk set, OLECLI.DLL is on disk 4, and OLESVR.DLL is on disk 5. On 3.5-inch
	disks, OLECLI.DLL is on disk 5 and OLESVR.DLL is on disk 4.
	
	Use the following commands to expand the two files off the Windows disks:
	
	OLECLI.DLL
	----------
	
	  expand (x):olecli.dl_ c:\windows\system\olecli.dll
	
	OLESVR.DLL
	----------
	
	  expand (x):olesvr.dl_ c:\windows\system\olesvr.dll
	
	MORE INFORMATION
	================
	
	OLECLI.DLL is the OLE client dynamic-link library (DLL) for Windows, and
	OLESVR.DLL is the OLE server dynamic-link library for Windows. Windows uses
	these files to carry out OLE functions.
	
	
	Additional query words: 3.10 3.11 Paint Brush OLE object linking embedding old older newer 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
