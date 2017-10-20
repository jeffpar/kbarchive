---
layout: page
title: "Q189932: WD97: Merge To Electronic Fax Option Missing"
permalink: /kb/189/Q189932/
---

## Q189932: WD97: Merge To Electronic Fax Option Missing

{% raw %}

	Article: Q189932
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbdta word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to merge to fax, the Electronic Fax option (in the Merge dialog box
	in Microsoft Word) is missing.
	
	CAUSE
	=====
	
	This option is not available if you have installed the Internet Mail Only (IMO)
	version of Microsoft Outlook 98 and the Symantec WinFax Starter Edition in
	Outlook 98 Setup.
	
	RESOLUTION
	==========
	
	NOTE: Do not install Microsoft Fax to try to correct this problem. If you do,
	you will receive various error messages when you try to fax from Word or Outlook
	98. For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q189928 WD97: Errors Attempting to Fax After Installing Outlook 98
	
	  Q187978 OL98: (IMO) Can't Fax After Mail Merge from Microsoft Word
	
	  Q195881 OL98: (IMO) How to Mail Merge to Outlook Fax Recipients
	
	
	When you mail merge in Word with Outlook 98 IMO, use the Merge To Electronic Mail
	option.
	
	To successfully merge to fax using the Electronic Mail option, you must specify
	the fax number in your data source in the Symantec WinFax Starter Edition fax
	number format. The Symantec WinFax Starter Edition fax number format has the
	following syntax:
	
	  Fax@<fax number>
	
	where <fax number> is the fax number of the recipient. For example, a long
	distance number will take this form:
	
	  Fax@1 ### ###-####
	
	NOTE: The 1 and the three-digit area code numbers are optional. To dial a long
	distance fax number, be sure to include 1 and the area code. To dial a local
	number, use either the seven- or ten-digit fax number.
	
	MORE INFORMATION
	================
	
	With Outlook 98 IMO installed and an Internet e-mail account with an Internet
	service provider, you can exchange messages with anyone on the Internet.
	Messages you send are submitted to an e-mail server that supports the SMTP
	Internet standard, and then are delivered to the recipient.
	
	When you install Outlook 98 IMO, you can also install the Symantec WinFax Starter
	Edition to be able to send faxes. If you already have Microsoft Fax installed
	when you install Outlook 98 IMO, Setup will detect Microsoft Fax and will
	replace it automatically with the Symantec WinFax Starter Edition.
	
	Additional query words: ol98 8.0
	
	======================================================================
	Keywords          : kbinterop kbdta word97 kbmerge 
	Technology        : kbWordSearch kbOutlookSearch kbWord97 kbWord97Search kbZNotKeyword2 kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
