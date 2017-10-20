---
layout: page
title: "Q143051: How to Install and Use CompuServe Mail with MS Exchange"
permalink: /kb/143/Q143051/
---

## Q143051: How to Install and Use CompuServe Mail with MS Exchange

{% raw %}

	Article: Q143051
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install and use CompuServe Mail with Microsoft
	Exchange.
	
	NOTE: This article assumes that Microsoft Exchange is already installed and that
	you have a valid CompuServe account.
	
	MORE INFORMATION
	================
	
	Getting Started
	---------------
	
	To set up CompuServe Mail in Microsoft Exchange you need the following
	information from your CompuServe account:
	
	- CompuServe directory (used to share scripts and the address book)
	
	- User name
	
	- CompuServe user ID
	
	- Password
	
	- Access phone number
	
	Setting Up CompuServe Mail
	--------------------------
	
	1. In Windows Explorer, double-click the Setup.exe file located in the
	  Drivers\Other\Exchange\Compusrv folder in the Windows 95 CD-ROM.
	
	2. Click OK.
	
	3. When you are prompted, enter your CompuServe account information.
	
	Completing CompuServe Mail Settings in Microsoft Exchange
	---------------------------------------------------------
	
	1. In Microsoft Exchange, click Options on the Tools menu.
	
	2. On the Services tab, click CompuServe Mail, and then click Properties.
	
	3. On the Advanced tab, verify that the Accept Surcharges check box is selected,
	  and then click OK.
	
	Adding a CompuServe Mail Address to Your Personal Address Book
	--------------------------------------------------------------
	
	1. In Microsoft Exchange, click Address Book on the Tools menu.
	
	2. Click the New Entry button.
	
	3. In the Select The Entry Type box, click the appropriate CompuServe mail type
	  ("CompuServe" is the most common type).
	
	4. In the Put This Entry area, click In The, and then click CompuServe Address
	  Book. Click OK.
	
	5. In the New CompuServe Properties dialog box, add the Display Name and E-mail
	  Address entries. For example:
	
	  Display Name: "Lisa Jones" or "Lisa on CIS"
	  E-mail Address: 54321,1234
	
	6. Click OK.
	
	Sending a New Message Using a CompuServe Mail Address
	-----------------------------------------------------
	
	1. Compose a new message.
	
	2. Click To, and type the addressee's display name.
	
	3. Click the Send button to deliver the mail.
	
	Setting Up CompuServe Mail with Microsoft Exchange Remote Mail
	--------------------------------------------------------------
	
	To configure Microsoft Exchange Remote Mail features for CompuServe Mail, follow
	these steps:
	
	1. In Control Panel, double-click the Mail And Fax icon.
	
	2. Click Show Profiles.
	
	3. Click the appropriate profile, and then click Properties.
	
	4. On the Services tab, click CompuServe Mail, and then click Properties.
	
	5. On the Advanced tab, click Scheduled Connect Times.
	
	6. Select the options you want to automatically retrieve mail at the specified
	  times.
	
	  NOTE: Make sure to enable the Disconnect After Download option. If you do not,
	  Microsoft Exchange will remain connected to CompuServe after retrieving your
	  mail.
	
	7. Click OK until you return to Control Panel.
	
	8. Close Microsoft Exchange and then restart it to implement your changes.
	
	Additional Information
	----------------------
	
	To view or change the CompuServe Mail configuration at any time, use either of
	the following methods:
	
	- Use the right mouse button to click the Inbox icon on the desktop, and then
	  click Properties on the menu that appears. Click CompuServe Mail and then
	  click Properties.
	
	- In Microsoft Exchange, click Services on the Tools menu. Click CompuServe
	  Mail, and then click Properties.
	
	Additional query words: cis
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
