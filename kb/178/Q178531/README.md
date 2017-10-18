---
layout: page
title: "Q178531: XADM: Generating the Calls.out File"
permalink: kb/178/Q178531/
---

## Q178531: XADM: Generating the Calls.out File

	Article: Q178531
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	The Calls.out file is a useful diagnostic tool in cases where the message
	transfer agent (MTA) is not functioning properly, but fails to stop responding.
	For example, if the MTA is failing to deliver any mail while messages are
	present in the work queue, a Calls.out file may indicate the function that the
	MTA is trying to perform. The Performance Monitor chart displaying the processor
	usage for each MTA thread will indicate if there is a persistently stuck thread.
	If there is a persistently stuck thread, make note of the MTA thread ID so that
	information can be used when you look at the Calls.out file.
	
	MORE INFORMATION
	================
	
	Thread states can change over time. Therefore, the MTA thread analysis in
	Performance Monitor must coincide with the generation of the Calls.out file. It
	is best to keep the Performance Monitor chart active while generating the
	Calls.out file to verify the actual state of the threads at the precise moment
	the Calls.out file is generated. The Calls.out file is generated using the
	following steps:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start the Registry Editor (Regedt32.exe)
	
	2. Open the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeMTA\
	  Diagnostics
	
	3. Select the X400 Service diagnostic value.
	
	4. Type the value of 7 in the Data box.
	
	5. Click OK. The Calls.out file is generated.
	
	6. Select the X.400 Service diagnostic value.
	
	7. Type the previous value for this registry setting in the Data box.
	
	8. Click OK.
	
	The Calls.out file is created by default in the Exchsrvr\Mtadata subdirectory
	whenever one of the MTA diagnostic values is set to 7. The Calls.out file is a
	text file and can be viewed by any text editor. However, you need to make a
	private copy of Calls.out before you restart the MSexchangeMTA. The MTA service
	will remove Calls.out upon startup.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
