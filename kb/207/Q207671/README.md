---
layout: page
title: "Q207671: HOW TO: Access Network Files from IIS Applications"
permalink: /kb/207/Q207671/
---

## Q207671: HOW TO: Access Network Files from IIS Applications

	Article: Q207671
	Product(s): Internet Information Server
	Version(s): 3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbhttp kbHOWTOmaster
	Last Modified: 13-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	- Microsoft Internet Server Application Programming Interface (API) 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Authentication and Impersonation Types
	- Token Types
	- Problem Avoidance
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This article provides information about problems with accessing files on a
	computer other than your Internet Information Server (IIS) server from an
	Internet Server API (ISAPI) extension, Active Server Pages (ASP) page, or Common
	Gateway Interface (CGI) application. This article lists some of the issues that
	are involved and some possible methods to make this work.
	
	Although this article is written primarily in the context of accessing files on
	network shares, the same concepts apply to named-pipe connections as well. Named
	pipes are frequently used for SQL Server connections and also for remote
	procedure call (RPC) and Component Object Model (COM) communications. In
	particular, if you connect to a SQL Server across the network that is configured
	to use Microsoft Windows NT Integrated Security, you cannot connect because of
	the issues that are outlined in this article. RPC and COM may also use other
	communication mechanisms that have similar network authentication schemes.
	Therefore, the concepts in this article can apply to a wide variety of network
	communication mechanisms that may be used from your IIS applications.
	
	Authentication and Impersonation Types
	--------------------------------------
	
	When IIS services an HTTP request, IIS performs impersonation so that access to
	resources to handle the request is limited appropriately. The impersonated
	security context is based on the kind of authentication performed for the
	request. The five different types of authentication available from IIS 4.0 are:
	
	Authentication Type                          Impersonation Type
	 
	Anonymous Access (no authentication)         Network
	Auto Password Synchronization is
	ON (ON=default)
	
	Anonymous Access (no authentication)         IIS Clear Text
	Auto Password Synchronization is OFF         
	
	Basic Authentication                         IIS Clear Text 
	
	NT Challenge/Response Authentication         Network 
	
	Client SSL Certificate Mapping               Interactive
	
	Token Types
	-----------
	
	Whether or not access to network resources is permitted is dependent on the kind
	of impersonation token under which the request is being processed.
	
	- Network tokens are "NOT" permitted to access network resources. (Network
	  tokens are named so because this kind of token is traditionally created by a
	  server when a user is authenticated across the network. To allow the server
	  to use a network token to act as a network client and access another server
	  is called "delegation" and is considered a possible security hole.)
	
	- Interactive tokens are traditionally used when authenticating a local user on
	  the computer. Interactive tokens are permitted to access resources across the
	  network.
	
	- Batch tokens are designed to provide a security context under which batch
	  jobs run. Batch tokens have network access.
	
	IIS has the concept of a Clear Text logon. Clear Text logon is named so because
	of the fact that IIS has access to both the username and the password in clear
	text. You can control whether a Clear Text logon creates a Network token, an
	Interactive token, or a Batch token by setting the LogonMethod property in the
	metabase. By default, Clear Text logons receive an Interactive token and have
	access to network resources. The LogonMethod can be configured at the server,
	the site, the virtual directory, the directory, or the file level.
	
	Anonymous access impersonates the account configured as the anonymous user for
	the request. By default, IIS has a single anonymous user account called
	IUSR_<machinename> that is impersonated when handling a non-authenticated
	request. By default IIS 4.0 has a configurable feature called "Enable Automatic
	Password Synchronization" that uses a security sub-authority to create the
	token. Tokens that are created in this manner are network tokens which do "NOT"
	have access to other computers on the network. If you disable Automatic Password
	Synchronization, IIS creates the token in the same manner as the Clear Text
	logon mentioned earlier. Automatic Password Synchronization is only available
	for accounts that are located on the same computer as IIS. Therefore, if you
	change your anonymous account to a domain account, you cannot use Automatic
	Password Synchronization and you receive a Clear Text logon. The exception is if
	you install IIS on your Primary Domain Controller. In this case, the domain
	accounts are on the local computer. The anonymous account and the Automatic
	Password Synchronization option can be configured at the server, the site, the
	virtual directory, the directory, or the file level.
	
	You must have the correct type of token as the first step in accessing a resource
	on the network. You must also impersonate an account that has access to the
	resource across the network. By default, the IUSR_<machinename> account
	that IIS creates for anonymous requests exists only on the local computer. Even
	if you disable Automatic Password Synchronization so that you can get an
	Interactive token that can access network resources, the
	IUSR_<machinename> account typically does not have access to most network
	resources because this is an account that is unrecognized on other computers. If
	you want to access network resources with anonymous requests, you must replace
	the default account with an account in a domain on your network that can be
	recognized by all computers. If you install IIS on a Domain Controller, the
	IUSR_<machinename> account is a domain account and must be recognized by
	other computers on the network without taking additional action.
	
	Problem Avoidance
	-----------------
	
	Following are ways to avoid problems when you access network resources from your
	IIS application:
	
	- Keep files on the local computer.
	
	- Some network communication methods do not require a security check. An
	  example is using Windows sockets.
	
	- You can provide direct access to the network resources of the computer by
	  configuring a virtual directory to be:
	
	  "A share located on another computer."
	
	  All access to the computer that shares the network resources is performed in
	  the context of the person specified under the Connect As.. dialog box. This
	  occurs no matter what kind of authentication is configured for the virtual
	  directory. By using this option, all files on the network share are available
	  from browsers that access the IIS computer.
	
	- Use basic authentication or anonymous authentication without Automatic
	  Password Synchronization.
	
	  By default, the impersonation that Internet Information Server does for basic
	  authentication provides a token that can access network resources (unlike
	  Windows NT Challenge/Response, which provides a token that cannot access
	  network resources). For anonymous authentication, the token can only access a
	  network resource if Automatic Password Synchronization is disabled. By
	  default, Automatic Password Synchronization is enabled when Internet
	  Information Server is first installed. In such a default configuration, the
	  anonymous user token cannot access network resources.
	
	For additional information about Automatic Password Synchronization in IIS, click
	the article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q190005 A Site Set Up for Anonymous Access Prompts Users for Password
	
	  Q259353 Must Enter Password Manually After You Toggle Password Sync
	
	- Configure the anonymous account as a domain account.
	
	  This permits anonymous requests from potential access to resources across the
	  network. To prevent all anonymous requests from having network access, you
	  must only make the anonymous account a domain account on the virtual
	  directories that specifically require access.
	
	- Configure the anonymous account with the same username and password on the
	  computer that is sharing the network resources and then disable Automatic
	  Password Synchronization.
	
	  If you do this you must make sure that the passwords match exactly. This
	  approach must only be used when the "Configure the anonymous account as a
	  domain account" mentioned earlier is not an option for some reason.
	
	- NullSessionShares and NullSessionPipes can be used to allow access to a
	  specific network share or to a named pipe when your request is handled with a
	  network token.
	
	  If you have a network token and you try to establish a connection to a network
	  resource, the operating system tries to establish a connection as a
	  non-authenticated connection (referred to as a "NULL Session"). This registry
	  setting must be made on the computer that is sharing the network resource,
	  not on the IIS computer. If you try to access a NullSessionShare or
	  NullSessionPipe with a non-network token, typical Microsoft Windows
	  authentication is used and access to the resource is based on the account
	  user rights of the impersonated user.
	
	- You can potentially perform your own impersonation to create a Thread token
	  that does have network access.
	
	  The LogonUser function and the ImpersonateLoggedOnUser function can be used to
	  impersonate a different account. This requires that you have the Clear Text
	  username and password of another account available to your code. LogonUser
	  also requires that the account that calls LogonUser has the "Act as part of
	  the operating system" privilege in User Manager. By default, most users who
	  IIS impersonates while it handles an HTTP request do not have this user
	  right. However, for "In Process Applications" there are a number of ways to
	  cause your current security context to change to the LocalSystem account,
	  which does have the "Act as part of the operating system" administrative
	  credentials. For ISAPI DLLs that run in-process, the best way to change the
	  security context that IIS has created to the LocalSystem account is to call
	  the RevertToSelf function. If you are running your IIS application "Out of
	  Process", this mechanism does not work by default because the process is
	  running under the IWAM_<machinename> account and not the Local System
	  account. By default, the IWAM_<machinename> does "NOT" have the "Act as
	  part of the operating system" administrative credentials.
	
	- Add the component that is called from the ASP page to a Microsoft Transaction
	  Server (MTS) Server package or COM+ Server application, and then specify a
	  specific user as the identity of the package.
	
	  NOTE: The component runs in a separate .exe file that is outside of IIS.
	
	NOTE: Do not forget that you can prevent network access for anonymous requests
	where password synchronization is disabled and requests are authenticated by
	using basic authentication (Clear Text logons) if you set the LogonMethod
	metabase property to "2" (indicating that a network logon is used to create the
	impersonation token). With this setting, the only way for requests to avoid the
	network token limitation is to connect to NullSessionShares or
	NullSessionPipes.
	
	Do not use drive letters mapped to network shares. Not only are there only 26
	potential driver letters to select from, but if you try to use a drive letter
	that is mapped in a different security context, problems can occur. Instead, you
	must always use Universal Naming Convention (UNC) names to access resources. The
	format must look similar to the following:
	
	  \\MyServer\filesharename\directoryname\filename
	
	For additional information about using UNC, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q280383 IIS Security Recommendations When You Use a UNC Share
	
	The information in this article pertains only to Internet Information Server 4.0.
	In Internet Information Server 5.0 (that is included with Windows 2000), there
	are significant changes to new authentication types and capabilities. Although
	most of the concepts in this article still apply to IIS 5.0, the details on the
	kinds of impersonation tokens that are generated with certain authentication
	schemes in this article apply strictly to IIS 4.0.
	
	For additional information about IIS 5.0 functionality for accessing network
	files from an IIS application, click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q308661 HOW TO: Create a New Virtual Server or Web Site in Windows 2000
	
	  Q319067 HOW TO: Run Applications Not in the Context of the System Account
	
	If you cannot determine what kind of logon is occurring on your IIS server to
	handle requests, you can turn on auditing for Logons and Logoffs. Follow these
	steps:
	
	1. Click Start, click Settings, click Control Panel, click Administrative Tools,
	  and then click Local Security Policy.
	
	2. After you open Local Security Policy, in the left Tree View pane, click
	  Security Settings, click Local Policies, and then click Audit Policy.
	
	3. Double-click Audit Logon Event and then click Success and Failure.
	
	Event Log entries are added under the Security log. You can determine the kind of
	logon by looking at the event details under the Logon Type:
	
	  2=Interactive
	  3=Network
	  4=Batch
	  5=Service
	
	REFERENCES
	==========
	
	For additional information about network security, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q124184 Service Running as System Account Fails Accessing Network
	
	  Q180362 INFO: Services and Redirected Drives
	
	  Q158229 INFO: Security Ramifications for IIS Applications
	
	  Q319067 HOW TO: Run Applications Not in the Context of the System Account
	
	For additional information about IIS 5.0 functionality for accessing network
	files from an IIS application, click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q308661 HOW TO: Create a New Virtual Server or Web Site in Windows 2000
	
	  Q280383 IIS Security Recommendations When You Use a UNC Share
	
	For additional information about Automatic Password Synchronization in IIS, click
	the article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q190005 A Site Set Up for Anonymous Access Prompts Users for Password
	
	  Q259353 Must Enter Password Manually After You Toggle Password Sync
	
	Additional query words: kbdse
	
	======================================================================
	Keywords          : kbhttp kbHOWTOmaster 
	Technology        : kbiisSearch kbAudDeveloper kbiis500 kbiis400 kbiis300 kbISAPI kbISAPISearch
	Version           : :3.0,4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
