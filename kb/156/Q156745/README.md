---
layout: page
title: "Q156745: SMS: App Log Error: Remote Control Keyboard Driver Failed..."
permalink: /kb/156/Q156745/
---

## Q156745: SMS: App Log Error: Remote Control Keyboard Driver Failed...

{% raw %}

	Article: Q156745
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot kbMaintMan smsremtshoot smsmaintman kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you press the CTRL+ALT+DEL pass-through "key" button (it looks like a key)
	from the Quick Windows Viewer, it has no effect on the remote computer. This
	happens when remotely controlling a Windows NT computer.
	
	The following error is logged in the client Application Log:
	
	  The SMS Remote Control Keyboard Driver service failed to start due to the
	  following error: Cannot create a file when that file already exists.
	
	The following error is logged in the System Log:
	
	  The SMS Remote Control Keyboard Driver service failed to start due to the
	  following error: Not enough storage is available to process this command.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.2. This problem has been corrected in the latest U.S. Service
	Pack for Microsoft Systems Management Server version 1.2. For information on
	obtaining the Service Pack, query on the following word in the Microsoft
	Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	MORE INFORMATION
	================
	
	This problem has been reproduced on Micro Channel computers. It does not appear
	to occur on other types of computers.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbtshoot kbMaintMan smsremtshoot smsmaintman kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	

{% endraw %}
