---
layout: page
title: "Q259766: XADM: Installation of ADC Stops Responding at Schema Update"
permalink: /kb/259/Q259766/
---

## Q259766: XADM: Installation of ADC Stops Responding at Schema Update

	Article: Q259766
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3, on platform(s):
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the Active Directory Connector (ADC) for Exchange Server 5.5
	Service Pack 3 on either a member server or domain controller in a native
	Windows 2000 Server environment, the installation may not work and the following
	error message may be displayed:
	
	  Schema Update failed--busy.
	
	There are no errors logged in the application event log.
	
	CAUSE
	=====
	
	This issue can occur if the computer that is running Schema Master is too slow.
	
	RESOLUTION
	==========
	
	To resolve this issue, gather the necessary information about the system
	topology and forest organization, and then transfer the Schema role to a faster
	computer. For additional information, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q255690 How to View and Transfer FSMO Roles in the Graphical User Interface
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : winnt:5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
