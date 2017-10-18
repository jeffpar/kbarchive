---
layout: page
title: "Q177255: Cannot Change the Default MSN E-mail Program to Outlook Express"
permalink: kb/177/Q177255/
---

## Q177255: Cannot Change the Default MSN E-mail Program to Outlook Express

	Article: Q177255
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.5,2.51,2.52,2.6,4.0,4.01,4.01 Service Pack 1,4.01 Service Pack 2,5,5.01
	Operating System(s): 
	Keyword(s): kbenv kbmsn
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSN versions 2.5, 2.51, 2.52, 2.6 
	- Microsoft Internet Explorer versions 4.0, 4.01, 4.01 Service Pack 1, 4.01 Service Pack 2, 5 for Windows 95 
	- Microsoft Internet Explorer versions 4.0, 4.01 Service Pack 2, 5, 5.01 for Windows 98 
	- Microsoft Outlook Express versions 4.0, 5 for Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you set your default e-mail program as Microsoft Outlook Express on the
	Programs tab in the Internet Properties dialog box, Microsoft Outlook 97 may
	continue to open when you attempt to send or receive e-mail on MSN, The
	Microsoft Network.
	
	CAUSE
	=====
	
	Microsoft Outlook may still be set as the default MSN e-mail program.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To set Outlook Express as the default MSN e-mail program, use Registry Editor to
	locate the Client value setting in the following registry key:
	
	HKEY_CURRENT_USER\Software\Microsoft\MSN\Mail
	
	Change the Client value setting to Outlook Express.
	
	MORE INFORMATION
	================
	
	For more information about how to configure Outlook Express for MSN, see the
	following article in the Microsoft Knowledge Base: Q173952 <A0> How to Configure
	Outlook Express for The Microsoft Network
	
	Additional query words: msnet msnetwork microsoft-net m.s.n. outexw95
	
	======================================================================
	Keywords          : kbenv kbmsn 
	Technology        : kbIEsearch kbMSNSearch kbOutlookExpressSearch kbIE95Search kbIE500Search kbZNotKeyword3 kbIE98Search kbOutlookExpress95Search kbIE400Win95 kbIE401Win95 kbIE401Win95SP1 kbIE401Win95SP2 kbIE500Win95 kbIE400Win98 kbIE401Win98SP2 kbIE500Win98 kbIE501Win98 kbOutlookExpress500Win95 kbOutlookExpress400Win95 kbMSN252 kbMSN251 kbMSN260 kbMSN250
	Version           : WINDOWS:2.5,2.51,2.52,2.6,4.0,4.01,4.01 Service Pack 1,4.01 Service Pack 2,5,5.01
	Issue type        : kbprb
	
	=============================================================================
	
