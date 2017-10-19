---
layout: page
title: "Q190312: PRB: Computer &quot;Not Responding&quot; When Certain Commands Issued"
permalink: /kb/190/Q190312/
---

## Q190312: PRB: Computer &quot;Not Responding&quot; When Certain Commands Issued

	Article: Q190312
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	Last Modified: 18-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you issue commands such as INDEX, REPLACE ALL, or PACK, some computers may
	take a long time to finish processing the results. This only occurs if the
	computer is running the Windows NT 4.0 operating system. Also, the faster the
	computer and the more RAM that is installed, the more time that it takes for the
	computer to finish the command's tasks. Visual FoxPro also shows as "Not
	Responding" in the Application tab of the Task Manager, but in fact, is working
	to complete the task.
	
	MORE INFORMATION
	================
	
	In testing this, it seems that setting SYS(3050) to 1 MG seems to decrease the
	time it takes to finish these tasks. Try this command before issuing the other
	commands listed in this article.
	
	      =SYS(3050,1,1000000)
	
	FoxPro can normally process one of the commands listed in the SYMPTOMS section in
	a very short time, even on a large table. However, on several of the new faster
	computers, Visual FoxPro slows down drastically when processing these commands.
	The computers that seem to have this problem are 233 MHz and up, and have at
	least 64 MB of RAM. It has been reported that 200 MHz computers also display
	this behavior, but the sluggishness is more pronounced as the speed and amount
	of RAM of the computer increases.
	
	Another way to observe that the computer is struggling to process the command, is
	to open the Windows NT Task Manager, click the Applications tab and note that
	Visual FoxPro is "Not Responding". During the whole process, the hard drive of
	the computer runs constantly, trying to finish the task.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Locate a computer with a 233 MHz or higher processor and at least 64 MB of
	  RAM with Windows NT 4.0 as the operating system.
	
	2. USE a table with 100,000 records or more as a good test.
	
	3. Issue the PACK command in the Command window, and note that it takes a
	  considerable amount of time to pack the table. Open the Windows NT Task
	  Manager dialog box and click the Applications tab. In the status section, it
	  shows that Visual FoxPro is not responding at various times during the
	  packing of the table.
	
	Additional query words: FxPrgTable kbvfp600
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
