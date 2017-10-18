---
layout: page
title: "Q294393: Error &quot;No LU in LU Group Free&quot; Occurs When Starting 3270 Applet"
permalink: kb/294/Q294393/
---

## Q294393: Error &quot;No LU in LU Group Free&quot; Occurs When Starting 3270 Applet

	Article: Q294393
	Product(s): Microsoft SNA Server
	Version(s): 3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 17-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the 3270 client is started, the error message "No LU in LU Group Free"
	appears.
	
	CAUSE
	=====
	
	In this case, SNA Server/Host Integration Server 2000 is working as designed.
	The error is caused by the application's Associated Printer LU (logical unit)
	feature. All display LUs are associated with a corresponding printer LU. Because
	all of the printer LUs are connected successfully to printer sessions, the
	associated LU feature blocks the connection to the associated display LU, and
	the "No LU in LU Group Free" message is returned.
	
	NOTE: This error message may also appear if there are no LUs available, which is
	an unrelated issue.
	
	RESOLUTION
	==========
	
	To resolve the problem, disassociate the printer LUs from the display LUs and
	save the Com.cfg file.
	
	MORE INFORMATION
	================
	
	Beginning with SNA Server 3.0 Service Pack 2 (SP2), the SNA Server does not
	allow a user to open a 3270 display LU if its associated printer is in use by
	another user. For additional information, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q172637 User Able to Open Display Session If Associated Printer in Use
	
	Users who have host applications with direct relationships between display LUs
	and printer LUs can associate printers with the display LUs. The associated
	printer feature, however, was designed for 3270 print emulators only and not for
	SNA Server print service sessions.
	
	For additional information, see the following:
	
	  Chapter 3 of the Administration Guide. The Administration Guide is included
	  with the Software Development Kit (SDK), which you must select to install
	  during setup.
	
	  Q172637 User Able to Open Display Session If Associated Printer in Use
	
	  Q195063 Common User ID Problem When Using Associated Printer Feature
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ300SP3 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	
	=============================================================================
	
