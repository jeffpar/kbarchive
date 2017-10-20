---
layout: page
title: "Q190719: WD97: No Send To Mail Recipient with Outlook Express/Windows 98"
permalink: /kb/190/Q190719/
---

## Q190719: WD97: No Send To Mail Recipient with Outlook Express/Windows 98

{% raw %}

	Article: Q190719
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta winword word97
	Last Modified: 06-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows, used with:
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click Send To on the File menu in Word, Mail Recipient may be missing
	even though you have Microsoft Outlook Express installed as your default e-mail
	program.
	
	  -or-
	
	You may receive the following error messages when you click Mail Recipient:
	
	  This program has performed an illegal operation and will be shut down. If
	  this problem persists, contact the program vendor.
	
	When you click Details, the following error message appears:
	
	  MAPISP32 caused an invalid page fault in module KERNEL32.DLL at
	  015f:bff7b997.
	
	NOTE: When you click Close to clear the error message, the Inbox Setup Wizard is
	displayed. Click Cancel to quit the Inbox Setup Wizard.
	
	When you click Cancel from the Inbox Setup Wizard, the following message
	appears:
	
	  Are you sure that you want to cancel the setup of Microsoft Exchange? If you
	  cancel now, you can configure Exchange at any time by double-clicking on the
	  "Inbox" icon.
	
	When you click Yes, the following message will appear:
	
	  There are no profiles. Choose the Mail and Fax icon in the Control Panel to
	  create a new profile.
	
	When you click OK to close this message, Word may hang (stop responding). To quit
	Word, press CTRL+ALT+DEL once. From the Close Program dialog box, select
	Microsoft Word and then click End Task. The following message should appear:
	
	  This program is not responding. It may be busy, waiting for a response from
	  you, or it may have stopped running.
	
	Click End Task.
	
	CAUSE
	=====
	
	You may not have the Windows Messaging components installed on your system or
	you may not have Outlook Express set as your default Simple MAPI client.
	
	RESOLUTION
	==========
	
	To resolve this problem, use the appropriate procedure for your situation.
	
	If Mail Recipient Is Missing When You Click Send To on the File Menu
	--------------------------------------------------------------------
	
	If Mail Recipient is missing when you click Send To on the File menu, follow
	these steps to install Windows Messaging:
	
	1. Quit all Windows applications.
	
	2. Install the Windows Messaging component (Wms.exe) located on your Windows 98
	  CD-ROM in the following folder:
	
	  <CD Drive Letter>:\Tools\Oldwin95\Message\US\
	
	  NOTE: Double-click the Wms.exe file to start the Windows Messaging Setup
	  program.
	
	3. After Windows Messaging Setup is complete, restart Windows.
	
	If You Get Error Messages When You Click Mail Recipient
	-------------------------------------------------------
	
	If you receive the error messages listed in the "Symptoms" section of this
	article when you click Mail Recipient (on the File menu, point to Send To),
	follow these steps:
	
	1. Quit Word.
	
	2. Start Microsoft Outlook Express.
	
	3. On the Tools menu, click Options.
	
	4. On the General tab, click to select the "Make Outlook Express my default
	  e-mail program" check box.
	
	5. Click to select the "Make Outlook Express my default Simple MAPI client"
	  check box.
	
	  When you click to select this option, the following message will appear:
	
	  Enabling Outlook Express as your Simple MAPI client will allow you to send
	  documents from other programs using the Send command on the File menu. You
	  should do this if Outlook Express is the only mail program you use.
	
	  Other MAPI-enabled applications such as Microsoft Exchange, Microsoft Outlook,
	  Windows Messaging, and the Mail Merge feature in Microsoft Word will be
	  disabled if you make Outlook Express your Simple MAPI client, but they will
	  work again when you deselect this option.
	
	  Are you sure you want to set Outlook Express as your Simple MAPI client?
	
	  Click Yes.
	
	6. Click OK. The following message will appear:
	
	  The Simple MAPI client has been changed. You may need to restart your
	  computer for this change to take effect.
	
	  Click OK.
	
	7. Quit Outlook Express, and then restart your computer.
	
	When you point to Send To on the File menu in Word and then click Mail Recipient,
	no error messages should appear and an Outlook Express mail message should
	appear.
	
	MORE INFORMATION
	================
	
	For more information about Windows Messaging, please see the Wms-fax.txt file
	located in the "<CD Drive Letter>:\Tools\Oldwin95\Message\US\" folder on
	your Windows 98 CD-ROM.
	
	For additional information about sending a Word document using Outlook Express,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q178478 WD97: Can't Send Word Document with Outlook Express
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
