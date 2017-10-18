---
layout: page
title: "Q142868: IIS: Authentication and Security Features"
permalink: kb/142/Q142868/
---

## Q142868: IIS: Authentication and Security Features

	Article: Q142868
	Product(s): Internet Information Server
	Version(s): 1.0,2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the Authentication & Security Features of Microsoft
	Internet Information Server.
	
	MORE INFORMATION
	================
	
	Integration with Windows NT
	---------------------------
	
	The World Wide Web (WWW), Gopher, and FTP services included with the Microsoft
	Internet Information Server are fully integrated with Windows NT Server user
	accounts and file access permissions.
	
	Every access to a resource (for example, a file, an HTML page, an Internet Server
	API (ISAPI) application, etc.) is done by the services on behalf of a Windows NT
	user. The service impersonates the user by supplying a username/password pair in
	the attempt to read/execute the resource for the client.
	
	The Windows NT File System (NTFS) allows Access Control Lists (ACLs) to be
	assigned to files and directories. ACLs grant and/or deny access to the
	associated file or directory by specific Windows NT user accounts, or groups of
	users. When an Internet service attempts to read or execute a file on behalf of
	a client request, the user account offered by the service must have permission,
	as determined by the ACL associated with the file, to read or execute the file,
	as appropriate. If the user account does not have permission to access the file,
	the request fails, and a response is returned, informing the client that access
	has been denied.
	
	File and directory ACLs are configured using the Windows NT File Manager.
	
	Anonymous Connections
	---------------------
	
	An anonymous connection is processed when a client request does not contain a
	username and password. This occurs in the following cases:
	
	- An FTP client logs on with the username Anonymous.
	
	- All Gopher requests.
	
	- A WWW (HTTP) request's headers do not contain a username and password.
	
	Each Internet service maintains a Windows NT username and password to be used for
	the processing of anonymous requests. When an anonymous request is received, the
	service impersonates the user configured as the anonymous-logon user. The
	request will succeed if the anonymous-logon user has permission to access the
	requested resource, as determined by the resource's ACL. For WWW only, if the
	user does not have permission to access the resource, the response returned to
	the client contains a list of supported authentication schemes for gaining
	access to the resource. See below for more information.
	
	The anonymous-logon user account can be viewed and modified on the Service
	property page of the Internet Service Manager. Multiple Internet Information
	Server services running on the same computer can use the same, or different
	anonymous-logon user accounts. Including the 'anonymous logon' user account in
	file or directory ACLs allows for precise control of the resources available to
	'anonymous' clients.
	
	The anonymous-logon user account specified must be a valid Windows NT user
	account on the server computer, and the password specified must match the
	password for this user in the computer's user database. User accounts and
	passwords are configured using the Windows NT User Manager.
	
	When the Internet Information Server product is installed, Setup creates a user
	account on the server computer to be used for anonymous connections. The
	username of this account has the form IUSR_<computer_name>. For example,
	if the server computer name is WEB1, the username created will be IUSR_WEB1. The
	same anonymous-logon user account is set up for all Internet Information Server
	services installed on the computer. The account is made a member of the
	computer's Guest group. This will, in most cases, give anonymous client requests
	access to public content published on the server. Run the Control Panel/Network
	applet to see the computer name configured for the Windows NT Server computer.
	
	A randomly generated password is created for the IUSR_<computer_name>
	account. For maximum convenience and security, we suggest that you change the
	password associated with this account to a password that you will remember, but
	is not easily guessed. To do this, you must specify the new password for the
	account in User Manager, and on the Service page of the Internet Service Manager
	for each Internet Information Server service installed.
	
	When the Internet Information Server is installed on a primary or secondary
	domain controller, the anonymous-logon user account is created in the user
	account database of the domain. When Internet Information Server is installed on
	a domain member-server, or a stand-alone server, the account is created on the
	local machine.
	
	If Internet Information Server is installed on multiple domain controllers of the
	same domain, a separate user account is created in the domain user database for
	each Internet server computer. This does not cause any conflicts since each
	username is unique, containing the name of the associated computer.
	
	However, you may find it more convenient to create a single anonymous-logon user
	account in the domain to use for all Internet Information Server domain
	controllers in the domain. This can simplify administration of ACLs. To do this,
	follow these steps:
	
	1. In User Manager, create a new anonymous-logon user account in the domain. Be
	  sure that this account is made a member of appropriate groups, given a secure
	  password, and is given the User Right (in the Policies menu) to Log On
	  Locally.
	
	2. On the Service property page of Internet Service Manager, specify the new
	  anonymous-logon username and password. You must do this for each Internet
	  Information Server service running on all primary and secondary domain
	  controllers in the domain.
	
	3. When later installing Internet Information Server on other domain controllers
	  in the domain, be sure to use Internet Service Manager to modify the
	  anonymous-logon username and password to match those created with User
	  Manager. Do this for each Internet Information Server service installed.
	
	Client Requests Containing Credentials
	--------------------------------------
	
	A request containing credentials is one of the following:
	
	- An FTP client logs on with a valid Windows NT username and password.
	
	  This requires that the FTP service checkbox labled Allow Only Anonymous
	  Connections be unchecked.
	
	  WARNING: FTP sends passwords across the network in clear text.
	
	- A WWW (HTTP) request's headers contain a username and password.
	
	  This is HTTP basic authentication.
	
	  WARNING: HTTP basic authentication sends passwords across the network encoded
	  in Base64, thus making it easy to decrypt. The password is not obtainable
	  directly from a Network Sniffer with decrypting.
	
	- A WWW browser supports NTLM (Windows NT native) authentication, and an
	  anonymous client request is denied access to a resource.
	
	  In this case, the browser automatically sends the Windows client's username
	  and password to the Internet Information Server Web server using the
	  encrypted NTLM protocol. In this release, only the Internet Explorer 2.0
	  & 3.0 for Windows 95 supports NTLM authentication.
	
	When an Internet Information Server service receives a client request that
	contains credentials (a username and password), the anonymous-logon user account
	is not used in processing the request. Instead, the username and password
	received by the client are used by the service. If the service is not granted
	permission to access the requested resource while impersonating the specified
	user, the request fails, and an error notification is returned to the client.
	
	For WWW (HTTP) only, when an anonymous request fails because the anonymous-logon
	user account does not have permission to access the desired resource, the
	response to the client indicates which authentication schemes the service
	supports. This is determined by the configuration of the WWW service
	authentication features. If the response indicates to the client that the
	service is configured to support HTTP basic authentication, most Web browsers
	will pop up a username/password dialog box, and reissue the anonymous request as
	a request with credentials, including the username and password entered by the
	user.
	
	If a Web browser supports NTLM authentication, and the Web service is configured
	to support NTLM authentication, an anonymous WWW request failing due to
	permissions, will result in automatic use of the NTLM protocol to send a
	username and encrypted password from the client to the service. The client
	request will then be reprocessed, using the client's user information. The user
	account obtained from the client is that with which the user is logged into the
	client computer. As this account, including its Windows NT domain, must be a
	valid account on the Web server machine, NTLM authentication is most useful in
	an intranet environment, where the client and server machines are in the same,
	or trusted domains. In this release, Internet Explorer for Windows 95 is the
	only browser that supports NTLM authentication.
	
	Internet Service Manager Authentication Options
	-----------------------------------------------
	
	In addition to the anonymous-logon username and password fields, the Internet
	Service Manager Service property page contains the following authentication
	options:
	
	For WWW:
	
	- Allow Anonymous.
	
	  When this check box is checked, anonymous connections are processed, and the
	  anonymous-logon username/password are used for these connections. When this
	  checkbox is unchecked, all anonymous connections are rejected. In this case,
	  basic or NTLM authentication can be used to access content.
	
	- Basic.
	
	  When this check box is checked, the Web service will process requests using
	  basic authentication.
	
	  WARNING: Basic authentication sends Windows NT usernames and passwords across
	  the network without encryption. This checkbox is unchecked by default for
	  security reasons.
	
	- Windows NT Challenge/Response.
	
	  When this check box is checked, the service will honor requests by clients to
	  send user account information using the Windows NT Challenge/Response (NTLM)
	  protocol. This protocol uses encryption for secure transmission of passwords.
	  The NTLM authentication process is initiated automatically as a result of an
	  'access denied' error on an anonymous client request. Currently, NTLM
	  authentication only works with Internet Explorer 2.0 for Windows 95.
	
	For FTP:
	
	- Allow Anonymous Connections.
	
	  When this check box is checked, FTP logons in which the user enters a username
	  of 'anonymous' will be processed. These anonymous connections will be
	  processed on behalf of the Windows NT user account specified on the Service
	  property page. When this check box is unchecked, users will be required to
	  enter valid Windows NT usernames and passwords to log on to the FTP service.
	
	- Allow only anonymous connections.
	
	  When this checkbox is checked, user logons with a username other than
	  anonymous will be rejected.
	
	  WARNING: FTP User names and passwords are sent across the network in clear
	  text. When this check box is unchecked, Windows NT passwords will be sent to
	  the server without encryption. This check box is checked by default for
	  security reasons.
	
	Other Authentication Issues
	---------------------------
	
	SSL:
	
	SSL is a WWW feature that supports data encryption and server authentication. All
	data sent to or from the client using SSL is encrypted. If HTTP basic
	authentication is used in conjunction with SSL, the username and password are
	transmitted after being encrypted by the client's SSL support. In this release,
	the only Web browser that supports SSL is Internet Explorer 2.0, for Windows 95.
	See the Installation and Planning Guide and online help for more information on
	SSL.
	
	'INTERACTIVE' and 'NETWORK' Users
	---------------------------------
	
	If you use the predefined Windows NT user accounts 'INTERACTIVE' and 'NETWORK'
	for access control, your use of these accounts may affect client access to some
	resources. In order for a file to be accessed by anonymous client requests or
	client requests using basic authentication, the requested file must be
	accessible by the INTERACTIVE user. In order for a file to be accessible by a
	client request using NTLM authentication, the file must be accessible by the
	NETWORK user.
	
	Log On Locally User Right
	-------------------------
	
	In User Manager, when configuring a Windows NT user account to be used either as
	the Internet Information Server anonymous-logon account, or as a user account
	specified by client requests using HTTP basic authentication, be sure that the
	user account is granted the 'Log on locally' user right. This is specified in
	User Manager's Policies menu.
	
	Customized Authentication
	-------------------------
	
	If you need a WWW request authentication scheme not supported by the service
	directly, obtain a copy of the Internet Server API (ISAPI) Software Developer's
	Kit (SDK), and read the ISAPI Filters specification on how to develop
	user-written ISAPI Filter DLLs that handle request authentication.
	
	Additional query words: prodiis 1.00 iis prodiis1 prodiis2 prodiis3
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300 kbiis200 kbiis100
	Version           : :1.0,2.0,3.0
	
	=============================================================================
	
