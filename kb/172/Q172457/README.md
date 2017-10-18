---
layout: page
title: "Q172457: MSN Home Page Is Not Loaded When Starting Internet Explorer"
permalink: kb/172/Q172457/
---

## Q172457: MSN Home Page Is Not Loaded When Starting Internet Explorer

	Article: Q172457
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.5,2.51,2.52,2.6,5.0
	Operating System(s): 
	Keyword(s): kbenv kbmsnkbfaq
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.5, 2.51, 2.52, 2.6, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you join MSN Internet Access and you attempt to connect to the Internet
	using Internet Explorer, another Internet service provider's home page may
	appear on the screen.
	
	CAUSE
	=====
	
	Microsoft licenses Internet Explorer to many Internet service providers who
	customize Internet Explorer for their members. The MSN Setup program may not
	overwrite these customizations.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following steps:
	
	Internet Explorer 3.x
	---------------------
	
	1. Right-click the Internet icon on the desktop, and then click Properties.
	
	2. Click the Connection tab.
	
	3. Click the Connect to the Internet as needed check box to select it.
	
	4. In the Use the following Dial-Up Networking Connection box, click MSN.
	
	5. Click the Navigation tab.
	
	6. Click Use Default to use http://msn.com or type http://msnmember.msn.com in
	  the Address box, to use the MSN Internet Access Home page as your default.
	
	7. Click OK.
	
	Internet Explorer 4.x, 5.x
	--------------------------
	
	1. Right-click the Internet Explorer icon on the desktop, and then click
	  Properties.
	
	2. On the General tab, under the Home page section, type the address of the Web
	  site you would like to use as your home page.
	
	3. You can also click Use Default to use http://msn.com or type
	  http://msnmember.msn.com in the Address box, to use the MSN Internet Access
	  Home page.
	
	4. Click OK.
	
	MORE INFORMATION
	================
	
	After you perform the steps in the resolution section, you may still experience
	problems displaying content in MSN. This is most likely caused by the
	customizations made to Internet Explorer by your previous Internet service
	provider. To remove these customizations, you need to reinstall Internet
	Explorer.
	
	Reinstall Internet Explorer
	
	1. Insert the MSN CD-ROM into the CD-ROM drive. Press and hold down the SHIFT
	  key when you insert the CD-ROM to prevent the MSN Setup program from starting
	  automatically.
	
	2. Double-click My Computer.
	
	3. Right-click the MSN (CD-ROM drive) icon, and then click Explore.
	
	4. Double-click the Ie40 folder or the Ie401 folder (or the version of Internet
	  Explorer that you have on your computer).
	
	5. Double-click the Ie4setup.exe file. Follow the instructions on the screen to
	  install Internet Explorer.
	
	6. When you receive the message stating that the most recent versions of some or
	  all items are already installed, click Reinstall All Components, and then
	  click OK.
	
	7. When you are prompted to restart the computer, do so.
	
	Additional query words: msnet msnetwork microsoft-net m.s.n.
	
	======================================================================
	Keywords          : kbenv kbmsn kbfaq
	Technology        : kbMSNSearch kbMSN500 kbMSN252 kbMSN251 kbMSN260 kbMSN250
	Version           : WINDOWS:2.5,2.51,2.52,2.6,5.0
	Issue type        : kbprb
	
	=============================================================================
	
