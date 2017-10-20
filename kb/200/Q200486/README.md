---
layout: page
title: "Q200486: XFOR: Adding Foreign Address Book to Notes Global Address List"
permalink: /kb/200/Q200486/
---

## Q200486: XFOR: Adding Foreign Address Book to Notes Global Address List

{% raw %}

	Article: Q200486
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Lotus Notes, after you specify the Foreign Names Address Book, you can see
	the Exchange Server recipients in Notes. This article assumes that you have
	chosen the default name, Foreign.nsf, when creating the Foreign Address Book. If
	not, please substitute the database name you have chosen instead.
	
	MORE INFORMATION
	================
	
	From the administrative Notes client, use this sequence:
	
	1. On the File menu, click Tools, click User Preferences, click Mail, and select
	  and add Foreign.nsf to the Local Address Books field, such that it displays
	  "names.nsf, Foreign.nsf" (without the quotation marks). Click OK.
	
	  -or-
	
	  Add the line: "names=names.nsf, foreign.nsf" (without the quotation marks) to
	  the Notes.ini file on the Notes server, usually found in the
	  <drive>:\WINNT\ directory. This accomplishes the same task.
	
	2. Now, when starting a new memo, click the Address button. The Mail Address
	  dialog box (containing the various users on your Notes system) appears.
	  Select the Foreign Address Book from the drop-down menu. All the Exchange
	  Server recipients have been propagated into Notes.
	
	It is strongly recommended that you keep the source (Names.nsf) and the target
	(Foreign.nsf) books separate for the following reasons:
	
	- It is easier to tell the users apart. If they all appear in one book, it will
	  not be clear who is an Exchange Server user and who is a Notes user.
	
	- If the Foreign Names Address Book has to be rebuilt, the native Notes Address
	  Book (containing Notes users only) is not at risk.
	
	- Overall, it is easier to manage and troubleshoot the Notes users and the
	  Foreign users separately.
	
	Additional query words: linkage
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
