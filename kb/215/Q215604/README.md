---
layout: page
title: "Q215604: XWEB: OWA Client Allows You to Delete Special Outlook Folders"
permalink: /kb/215/Q215604/
---

## Q215604: XWEB: OWA Client Allows You to Delete Special Outlook Folders

{% raw %}

	Article: Q215604
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Microsoft Outlook Web Access (OWA) client, you can delete some
	of the default folders created by the Outlook client, specifically:
	
	- Contacts
	- Drafts
	- Notes
	- Tasks
	- Journal
	
	CAUSE
	=====
	
	The Microsoft Outlook Web Access client is not aware of the format or notes used
	in the Contact, Drafts, Notes, Tasks, and Journal folders. Therefore, the OWA
	client believes the folders contain normal e-mail messages and treats these
	folders as a normal folder with e-mail messages, which can be deleted using the
	OWA client.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Outlook Web Access
	
	+--------------------------------------+
	| File name    | Date   | Size         | 
	+--------------------------------------+
	| Pageutil.inc | 1/5/99 | 12,134 bytes | 
	+--------------------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Outlook Web Access version 5.5.
	This problem was first corrected in Exchange Server 5.5 Service Pack 3.
	
	MORE INFORMATION
	================
	
	When you use OWA, you can delete the default Outlook folders by following these
	steps:
	
	1. Click the "Up one folder" button to display a list of folders in the OWA
	  client.
	
	2. Select the folder you want to delete, like the Tasks folder.
	
	3. On the toolbar, click the "Delete the current folder" button.
	
	4. You receive the dialog box prompt, "Are you sure you want to delete the
	  current folder and its subfolders?"
	
	5. Click OK to delete the folder.
	
	NOTE: If you select a folder that the OWA client recognizes as a special folder,
	such as the Inbox folder, you will not be able to delete it. You will receive an
	error message saying "Unable to delete this special folder," if you try to
	delete the Inbox folder or any of the following folders: Calendar, Deleted
	Items, Inbox, Outbox and Sent Items.
	
	With Exchange Server 5.0 and 5.5, you can delete the Contacts folder as well as
	other special folders. This was however changed in Exchange Server 5.5 SP1, and
	Contacts can no longer be deleted.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOWASearch kbOWA550 kbOWA550SP1 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
