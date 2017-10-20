---
layout: page
title: "Q197948: HOWTO: Get Domain Information Using ADSI"
permalink: /kb/197/Q197948/
---

## Q197948: HOWTO: Get Domain Information Using ADSI

{% raw %}

	Article: Q197948
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0; winnt:2.0,2.5
	Operating System(s): 
	Keyword(s): kbADSI kbvfp600 kbDSupport
	Last Modified: 16-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	- Microsoft Active Directory Service Interfaces, versions 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the Active Directory Service Interfaces (ADSI) to obtain network
	domain information from within Visual FoxPro. This article shows an example of
	how to obtain this information.
	
	
	MORE INFORMATION
	================
	
	NOTE: To use the following example, you must install the Active Directory
	Service from the following Web site or the Microsoft Developer Network CD:
	
	  http://www.microsoft.com/windows/server/Technical/directory/adsilinks.asp
	
	ADSI is a COM-based interface for accessing directory services. You can treat
	each element of the network, such as users, printers, and computers, as an
	object. Accessing the properties of the domain object allows the developer to
	get information about the domain. The following code demonstrates how to do
	this. Save the following code to a program file and run the program.
	
	Sample Code
	-----------
	
	  *-- Code begins here.
	  *-- Replace MyDomain with a valid domain name.
	  oDomain = Getobject("WinNT://MyDomain")
	
	  *-- Collect the properties of the oDomain object and display them.
	  lsInfo = "Minimum Password Length:  " + ;
	
	           STR(oDomain.MinPasswordLength) + CHR(13) + ;
	           "Minimum Password Age:  " + ;
	           STR(oDomain.MinPasswordAge) + CHR(13) + ;
	           "Maximum Password Age:  " + ;
	           STR(oDomain.MaxPasswordAge) + CHR(13) + ;
	           "Maximum Bad Passwords:  " + ;
	           STR(oDomain.MaxBadPasswordsAllowed) + CHR(13) + ;
	           "Password History Length:  " + ;
	           STR(oDomain.PasswordHistoryLength) + CHR(13) + ;
	           "Auto Unlock Interval:  " + ;
	           STR(oDomain.AutoUnlockInterval) + CHR(13) + ;
	           "Lock Out Observation Interval:  " + ;
	           STR(oDomain.LockOutObservationInterval)
	
	  WAIT WINDOW lsInfo
	  *-- Code ends here
	
	REFERENCES
	==========
	
	Visual Studio Microsoft Developer Network Library, version 6.0; search on: "ADSI
	Domain Object"
	
	For more information on developing Web-based solutions for Internet Explorer,
	please see the following Web sites:
	
	  http://msdn.microsoft.com/workshop/default.asp
	
	  http://msdn.microsoft.com/ie/
	
	  http://support.microsoft.com/highlights/iep.asp?FR=0&SD=MSDN
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Mike Stewart, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbADSI kbvfp600 kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbADSISearch kbADSI200 kbADSI250 kbVFP600
	Version           : WINDOWS:6.0; winnt:2.0,2.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
