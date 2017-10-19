---
layout: page
title: "Q308191: Can't Use AppGetStatus in a Script to Administer IIS 5.1"
permalink: /kb/308/Q308191/
---

## Q308191: Can't Use AppGetStatus in a Script to Administer IIS 5.1

	Article: Q308191
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot use the AppGetStatus method in a script to administer Internet
	Information Services (IIS) 5.1.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	AppGetStatus is an IIS Active Directory Service Interfaces (ADSI) method call
	that you can use to check the current status of a Web site. The IIS method call
	AppGetStatus is still available through ADSI, but you cannot use it in scripts.
	The AppGetStatus method can still be called from a program that is written in
	C++.
	
	The IIS ADSI method call AppGetStatus2 has replaced AppGetStatus and you can run
	this from a script. AppGetStatus2 supplies identical functionality as
	AppGetStatus.
	
	The following code is a scripting sample using AppGetStatus2:
	
	  <% 
	    Dim DirObj, vStatus 
	    Set DirObj = GetObject("IIS://LocalHost/W3SVC/1/ROOT/MyAppDir") 
	    'Get the status of the application. 
	    vReturn = DirObj.AppGetStatus2 
	  %> 
	
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis510
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
