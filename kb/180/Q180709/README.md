---
layout: page
title: "Q180709: Code in Main Thread Still Executes After Issuing CTRL+C Command"
permalink: kb/180/Q180709/
---

## Q180709: Code in Main Thread Still Executes After Issuing CTRL+C Command

	Article: Q180709
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you press CTRL+C, a significant amount of code may still be executed in
	the primary thread before the program quits.
	
	CAUSE
	=====
	
	If there is a read outstanding to a console device and CTRL+C is pressed, the
	Input/Output is cancelled and the read is completed. The thread that issued the
	read then continues to run. Sometime later, the CTRL+C event is delivered (in a
	different thread) to the Control Event handler which usually causes the process
	to exit. The problem is that various amounts of code can execute in the primary
	thread before the process ever exits. The amount of code that is executed
	depends on the platform speed and processor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
