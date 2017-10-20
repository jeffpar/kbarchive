---
layout: page
title: "Q216828: Password Synchronization/Allow IIS to Control Password"
permalink: /kb/216/Q216828/
---

## Q216828: Password Synchronization/Allow IIS to Control Password

{% raw %}

	Article: Q216828
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbASP kbSecurity kbDSupport kbSysAdmin
	Last Modified: 30-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Anonymous authentication in IIS, you have the option to either use
	"Enable Automatic Password Synchronization" (IIS 4.0) or to "Allow IIS to
	Control Password" (IIS 5.0). This can make administering a Web server using
	anonymous users much easier, but it does have a distinctive drawback, which this
	article discusses.
	
	When you allow IIS to control the password, what seems to take place, and what
	actually takes place are two different things. It would seem that the password
	is checked, and if the password in IIS differs from Windows NT, the password
	should be "fixed." The way it actually works changes the way authentication is
	performed.
	
	Authentication is performed differently when this option is enabled because IIS
	informs Windows that the password is correct. A subauthenticator performs this
	task. Windows allows a subauthenticator (implemented as subauthentication DLLs)
	to be used in conjunction with the normal Windows authentication system.
	
	A subauthentication DLL allows the authentication and validation criteria stored
	in the Windows user account database to be replaced. For instance, a particular
	server might supply a subauthentication DLL that validates a user's password
	through a different algorithm, uses a different granularity of logon hours, or
	specifies workstation restrictions in a different format. All of this can be
	accomplished using subauthentication DLLs without sacrificing the use of the
	Windows user account database and losing its administration tools.
	
	IIS supplies a subauthentication DLL called Iissuba.dll. The function of this
	DLL, in terms of anonymous authentication, is to verify that the password is
	correct, and then inform Windows that the password is valid and hence log on the
	user.
	
	The problem with using a subauthenticator is that the user is no longer logged on
	to the server interactively (logged on locally). The user is logged on using a
	network logon.
	
	Network logons have a few notable problems when dealing with IIS. For example,
	accessing a remote resource on another server (even a Windows 2000 server that
	is trusted for delegation) may be impossible. If you find you are having
	problems of this manner, turn off the "Enable Automatic Password
	Synchronization" option or "Allow IIS to Control Password" option in the
	Internet Service Manager. Be sure that you reset the password in User Manager to
	ensure that it is correct for this user account.
	
	MORE INFORMATION
	================
	
	If you would like more information about the information in this article, the
	Visual Studio 6.0 documentation comes with an example of a subauthenticator
	called "SUBAUTH."
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q218756 Logon Privileges Required for Anonymous Access
	
	  Q229694 How to Use the IIS Security 'What If' Tool
	
	Additional query words:
	
	======================================================================
	Keywords          : kbASP kbSecurity kbDSupport kbSysAdmin 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
