---
layout: page
title: "Q112157: PC Setup: Err Msg: Network Name Entered Is a Reserved Name"
permalink: /kb/112/Q112157/
---

## Q112157: PC Setup: Err Msg: Network Name Entered Is a Reserved Name

{% raw %}

	Article: Q112157
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Mail 3.2 setup program used to install a new postoffice displays the
	following message if you use the network name of MSMAIL:
	
	  Network name entered is a reserved name.
	
	The installation program of version 3.0 of Mail for PC Networks exhibits the same
	behavior.
	
	CAUSE
	=====
	
	MSMAIL is the reserved name for the Mail Connection Gateway.
	
	RESOLUTION
	==========
	
	Choose a different name for network name. If you do not have the Mail Connection
	Gateway installed, the Mail Administrator program (ADMIN.EXE) will allow you to
	change your network name to MSMAIL. To change the name, run the Mail
	Administrator program and choose Config, Password.
	
	MORE INFORMATION
	================
	
	For more information about changing the network name, please refer to the
	following sources:
	
	  Version     Source                                      Page(s)
	  ---------------------------------------------------------------------
	  3.0         Microsoft Mail "Administrator's Guide"       135
	  3.2         Microsoft Mail "Administrator's Guide"      76-77
	
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
