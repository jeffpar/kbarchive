---
layout: page
title: "Q142808: Error Message: The Password-List File %1 Is Damaged..."
permalink: /kb/142/Q142808/
---

## Q142808: Error Message: The Password-List File %1 Is Damaged...

	Article: Q142808
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to change your Windows password by double-clicking the Passwords
	icon in Control Panel and then clicking Change Windows Password, you may receive
	the following error message:
	
	  The password-list file %1 is damaged. You need to delete it and create a new
	  one. Do you want to delete the damaged file now?
	
	When you click OK, the damaged password list (.pwl) file may not be deleted. The
	next time you try to change your password, you receive the same error message.
	
	Note that this problem does not affect your ability to log on to a Microsoft
	Windows NT or Novell NetWare server.
	
	CAUSE
	=====
	
	The .pwl file in your Windows folder is damaged, and Windows 95 cannot delete
	the file.
	
	RESOLUTION
	==========
	
	To work around this problem, follow these steps:
	
	1. Rename the damaged .pwl file. To do so, type the following line at a command
	  prompt, and then press ENTER
	
	  " ren c:\<windows>\<username>.pwl
	  c:\<windows>\<username>.xxx " (without the quotation marks)
	
	  where <windows> is the name of your Windows folder and <username>
	  is the user name you use to log on to Windows 95.
	
	  NOTE: If you are using a personal certificate, you should export it before
	  renaming your .pwl file. If you do not do so, it may be unavailable when you
	  send e-mail. For more information, see the following article in the Microsoft
	  Knowledge Base:
	
	  Q190296 Unable to Use Personal Certificates in Outlook Express
	
	2. Restart your computer.
	
	3. When the Enter Network Password or Welcome To Windows dialog box appears,
	  type the password that you normally use, and then click OK. When you are
	  prompted to confirm the password that you entered, type the password again in
	  the Confirm New Password box, and then click OK.
	
	If the Microsoft Client for Microsoft Networks or the Microsoft Client for
	NetWare Networks is your primary network client, the above steps cause your
	Windows password to be the same as your network password. After you perform
	these steps you can change your Windows password as you normally do. To do so,
	double-click the Passwords icon in Control Panel, and then click Change Windows
	Password.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
