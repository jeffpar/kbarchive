---
layout: page
title: "Q190994: XADM: How to Save Organizational Forms to a PST File"
permalink: kb/190/Q190994/
---

## Q190994: XADM: How to Save Organizational Forms to a PST File

	Article: Q190994
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may need to save the Organizational forms to a mailbox folder or a personal
	folder (PST), particularly if you use GUIDGEN to rebuild the System folders in
	accordance with Knowledge Base article Q152960 or Q177763.
	
	MORE INFORMATION
	================
	
	You must have Owner permissions on the Organizational Forms Folder before you
	are allowed to copy the data to a .pst file.
	
	To save the forms to a PST in Microsoft Outlook 97 and Microsoft Outlook 98:
	
	1. Log on to Exchange Server by using Outlook 97 or Outlook 98.
	
	2. On the Tools menu, click Options.
	
	3. Click the Manage Forms tab.
	
	4. Click Manage Forms.
	
	5. In the left column, click Set, and then click Organization Forms.
	
	6. In the right column, click Set, and then click to select a folder in the
	  mailbox or PST.
	
	7. Click to select all of the forms in the left column, and then click Copy.
	
	To save the forms to a PST in Microsoft Outlook 2000:
	
	1. Log on to Exchange Server by using Outlook 2000.
	
	2. On the Tools menu, click Options, and then click the Other tab.
	
	3. Click Advanced Options, click Custom Forms, and then click the Custom Forms
	  tab.
	
	4. Click Manager Forms
	
	5. In the left column, click Set, and then click Organization Forms.
	
	6. In the right column, click Set, and then click to select a folder in the
	  mailbox or PST.
	
	7. Click to select all of the forms in the left column, and then click Copy.
	
	After you perform these steps, the forms are in the folder that you selected in
	step 6. To restore the forms to the Organizational Forms library after the
	GUIDGEN process finishes, repeat the steps above, but in step 7, click to select
	the forms on the right, and then click Copy.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
