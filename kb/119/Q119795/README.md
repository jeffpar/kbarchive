---
layout: page
title: "Q119795: PC Rmt WRmt: Address List Doesn't Update with Custom Views"
permalink: /kb/119/Q119795/
---

## Q119795: PC Rmt WRmt: Address List Doesn't Update with Custom Views

{% raw %}

	Article: Q119795
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2; WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for MS-DOS, version 3.2 
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Recent updates do not appear, even after a user downloads the address book.
	
	CAUSE
	=====
	
	If the remote user is configured for a custom view rather than the default view,
	the custom view must be updated before the remote clients will see the changes.
	
	RESOLUTION
	==========
	
	Start the ADMIN.EXE program on the postoffice where the remote user's account
	resides and perform the following steps:
	
	1. Select Remote, Views, Modify.
	
	2. Select the first view and press ENTER, then press the ESC key. The view name
	  will be displayed. Do not make any changes.
	
	3. Press ENTER. You will be prompted to modify. Select Yes.
	
	Repeat these steps for all of the custom views. The next time the remote user
	downloads his or her address book, the updated address list will appear.
	
	REFERENCES
	==========
	
	Microsoft Mail "Administrator's Guide," page 210
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailRemote320DOS kbMailRemote320
	Version           : MS-DOS:3.2; WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
