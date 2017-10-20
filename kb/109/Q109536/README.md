---
layout: page
title: "Q109536: Err Msg Running MS-DOS-Based Apps: Cannot Start Application"
permalink: /kb/109/Q109536/
---

## Q109536: Err Msg Running MS-DOS-Based Apps: Cannot Start Application

{% raw %}

	Article: Q109536
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you include any parameters on your SET COMSPEC command (typically located in
	the AUTOEXEC.BAT file), you receive the following error message when you try to
	start MS-DOS-based applications under Windows or Windows for Workgroups:
	
	  Cannot start application
	
	WORKAROUND
	==========
	
	To work around this problem, edit your AUTOEXEC.BAT file and remove any
	parameters from your SET COMSPEC command.
	
	MORE INFORMATION
	================
	
	Any configuration parameters for COMMAND.COM should be placed on the SHELL= line
	in the CONFIG.SYS file. For example:
	
	       shell=c:\dos\command.com c:\dos\ /e:512 /p
	
	Additional query words: 3.10 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
