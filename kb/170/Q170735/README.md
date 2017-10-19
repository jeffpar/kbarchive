---
layout: page
title: "Q170735: WD97: Word Hangs After Inserting Outlook Address Book Address"
permalink: /kb/170/Q170735/
---

## Q170735: WD97: Word Hangs After Inserting Outlook Address Book Address

	Article: Q170735
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbenvelopekbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you quit Word, the program stops responding (hangs). This problem occurs
	when you quit Word any time after inserting an address from the Outlook Address
	Book.
	
	
	CAUSE
	=====
	
	This problem occurs because you have WinFax Pro version 8.0 or 8.01 installed on
	your computer, and you have the WinFax Pro service in your default Windows
	Messaging Profile.
	
	WORKAROUND
	==========
	
	To prevent Word from hanging, remove the WinFax Pro service from the profile by
	following these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Mail And Fax.
	
	3. On the Services tab, click the WinFax Pro service.
	
	4. Click Remove, click Yes, and then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The WinFax Pro service in the profile is only used to view the WinFax logs from
	a folder inside of either Microsoft Outlook or Microsoft Exchange. These logs
	can be viewed through the normal WinFax Pro interface. They will not affect the
	functionality of WinFax Pro.
	
	For additional information about inserting Outlook Address Book information,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q141874 WD: Some Contact List Fields Not Available to Word
	
	  Q134901 WD: How to Modify the Layout of an Address Book Entry
	
	  Q167770 OL97: Field Differences Between Outlook and Word Mail Merge
	
	  Q171043 OL98: (CW) Microsoft Fax Does Not Process Dialing Properties
	
	
	Additional query words: 8.0 ol ol97
	
	======================================================================
	Keywords          : kbinterop kbenvelope kbfaq
	Technology        : kbWordSearch kbOutlookSearch kbWord97 kbWord97Search kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
