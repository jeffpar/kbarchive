---
layout: page
title: "Q300111: Error Message: Unknown Partner Error at Passport Login Server"
permalink: /kb/300/Q300111/
---

## Q300111: Error Message: Unknown Partner Error at Passport Login Server

{% raw %}

	Article: Q300111
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you browse to the Passport Login server, you may receive the following
	error message:
	
	  Unknown Partner Error
	
	CAUSE
	=====
	
	This error occurs when the wrong version of the Partner.xml file is installed on
	the Web server.
	
	RESOLUTION
	==========
	
	1. Check the URL at the logon page to see which Passport environment you are
	  hitting. The list below shows the different Passport environments and their
	  corresponding logon URLs:
	
	   - Beta Preproduction
	
	  http://next-login.passporttest.com/login.asp
	
	   - Preproduction
	
	  http://current-login.passporttest.com/login.asp
	
	   - Production
	
	  http://login.passport.com/login.asp
	
	If the URL does not match the environment that your site is using, send e-mail to
	the following address and request the Partner.xml file for the environment that
	you are using:
	
	  nfssup@microsoft.com
	
	2. When you receive the new Partner.xml file, copy it into the folder where the
	  existing Partner.xml file is located and choose to overwrite the existing
	  file when you are prompted. The Partner.xml file is usually located in the
	  \WINNT\System32\MicrosoftPassport\ folder.
	
	3. After the Partner.xml file is replaced, you must restart the IIS service. Use
	  the following commands at a command prompt to stop and then restart the IIS
	  service:
	
	  "net stop iisadmin /y" (without the quotation marks)
	
	  "net start w3svc /y" (without the quotation marks)
	
	NOTE: In some rare cases, it may be necessary to shut down the server computer
	completely and restart it.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassportSearch
	Version           : :1.3,1.4
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
