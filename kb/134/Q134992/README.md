---
layout: page
title: "Q134992: MODE Command: &quot;Printer Output Is Not Being Rerouted&quot;"
permalink: /kb/134/Q134992/
---

## Q134992: MODE Command: &quot;Printer Output Is Not Being Rerouted&quot;

	Article: Q134992
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When using the MODE command (a command line redirector for MS-DOS-based
	applications) to map a printer on a COM port to an LPT port, the following error
	may occur:
	
	  Status for device LPT1:
	  Printer Output is not being rerouted
	
	This error occurs even though the following correct syntax is used at the command
	prompt:
	
	  MODE LPTn:=COMm:
	
	WORKAROUND
	==========
	
	To work around this problem, use the network redirector instead of the MODE
	command. For example, create and share a printer. At the MS-DOS prompt, type the
	NET USE command to map the appropriate port to the share UNC name, as in the
	following example:
	
	  NET USE LPT1: \\server\printshare
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt redirect reroute LPT1 LPT2 LPT3 COM1 COM2 COM3 system utility
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
