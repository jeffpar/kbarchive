---
layout: page
title: "Q149545: Err Msg: The Mail Headers Could Not Be Displayed"
permalink: kb/149/Q149545/
---

## Q149545: Err Msg: The Mail Headers Could Not Be Displayed

	Article: Q149545
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click Remote Mail on the Tools menu in Microsoft Exchange, you may
	receive either of the following error messages:
	
	  - The mail headers could not be displayed. Internal MAPI error while
	  establishing remote interface MAPI 1.0 - 839 - [80004005]
	
	  - The item could not be displayed. The action could not be completed.
	  Microsoft Exchange Client - 9997 - [80070005]
	
	CAUSE
	=====
	
	These errors can occur if your computer name contains the "@" character. The
	first error message occurs when you try to use the Remote Mail feature in
	Microsoft Exchange. The second error message occurs when you send a message with
	the The Microsoft Network Online Service information service installed in your
	default profile.
	
	RESOLUTION
	==========
	
	Remove the "@" character from your computer name. To do so, follow these steps:
	
	1. In Control Panel, double-click Network.
	
	2. Click the Identification tab.
	
	3. Change the computer name so that it does not contain the "@" character, and
	  then click OK.
	
	4. When you are prompted to restart your computer, do so.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
