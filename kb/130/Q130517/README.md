---
layout: page
title: "Q130517: How to Modify Config.sys in Windows 95"
permalink: /kb/130/Q130517/
---

## Q130517: How to Modify Config.sys in Windows 95

{% raw %}

	Article: Q130517
	Product(s): Microsoft Home Miscellaneous Products
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article discusses how to modify the Config.sys file in Windows 95.
	
	MORE INFORMATION
	================
	
	Modifying the Config.sys File
	-----------------------------
	
	1. Click the Start button, then click Run.
	
	2. In the Run dialog box, type the following and click OK:
	
	  " sysedit " (without the quotation marks)
	
	  This opens the System Configuration Editor.
	
	3. On the Window menu in System Configuration Editor, click C:\Config.sys (where
	  C:\ is the bootable drive). This brings the text in the Config.sys file to
	  the front.
	
	4. Make the necessary changes in Config.sys.
	
	5. On the File menu, click Exit. If you want to save the changes you made, click
	  Yes.
	
	6. Click the Start button and then click Shutdown. Click Restart The Computer.
	
	NOTE: When changes are made to the file, Sysedit.exe creates a backup of the
	original file with an .syd extension. If you need to restore the original
	Config.sys file, rename C:\Config.syd to C:\Config.sys, then shutdown and
	restart Windows.
	
	Additional query words: kbhowto home cdu reconfigure configure bootup boot-up boot-disk
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
