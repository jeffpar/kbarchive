---
layout: page
title: "Q183740: Key Manager Started from MMC Does Not Return Focus"
permalink: /kb/183/Q183740/
---

## Q183740: Key Manager Started from MMC Does Not Return Focus

{% raw %}

	Article: Q183740
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you display the properties of a Web site in the Microsoft Management
	Console (MMC) and select the Directory Security, Secure Communications option,
	you see a button labeled Key Manager or Edit, depending on whether you have
	configured security previously. If you click the Key Manager or Edit button, the
	Key Manager application starts. Focus will not be returned to the MMC unless you
	first close Key Manager.
	
	CAUSE
	=====
	
	This behavior occurs because Key Manager is being started as a child window of
	the Properties dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0.
	
	WORKAROUND
	==========
	
	If you need to have Key Manager displayed while editing the properties of a Web
	site, first close the Web site's Properties dialog box, and then click the Key
	Manager icon on the MMC toolbar. This starts Key Manager as a separate
	application. After it starts, you can bring up the Properties dialog box for the
	Web site in the MMC.
	
	Additional query words: launch
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
