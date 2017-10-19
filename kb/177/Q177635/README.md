---
layout: page
title: "Q177635: XADM: How to Set Up a Disaster Recovery Server for Dir.edb"
permalink: /kb/177/Q177635/
---

## Q177635: XADM: How to Set Up a Disaster Recovery Server for Dir.edb

	Article: Q177635
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may need to set up a Microsoft Exchange Server computer to recover
	information from the Exchange directory service contained in the Dir.edb file.
	
	MORE INFORMATION
	================
	
	The Dir.edb file is Windows NT machine name specific and thus it can only be
	restored to a server with the same computer name.
	
	NOTE: The following steps will allow you to construct a server offline. The
	resulting server will not be usable in your production Exchange environment.
	
	Steps to build a Dir.edb recovery server:
	
	1. In the production domain where the Exchange service account resides, install
	  a computer as a backup domain controller (BDC) with the same version of
	  Microsoft Windows NT Server and service pack level as the production Exchange
	  Server computer.
	
	2. Make sure that the recovery server computer has enough free disk space and
	  any other devices that are necessary, such as a tape drive or CD-ROM drive.
	  Take this computer offline by isolating it from the production network on a
	  hub.
	
	3. Promote this server to a primary domain controller (PDC) and reboot the
	  computer.
	
	4. Go to Control Panel, and in the Network tool, click the Identification tab.
	  In the Network Settings dialog box, click Change button next to the computer
	  name. Type the new name in the Computer Name dialog box, and then click OK,
	  first verifying that you are not on the production network. Restart the PDC
	  for the name change to take effect.
	
	5. Reboot the server. Now the recovery server is running the same version of
	  Windows NT Server as the production Exchange Server computer.
	
	6. Install Microsoft Exchange Server as a new site, but use the same
	  organization and site name as the production Exchange environment. Make sure
	  to select the same service account as the production domain to use for the
	  Exchange services.
	
	7. Update to the same service pack level as the production Exchange Server
	  computer.
	
	8. Restore from backup the previous Microsoft Exchange directory store and/or
	  the Microsoft Exchange information store.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
