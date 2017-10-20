---
layout: page
title: "Q84642: MS-DOS-Based Application Runs out of Environment Space"
permalink: /kb/084/Q84642/
---

## Q84642: MS-DOS-Based Application Runs out of Environment Space

{% raw %}

	Article: Q84642
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you receive the error message
	
	  not enough environment space
	
	while running or attempting to run an MS-DOS-based application (also known as an
	MS-DOS virtual machine [VM]) under Microsoft Windows version 3.0 or 3.1,
	increase the environment space for this application.
	
	MORE INFORMATION
	================
	
	When an MS-DOS-based application is executed, its environment space defaults to
	the MS-DOS default, which is 256 bytes.
	
	Under Windows 3.0, the only way to increase the environment space in a VM is
	through the MS-DOS-based application's program information file (PIF). The
	following is a sample PIF file that does this:
	
	   Field                   Information
	   -----                   -----------
	
	   Program Name            COMMAND.COM
	   Program Title           My Program
	   Optional Parameters     /E:2048 /C C:\MYDIR\MYPROG.EXE
	   Startup Directory       C:\MYDIR
	
	"/E:2048" is the size of the environment space in bytes; this value can range
	from 160 to 32,768.
	
	"MYDIR" is the name of the directory that contains the executable of the
	program.
	
	"MYPROG.EXE" is the name of the program.
	
	With Windows 3.1, you can either use the above procedure to increase the size of
	the environment, or you can add the following line to the [NonWindowsApp]
	section in the SYSTEM.INI file:
	
	     [NonWindowsApp]<BR/>
	     CommandEnvSize=2048
	
	The above example sets a VM environment size of 2048 bytes. This value can range
	from 160 to 32,768.
	
	Under Windows 3.1, the Environment size setting in the PIF file will override the
	CommandEnvSize= setting in the SYSTEM.INI file.
	
	NOTE: The CommandEnvSize= line will automatically be placed in the SYSTEM.INI
	file when you install Windows 3.1 if there is a SHELL statement in the
	CONFIG.SYS. If there is no a SHELL statement, you will have to add this line to
	the SYSTEM.INI file.
	
	Additional query words: 3.00 3.10 non dos err msg win95 sms
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
