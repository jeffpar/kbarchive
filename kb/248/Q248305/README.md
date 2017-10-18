---
layout: page
title: "Q248305: XCLN: Japanese Characters Appear as Question Marks"
permalink: kb/248/Q248305/
---

## Q248305: XCLN: Japanese Characters Appear as Question Marks

	Article: Q248305
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a message that contains Japanese characters is received by a Microsoft
	Windows NT 4.0 Workstation, English version, the Subject field contains a
	question mark for each Japanese character.
	
	CAUSE
	=====
	
	The receiving computer is not configured with the proper Japanese settings and
	components, code page, language pack, and such.
	
	The To, From, BCC, and Subject fields are in the header of the message. The
	header is composed using the code page of the sending computer. If the receiving
	computer does not have all Japanese components necessary to display Japanese
	characters in the header of the message, you will see question marks for each
	Japanese character.
	
	WORKAROUND
	==========
	
	This workaround allows the Japanese characters to be displayed when the message
	is opened only. The message view for the Inbox will still not display Japanese
	characters.
	
	You must install these components in this order:
	
	1. Install Windows NT 4.0, English version.
	
	2. Log on as the local administrator and install the Japanese Language Pack 1.0.
	  This can be found on the Windows NT Server CD in the LangPack folder.
	  Right-click Japanese.inf and click Install.
	
	3. Reboot.
	
	4. Log in as local administrator and set the Regional Setting to Japanese.
	
	5. Set Japanese as the System Default Locale.
	
	6. Click Yes to Skip Copying Files.
	
	7. Restart the computer.
	
	8. Reinstall the Service Pack.
	
	9. Install Microsoft Internet Explorer 5.01, and include the Japanese Proofing
	  Tools. You will have to do a custom install.
	
	10. Install Microsoft Office 2000.
	
	11. Install the Japanese Language Pack from CD 2.
	
	12. Leave the display menus and Help as English.
	
	13. Enable the Japanese language.
	
	14. Set the default language to English.
	
	15. Reboot.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbZNotKeyword3
	Version           : WINDOWS:2000
	
	=============================================================================
	
