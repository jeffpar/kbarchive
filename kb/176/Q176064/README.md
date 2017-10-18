---
layout: page
title: "Q176064: Cannot Change the Default MSN E-mail Program to Outlook 97"
permalink: kb/176/Q176064/
---

## Q176064: Cannot Change the Default MSN E-mail Program to Outlook 97

	Article: Q176064
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.5,2.51,2.52,2.6,5.0,97
	Operating System(s): 
	Keyword(s): kbenv kbmsnkbfaq
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSN versions 2.5, 2.51, 2.52, 2.6, 5.0 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set your default e-mail program as Microsoft Outlook on the Programs
	tab in the Internet Properties dialog box, Microsoft Outlook Express may
	continue to open when you attempt to send or receive e-mail on MSN, The
	Microsoft Network.
	
	CAUSE
	=====
	
	Outlook Express may still be set as the default MSN e-mail program.
	
	RESOLUTION
	==========
	
	To set Outlook 97 as the default MSN e-mail program, follow these steps:
	
	1. Sign in to MSN.
	
	2. Connect to the following MSN Web site:
	  http://memberservices.msn.com/supportandhelp/msnfaqs/faq/mail/Ol97/OL9702.htm
	  or go to the following links to download the IMEP directly:
	
	  http://fdl.msn.com/public/setup/components/outlimep.exe
	
	  http://fdl.msn.com/public/setup/components/setimep.exe
	
	3. Follow the instructions on the screen to install and configure the Internet
	  Mail Enhancement Pack (IMEP) for Outlook 97.
	
	4. Complete all the steps listed on this Web site.
	
	
	MORE INFORMATION
	================
	
	For more information about installing the Internet Mail Enhancement Patch, see
	the following article in the Microsoft Knowledge Base:
	
	  Q174062 Internet Mail Enhancement Patch Needed to Use OL 97 With MSN
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	This issue can also occur if the Windows registry contains incorrect information.
	To resolve this issue follow these steps.
	
	To set Microsoft Outlook 97 as the default MSN e-mail program, use Registry
	Editor to locate the Client value setting in the following registry key:
	
	HKEY_CURRENT_USER\Software\Microsoft\MSN\Mail
	
	Change the Client value setting to Microsoft Outlook.
	
	Additional query words: msnet msnetwork microsoft-net imep outexw95
	
	======================================================================
	Keywords          : kbenv kbmsn kbfaq
	Technology        : kbOutlookSearch kbMSNSearch kbOutlook97Search kbZNotKeyword3 kbMSN500 kbMSN252 kbMSN251 kbMSN260 kbMSN250
	Version           : WINDOWS:2.5,2.51,2.52,2.6,5.0,97
	Issue type        : kbprb
	
	=============================================================================
	
