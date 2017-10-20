---
layout: page
title: "Q216193: PC DirSync: WinNT Version of Import Cannot Add for Batch"
permalink: /kb/216/Q216193/
---

## Q216193: PC DirSync: WinNT Version of Import Cannot Add for Batch

{% raw %}

	Article: Q216193
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Windows NT version of Import.exe to batch import local users
	into an MS Mail postoffice, you may have problems when you attempt to create
	groups including these users even though the users were imported into the
	postoffice. The following symptoms may occur:
	
	1. Start The MS Mail Administrator program (Admin.exe), go to local admin group
	  and create a group containing the newly imported users.
	
	2. Select the first imported user by pressing SPACEBAR. The selection is
	  confirmed by the ">>" characters displayed to the left of the name.
	
	3. Press the down arrow key to go to the next user and again select the user by
	  using pressing SPACEBAR, no ">>" characters are displayed.
	
	4. Press SPACEBAR again and the ">>" characters are now displayed against
	  the second user.
	
	5. Continue to scroll through the list and every other user name that was
	  imported displays the >> characters; suggesting that the user name is
	  also selected.
	
	CAUSE
	=====
	
	When the users are imported using the batch import method, their individual
	Tuple Identifier (TID) values will all be set to zero. The TID value should be
	unique for every user within a postoffice. The value is used when mail is sent
	to a group and enables cross referencing of the group members to their
	individual mailboxes.
	
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	it has not been fully regression tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/support/supportnet/default.asp
	
	The English version of this fix should have the following file attributes or
	later:
	
	+----------------------+
	| File name  | Version | 
	+----------------------+
	| Import.exe | 3.5.33  | 
	+----------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail for PC Networks
	version 3.5 for Windows NT.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : WINDOWS:3.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
