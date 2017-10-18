---
layout: page
title: "Q146322: XADM: Modified Address Template Only Displays on Client"
permalink: kb/146/Q146322/
---

## Q146322: XADM: Modified Address Template Only Displays on Client

	Article: Q146322
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Exchange Administrator to change Address Templates on the Exchange
	server, you can see the changes only in the Test window on the server or from an
	Exchange client.
	
	If you switch to the Recipients container in Microsoft Exchange Administrator and
	select a user mailbox, you can see only the original template. This is correct
	Microsoft Exchange Administrator functionality.
	
	MORE INFORMATION
	================
	
	To Modify Address Templates in Microsoft Exchange Administrator
	---------------------------------------------------------------
	
	NOTE: If you want to be able to undo your changes, be sure to take notes of your
	modifications because there is no option to undo your changes automatically.
	
	1. From the Container window open the appropriate Site.
	
	2. Click Configuration, then Addressing, then Details Templates, and then click
	  the appropriate Language Container such as English/USA.
	
	3. From the Contents window, open any of the objects, such as Mailbox, then
	  click the Templates property page.
	
	4. Select a value that you want to modify and click Edit.
	
	5. To see the results of your modification, click Test.
	
	To Undo Your Modifications
	--------------------------
	
	Use the notes you took when you modified the values to change them back to their
	previous values.
	
	To Restore Original Default Values
	----------------------------------
	
	Click Original on the Templates property page.
	
	Additional query words: faq
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	
	=============================================================================
	
