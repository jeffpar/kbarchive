---
layout: page
title: "Q179953: Shiva Client De-installation Leaves File References"
permalink: kb/179/Q179953/
---

## Q179953: Shiva Client De-installation Leaves File References

	Article: Q179953
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run Remove All to de-install the Win16 Exchange client, and then
	restart the computer, Windows may produce the following error:
	
	  Cannot find a device file that may be needed to run Windows in 386
	  Enhanced Mode
	
	CAUSE
	=====
	
	This error occurs when Shiva Remote is installed on the computer. The Remove All
	process does not remove all entries related to Shiva Remote files, various .ini
	files, and the program group.
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. Edit the System.ini file and remove the following entry in the [386Enh]
	  section:
	
	        Device={ShivaPath}\dial.386
	
	2. Restart Windows.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange 4.0
	Client for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	
	=============================================================================
	
