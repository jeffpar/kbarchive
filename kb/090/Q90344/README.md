---
layout: page
title: "Q90344: NDOS Can Cause Windows to Exit Unexpectedly"
permalink: /kb/090/Q90344/
---

## Q90344: NDOS Can Cause Windows to Exit Unexpectedly

{% raw %}

	Article: Q90344
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	The following article contains information on the use of Windows for
	Workgroups with third-party products or configurations that have not
	been tested and are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for more
	information or use a supported configuration.
	
	SUMMARY
	=======
	
	If you run Symantec's Norton Utilities NDOS as your command interpreter in
	MS-DOS, you must modify the DOSPRMPT.PIF file to point to NDOS.COM instead of
	COMMAND.COM.
	
	By default, Windows sets up an MS-DOS Prompt icon in the Main group of Program
	Manager that invokes COMMAND.COM. Attempting to use this icon to start MS-DOS
	Prompt can result in Windows exiting unexpectedly at some point. It doesn't
	always happen immediately, but usually you eventually run into this problem
	while running MS-DOS programs or utilities.
	
	MORE INFORMATION
	================
	
	If a replacement command interpreter is in use, there will be a SHELL= line in
	the CONFIG.SYS file specifying the full path (for example
	shell=c:\norton\ndos.com). If you use a replacement command interpreter, you
	should use the PIF Editor to modify the DOSPRMPT.PIF file to run the replacement
	interpreter instead of COMMAND.COM.
	
	To modify DOSPRMPT.PIF:
	
	1. Start PIF Editor.
	
	2. Open DOSPRMPT.PIF.
	
	3. Replace COMMAND.COM in the Program Filename field with the name of the
	  replacement command interpreter.
	
	4. Save the File.
	
	Additional query words: 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
