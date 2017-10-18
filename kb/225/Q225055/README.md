---
layout: page
title: "Q225055: Event 15 Logged When Attempting to Print With SNA Print Server"
permalink: kb/225/Q225055/
---

## Q225055: Event 15 Logged When Attempting to Print With SNA Print Server

	Article: Q225055
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user attempts to do AS/400 or mainframe printing using SNA Print Server,
	the print job may fail to print, and the event below may be logged in the
	Application Event Log.
	
	  Event ID: 15
	  Source: SNA Virtual Print Driver
	
	  The GDI routine StartDoc has returned an error to the SNA Virtual Print
	  Driver.
	
	  Error returned: 5.
	  Print session: [print session name]
	  Device context: [device context number]
	  Job name: SNA Print Job on session [print session name]
	  Output file name (if re-directed to file): (null).
	
	CAUSE
	=====
	
	This error occurs if the SnaPrint service user account does not have access to
	the network printer. The error 5 listed above is a Windows NT error that means
	"access denied."
	
	NOTE: There are other reasons that could cause the Event 15 to be logged,
	resulting in a different error returned.
	
	RESOLUTION
	==========
	
	On the computer where the network printer is defined, go into Control Panel,
	Printers, and select the properties for the printer. On the Security tab, click
	Permissions, and give the SnaPrint service user ID access to the printer.
	
	MORE INFORMATION
	================
	
	The user account that the SnaPrint service is using can be viewed in Control
	Panel, Services.
	
	One way to determine whether this user account has access to the network printer
	is to have a user log onto the SNA Server computer using the same user account
	that the SnaPrint service using. Then, have the user try printing to the network
	printer using an application other than SNA Server (such as Notepad, WordPad,
	and so on). If the user account does not have access to the printer, a message
	similar to "access denied" will appear.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbprb
	
	=============================================================================
	
