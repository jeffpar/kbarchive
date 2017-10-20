---
layout: page
title: "Q147049: XCLN: Err Msg: The Print Operation Could not be Completed"
permalink: /kb/147/Q147049/
---

## Q147049: XCLN: Err Msg: The Print Operation Could not be Completed

{% raw %}

	Article: Q147049
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The error message listed below might occur if the Print Layouts and Paper
	Formats component of Microsoft Schedule+ was not installed when you installed
	the Microsoft Exchange client. This error message will occur when you attempt to
	print a meeting request from within the Microsoft Exchange client.
	
	  The print operation could not be completed. Cannot print because there are no
	  valid .FMT files available.
	
	RESOLUTION
	==========
	
	Run the Microsoft Exchange Client Setup program, click Add/Remove, select
	Schedule+, click Change Option, check Print Layouts and Paper Formats, and click
	OK. Once installed, you will be able to print meeting requests from the
	Microsoft Exchange client.
	
	For Microsoft Exchange Windows 3.x clients, this can also be caused by the
	following line not being present in the Schplus.ini file:
	
	  LocalPrintFileDir=<Path to client install directory or directory where
	                     the FMT files are located>
	
	For Microsoft Exchange Windows NT and Windows 95 clients, the following Registry
	location must be present in the registry.
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Schedule+\Application
	  String: LocalPrintFileDir
	  Value: <Path to client install directory or directory where the FMT
	          files are located>
	
	This can also be changed for an entire Microsoft Exchange client install point by
	running the STF Editor and making the change in the following location:
	
	1. From the File menu, click Modify Setup Program Options.
	
	2. Click the Components tab.
	
	3. Click the Schedule+ Change Option button.
	
	4. Make sure the Print Layouts and Paper Formats option is checked.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	

{% endraw %}
