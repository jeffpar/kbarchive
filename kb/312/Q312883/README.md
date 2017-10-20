---
layout: page
title: "Q312883: You Cannot Change the &quot;Cache ISAPI Applications&quot; Property"
permalink: /kb/312/Q312883/
---

## Q312883: You Cannot Change the &quot;Cache ISAPI Applications&quot; Property

{% raw %}

	Article: Q312883
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 15-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are trying to either select or to remove the check in the Cache ISAPI
	Applications check box on an Internet Information Services (IIS) 5.0 application
	folder, the check box is not available (it is dimmed) and you cannot change the
	value. You can change the value on the Web site level but not on application
	level.
	
	WORKAROUND
	==========
	
	To work around this problem, use the ADSutil.vbs administration script to change
	the application property:
	
	- To not cache ISAPI applications on the folder called "myapplication":
	
	  C:\Inetpub\AdminScripts>cscript.exe adsutil.vbs set w3svc/1/root/myapplication/cacheisapi 0
	
	- To allow the cache of ISAPI applications on the folder called
	  "myapplication":
	
	  C:\Inetpub\AdminScripts>cscript.exe adsutil.vbs set w3svc/1/root/myapplication/cacheisapi 1
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Services version 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. In Windows 2000, open Internet Services Manager in the Administrative Tools
	  folder.
	
	2. Right-click Default Web Site, and then click Properties.
	
	3. Click Home Directory.
	
	4. Click Configuration. Under App Mappings, you can see that the Cache ISAPI
	  Applications setting is changeable.
	
	5. Click Cancel on both dialog boxes.
	
	6. Click Default Web Site.
	
	7. Right-click IISHelp (or any application folder).
	
	8. Click Configuration. Under App Mappings, you can see that the Cache ISAPI
	  Applications setting is not available, and you cannot modify it (it is
	  dimmed).
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
