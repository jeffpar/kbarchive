---
layout: page
title: "Q119365: Runtime Error 6009 - Default Environment Size"
permalink: /kb/119/Q119365/
---

## Q119365: Runtime Error 6009 - Default Environment Size

{% raw %}

	Article: Q119365
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	kb3rdparty kbinterop
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5. 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an MS-DOS - based application that requires a large amount of
	environment space, such as a compiler, you may encounter Runtime Error 6009.
	
	CAUSE
	=====
	
	This error occurs when there are not enough bytes allocated for the
	environment.
	
	The default environment size for MS-DOS - based applications running under
	Windows NT is 256 bytes. Windows NT sets up many more variables than an average
	MS-DOS operating system usually does and can quickly meet the default size. The
	following list is an example of default variables after you install Windows NT
	over MS-DOS:
	
	  COMSPEC
	  COMPUTERNAME
	  HOMEDRIVE
	  HOMEPATH
	  MOUSE
	  OS
	  OS2LIBPATH
	  PATH
	  PROCESSOR_ARCHITECTURE
	  PROCESSOR_LEVEL
	  PROMPT
	  SYSTEMROOT
	  TEMP
	  USERDOMAIN
	  USERNAME
	  WINDIR
	
	WORKAROUND
	==========
	
	The environment size can be adjusted from the command line or in a .BAT or .CMD
	file in the SYSTEM32 directory by adding the following line:
	
	  COMMAND /E:XXXX
	
	Additionally, you can use the /P parameter to make the new command interpreter
	permanent, and you can use the /C parameter to run a specific program after
	initiating Command.
	
	The environment can also be changed by adding the following line to the CONFIG.NT
	file in the SYSTEM32 subdirectory
	
	  SHELL=%SYSTEMROOT%\SYSTEM32\COMMAND.COM /E:SIZE /P
	
	where "SIZE" is the maximum length in bytes you want COMMAND.COM to allocate for
	each program.
	
	The maximum size for the environment is 32768 bytes.
	
	REFERENCES
	==========
	
	For more information about the Windows NT command prompt and commands for the
	MS-DOS and Windows NT subsystems, please see Chapter 9 of the Windows NT "System
	Guide."
	
	Additional query words: prodnt 3.10 err msg
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	

{% endraw %}
