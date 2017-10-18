---
layout: page
title: "Q161817: WD97: &quot;Word Could Not Insert the Address...&quot; Error"
permalink: kb/161/Q161817/
---

## Q161817: WD97: &quot;Word Could Not Insert the Address...&quot; Error

	Article: Q161817
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbfield
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert an address from the address book, you receive the following
	error message:
	
	  Word could not insert the address. One or more address fields are missing
	  from the selected address book. Pick another address book or change your
	  address book layout and try again.
	
	CAUSE
	=====
	
	This error message can be caused by any of the following conditions:
	
	- Some fields in Microsoft Outlook do not contain messaging application program
	  interface (MAPI) properties; the converter that Word uses to interpret
	  address book fields (Wwpab.cnv) cannot read these fields.
	
	  -or-
	
	- The field you are using is invalid or incorrect.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article.
	
	
	MORE INFORMATION
	================
	
	The following fields from Microsoft Outlook are not available for import into
	Microsoft Word 97 for Windows by using the Address Book:
	
	- <PR_CELLULAR_TELEPHONE_NUMBER>
	
	- <PR_COMMENT>
	
	- <PR_INITIALS>
	
	- <PR_PRIMARY_TELEPHONE_NUMBER>
	
	- <PR_LOCATION>
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q164401 OL97: Fields Missing Inserting a Contact into Word
	
	
	  Q134901 How to Modify the Layout of an Address Book Entry
	
	  Q141874 Some Contact List Fields Not Available to Word
	
	Additional query words: 8.0 word8 word97
	
	======================================================================
	Keywords          : kbinterop kbfield 
	Technology        : kbWordSearch kbOutlookSearch kbWord97 kbWord97Search kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : WINDOWS:97
	Hardware          : x86
	
	=============================================================================
	
