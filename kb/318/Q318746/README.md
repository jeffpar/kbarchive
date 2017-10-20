---
layout: page
title: "Q318746: XADM: Err Mssg: Error 123: The Filename, Directory Name, or ..."
permalink: /kb/318/Q318746/
---

## Q318746: XADM: Err Mssg: Error 123: The Filename, Directory Name, or ...

{% raw %}

	Article: Q318746
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you (as an administrator) try to start a service in the Services tool in
	Control Panel, you may receive the following error message:
	
	  Could not start the Microsoft Exchange Information Store service on Local
	  Computer.
	
	  Error 123: The filename, directory name, or volume label syntax is incorrect.
	
	The following error message may be logged in the System log:
	
	  Event Type: Error
	  Event Source: Service Control Manager
	  Event Category: None
	  Event ID: 7000
	  Computer: SERVER
	  Description:
	  The Microsoft Exchange Information Store service failed to start due to the
	  following error:
	  The filename, directory name, or volume label syntax is incorrect.
	
	NOTE: These error messages come from the Services Control Manager and can occur
	for any service, not just the Exchange Server services.
	
	WORKAROUND
	==========
	
	To work around this issue, in the registry, make sure that the ImagePath value
	for the service that returned the error message does not contain any extra
	characters or spaces. To do so, you have to use Registry Editor.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To make sure that the ImagePath value for the service that returned the error
	message does not contain any extra characters or spaces:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the ImagePath string value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS
	
	  NOTE: This step applies to any service under the Services key in the registry.
	
	3. Open the ImagePath value on the right, and then make sure that it does not
	  contain any extra colons (:), spaces, or characters.
	
	  The following is an example of correct string value for the Exchange
	  Information Store service:
	
	  C:\Exchsrvr\Bin\Store.exe
	
	4. Quit Registry Editor.
	
	MORE INFORMATION
	================
	
	You can use tools such as Regmon to track the service, program, or process that
	is adding the extra characters or spaces to the ImagePath value for that
	service. For additional information about Regmon, visit the following
	Sysinternals Web site:
	
	  http://www.sysinternals.com (http://www.sysinternals.com)
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
