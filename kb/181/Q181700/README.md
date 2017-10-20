---
layout: page
title: "Q181700: XCLN: EFD Error: Insufficient Memory To Run This Application"
permalink: /kb/181/Q181700/
---

## Q181700: XCLN: EFD Error: Insufficient Memory To Run This Application

{% raw %}

	Article: Q181700
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to access a form created with the Microsoft Exchange Forms
	Designer, you may receive the following error message:
	
	  Insufficient memory to run this application.
	  Quit one or more Windows application and please try again.
	
	CAUSE
	=====
	
	This may occur if you have a version of Vb40016.dll other than the one that
	shipped with the Microsoft Exchange Client for Windows NT. This file can be
	located in either of the following directories:
	
	  <SystemRoot>\System
	  <SystemRoot>\ System32
	
	The <SystemRoot> system variable corresponds to the installation directory
	of Microsoft Windows NT.
	
	WORKAROUND
	==========
	
	Verify that you have the correct version of Vb40016.dll. For all versions of the
	Microsoft Exchange Client for Windows NT the correct version is 4.00.2422 and
	935,632 bytes. If a different version of this file exists, replace it with the
	one on the Microsoft Exchange Client for Windows NT compact disc.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
