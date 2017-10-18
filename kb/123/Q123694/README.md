---
layout: page
title: "Q123694: Canceling the Network Install Wizard Causes Error on Restart"
permalink: kb/123/Q123694/
---

## Q123694: Canceling the Network Install Wizard Causes Error on Restart

	Article: Q123694
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
	
	If you try to add a network client, adapter, protocol, or service, and you click
	the Cancel button before the Network Install Wizard is finished copying files,
	you receive an error message when Windows 95 restarts.
	
	A variety of error messages can be generated. Examples include the following
	messages:
	
	  The driver file could not be found.
	
	  Error loading device driver.
	
	CAUSE
	=====
	
	The error message is displayed because the registry has been updated with the
	new information but the corresponding files were not copied.
	
	RESOLUTION
	==========
	
	Start Windows 95 in Safe mode by pressing the F5 key when you see the "Starting
	Windows 95" message.
	
	After Windows 95 has started, use one of these methods to eliminate the error
	messages:
	
	- Remove the component you just attempted to add.
	
	- Allow the files to be copied to your hard disk when you are prompted.
	
	You can perform either method from within the Network Install Wizard.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	You may also encounter this error because you originally installed Windows 95
	from a network resource that is no longer available, or you no longer have the
	appropriate access privileges.
	
	If this is the case, you should:
	
	- Obtain the appropriate access privileges to the network resource.
	
	- Install the new components from Windows 95 disks or CD-ROM.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
