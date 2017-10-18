---
layout: page
title: "Q151211: Nested Batch Files in Logon Script Hangs at Execution"
permalink: kb/151/Q151211/
---

## Q151211: Nested Batch Files in Logon Script Hangs at Execution

	Article: Q151211
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51 WFW:3.11 Win95
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A DOS window appears on a client computer and shows the logon script executing.
	The logon script finishes, but the Windows NT logon script (in Windows 95) or
	the Lan Manager logon script (in Windows for Workgroups) dialog box appears and
	displays the following message:
	
	  Please wait while your logon script executes...
	
	The client computer stops responding until you click Cancel.
	
	CAUSE
	=====
	
	The Windows NT logon script contains a nested batch file and the current
	directory is changed in the nested batch file as shown in the following logon
	script example. Assume Test1.bat and test2.bat are located in the
	Repl\Imports\Scripts directory and Gandalf is a Windows NT Server 3.51 Primary
	Domain Controller (PDC) with no service packs installed.
	
	The logon script contains only one line:
	
	  test1.bat
	
	Test1.bat contains the following lines:
	
	NET USE K: \\Gandalf\Netlogon k:\test2.bat
	
	Test2.bat contains the following lines:
	
	  net use P: \\Gandalf\Sms_shr
	  net use y: \\Gandalf\Sms_pkgd
	  P:
	  CD\            <---- line causing the logon script dialog box to hang
	                 until you click Cancel
	
	  COPY CL_Dos.txt C:\Temp
	
	WORKAROUND
	==========
	
	To work around this problem, change the nested batch file code for Test2.bat so
	that it avoids using the Change Directory (Cd) command:
	
	  net use P: \\Gandalf\Sms_shr
	  net use y: \\Gandalf\Sms_pkgd
	  COPY p:\CL_Dos.txt C:\Temp
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt login scripts nested batch file logon scripts
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin95search kbWFWSearch kbZNotKeyword3 kbWFW311
	Version           : WinNT:3.5,3.51 WFW:3.11 Win95
	
	=============================================================================
	
