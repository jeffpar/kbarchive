---
layout: page
title: "Q142345: WD97: Unable to Fax Mail Merge to Microsoft Fax from Word"
permalink: /kb/142/Q142345/
---

## Q142345: WD97: Unable to Fax Mail Merge to Microsoft Fax from Word

{% raw %}

	Article: Q142345
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbprint word97 kbmerge kbPrintingkbfaq
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install Windows 95 and a version of Word listed at the beginning of
	this article, you cannot merge to fax when you use electronic mail (e-mail).
	
	When you select mail merge to Electronic Mail you may receive the following error
	message.
	
	  Word cannot merge documents that can be distributed by mail or fax without a
	  valid mail address. Choose the Setup button to select a mail address data
	  field.
	
	NOTE: You can send single faxes from Word without error.
	
	CAUSE
	=====
	
	An incorrect entry is contained in the Msmail.ini.
	
	  -or-
	
	The fax number field does not contain a corresponding address in the Exchange or
	Outlook Personal Address Book (Contact List).
	
	RESOLUTION
	==========
	
	To resolve this problem, use the appropriate method for your situation.
	
	Method 1: When Using Exchange Only
	----------------------------------
	
	To correct the Msmail.ini, follow these steps:
	
	1. Click the Start button on the Windows 95 Taskbar.
	
	2. Click Run.
	
	3. Type "msmail.ini" (without the quotation marks), and then click OK.
	
	  This starts Notepad.
	
	4. In the [EFAX Transport] section, add the following line:
	
	        LocalFax=1
	
	5. Save and close Msmail.ini.
	
	You can now merge to electronic fax.
	
	Method 2: Use the Correct Fax Number Format
	-------------------------------------------
	
	To prevent Exchange or Outlook from checking for an address in the Personal
	Address Book, change the phone number format to this format
	
	  [FAX:NUMBER]
	
	as in the following example:
	
	  [FAX:2065550187]
	
	Use this number format (including the brackets) for all fax numbers contained in
	the data source. Any record that does not use this format will return the error
	message. Using this number format will prevent Microsoft Exchange or Outlook
	from checking for a corresponding address in the Personal Address book.
	
	
	
	MORE INFORMATION
	================
	
	For more information about merging to fax using e-mail, click the Office
	Assistant, type "How do I merge to fax using e-mail?," click to view "Print or
	send a mail-merge document," click Search, and then click to view "Distribute
	form letters to electronic-mail or fax addresses."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Help is not installed on your computer, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	  Q171043 OL98: (CW) Microsoft Fax Does Not Process Dialing Properties
	
	
	Additional query words: AWFAX WIN95 mail merge print electronic fax faxing 8.0
	
	======================================================================
	Keywords          : kbinterop kbprint word97 kbmerge kbPrinting kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	

{% endraw %}
