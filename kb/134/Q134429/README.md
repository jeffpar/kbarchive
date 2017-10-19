---
layout: page
title: "Q134429: Cannot Print to WGAO for MS-DOS-Based Computer"
permalink: /kb/134/Q134429/
---

## Q134429: Cannot Print to WGAO for MS-DOS-Based Computer

	Article: Q134429
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may not be able to print to a printer that is connected to a computer
	running the Workgroups Add-On for MS-DOS version 3.11, even though you can
	successfully connect to shared resources on that computer.
	
	Printing to the printer from WordPad may result in the following error message:
	
	  There was an error writing to \\<server>\<printer> for
	  "<printer name>": The network printer is no longer available. Contact
	  your system administrator or try using a different printer. This printer will
	  be set to work offline. To save your print job in the local printer queue,
	  click OK.
	
	If you then attempt to set the printer to work online, the following error
	message is displayed:
	
	  Cannot connect to this network printer. Make sure your network is working
	  properly and the network share you are connected to exists.
	
	CAUSE
	=====
	
	The computer that the printer is connected to is configured to use the basic
	redirector. The Workgroups Add-On for MS-DOS uses the basic redirector by
	default.
	
	RESOLUTION
	==========
	
	To resolve this problem, configure the computer to use the full redirector by
	following these steps:
	
	1. From an MS-DOS prompt, change to the Workgroups Add-On for MS-DOS directory,
	  then type "setup" (without the quotation marks) and press ENTER.
	
	2. Use the UP ARROW key to select Change Setup Options, and then press ENTER.
	
	3. Use the UP ARROW key to select Change Redir Options, and then press ENTER.
	
	4. Select Use The Full Redirector, and then press ENTER.
	
	5. Restart the computer when prompted to do so.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
