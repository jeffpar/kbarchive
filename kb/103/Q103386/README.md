---
layout: page
title: "Q103386: Qemm 7.0 Causes SWITCHES Prompt to Appear During Startup"
permalink: /kb/103/Q103386/
---

## Q103386: Qemm 7.0 Causes SWITCHES Prompt to Appear During Startup

{% raw %}

	Article: Q103386
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you are running MS-DOS version 6.0 or 6.2 and you perform an interactive boot
	(by pressing F8 at the "Starting MS-DOS" prompt) with Qemm 7.0 installed, you
	receive the following prompt before the usual "PROCESS AUTOEXEC.BAT [Y/N]"
	prompt is displayed:
	
	  SWITCHES /N /F [Y/N]
	
	If you are running MS-DOS 6.2 and you choose Y, the AUTOEXEC.BAT file is
	processed, but you are not given the option to step through it line by line.
	
	This is a valid variable option for the CONFIG.SYS file. This prompt appears
	regardless of whether the SWITCHES option is currently in the CONFIG.SYS file.
	
	NOTE: In the CONFIG.SYS file, the /N switch normally prevents you from using the
	F5 and F8 keyboard options. The /F switch normally skips the two-second delay
	after the "Starting MS-DOS" message is displayed.
	
	CAUSE
	=====
	
	The SWITCHES /N /F [Y/N] prompt appears as a result of the Qemm LOADHI.COM
	command being added to the Shell= statement in the CONFIG.SYS file. If you press
	F5, the system responds normally. However, if you press F8, the system responds
	with the SWITCHES prompt. Regardless of your choice, the AUTOEXEC.BAT file is
	processed. Neither option affects the two-second delay after the "Starting
	MS-DOS" message appears.
	
	RESOLUTION
	==========
	
	Remove the Qemm LOADHI.COM reference from the Shell= line. For example:
	
	     shell=c:\qemm loadhi.com /r:2 c:\dos\command.com c:\dos\ /p
	
	This allows for the correct response to the question "PROCESS AUTOEXEC.BAT
	[Y/N]"; however, the SWITCHES /N /F [Y/N] question still appears. To remove the
	SWITCHES prompt, the Qemm device driver DOSUP.SYS needs to be removed. This is
	the Qemm driver that loads MS-DOS high.
	
	Example: (Device=c:\Qemm\dosup.sys)
	
	
	MORE INFORMATION
	================
	
	Qemm is manufactured by Quarterdeck Office Systems, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise regarding this product's
	performance or reliability.
	
	Additional query words: 6.22 6.00 6.20 QEMM Switches F8 Interactive
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
