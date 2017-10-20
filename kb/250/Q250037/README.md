---
layout: page
title: "Q250037: XADM: Client Cannot Open Public Folder"
permalink: /kb/250/Q250037/
---

## Q250037: XADM: Client Cannot Open Public Folder

{% raw %}

	Article: Q250037
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open a public folder in the public folder hierarchy by using an
	Exchange Client, the following error message may be displayed:
	
	  The folder could not be opened. The contents of this public folder are
	  currently unavailable. Either the Microsoft Exchange Server computer
	  servicing this public folder is down or the public folder has not been
	  replicated to this site.
	
	If you click the Instances tab in the public information store Properties dialog
	box on the Exchange Server computer where the folder is homed, the folder does
	not appear in either the left or right list.
	
	CAUSE
	=====
	
	Data inconsistencies may exist between the public information store and the
	directory on the same Exchange Server computer. For instance, the public
	information store may contain a new entry that has not been passed to the
	directory.
	
	Clients may also receive this error message when replication between servers is
	not complete, as when a new public folder has not been replicated to a remote
	server or when the updating process of an existing public folder is not
	complete.
	
	RESOLUTION
	==========
	
	To resolve this problem, run the DS/IS consistency adjuster.
	
	IMPORTANT: If you run the DS/IS consistency adjuster, you may rehome public
	folders. Make sure that you understand the full functionality of the DS/IS
	consistency adjuster before you run the utility.
	
	To run the DS/IS consistency adjuster:
	
	1. In the Exchange Server Administrator program where the public folder is
	  homed, open the server object.
	
	2. Click the Advanced tab, click All Inconsistencies under DS/IS Consistency
	  Adjustment, and then click Adjust.
	
	3. Click the Instances tab on the public information store Properties dialog
	  box. The folder should appear in the left list. Click Add to add the folder
	  to the right list.
	
	MORE INFORMATION
	================
	
	The DS/IS consistency adjuster is used to ensure that the directory and the
	information store are synchronized. It scans all of the objects in the
	information store and verifies that a corresponding directory object exists. If
	the directory object does not exist, one is created in the information store.
	Then the DS/IS consistency adjuster scans the directory to verify that each
	directory object has a corresponding information store object. If one does not
	exist, the directory object is removed.
	
	To avoid rehoming public folders, get more information about the DS/IS
	consistency adjuster before you run the utility. For additional information
	about the DS/IS consistency adjuster, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q182979 XADM: Function and Effects of Running the DS/IS Consistency Adjuster
	
	For additional information about what to do if you cannot access the public
	folder from the client after you run the DS/IS consistency adjuster, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q179993 XCLN: Error Message: Contents of Public Folder Currently Unavailable
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
