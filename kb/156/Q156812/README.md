---
layout: page
title: "Q156812: XCLN: Running Exchange MS-DOS Client in Monitor Mode"
permalink: kb/156/Q156812/
---

## Q156812: XCLN: Running Exchange MS-DOS Client in Monitor Mode

	Article: Q156812
	Product(s): Microsoft Exchange
	Version(s): MS-DOS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange MS-DOS client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you start the Microsoft Exchange MS-DOS client in Monitor Mode by running
	Exchange -m, the client will start and then shell out to an MS-DOS command
	prompt. The Microsoft Exchange MS-DOS client is fully running at this time and
	can be accessed by pressing Alt+F1.
	
	If a MS-DOS batch file contains Exchange.exe -m, the commands following Exchange
	in the batch file will not be executed until the Microsoft Exchange client is
	exited. This behavior is by product design.
	
	To exit from Monitor Mode, follow these steps:
	
	1. Type "EXIT" (without the quotation marks) at the MS-DOS prompt. This will
	  return you to the Microsoft Exchange client.
	
	2. Choose Exit from the File menu of the Microsoft Exchange client. This will
	  close the Microsoft Exchange client and then continue to execute the batch
	  file.
	
	MORE INFORMATION
	================
	
	If you use the MS-DOS command prompt to run a terminate-and-stay-resident (TSR)
	programs from within Microsoft Exchange, they can cause unrecoverable errors. If
	you want to run a TSR program, you should first exit Microsoft Exchange.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword3 kbExchange400DOS kbExchange500DOS
	Version           : MS-DOS:4.0,5.0
	
	=============================================================================
	
