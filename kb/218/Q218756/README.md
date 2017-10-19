---
layout: page
title: "Q218756: Logon Privileges Required for Anonymous Access"
permalink: /kb/218/Q218756/
---

## Q218756: Logon Privileges Required for Anonymous Access

	Article: Q218756
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Prior to IIS version 4.0, the administrator had to make sure the anonymous user
	account passwords were the same in both the IIS Administration tool and the
	Windows User Manager. Failure to do so lead to logon failures. To solve this
	dilemma and make administration easier, Password Synchronization was introduced
	in IIS 4.0.
	
	Password synchronization uses a slightly different logon method (explained in a
	moment) that has some side effects. By default, this option is enabled.
	
	Not Enabling Password Synchronization
	
	When this option is not enabled, IIS calls the LogonUser() API in Windows to log
	the account on. It passes in the user name and password configured by the
	administrator. If this matches the user name and password in Windows User
	Manager, the account is successfully logged on, the security token is cached by
	IIS, and the account is impersonated. This scenario logs the user account on
	interactively (logged on locally).
	
	Enabling Password Synchronization
	
	Authentication is performed differently when Password Synchronization is enabled
	because IIS has to inform Windows that the password is correct. A
	subauthenticator can perform this task. Windows allows subauthenticators
	(implemented as subauthentication DLLs) to be used in conjunction with the
	normal Windows authentication system. This scenario logs the user account on as
	a network logon.
	
	IIS supplies a subauthentication DLL called IISsuba.dll. The function of this DLL
	in terms of anonymous authentication is to verify that the password is correct
	and then inform Windows that the password is valid and hence log the user on.
	
	The Side Effect of Enabling Password Synchronization
	
	Subauthentication DLLs require a network logon, which can have side effects
	compared to a batch or interactive logon. The most notable is, in some cases,
	the inability to access resources such as files or Microsoft Access databases on
	a remote computer. If you see this problem, turn the Password Synch option off;
	this will force IIS to use normal authentication and log the account on locally
	(an interactive logon).
	
	MORE INFORMATION
	================
	
	For more information about Windows subauthentication, see the Microsoft Platform
	SDK and Microsoft Visual Studio 6.0 online product documentation. Visual Studio
	6.0 ships with a subauthentication sample called SubAuth.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q216828 Password Synchronization/Allow IIS to Control Password May Cause
	  Problems
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	
