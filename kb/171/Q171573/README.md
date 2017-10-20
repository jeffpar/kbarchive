---
layout: page
title: "Q171573: Webhits.exe Error Message: General Access Denied"
permalink: /kb/171/Q171573/
---

## Q171573: Webhits.exe Error Message: General Access Denied

{% raw %}

	Article: Q171573
	Product(s): Internet Information Server
	Version(s): WinNT:1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Webhits.exe is in use, you may see the following error message:
	
	  General Access Denied.
	
	You can also get the above error message if you have all of your virtual servers
	with IP addresses, and you do not have a virtual server with an unassigned
	address.
	
	CAUSE
	=====
	
	This can be due to a mismatch in permissions between Webhits.exe and the files
	that Webhits.exe is opening. You may be able to see the files but Webhits.exe
	may have difficulty opening the file.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	Check the permissions on the drive:\InetPub\scripts\srchadm\webhits.exe file.
	
	Make sure that if the permissions are applied to the .idq file, the same
	permissions apply to the Webhits.exe file.
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ110
	Version           : WinNT:1.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
