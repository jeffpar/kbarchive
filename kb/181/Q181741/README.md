---
layout: page
title: "Q181741: XADM: Directory Service Does Not Update the Object Count"
permalink: kb/181/Q181741/
---

## Q181741: XADM: Directory Service Does Not Update the Object Count

	Article: Q181741
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Symptoms of this problem occur in both the Exchange Administrator program and in
	Exchange e-mail clients as follows:
	
	In the Exchange Administrator program when you view one of the Address Book View
	containers, the object count in the status line may be incorrect. This can occur
	when recipients are added or deleted from the view, either by changing
	attributes or importing users.
	
	In the Exchange Client the problem is an inactive scrollbar when the scrollbar
	should be activated. This affects the list of recipients in the view container.
	
	CAUSE
	=====
	
	The Microsoft Exchange directory service does not update the object count when
	expected.
	
	WORKAROUND
	==========
	
	To work around this problem in the Exchange Administrator program, perform the
	following steps:
	
	1. Select the Address Book View that holds the container with the problem.
	
	2. From the File menu select Properties.
	
	3. Select the Advanced tab.
	
	4. Deselect the checkbox for "Show this view in the client address book."
	
	5. Click the OK button.
	
	6. Repeat steps 1 through 5, except in Step 4 reselect the "Show this view in
	  the client address book" checkbox.
	
	To work around this problem in the Exchange Client, use cursor keys to scroll
	though all names in the view.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words: views import msmail
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
