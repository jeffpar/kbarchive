---
layout: page
title: "Q193131: XCLN: Using Alias Name in Find Fails to Find Items"
permalink: /kb/193/Q193131/
---

## Q193131: XCLN: Using Alias Name in Find Fails to Find Items

{% raw %}

	Article: Q193131
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Find feature, located on the Tools menu, in the Microsoft
	Exchange or Outlook clients, the display name or part of the display name must
	be used in the To or From text box. Using alias names will not find items to or
	from the user or distribution list.
	
	WORKAROUND
	==========
	
	You may use either of the following methods to successfully find items to or
	from a particular recipient or distribution list.
	
	- Choose the display name of the user or distribution list from the Global
	  Address Book by selecting the Sent To or From button.
	
	  NOTE: When using Outlook 98, you must select the Advanced button in the Find
	  window.
	
	- Copy the display name of the user from an item and paste it in the To or From
	  text box.
	
	NOTE: The alias name cannot be resolved using CTRL+K in any of the Find dialog
	boxes.
	
	MORE INFORMATION
	================
	
	Example 1
	---------
	
	Mailbox Display Name = Katherine Smith
	Alias Name = Kaths
	
	The following query will not find items from Katherine Smith:
	
	  Find From: Kaths
	
	However, the following query will find items from Katherine Smith because Kath is
	a portion of the Display Name:
	
	  Find From: Kath
	
	Example 2
	---------
	
	Distribution List Display Name = New York Event Committee
	Alias Name = Nyevent
	
	The following query will fail to find items sent to the New York Events Committee
	distribution list:
	
	  Find To: Nyevent
	
	However, the following query will find items sent to the New York Event Committee
	because Event is a word contained in the Display Name:
	
	  Find To: Event
	
	Similarly, searching on the word, Committee, will also find items sent to the New
	York Event Committee, and any other items which contains the word Committee in
	the Display Name.
	
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
