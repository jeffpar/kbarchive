---
layout: page
title: "Q178137: SMSINST: Compiling SMS Installer Scripts from the Command Line"
permalink: /kb/178/Q178137/
---

## Q178137: SMSINST: Compiling SMS Installer Scripts from the Command Line

{% raw %}

	Article: Q178137
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0; winnt:1.2
	Operating System(s): 
	Keyword(s): smsinst
	Last Modified: 04-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	A Microsoft Systems Management Server Installer script file (.ipf) can be
	compiled from the command line using either Smsinstl.exe (a 16-bit
	Installer executable) or Smsinst32.exe (a 32-bit Installer executable).
	
	To compile the script file at the command line, use the syntax appropriate
	for the client you are using.
	
	16-bit Windows Clients
	----------------------
	
	     smsinstl /c myscript.ipf
	
	32-bit Windows Clients
	----------------------
	
	    smsinst32 /c myscript.ipf
	
	Additional query words: prodsms compile compilation
	
	======================================================================
	Keywords          : smsinst 
	Technology        : kbSMSSearch kbSMS120 kbSMSI100
	Version           : WINDOWS:1.0; winnt:1.2
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	

{% endraw %}
