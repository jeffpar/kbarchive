---
layout: page
title: "Q281530: Reader: &quot;Activation Error&quot; When You Activate in Network Domain"
permalink: /kb/281/Q281530/
---

## Q281530: Reader: &quot;Activation Error&quot; When You Activate in Network Domain

	Article: Q281530
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Reader, version 1.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the activation process for Microsoft Reader, you may receive the
	following error message:
	
	  Activation Error
	
	When you click OK, the activation process stops.
	
	CAUSE
	=====
	
	This behavior can occur if you are logged on to a network domain that uses
	either the Microsoft Windows NT or Microsoft Windows 2000 operating system, and
	you do not have the proper access rights to the registry.
	
	Activation requires write-access to write a registry key. If your registry access
	is limited, the proper registry key cannot be written.
	
	RESOLUTION
	==========
	
	To resolve this issue, have your network administrator temporarily change your
	user rights to allow registry access for the activation process. After the
	activation process is completed, the administrator can return your regular user
	access rights.
	
	Additional query words: Reader MSreader Activate Activation Network Permission Privilege
	
	======================================================================
	Keywords          :  
	Technology        : kbReaderSearch kbReader150
	Version           : :1.5
	Issue type        : kbprb
	
	=============================================================================
	
