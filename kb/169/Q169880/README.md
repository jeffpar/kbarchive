---
layout: page
title: "Q169880: How to Use Group Policies with MSNDS in Windows 95"
permalink: kb/169/Q169880/
---

## Q169880: How to Use Group Policies with MSNDS in Windows 95

	Article: Q169880
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbnetwork 3rdpartynet msnets win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use group policies on a Novell NetWare network
	running the Novell Directory Service (NDS) with the Microsoft Client for NetWare
	Networks using the Microsoft Service for NetWare Directory Services (MSNDS).
	
	MORE INFORMATION
	================
	
	To use group policies on a Novell NetWare network running NDS with the Microsoft
	Client for NetWare Networks using MSNDS, use the following steps.
	
	NOTE: When you are creating policies for specific NetWare groups, the group
	should be named the full NDS group name (for example, group1.client.novell). If
	the full name is not used, the policy may not be downloaded from the server for
	the group, even though other policies are applied.
	
	1. Enable user profiles on the Windows 95-based computer. To do so, follow these
	  steps:
	
	  a. In Control Panel, double-click Passwords.
	
	  b. Click the User Profiles tab.
	
	  c. Click the "Users can customize their preferences and desktop settings.
	     Windows switches to your personal settings whenever you log in" option to
	     select it.
	
	2. Install group policies on the Windows 95-based computer. To do so, follow
	  these steps:
	
	  a. In Control Panel, double-click Add/Remove Programs, and then click Have
	     Disk on the Windows Setup tab.
	
	  b. Type the path to the Poledit folder in the Copy Manufacturer's Files From
	     box, and then click OK. The Poledit folder is located in the
	     Admin\Apptools folder on the Windows 95 CD-ROM. The path should look like
	     this
	
	  <drive>:\Admin\Apptools\Poledit
	
	     where <drive> is the drive letter assigned to your CD-ROM drive.
	
	  c. Click Group Policies in the Have Disk dialog box, and then click OK.
	
	3. Create the policy file and place it on the server. For information about the
	  creation and setup of user profiles and policies, see Chapter 15, "User
	  Profiles and System Policies," in the Microsoft Windows 95 Resource Kit.
	
	4. Double-click the Network Neighborhood icon, and then double-click Entire
	  Network.
	
	5. Use the right mouse button to click your NDS tree, and then click Properties.
	
	6. Click Enable System Policies on the NDS Administration Settings tab, and then
	  set the Volume and File Path for the .pol file you placed on the server in
	  step 3.
	
	  NOTE: You must be logged in with supervisor rights to view the Administration
	  tab. Also, you need to have trustee rights to the volume and have supervisor
	  privileges on the volume.
	
	7. In Control Panel, double-click Network, and then verify that the Primary
	  Network Logon setting is set to Client For NetWare Networks.
	
	8. Click Client For NetWare Networks, and then click Properties. Verify that the
	  preferred server is set to the server containing the group objects, and then
	  click OK.
	
	9. The Novell NDS must have Bindery Emulation set for every server container
	  that contains the users and groups. For information about how to set Bindery
	  Emulation, refer to your Novell documentation.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 3rdpartynet msnets win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbhowto
	
	=============================================================================
	
