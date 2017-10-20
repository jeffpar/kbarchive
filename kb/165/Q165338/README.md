---
layout: page
title: "Q165338: IIS Does Not Allow its TCP Port to Be Same as SSL Port"
permalink: /kb/165/Q165338/
---

## Q165338: IIS Does Not Allow its TCP Port to Be Same as SSL Port

{% raw %}

	Article: Q165338
	Product(s): Internet Information Server
	Version(s): winnt:2.0,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 05-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install a Secure Sockets Layer (SSL) Certificate and commit the
	changes, and you stop and restart the WWW service, you may get the following
	error message:
	
	  Winsock Error: Address already in use
	
	NOTE: This error message will also appear when you run the QBIK Wingate Engine
	(as Service). This service is similar to Dialup Networking.
	
	CAUSE
	=====
	
	Because the SSL binding is the newly installed key to port 443 and does not
	allow anything else to use that specific port, the TCP port on IIS cannot use
	the same port as the SSL port.
	
	Notes:
	
	- Some other Web Servers do allow a shared port, for example, Netscape
	  Enterprise Server 2.0.
	
	- 443 is only an example port.
	
	WORKAROUND
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	Use the following steps to check to see if the ports are the same:
	
	1. In Internet Service Manager, go to WWW Properties and check TCP port value.
	
	2. Open Regedit or Regedt32 and go to following location:
	
	  HKEY_LOCAL_MACHINE\CurrentControlSet\Services\W3SVC\Parameters
	
	3. Select the SecurePort key and get value in parenthesis (for example, 443).
	
	4. Check the two numbers (IIS TCP port and SecurePort) and verify that they are
	  not the same. If they are duplicated, change the TCP port value in Internet
	  Service Manager to port 90 or any other port that is not in use.
	
	  This will correct this Winsock error and should allow IIS to be restarted
	  again.
	
	NOTE: To do this you must first make a backup of your key and then remove it from
	key manager. IIS will not restart until this has been done because SSL still has
	control of the port so the port value cannot be changed.
	
	MORE INFORMATION
	================
	
	For information about changing the Secure Socket Layer port for Internet
	Information Server 4.0, see the following article in the Microsoft Knowledge
	Base:
	
	  Q171138 : Secure TCP Port Not Properly Specified
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : winnt:2.0,3.0
	Hardware          : ALPHA x86
	
	=============================================================================
	

{% endraw %}
