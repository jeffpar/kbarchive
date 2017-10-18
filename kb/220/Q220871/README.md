---
layout: page
title: "Q220871: SNA Server LUs Assigned To Authenticated Users Group Do Not Work"
permalink: kb/220/Q220871/
---

## Q220871: SNA Server LUs Assigned To Authenticated Users Group Do Not Work

	Article: Q220871
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11SP1,2.11SP2,3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11SP1, 2.11SP2, 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an SNA Client application, such as a 3270 or 5250 emulator, attempts to
	access a LU, and the LU is assigned to the built-in Authenticated Users group in
	SNA Server Manager, an error message may be returned to the application
	indicating that a problem has occurred. When using the 5250 or 3270 applet, the
	following error message will be presented in a dialog box on the client
	workstation:
	
	  5250 Applet
	  The Remote LU Name Specified For This Session Is Invalid.
	  [0001] [000015B]
	
	  3270 Applet
	  ERROR - Your User Record Is Not Configured.
	  Please Contact Your System Administrator
	
	NOTE: Third-party emulators may not display the same error messages.
	
	CAUSE
	=====
	
	The SNA Server is not properly handling resources assigned to the built-in
	Authenticated Users group.
	
	WORKAROUND
	==========
	
	Do not assign SNA resources to the built-in Authenticated Users group. Use other
	Windows NT groups, such as Everyone, as an alternative.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	2.11, 2.11SP1, 2.11SP2, 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1, 4.0SP2.
	
	MORE INFORMATION
	================
	
	To enable an SNA user to work with a specific 3270 LU, an administrator must
	associate the LU with a corresponding user account or a group to which the user
	belongs. In general, if LU resources are assigned to groups, all members of that
	group can use the corresponding LUs to access host-based applications. Groups
	can simplify the configuration of multiple users, whereas user accounts allow
	SNA resources to be assigned more individually. APPC LUs can be defaulted to
	users and groups as well.
	
	A new built-in Windows NT group called Authenticated Users is created in the
	Security Account Manager (SAM) database when installing Windows NT 4.0 Service
	Pack 3 or later. You can select this group from the drop-down list when you
	attempt to add a group to the Configured Users folder in SNA Server Manager.
	Some SNA administrators may be tempted to use this new group when assigning or
	defaulting LUs to respective SNA users.
	
	NOTES: For additional information about Authenticated Users group, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q143474 Restricting Information Available to Anonymous Logon Users
	
	For more information on how SNA Server prioritizes accounts when determining
	default LUs, please see the online documentation.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400
	Version           : WINDOWS:2.11,2.11SP1,2.11SP2,3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbprb
	
	=============================================================================
	
