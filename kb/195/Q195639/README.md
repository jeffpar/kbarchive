---
layout: page
title: "Q195639: Nonexistent Virtual Directory Returns a 403 Error"
permalink: /kb/195/Q195639/
---

## Q195639: Nonexistent Virtual Directory Returns a 403 Error

{% raw %}

	Article: Q195639
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you access a virtual directory, you receive a 403 error (access denied
	error) even though the content does not exist. The GET request should return a
	404 error (not found error).
	
	CAUSE
	=====
	
	If you created a virtual directory using the Microsoft Management Console (MMC)
	and set the access properties to None, if you then delete the directory from the
	file system itself (through Windows Explorer for example), you will receive the
	403 error when you access that URL.
	
	The reason this occurs is because the access permissions of that virtual
	directory still exist in the IIS metabase. The metabase and the file system do
	not synchronize with each other.
	
	RESOLUTION
	==========
	
	To resolve this problem, open the IIS MMC and check to see if the virtual
	directory still exists. If it does, delete it to resolve the problem.
	
	NOTE: If you have restarted the computer or performed a net stop w3svc, then the
	directory will show a red stop sign for an icon, indicating that there is a
	problem.
	
	
	Additional query words: IIS Metabase 403 error
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
