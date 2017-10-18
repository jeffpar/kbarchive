---
layout: page
title: "Q171267: How to Install Remote Access Service in Windows NT 3.51"
permalink: kb/171/Q171267/
---

## Q171267: How to Install Remote Access Service in Windows NT 3.51

	Article: Q171267
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:3.51
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install Remote Access Service (RAS) in Windows NT
	Workstation version 3.51.
	
	MORE INFORMATION
	================
	
	To install RAS, follow these steps:
	
	1. In Control Panel, double-click Network.
	
	  NOTE: If you have not set up networking on your computer, you are prompted to
	  do so at this time. Click Yes to install networking, and then continue
	  installing RAS.
	
	2. Click Add Software.
	
	3. In the Network Software box, click Remote Access Service, and then click
	  Continue.
	
	4. Click the appropriate port, and then click Configure.
	
	  NOTE: If you have not installed a modem, you are prompted to do so at this
	  time. Click Yes to install your modem, and then continue installing RAS.
	
	5. In the Attached Device box, click the appropriate modem.
	
	6. In the Port Usage box, click the appropriate option, and then click OK.
	
	7. Click Network, verify your network configuration, and then click OK.
	
	8. Click Continue, and then click OK until all dialog boxes are closed. Restart
	  the computer when prompted.
	
	To start the Remote Access Server Service, follow these steps:
	
	1. In the Remote Access group, double-click Remote Access Admin.
	
	2. On the Server menu, click Start Remote Access Service.
	
	To connect using Remote Access Service, follow these steps:
	
	1. In the Remote Access group, double-click Remote Access.
	
	2. If you have not created a phone book entry, you are prompted to do so. If you
	  have created a phone book entry, click New.
	
	3. Type the name and phone number.
	
	4. To configure the modem, X.25, ISDN, network, or security, click Advanced.
	
	5. Click OK to save the entry.
	
	6. In the Remote Access dialog box, click the appropriate entry, and then click
	  Dial.
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351
	Version           : WINDOWS:3.51
	Issue type        : kbhowto
	
	=============================================================================
	
