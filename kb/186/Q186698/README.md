---
layout: page
title: "Q186698: XWEB: Post from OWA Gives Error &quot;There were problems sending...&quot;"
permalink: /kb/186/Q186698/
---

## Q186698: XWEB: Post from OWA Gives Error &quot;There were problems sending...&quot;

{% raw %}

	Article: Q186698
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	
	
	SYMPTOMS
	========
	
	When using the Microsoft Exchange Outlook Web Access (OWA) client to post a new
	message to an Exchange Server Public Folder, you may receive the following error
	if the folder owner has applied permissions or associated forms to the folder:
	
	  There were problems sending the item. Your server may have become
	  temporarily unavailable, or you may not have permissions to send or
	  change the item. Try again or cancel.
	
	CAUSE
	=====
	
	This error may occur if the owner of the public folder has limited access to the
	folder and you do not have sufficient permissions, or if the owner has
	stipulated to only allow certain types of forms to be posted to the folder.
	
	RESOLUTION
	==========
	
	To check if the folder owner has designated the types of acceptable forms for
	this folder, ask the owner to follow these steps:
	
	1. Right-click on the folder, and click Properties.
	
	2. Click the Forms tab.
	
	3. At the bottom of the dialog box, under "Allow these forms in this folder," if
	  the "Only forms listed above" option is selected, then check the "Forms
	  associated with this folder" list box at the top of the dialog box for the
	  form you are trying to post to the folder.
	
	4. If the form you are trying to use does not appear in the above list box, add
	  the form by clicking on the Manage button, or click the "Forms listed above
	  and the standard forms" option.
	
	NOTE: In the Microsoft Outlook client you will receive the following error when
	trying to post a message with a form type not allowed by the folder:
	
	  The item could not be saved to this folder. The folder has been deleted
	  or moved, or you do not have permissions. Do you want to save a copy of
	  it in the default folder for the item?"
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550 kbOWA550SP1
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
