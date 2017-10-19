---
layout: page
title: "Q190470: How to Properly Install Outlook 98 in an SBS Environment"
permalink: /kb/190/Q190470/
---

## Q190470: How to Properly Install Outlook 98 in an SBS Environment

	Article: Q190470
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0, 98
	Operating System(s): 
	Keyword(s): sbs
	Last Modified: 27-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Small Business Server client with Outlook 97 should not be installed on a
	computer with Outlook 98 already installed. This article describes the correct
	way to install Outlook 98 on a Small Business Server client with or without
	Outlook 97.
	
	MORE INFORMATION
	================
	
	OUTLOOK 98 IS ALREADY INSTALLED
	-------------------------------
	
	Use one of the following methods to install Small Business Server client software
	on a computer with Outlook 98 already installed:
	
	- (Recommended) - Remove all Outlook occurrences before installing Small
	  Business Server Client software. This is necessary if Outlook 98 was
	  installed using the Internet Mail option instead of the Corporate Workgroup
	  option. If Small Business Server Outlook 97 client was installed over Outlook
	  98, you must perform the following steps (use the same steps to remove
	  Outlook 97):
	
	  1. Click the Start button, point to Settings, click Control Panel, and then
	     double-click Add/Remove Programs.
	
	  2. Click Microsoft Outlook 98 and then click Add/Remove.
	
	  3. When Setup runs, click Remove All.
	
	  4. If prompted, choose Remove All Shared Components.
	
	  5. Complete Setup.
	
	  Perform the following steps to remove Outlook 97 from Office 97 if Outlook 98
	  was also installed:
	
	  1. Click the Start button, point to Settings, click Control Panel, and then
	     double-click Add/Remove Programs.
	
	  2. Click Microsoft Outlook 97 and then click Add/Remove.
	
	  3. From Office Setup, click Add/Remove components.
	
	  4. From the checklist, click Outlook so that it is not selected.
	
	  5. Complete setup.
	
	  If Small Business Server client is not installed, install it now. The default
	  settings will install Outlook 97 again. After Setup is complete, go to the
	  first bullet in the OUTLOOK 98 IS NOT INSTALLED section below.
	
	  If Small Business Server client is already installed, go to the second bullet
	  in the OUTLOOK 98 IS NOT INSTALLED section below.
	
	- Install Small Business Server client software without Outlook 97. This option
	  should only be used if the Corporate or Workgroup option was used to install
	  Outlook 98. Perform the following steps to create a Small Business Server
	  client Setup disk without Outlook 97:
	
	  1. From Small Business Server Console, click the More Tasks tab, and then
	     click Manage Computers.
	
	  2. Click Set Up A Computer.
	
	  3. Click the user account and enter a computer name when prompted.
	
	  4. Click Operating System and then click Next.
	
	  5. Click the Microsoft Outlook E-mail Client check box so that the check is
	     removed and then click Next.
	
	  6. Follow the steps on your screen to complete the Setup disk.
	
	  7. Proceed with the client installation on the client computer.
	
	  8. After the Small Business Client software (without Outlook) is installed,
	     click the Start button, point to Settings, click Control Panel, and then
	     double-click Mail (Mail and Fax).
	
	  9. Click Microsoft Exchange Service and then click Properties.
	
	1. Specify your Exchange server name and this client computer's user name, click
	  Check names, click Apply, and then click OK.
	
	2. Exit the Mail (Mail and Fax) utility and start Outlook.
	
	OUTLOOK 98 IS NOT INSTALLED
	---------------------------
	
	- Perform the following steps if Outlook 97 is already installed on the client
	  and is setup to connect to the Small Business Server Exchange server:
	
	  1. Insert the Outlook 98 CD into the client computer.
	
	  2. Run Setup and answer Yes to the Outlook Usage question. This option
	     imports your outlook 97 settings.
	
	- Perform the following steps to install Outlook 98 on a computer that does not
	  have Outlook 97 installed:
	
	  1. Insert the Outlook 98 CD into the client computer.
	
	  2. Run Setup.
	
	  3. Specify either Outlook (not Outlook Express) or None Of The Above as the
	     email client.
	
	  4. On the Installation Options page, select the level to install.
	
	  5. On the Email Service Options page, select Corporate or Workgroup.
	
	  6. Complete setup.
	
	  7. Click the Start button, point to Settings, click Control Panel, and then
	     double-click Mail (Mail and Fax).
	
	  8. Click Microsoft Exchange Service and then click Properties.
	
	  9. Specify your Exchange server name and this client computer's user name,
	     click Check names, click Apply, and then click OK.
	
	  10. Exit the Mail (Mail and Fax) utility and start Outlook.
	
	NOTE: If any other email service option is selected (such as Internet Mail)
	Outlook 98 installs a fax service that renders the Small Business Server fax
	client unusable. To avoid this, only install Outlook 98 with the Corporate Email
	Service option.
	
	Additional query words: 4.00a 98 smallbiz ol97 ol98
	
	======================================================================
	Keywords          : sbs 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : WinNT:4.0, 98
	Issue type        : kbinfo
	
	=============================================================================
	
