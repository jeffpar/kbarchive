---
layout: page
title: "Q178478: WD97: Can't Send Word Document with Outlook Express"
permalink: /kb/178/Q178478/
---

## Q178478: WD97: Can't Send Word Document with Outlook Express

{% raw %}

	Article: Q178478
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97 kbwdinternetkbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you point to Send To on the File menu, and then click Mail Recipient, Word
	does not use Microsoft Outlook Express to send your e-mail message, even though
	you have set Outlook Express to be your default e-mail editor.
	
	Note: If Mail Recipient is missing when you point to Send To on the File menu, or
	if you get an error message when you click Mail Recipient, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q190716 WD97: Send To Mail Recipient Problem with Outlook Express/Win 95
	
	  Q190719 WD97: No Send To Mail Recipient with Outlook Express/Windows 98
	
	CAUSE
	=====
	
	Microsoft Outlook Express is not correctly set up to work with Word as your
	default e-mail program. The "Make Outlook Express my default Simple MAPI client"
	option has not been selected.
	
	RESOLUTION
	==========
	
	To set Microsoft Outlook Express as your default e-mail program with Word, use
	the following steps:
	
	1. Quit Word and all running e-mail programs. For example, quit Microsoft
	  Exchange or Microsoft Outlook.
	
	2. In Microsoft Outlook Express, click Options on the Tools menu.
	
	3. Click to select the General tab.
	
	4. Click to select the "Make Outlook Express my default e-mail program" check
	  box.
	
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
	
	  The Simple MAPI client has been changed. You may need to restart your machine
	  for this change to take effect.
	
	  Click OK.
	
	7. Quit Outlook Express, and then restart your computer.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q178077 How to Set Outlook Express as Your Default Simple MAPI Client
	
	  Q178481 WD97: Errors Accessing the Address Book Icon
	
	
	Additional query words: IE IE4 file send
	
	======================================================================
	Keywords          : word97 kbwdinternet kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
