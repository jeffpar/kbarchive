---
layout: page
title: "Q159523: XCLN: Can't Install SP2 on Windows NT w/out Admin Privileges"
permalink: /kb/159/Q159523/
---

## Q159523: XCLN: Can't Install SP2 on Windows NT w/out Admin Privileges

{% raw %}

	Article: Q159523
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Setup program for the Microsoft Exchange Windows NT client, you
	may see the following error message can occur:
	
	  You currently don't have permission to install files to your system
	  directory. Consult your System Administrator for assistance.
	
	CAUSE
	=====
	
	Exchange Client Setup.exe checks to see if the user currently logged on has
	administrator privileges. This is done because sufficient privileges are needed
	to overwrite system files (in this case Mapi32.dll) on Windows NT when using an
	NTFS partition. If the currently logged on user does not have administrator
	privileges, the message is displayed and Setup cancels.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Have someone with administrator privileges install Exchange Windows NT client
	  Service Pack 2 (SP2).
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
