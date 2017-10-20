---
layout: page
title: "Q138370: Nonstandard LPT Port Names Disable Access to Shared Printers"
permalink: /kb/138/Q138370/
---

## Q138370: Nonstandard LPT Port Names Disable Access to Shared Printers

{% raw %}

	Article: Q138370
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are trying to connect to a shared network printer, the Network button
	in the Connect dialog box may be unavailable, preventing you from connecting to
	a network printer.
	
	CAUSE
	=====
	
	This behavior can occur if a port with a nonstandard name is being used on the
	local computer.
	
	RESOLUTION
	==========
	
	Use any text editor (such as Notepad) to edit the Win.ini file. Edit the LPT
	settings in the [Ports] section of the file to read as follows:
	
	     LPT1:=
	     LPT2:=
	
	You can add additional ports if necessary.
	
	MORE INFORMATION
	================
	
	When you cannot connect to a network printer, use Print Manager or the Printers
	tool in Control Panel to verify that the port in use has a standard LPTx name.
	You cannot connect to shared printers if you are using a nonstandard LPT name
	(including LPTx.DOS). Note also that you cannot use COM ports to connect to
	network printers.
	
	Additional query words: 3.10 3.11 gray grey
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
