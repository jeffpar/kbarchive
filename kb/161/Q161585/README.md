---
layout: page
title: "Q161585: XADM: Cannot Get Properties on a Newly Created Folder"
permalink: /kb/161/Q161585/
---

## Q161585: XADM: Cannot Get Properties on a Newly Created Folder

{% raw %}

	Article: Q161585
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange Administrator program and attempt to get
	properties on a newly created public folder, you may receive the following
	error:
	
	  The object cannot be found in the directory. This may be because replication
	  has not completed.
	
	CAUSE
	=====
	
	Client operations on the public folder, such as moving messages to the public
	folder, will be successful. However, this error indicates that the public folder
	does not have a directory object. This can happen when a special container
	created to house public folders is later deleted. In this case, the information
	store object for the public folder is created, but the directory object is not.
	
	WORKAROUND
	==========
	
	In the Exchange Administrator program, you must re-create the Recipients
	container that was defined as the Public Folder container. If you do not know
	the name of this container, you can determine it by following these steps:
	
	1. Start the Exchange Administrator program in Raw mode (Admin /R).
	
	2. Highlight the Configuration container, and in the right pane select the
	  Information Store Site Configuration container.
	
	3. On the File menu, click Raw Properties.
	
	4. In the List Attributes of Type box, select All.
	
	5. In the Object Attributes list, select Folder Container.
	
	6. The Attribute Value listed is the name you require for the Public Folder
	  container.
	
	7. Now recreate the Recipients container by opening the File menu, selecting New
	  Other, and then selecting Recipients Container.
	
	This should automatically populate the Public Folder container entry in the
	Information Store Site Configuration properties. This will allow you to get
	properties of the public folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
