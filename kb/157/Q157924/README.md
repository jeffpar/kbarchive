---
layout: page
title: "Q157924: Err Msg: &quot;IOS Failed to Initialize&quot; on Boot"
permalink: /kb/157/Q157924/
---

## Q157924: Err Msg: &quot;IOS Failed to Initialize&quot; on Boot

{% raw %}

	Article: Q157924
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1,2,2.1
	Operating System(s): 
	Keyword(s): kbenv kberrmsg osr2 win95kbfaq
	Last Modified: 13-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you restart Windows 95 after installing a program or making a configuration
	change to your computer, you may receive one of the following error messages:
	
	  Windows initializing device IOS: Windows protection error. IOS failed to
	  Initialize, Please restart
	
	  While initializing IOS: Windows protection error. You need to restart your
	  computer.
	
	  Windows initializing device IOS: Windows protection error. You need to
	  restart your computer.
	
	After the error message is displayed, you may not be able to start Windows 95
	normally. However, you should be able to start Windows 95 in Safe mode.
	
	RESOLUTION
	==========
	
	It may also be possible to start Windows 95 normally after using the following
	procedure:
	
	1. Boot Windows 95 in Safe mode or to a command prompt.
	
	2. Perform one of the following two steps:
	
	   - Edit the Config.sys and Autoexec.bat files and disable any references to
	     Smartdrv.exe. To disable a line, type "rem" (without the quotation marks)
	     at the beginning of the line.
	
	   - Rename Smartdrv.exe to another name.
	
	3. Restart your computer normally.
	
	
	For additional information about IOS error messages, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q225497 Windows 95 May Fail to Boot Due to I/O Subsystem Failure
	
	  Q164666 Err Msg: While Initializing Device IOS...
	
	  Q192841 Difficulties Using AMD K6-2 or Athlon Central Processing Unit
	
	  Q168866 FIX: IOS Failed to Initialize Error During Installation
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95 and OEM
	Service Releases. This issue is resolved by the following updated file for
	Windows 95 and OSR2:
	
	  RMM.PDR version 4.00.1112 (dated 03/10/97) and later
	
	MORE INFORMATION
	================
	
	The problem occurs only on certain system configurations, and does not occur if
	Internet Explorer 4.0 is installed on your computer. These system configurations
	have a minimum of 32 MB of RAM and a large number of device drivers. The problem
	is rare and can occur only at startup. Users whose systems are starting
	successfully today are not impacted.
	
	
	
	Additional query words: msn msnetwork w95susd
	
	======================================================================
	Keywords          : kbenv kberrmsg osr2 win95 kbfaq
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1
	Hardware          : x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
