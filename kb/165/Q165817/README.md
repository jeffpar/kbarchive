---
layout: page
title: "Q165817: XCLN: Unable to Open NetBEUI Connection with Shiva"
permalink: /kb/165/Q165817/
---

## Q165817: XCLN: Unable to Open NetBEUI Connection with Shiva

	Article: Q165817
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 21-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use ShivaRemote version 3.59 in the Exchange client, you may receive
	the following error message when you initially connect with a RAS server:
	
	  Unable to open NetBEUI connection; NetBIOS name conflict detected.
	
	CAUSE
	=====
	
	No default protocol has been set in Windows for Workgroups Network Setup.
	
	RESOLUTION
	==========
	
	To resolve this problem, set the default protocol to NetBEUI:
	
	- In Control Panel Network, click Network Setup, and then click Drivers, and
	  set the Default Protocol to NetBEUI.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0
	
	=============================================================================
	
