---
layout: page
title: "Q140963: XADM: Error When Deleting a Public Folder Container"
permalink: /kb/140/Q140963/
---

## Q140963: XADM: Error When Deleting a Public Folder Container

	Article: Q140963
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange Administrator program and attempt to access
	the Information Store (IS) Site Configuration object, you receive the following
	error message:
	
	  The object cannot be found in the directory. This may be because replication
	  has not completed.
	  Microsoft Exchange Directory
	  ID no. c1010aae
	
	If you attempt to Modify the Public Folder Container name, the same error message
	will be displayed.
	
	CAUSE
	=====
	
	This problem occurs when a recipient container is deleted and that container
	happens to be the container specified in the IS Site Configuration object for
	the creation of Public Folders.
	
	MORE INFORMATION
	================
	
	Once the container is gone, the error message will be displayed each time the IS
	Configuration object is opened (although the object is opened anyway) and no
	Public Folder container will be displayed on the General property page of the
	object. You will not be able to Modify the specified Public Folder Container.
	
	You may also notice that the Folder Path for system folders such as the Offline
	Address Book (OAB) or Schedule+ Free/Busy is blank when you view the path in the
	Instances page of the Public Information Store properties.
	
	When you attempt to access the properties of any system folders from the
	Recipients containers, you may receive the following error:
	
	  Object in information store could not be found. Microsoft Exchange
	  information store. ID# c1040Af2
	
	RESOLUTION
	==========
	
	Contact Microsoft Product Support Services and refer to this article for
	assistance in recovering from this error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of Microsoft
	Exchange Server. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
