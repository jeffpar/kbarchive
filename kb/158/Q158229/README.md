---
layout: page
title: "Q158229: INFO: Security Ramifications for IIS Applications"
permalink: kb/158/Q158229/
---

## Q158229: INFO: Security Ramifications for IIS Applications

	Article: Q158229
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbSecurity kbWinDNA kbIIS
	Last Modified: 10-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you write applications for Internet Information Server (IIS), you should be
	aware of the ramifications that security can play when your application is
	launched by Internet Information Server. When configuring IIS, many users make
	quick assumptions that will not resolve security issues in all circumstances.
	This article describes the details regarding security and IIS.
	
	MORE INFORMATION
	================
	
	IIS provides three authentication schemes to control access to IIS resources:
	Anonymous, Basic, and Windows NT Challenge/Response. Each of these
	authentication schemes has a different impact on the security context of an
	application launched by IIS. This includes ISAPI extension agents, CGI
	applications, IDC scripts, and future scripting capabilities.
	
	Anonymous Authentication
	------------------------
	
	Setting Anonymous Authentication in IIS Manager means that IIS will not use any
	HTTP authentication mechanism to control access to resources on the machine. By
	default, when IIS is installed, it creates a user account called
	IUSR_<servername>, where <servername> is the name of the server on
	which IIS is running. This user account is added to the "Guests" group on the
	machine, which implies that its access to resources is limited. When an HTTP
	request is received by IIS with Anonymous authentication being used, IIS will
	impersonate the IUSR_<servername> account in order to execute any code or
	access any files that are involved in the request. This allows a level of
	security by limiting the accessibility to such things as system files by an
	unauthenticated user. IIS is able to impersonate the IUSR_<servername>
	account because the username and password credentials for this account are known
	by IIS.
	
	You can change the account that is used for anonymous authentication in Internet
	Service Manager. You can also change the security privileges for the
	IUSR_<servername> account in Windows NT User Manager. Be aware that any
	changes will result in changes to every anonymous HTTP request that is serviced
	by IIS. Also note that if the anonymous account configured in Internet Manager
	does not have the "Log On Locally" right (not a right given to "Guest" accounts
	by default on domain controllers), then IIS will not be able to service any
	anonymous requests. The IIS installation specifically gives you the "Log On
	Locally" right to the IUSR_<servername> account.
	
	Most resources, such as the IUSR_<servername> account, that allow Guests to
	access them, do so by allowing access to the special group "Everyone." You can
	set permissions on files and other resources specifically to allow or disallow
	the IUSR_<servername> account to access them, but most people end up
	managing access by controlling access to the groups "Everyone" or "Guests."
	
	NOTE: Because you can configure IIS to use an anonymous account that is different
	than the IUSR_<servername> account set up by default, wherever this
	article refers to the IUSR_<servername> account, you should think of it as
	a placeholder for the account name configured as the Anonymous Logon account in
	Internet Manager.
	
	Basic Authentication
	--------------------
	
	Basic authentication is a scheme that causes the client to be prompted for a
	Username and Password that are then Base64-encoded and passed to IIS. IIS
	receives the username and password credentials and verifies them against the
	Windows NT-user database on the machine or the applicable domain controllers in
	any trusted Windows NT domains. If the credentials are valid, IIS will
	impersonate the specified user when allowing access to resources by IIS or any
	applications that the request is launching. Thus, the application that is being
	executed, whether it is an ISAPI extension a DLL, a CGI application, or a
	scripting mechanism, will be executed with the permissions of the corresponding
	user account passed by the Basic authentication.
	
	Because Basic authentication provides the username and password credentials to
	IIS, access to items that require credential knowledge can successfully be
	performed when using Basic authentication. For example, if an ISAPI application
	mapped a drive letter across a network, then it would require knowledge of the
	current user's credentials. Because IIS is given the username and password
	credentials as part of Basic authentication, this task will succeed if the
	account specified has access to the network resource.
	
	Windows NT Challenge/Response Authentication
	--------------------------------------------
	
	Windows NT Challenge/Response authentication (often called NTLM authentication)
	is the most secure form of authenticating a user because the username and
	password are not sent across the wire. Rather, the Windows Security Provider
	interface is used to provide an encrypted challenge/response handshake mechanism
	that is functionally unbreakable. The Windows security provider interface allows
	IIS to validate and impersonate the user. Unlike Basic authentication, NTLM
	authentication does not prompt users for their user name and password by
	default. The current Windows user account on the client machine is used for the
	NTLM authentication. Then, if this fails, it will prompt the user for the
	username and password to be used. If NTLM authentication succeeds, the requested
	application or resource is executed in the context of the specified user.
	
	Because of the one way encryption is used, NTLM authentication validates the user
	for IIS without providing knowledge of the user's password to IIS. Therefore, a
	full set of username and password credentials is not available to IIS for doing
	such tasks as mapping a network drive. If an ISAPI application calls
	WNetAddConnection2 without specifying a username and password, it will fail
	under NTLM authentication.
	
	Multiple Authentication Schemes Selected
	----------------------------------------
	
	You can select any combination of Anonymous, Basic, and NTLM authentication in
	Internet Manager. If Anonymous authentication is checked, the request will try
	to be handled without any actual authentication and IIS will execute the request
	in the context of the IUSR_<servername> account. If, for some reason, the
	IUSR_<servername> account does not have access to the resource, IIS will
	send back an access-denied error to the client indicating that the client needs
	to use one of the other authentication schemes. This scenario could occur if you
	limited access to the actual ISAPI DLL file to a specific user, such as User1.
	IIS would receive the initial anonymous request and attempt to launch the ISAPI
	DLL under the IUSR_<servername> user context, only to get an access-denied
	error from the NTFS file system. IIS would respond to the client with a message
	saying that access was denied and the client needs to submit the request using
	either the Basic or NTLM authentication schemes (depending on which one is
	enabled, possibly even both). The client can then resubmit the request with the
	Basic authentication credentials or with the initial NTLM challenge/response
	sequence. If either of these responses provides validation of the User1 account,
	then IIS will impersonate the User1 account and successfully launch the ISAPI
	DLL.
	
	It is worth noting that if both NTLM and Basic authentication schemes are
	checked, IIS responds to requests indicating that both schemes are acceptable.
	It is up to the client to determine which authentication schemes it supports and
	to respond appropriately. For browsers, such as Internet Explorer, which support
	both Basic and NTLM Authentication, they will respond using the first supported
	authentication scheme indicated by IIS. On IIS 1.0, when both Basic and NTLM
	authentication schemes were checked, Basic authentication was listed first. On
	IIS 2.0, NTLM is now listed before Basic. The result is that for a server
	running IIS 1.0 using both, Internet Explorer will use Basic authentication. For
	an IIS 2.0 server using both, Internet Explorer will use NTLM authentication.
	
	Many IIS applications access resources provided by other software components. For
	instance, an ISAPI extension DLL may call an OLE automation server from a
	third-party software company, or a CGI application may launch an applet built
	with Microsoft Visual Basic. These components may have persistent information
	stored in the registry that they require in order to execute properly. For
	standard desktop use of these components, the registry information is read from
	the profile of the user currently logged on the Windows NT machine. These
	applications often have problems when launched by IIS because the profile made
	available to an IIS application is that of the "default user." The default-user
	profile is filled with information generic to all users, but, unfortunately, is
	specific to no users. Therefore, a component may run as expected when User1
	executes it interactively on his or her desktop because it is reading
	information from User1's profile in the registry. The same application may not
	run at all from IIS because it will not have access to User1's profile. This is
	true even if IIS is impersonating User1's account using Basic or NTLM
	authentication.
	
	Desktop Issues
	--------------
	
	Windows NT uses the concept of having multiple desktops on the same machine. A
	desktop can be thought of as the screen that you view when you are logged on an
	NT machine. Your desktop receives all the mouse and keyboard messages that you
	create as the user in front of the machine, and it allows for applications to
	interact with one another to a certain extent. For instance, one application on
	a desktop can post messages to other applications on the desktop. NT supporting
	multiple desktops implies that there are other desktops running; you just can't
	see them and you have no way of sending keyboard or mouse messages to them. This
	may seem like a futile concept, but, in fact, many applications that run as
	Windows NT Services require the capabilities that a desktop provides yet don't
	want to interact with the interactive user's desktop. Therefore, each service
	gets its own desktop that won't be interfered with by the currently logged-on
	user.
	
	The implications of this to IIS applications are that the IIS service has its own
	desktop. If your IIS application interacts with a desktop in any way (for
	instance, if it displays a message box), then it will display that message box
	on a desktop that cannot be seen on the computer's monitor. Similarly, an IIS
	application will not be able to send or post messages to an application on the
	interactive desktop. If your IIS application needs to interact with the
	interactive desktop, then you should use another form of inter-process
	communication such as named pipes.
	
	ISAPI Filter DLLs
	-----------------
	
	ISAPI Filter DLLs, not to be confused with ISAPI Extension DLLs, run in the
	original context of the IIS service. All services run by default under the Local
	System account of the machine on which they are installed. The Local System
	account has access to almost all resources on the local machine not specifically
	denied to it, and no resources on any other machines on the network.
	
	COM and OLE Permissions
	-----------------------
	
	Launching an OLE or COM object on an NT 4.0 machine requires certain permissions.
	This is normally not an issue for most interactive users because the default
	permissions for launching and accessing OLE and COM objects on an NT machine
	allow access to anyone logged on the local machine interactively. An IIS
	application, whether it is running in the context of the IUSR_<servername>
	account or an impersonated user account from Basic or NTLM authentication, is
	*NOT* interactively logged on. Therefore, the default permissions for launching
	and accessing OLE and COM objects will not allow an ISAPI extension DLL, CGI
	application, or Internet script to launch these objects successfully by
	default.
	
	The utility DCOMCNFG on Windows NT 4.0 allows you to set the default permissions
	for *ALL* COM and OLE objects on your machine. You can use this utility to
	provide OLE and COM access to the IUSR_<servername> account as well as all
	user accounts that might be impersonated by your IIS configuration. You can even
	grant permissions to the "Everyone" group.
	
	However, providing global access to all OLE and COM objects may not be in your
	best interest, so DCOMCNFG will also allow you to specify permissions for
	specific applications so you could provide access to only the applications you
	will need to access from your IIS application. OLE and COM applications also
	have the ability to determine what permissions are associated with launching and
	accessing themselves. To do this from inside your OLE or COM server, see the
	CoInitializeSecurity function new to Windows NT 4.0, as well as
	CoCreateInstanceEx (in particular, the COSERVERINFO and COAUTHINFO structures)
	for manipulating OLE access from the client side.
	
	For more information on launching OLE servers from ISAPI applications, see the
	REFERENCES section of the article.
	
	Distributed COM (DCOM), also referred to as Remote Automation, requires all of
	the OLE/COM permissions discussed above. In addition, it needs to access
	resources across the network. If a request is received using Anonymous
	authentication, the IUSR_<servername> account username and password
	credentials will be used to connect to the remote DCOM server. Unless your IIS
	server machine is also a domain controller, the remote machine by default will
	not know who the IUSR_<servername> account is (it only exists on the local
	IIS server machine). Adding access and launch permissions to the group
	"Everyone" does not help in this case because DCOM will not map access by an
	unknown account to the guest account in the same way that the Lanman Server
	service does for file sharing. The DCOM server machine must explicitly know the
	account that is being used.
	
	To deal with a scenario where you have IIS applications accessing resources
	(including DCOM resources) on remote machines, you need to have all the machines
	involved participate in a domain relationship. Then, in Internet Manager, you
	can change your anonymous account to an account in the local or trusted domain.
	Now, all machines in the domain structure will recognize the account and can
	explicitly add/delete access to their network resources for that account or any
	groups that account is a member of.
	
	Be aware that if Basic authentication is used for an IIS request, access to
	network resources (including DCOM servers) will be done in the context of the
	user whose credentials were passed with the request. If the user specified does
	not have permissions to launch or access the DCOM server, the request will
	fail.
	
	If the IIS request is validated using NTLM authentication, the impersonation
	level does not imply knowledge of the username and password credentials.
	Therefore, access to network resources, regardless of the permissions on the
	resource, will be denied (with the exception of NULL Session resources).
	
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q156223 How To Launch OLE Servers from ISAPI Extensions
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbSecurity kbWinDNA kbIIS 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
