---
layout: page
title: "Q190716: WD97: Send To Mail Recipient Problem with Outlook Express/Win 95"
permalink: /kb/190/Q190716/
---

## Q190716: WD97: Send To Mail Recipient Problem with Outlook Express/Win 95

{% raw %}

	Article: Q190716
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:4.0,4.01,97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 05-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows, used with:
	   - the operating system: Microsoft Windows 95 
	- Microsoft Internet Explorer versions 4.0, 4.01 for Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you click Send To on the File menu in Word, Mail Recipient may be missing
	even though you have Microsoft Outlook Express installed as your default e-mail
	program.
	
	  -or-
	
	The following error messages may appear when you click Mail Recipient:
	
	  Cannot load Extended MAPI library mapi32.dll.
	
	  -and-
	
	  Mail is not installed on your system.
	
	CAUSE
	=====
	
	You may not have the Windows Messaging components installed on your system, or
	you do not have Outlook Express set as your default e-mail program.
	
	RESOLUTION
	==========
	
	To resolve this problem, use the appropriate procedure for your situation.
	
	If Mail Recipient Is Missing When You Click Send To on the File Menu
	--------------------------------------------------------------------
	
	If Mail Recipient is missing when you point to Send To on the File menu in Word,
	follow these steps:
	
	1. Quit all Windows programs.
	
	2. On the Start menu, point to Settings, and then click Control Panel.
	
	3. Double-click Add/Remove Programs.
	
	4. On the Windows Setup tab, select Windows Messaging and then click Details.
	
	5. Select Windows Messaging and then click OK.
	
	  NOTE: The other two options, Internet Mail Services and Microsoft Mail
	  Services, do not need to be selected.
	
	6. On the Windows Setup tab, click Apply.
	
	  NOTE: Windows 95 Setup will copy the required components to your computer.
	
	7. Click OK after Windows Setup has completed to close the Add/Remove Programs
	  Properties dialog box.
	
	8. Close Control Panel and then restart your computer.
	
	  Note: To restart your computer, click the Start button and then click
	  Shutdown. When the Shut Down Windows dialog box appears, click to select
	  Restart and then click OK.
	
	If You Get Error Messages When You Click Mail Recipient
	-------------------------------------------------------
	
	If you receive the error messages listed in the "Symptoms" section of this
	article when you click Mail Recipient (on the File menu, point to Send To),
	follow these steps:
	
	1. Quit Word.
	
	2. Do one of the following:
	
	   - Start Microsoft Outlook Express. When you receive the following message,
	     click Yes.
	
	  Outlook Express is not currently your default mail client. Would you like to
	  make it your default mail client?
	
	  -or-
	
	   - In Microsoft Outlook Express, click Options on the Tools menu. On the
	     General tab, select "Make Outlook Express my default e-mail program," and
	     then click OK.
	
	3. Restart Word.
	
	When you point to Send To on the File menu in Word and then click Mail Recipient,
	no error messages should appear and a Outlook Express mail message should
	appear.
	
	MORE INFORMATION
	================
	
	For additional information about sending a Word document using Outlook Express,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q178478 WD97: Can't Send Word Document with Outlook Express
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:4.0,4.01,97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
