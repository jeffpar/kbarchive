---
layout: page
title: "Q199359: SMS: How to Fix the WMI Repository of a Site Server"
permalink: /kb/199/Q199359/
---

## Q199359: SMS: How to Fix the WMI Repository of a Site Server

{% raw %}

	Article: Q199359
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows Management (WMI) Microsoft's implementation of Web-based Enterprise
	Management (WBEM) has become an integral part of Systems Management Server
	version 2.0. The Administrator console must use WBEM to talk to the providers
	that get information for the Administrator to use. If the WBEM repository stops
	functioning correctly, the Administrator console is useless and the site is not
	manageable, because the Administrator console is unable to ask the Systems
	Management Server Provider to pull information from the database.
	
	MORE INFORMATION
	================
	
	To correct a situation like this, first clean out and re-import the Managed
	Object Format (MOF) files in the auto-recover registry key:
	
	  
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WBEM\CIMOM\Autorecover MOFs
	
	MOFs are written into this registry key either by being compiled with the
	-AUTORECOVER option of MOFCOMP or by using a "#PRAGMA AUTORECOVER" statement in
	the MOF itself. All Systems Management Server MOFs on the server side are
	compiled with this option and the complete list of the MOFs should exist in this
	registry key.
	
	If it is the Common Information Model Object Manager (CIMOM) that appears to be
	the problem, you can stop the WINMGMT service, delete all files in the WBEM
	Repository directory (located in the \%Windir%\System32\WBEM directory), and
	restart the WINMGMT service. CIMOM will then recompile all MOFs from the
	AUTORECOVER list as soon as the first request is made for a provider.
	
	You can also try copying the MOF files from the SMS\Bin\<Platform> folder
	(except for the _smsprov.mof and _smsstub.mof files) to the
	%WINDIR%\System32\WBEM\MOFs folder. All MOFs that are copied there are picked up
	and compiled by Windows Management. Stop and restart WINMGMT service and the
	recovery should complete after the MOFs are recompiled.
	
	Additional query words: prodsms smswmi connection failed
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
