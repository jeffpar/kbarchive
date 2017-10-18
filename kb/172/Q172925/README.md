---
layout: page
title: "Q172925: INFO: Security Issues with Objects in ASP and ISAPI Extensions"
permalink: kb/172/Q172925/
---

## Q172925: INFO: Security Issues with Objects in ASP and ISAPI Extensions

	Article: Q172925
	Product(s): Internet Information Server
	Version(s): WINDOWS NT:2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article covers the security issues you need to be aware of when creating or
	launching ActiveX objects from either an ISAPI extension or an Active Server
	Pages (ASP) page.
	
	MORE INFORMATION
	================
	
	Whenever an object is created in the context of Internet Information Server
	(IIS), the security context it will have depends on the object's threading
	model. The security context given to the object will then affect all actions
	performed by that object, including such things as accessing files, accessing
	databases and creating other objects.
	
	IIS passes on security contexts depending on the authentication scheme that you
	are using in IIS. For example, if you are using Anonymous authentication, the
	object runs in the security context of a user account called
	IUSR_<machinename>, where <machinename> is the name of the machine
	on which IIS is running. For additional information on authentication schemes
	and security from IIS, see the following article in the Microsoft Knowledge
	Base:
	
	  Q158229 : Security Ramifications for IIS Applications
	
	The security context given to an in-process object (a .dll file) is dependent on
	its threading model as marked in the registry and how the client apartment is
	created. When the threading models between the client and the server are mixed,
	such has a single-threaded apartment client creating a free-threaded or unmarked
	object, the system must provide a proxy for interaction between the object and
	the client apartment. This proxy is created in and is given the security context
	of the main application. In the case of IIS, the proxy runs in the security
	context of the SYSTEM account. For additional information on threading models,
	see the following article in the Microsoft Knowledge Base:
	
	  Q150777 : Descriptions and Workings of OLE Threading Models
	
	What this means to someone creating their own inproc server that will be called
	by IIS, through either Active Server Pages or their own custom ISAPI DLL, is
	that if the object is not designed with the same threading model as that used by
	the client apartment, the object is run in the security context of the SYSTEM
	account. This behavior is a potential security concern, and may also limit the
	functionality of the component if it needs to access resources on a remote
	machine.
	
	By default ASP creates single-threaded apartment clients, which means that only
	single-threaded apartment inproc servers are given the desired security context
	passed on by IIS. In ASP it is a good idea to create single-threaded apartment
	objects since they will run faster than free- threaded objects or unmarked
	objects because they don't go through a proxy to make the calls. Thus for
	performance and security reasons, ASP components should have their Threading
	Model registry value set to either "Apartment" or "Both" in the registry.
	
	If you are instead creating your own ISAPI DLL that will be instantiating objects
	and you want to get the security context passed by IIS, you will need to make
	sure that you call CoInitializeEx(NULL, COINIT_MULTITHREADED) for free-threaded
	apartment servers and CoInitializeEx(NULL, APARTMENTTHREADED) for
	single-threaded apartment servers.
	
	Objects marked as "Both" will get the right security context when instantiated in
	either single-thread apartments or free-thread apartments. However, these
	objects must be created with the synchronization considerations of any
	free-threaded object, which can be considerably more difficult to program and
	test.
	
	DCOM
	----
	
	Beginning with NT 4.0, the launching and accessing of objects is done through
	Distributed COM (DCOM). DCOM allows you to configure the ability of a client
	application to launch and access objects on remote machines and the local
	machine. This configuration is done through a utility provided with NT called
	"DCOMCNFG." You will need to make sure that when a client application running
	under a certain account wants to launch or access an object, it has the proper
	permissions in DCOM. By default, you will see in DCOMCNFG that certain accounts
	already have permission to launch and access objects, such as the INTERACTIVE
	account, so that client applications running as the interactive user can use
	objects; the SYSTEM account, so the system can use objects; and the
	IUSR_<servername> account, passed by IIS. If you are using some
	authentication scheme other than anonymous, you need to make sure that the
	account that the client is using is listed as having launch and access
	permissions.
	
	Recommendations
	---------------
	
	Because of the way IIS assigns and reuses threads, you would typically not get
	much benefit from creating a free-threaded apartment object as opposed to a
	single-threaded apartment object. Although free-threaded objects do not need to
	have their interfaces marshalled between threads of a free- threaded client
	apartment, this usually means very little under the context of IIS because in
	most cases the only interface of interest is IDispatch, and the system has a
	built-in marshaller for this interface. Unless you plan on using your own ISAPI
	DLL instead of ASP and are creating an object that takes a long time to
	initialize, or you want to pass data between instances of the objects, you
	should create single-threaded apartment objects.
	
	It is important to note that Visual Basic 4.0 does not create "Apartment" model
	objects, but Visual Basic 5.0 does.
	
	Local Servers
	-------------
	
	When a local server object (an .exe file) is instantiated, by default it is given
	the SYSTEM security context. However, this can be changed with the DCOMCNFG
	utility. For additional information on launching OLE local servers from IIS, see
	the following article on the Microsoft Knowledge Base:
	
	  Q156223 : How To Launch OLE Servers from ISAPI Extensions
	
	Determining Your Current Security Context
	-----------------------------------------
	
	If you are having problems accessing other files, databases, or objects from
	within your object, you can always check your security context programmatically
	by adding a call to the Win32 API function: GetUserName(). Or to get the full
	Domain/UserName call
	OpenProcessToken()/GetTokenInformation()/LookupAccoundSID().
	
	Another way to debug security context problems is to turn on auditing with the NT
	User Manager. This will allow you to log selected activities in the event viewer
	and is an easy way to determine which account tried to access a given file or
	resource.
	
	Changing Your Security Context
	------------------------------
	
	If for some reason you cannot get the security context that you need, you can
	impersonate the desired security context by creating a method in your automation
	server that takes as parameters the user name and password of the security
	account that you need. Once you have the user name and password you can change
	the current security context with the Win32 API functions: LogonUser() and
	ImpersonateLoggedOnUser().
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : WINDOWS NT:2.0,3.0
	Issue type        : kbinfo
	
	=============================================================================
	
