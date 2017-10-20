---
layout: page
title: "Q130516: How to Modify the Autoexec.bat in Windows 95"
permalink: /kb/130/Q130516/
---

## Q130516: How to Modify the Autoexec.bat in Windows 95

{% raw %}

	Article: Q130516
	Product(s): Microsoft Windows 95.x Retail Product
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
	
	This articles discusses how to modify the Autoexec.bat file in Windows 95.
	
	MORE INFORMATION
	================
	
	Modifying the Autoexec.bat File
	-------------------------------
	
	NOTE: Not all computers have an Autoexec.bat file. For example, if the computer
	never had MS-DOS or Windows 3.x installed, it may not have an Autoexec.bat
	file.
	
	1. Click the Start button, and then click Run.
	
	2. In the Run dialog box, type the following and click OK:
	
	  " sysedit " (without the quotation marks)
	
	  This opens the System Configuration Editor.
	
	3. On the Window menu in System Configuration Editor, click C:\Autoexec.bat
	  (where C:\ is the drive where you installed Windows). This brings the text in
	  the Autoexec.bat file to the front.
	
	4. Make the necessary Autoexec.bat changes.
	
	5. On the file Menu, click Exit. You are prompted to save current changes. If
	  you want to save the changes you made, click Yes.
	
	6. Click the Start button, and then click Shutdown. Select Restart The Computer,
	  and then click Yes.
	
	NOTE: When changes are made to the file, Sysedit.exe creates a backup of the
	original file with an .syd extension . If you need to restore the original
	Autoexec.bat file, rename C:\Autoexec.syd to C:\Autoexec.bat, then shutdown and
	restart Windows.
	
	Additional query words: kbhowto home cdu reconfigure configure bootup boot-up bootdrive
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
