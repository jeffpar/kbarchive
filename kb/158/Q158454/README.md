---
layout: page
title: "Q158454: How to Install Remoteboot on Windows NT 4.0"
permalink: kb/158/Q158454/
---

## Q158454: How to Install Remoteboot on Windows NT 4.0

	Article: Q158454
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the steps required to install the Remoteboot service on a
	Windows NT 4.0 Server.
	
	MORE INFORMATION
	================
	
	Requirements: Access to a Windows NT 4.0 Server compact disc.
	
	Installing The Remoteboot Service
	---------------------------------
	
	1. Install the NetBEUI and DLC protocols on the server. These protocols are
	  required to run the Remoteboot service. For more information, please see the
	  following article here in the Microsoft Knowledge Base:
	
	  Article-ID: Q158278
	  TITLE : Explanation of How Windows NT Server 4.0 Remoteboot Works
	
	2. From the Start menu select Settings and then Control Panel.
	
	3. Once the Control Panel appears, click the Network icon.
	
	4. In the Network Setting dialog box, choose the Services tab and then select
	  the Add button.
	
	5. In the Select Network Service dialog box, choose the Remoteboot Service.
	
	6. In the Remoteboot Setup dialog box, enter the complete path and directory
	  name where the remoteboot directory is to be installed. By default this
	  directory is <Systemroot>\RPL.
	
	7. Click OK.
	
	8. Complete the dialog boxes that appear.
	
	9. Once you have completed the install of the Remoteboot service, you will need
	  to start Remoteboot Manager.
	
	10. From the Menu bar, choose Configure and then Fix Security. The Fix Security
	  process will create the RPLUSER local group and also assign the proper
	  permissions throughout the RPL directory.
	
	For more information on remoteboot see the Windows NT 4.0 Resource Kit.
	
	Additional query words: nt rpl remote boot
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
