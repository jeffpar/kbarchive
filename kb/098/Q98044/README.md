---
layout: page
title: "Q98044: PC WRmt: Setup May Fail If Program Manager Not Running"
permalink: /kb/098/Q98044/
---

## Q98044: PC WRmt: Setup May Fail If Program Manager Not Running

{% raw %}

	Article: Q98044
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Microsoft Windows Program Manager is not running when you start the Setup
	program for version 3.2 of Microsoft Mail Remote for Windows, the Setup program
	attempts to build the Program Manager group but cannot. The following error
	message is generated:
	
	  Cannot establish DDE link to Program Manager - Retry/Cancel.
	
	After you select Cancel, a message appears stating that Mail is not installed
	correctly and will not function. After you select Exit Install, a sharing
	violation occurs.
	
	Mail Remote for Windows does run correctly after installation.
	
	CAUSE
	=====
	
	Setup is calling standard Setup Toolkit routines to attempt to create a Program
	Manager group and item. Any application that uses Setup Toolkit will experience
	the same problem.
	
	It was assumed this problem would appear with any shell other than Program
	Manager. However, it appears that Norton Desktop traps DDE calls to the Program
	Manager and also avoids this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	Remote for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
