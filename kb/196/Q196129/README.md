---
layout: page
title: "Q196129: XADM: How to Change the KMS Service Password Startup Location"
permalink: /kb/196/Q196129/
---

## Q196129: XADM: How to Change the KMS Service Password Startup Location

{% raw %}

	Article: Q196129
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	During the initial installation of the Microsoft Exchange Key Management Server
	(KMS) service, you are given a choice of whether you want to store the KMS
	service password on a disk or to write the password on a secured piece of
	paper.
	
	If you choose to store the password on a secure disk, every time the KMS service
	starts you are prompted to supply the disk that contains the KMS service
	password.
	
	If you choose to save the KMS service password on a secured piece of paper,
	before you start the KMS service you need to manually type the KMS password in
	the startup parameters box located at the bottom of the services window.
	
	MORE INFORMATION
	================
	
	The choice that you make during the initial setup of the Microsoft Exchange Key
	Management Server is stored in the Windows NT registry and can be altered.
	Perform the following steps to make the KMS service point to a diskette instead
	of the startup parameters box:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe), and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Exchange\KMServer
	
	2. In the right pane, double-click MasterPasswordPath.
	
	3. In the String box, type the following:
	
	  "A:\" (without the quotation marks)
	
	4. Click OK.
	
	5. In the right pane, double-click BackupPasswordPath.
	
	6. In the String box, type the following:
	
	  "A:\" (without the quotation marks)
	
	7. Click OK.
	
	8. Quit Registry Editor.
	
	After you perform these steps the KMS service looks to drive A for the KMS
	password.
	
	Additionally, you need to create a disk that contains the KMS service password
	inside a text file named Kmserver.pwd.
	
	The Kmserver.pwd file must only contain the KMS service password that is given to
	the Exchange Server administrator during the initial setup of Microsoft Exchange
	Key Management Server.
	
	If you remove the drive letter from the MasterPasswordPath value, you must
	manually type the KMS service password in the startup parameter box every time
	that the KMS service is started.
	
	Additional query words: KMServer Setup install Encryption
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto kbinfo
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
