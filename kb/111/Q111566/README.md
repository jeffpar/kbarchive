---
layout: page
title: "Q111566: Microsoft Mail Err Msg: Error: Unable to Allocate Hook..."
permalink: /kb/111/Q111566/
---

## Q111566: Microsoft Mail Err Msg: Error: Unable to Allocate Hook...

	Article: Q111566
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Mail, you may receive the following error message:
	
	  Error: Unable to allocate hook control block
	
	CAUSE
	=====
	
	Microsoft Mail does not understand multiple LANAs; therefore, when a datagram is
	received, Mail tries to register the adapter on LANA 0. If NetBEUI is not on
	LANA 0 (that is, it is not set as the default protocol), the above error message
	is displayed.
	
	WORKAROUND
	==========
	
	To work around this problem, set NetBEUI as your default protocol. To do so,
	follow these steps:
	
	1. From the Program Manager Main group, run Windows Setup.
	
	2. From the Options menu, choose Change Network Settings.
	
	3. Select the Drivers button.
	
	4. Select Microsoft NetBEUI.
	
	5. Choose the Set as Default Protocol button, and then choose the Close button.
	
	6. Choose OK twice, and then choose Restart Windows.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.11. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.11 email err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
