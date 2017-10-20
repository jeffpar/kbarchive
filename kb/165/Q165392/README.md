---
layout: page
title: "Q165392: WD97: Invalid Page Fault in Pima32.dll w/ Compaq Address Book"
permalink: /kb/165/Q165392/
---

## Q165392: WD97: Invalid Page Fault in Pima32.dll w/ Compaq Address Book

{% raw %}

	Article: Q165392
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you are using the Compaq Address Book in Word 97, the following error message
	may appear when you click Insert Address in the Envelopes and Labels dialog box
	(Tools menu), or when you run the InsertAddress macro:
	
	  Winword caused an Invalid Page Fault in PIMAB32.dll.
	
	
	NOTE: You may also get this error message in Outlook 97. The file Pimab32.dll is
	installed by Compaq Address Book, which is a third-party application not
	associated with Microsoft Corp.
	
	WORKAROUND
	==========
	
	To work around this problem, remove the Compaq Address Book from the user
	profile, using these steps:
	
	1. Close all applications.
	
	2. On the Windows Start menu, point to Settings, and then click Control Panel.
	
	3. Double-click the Mail or Mail And Fax icon.
	
	4. On the Services tab, select Compaq Address Book from the list of services in
	  the current profile, and then click Remove.
	
	5. Click OK.
	
	MORE INFORMATION
	================
	
	For more information about using the Address Book, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q134901 How to Modify the Layout of an Address Book Entry
	
	For more information about using the Outlook Contact List with Word, click the
	Office Assistant, type "contact list address" (without the quotation marks),
	click Search, and then click to view "Insert an address from my personal address
	book."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: outlook word97 ol97
	
	======================================================================
	Keywords          : kbinterop kbmerge 
	Technology        : kbWordSearch kbOutlookSearch kbWord97 kbWord97Search kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : WINDOWS:97
	Hardware          : x86
	
	=============================================================================
	

{% endraw %}
