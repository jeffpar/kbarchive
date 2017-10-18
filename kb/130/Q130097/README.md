---
layout: page
title: "Q130097: PC Win: How to Disable the Server Button"
permalink: kb/130/Q130097/
---

## Q130097: PC Win: How to Disable the Server Button

	Article: Q130097
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to disable the Server button in versions 3.0 and 3.2
	of Microsoft Mail for Windows.
	
	Notes:
	
	- To locate the Server button, from the Mail menu, choose Options.
	
	- This function is for administrators who may want to disable the server button
	  to prevent users from moving their .MMF to the server.
	
	MORE INFORMATION
	================
	
	To disable this function, add the following lines to the [Microsoft Mail]
	section of the MSMAIL.INI:
	
	  [Microsoft Mail]
	  AutoDisconnectInterval=0
	  NoServerOptions=1
	  LocalMMF=1
	
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
