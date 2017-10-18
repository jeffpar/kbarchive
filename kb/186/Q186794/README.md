---
layout: page
title: "Q186794: Remote Admin with MMC Causes Error: Unable to Enumerate Files"
permalink: kb/186/Q186794/
---

## Q186794: Remote Admin with MMC Causes Error: Unable to Enumerate Files

	Article: Q186794
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to remotely administer the Internet Information Server (IIS) 4.0
	through the Microsoft Management Console (MMC), the following error message may
	appear:
	
	  Unable to enumerate files and directories because the following error
	  occurred:
	
	  The network name cannot be found.
	
	CAUSE
	=====
	
	The C$ share has been removed from the system. The MMC uses the $ shares to
	attach to the remote box and enumerate the files and directories to be displayed
	in the interface.
	
	WORKAROUND
	==========
	
	To work around this problem, reshare the drives on the remote server, making
	sure the "$" character is added to the end of the drive letter.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
