---
layout: page
title: "Q138409: Novell VLM Client Files Not Removed When COMMAND /C Used"
permalink: /kb/138/Q138409/
---

## Q138409: Novell VLM Client Files Not Removed When COMMAND /C Used

{% raw %}

	Article: Q138409
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade a computer running Novell's VLM network client to Windows 95,
	Setup installs the Microsoft Client for NetWare Networks to replace the
	real-mode VLM client files, but may not remove the VLM client files if they are
	loaded from a batch file other than the Autoexec.bat file.
	
	CAUSE
	=====
	
	Setup does not remove the VLM client files if they are loaded from a batch file
	that is called using the "command /c <name>.bat" method in the
	Autoexec.bat file. Setup does remove the VLM client files if they are called
	using the "call <name>.bat" method.
	
	RESOLUTION
	==========
	
	You must manually disable (or remark out) the "command /c" command in the
	Autoexec.bat file.
	
	STATUS
	======
	
	Microsoft is researching this issue and will post additional information here in
	the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The MS-DOS CALL command was introduced in MS-DOS version 3.3. This command is
	used to call a batch file from another batch file. The CALL command replaces the
	older method of calling a batch file with the "command /c" command.
	
	Windows 95 Setup does not recognize the older "command /c" command.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
