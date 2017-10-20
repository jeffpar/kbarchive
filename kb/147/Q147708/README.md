---
layout: page
title: "Q147708: IIS Scripts Request To Save the File Instead of Executing"
permalink: /kb/147/Q147708/
---

## Q147708: IIS Scripts Request To Save the File Instead of Executing

{% raw %}

	Article: Q147708
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to execute a script on the client Web browser application, an
	"Unhandled File Type" dialog box appears requesting that you save the file as a
	different file name or location (Save As).
	
	CAUSE
	=====
	
	The scripts directory has both READ and EXECUTE access permissions set in
	Internet Service Manager.
	
	RESOLUTION
	==========
	
	To work around this problem, do one of the following:
	
	- Change the access permissions in Internet Service Manager to EXECUTE only
	
	  -or-
	
	- Add a "?" (without quotes) to the end of the script file in the uniform
	  resource location (URL). For example:
	
	  http://myserver/scripts/test.exe?
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem Microsoft Internet Information
	Server 1.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodiis
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	

{% endraw %}
