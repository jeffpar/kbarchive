---
layout: page
title: "Q104109: PC Forms: Err: Login Failure When Opening from Browser"
permalink: /kb/104/Q104109/
---

## Q104109: PC Forms: Err: Login Failure When Opening from Browser

{% raw %}

	Article: Q104109
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to create a new custom message using the Browser application
	included with version 1.0 of Microsoft Electronic Forms Designer, you may
	receive the following error message:
	
	  Login failure.
	
	CAUSE
	=====
	
	This error can occur when the workstation is not connected to the postoffice.
	
	If the postoffice is not available and you select a form from the Browser
	application, an alert dialog box appears, followed by a prompt to work offline.
	If you choose to work offline, then cancel the subsequent sign-on dialog box,
	the above error appears. It is a MAPI error, not one returned from the Browser.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 1.0 of Microsoft
	Electronic Forms Designer. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	

{% endraw %}
