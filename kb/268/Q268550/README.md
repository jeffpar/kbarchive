---
layout: page
title: "Q268550: HOWTO: Use DCOMCNFG for a VB DCOM Client/Server Application"
permalink: /kb/268/Q268550/
---

## Q268550: HOWTO: Use DCOMCNFG for a VB DCOM Client/Server Application

{% raw %}

	Article: Q268550
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB kbDSupport
	Last Modified: 25-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the security settings you can choose with the Dcomcnfg
	utility for some of the most common scenarios to run a Distributed Component
	Object Model (DCOM) Client/Server application developed in Visual Basic.
	
	MORE INFORMATION
	================
	
	The settings that you need to choose in Dcomcnfg depend on three main points:
	
	1. Your network configuration, such as whether you are running under a domain or
	  using peer-to-peer networking.
	
	2. The operating system (OS) you are using on the server computer and on the
	  client computer.
	
	3. Some of the features of your server, such as raising events or callbacks,
	  displaying a User Interface, and so forth.
	
	Some of the more common scenarios are discussed later in the article.
	
	Dcomcnfg 
	--------
	
	All of the settings discussed here can be set by using a utility called Dcomcnfg,
	which stores the settings in the registry. In this section, you can see a brief
	discussion of some of the most important setting options you can choose.
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q176799 INFO: Using DCOM Config (Dcomcnfg.exe) on Windows NT
	
	  Q182248 HOWTO: Use DCOM Config (Dcomcnfg.exe) with Windows 95/98
	
	In addition, the context-sensitive Help that is provided by Dcomcnfg explains the
	options available for each field in greater detail.
	
	To run Dcomcnfg, on the Start menu, select Run, type in "Dcomcnfg " (without the
	quotation marks), and then click OK.
	
	On Microsoft Windows NT and Microsoft Windows 2000, Dcomcnfg is installed by
	default when you install the OS, and you need Administrator rights to run it.
	For Microsoft Windows 98 and Microsoft Windows 95, you need to install Dcomcnfg
	before you can use it.
	
	To download the latest version of DCOM for Windows 95 or Windows 98, go to the
	following Microsoft Web sites:
	
	DCOM for Windows 95:
	
	  http://www.microsoft.com/com/dcom/dcom95/download.asp
	
	DCOM for Windows 98:
	
	  http://www.microsoft.com/com/dcom/dcom98/download.asp
	
	The main window in Dcomcnfg has four tabs:
	
	- Applications
	
	- Default Properties
	
	- Default Security
	
	- Default Protocols
	
	The link displays a list of DCOM servers, which can be represented by their
	friendly name or by their AppID, which is a GUID (Global Unique Identifier). You
	can use this list to get access to the custom settings of your server.
	
	The link allows you to set the Default Authentication Level, the Default
	Impersonation Level, and some other basic settings.
	
	Here are the settings most commonly used in this tab:
	
	1. Enable Distributed COM on this computer - Always checked.
	
	2. Enable COM Internet Services on this computer - this is normally unchecked,
	  unless you plan to use COM Internet Services (CIS). Using CIS adds another
	  layer of complexity due to the existence of proxies. This article does not
	  address this issue. For normal use of DCOM in intranets, this setting can
	  remain unchecked.
	
	3. Default Authentication Level - Indicates at which level DCOM authenticates
	  the user that wants to use a given server. This article concentrates on only
	  two options:
	
	   - Connect - authenticates the user only once, when the connection is made to
	     the server. This option can be used when all users that access the server
	     are domain users.
	
	   - None - no authentication required. This option is used if you need to
	     allow access to non-domain users.
	
	4. Default Impersonation Level - Usually set to Identify.
	
	5. Provide additional security for reference tracking - usually unchecked.
	
	On the , there are three buttons that allow you to set the following
	permissions:
	
	- Default Access Permissions - allows you to define the list of users or groups
	  to which you want to allow or deny access to your servers. You can understand
	  Access Permission as the right to call a method or access a property in your
	  object. You should always include SYSTEM in this list.
	
	- Default Launch Permissions - allows you to define the list of users or groups
	  to which you want to allow or deny the right to launch your server. On
	  Windows 95 and Windows 98, this option is not available because the OS
	  doesn't launch your server automatically; the server must be running waiting
	  for calls in a DCOM scenario.
	
	- Default Configuration Permissions - allows you to define the list of users or
	  groups that should have rights to change the settings (the ones discussed
	  here) for servers on this computer. This list has no effect on actually
	  running the server. Only make changes to this setting if you understand their
	  consequences exactly. Changing this setting results in permission changes in
	  the registry.
	
	All of the preceding lists allow you to include users or groups and specify if
	you are granting or denying the related right for each one. Some important
	groups that you should know are:
	
	- Everyone - Includes all domain and local users.
	
	- SYSTEM - The local Operating System.
	
	- INTERACTIVE - Includes all users who log on to a computer locally (at the
	  console).
	
	The tab allows you to select which protocols you want to use for DCOM
	communication. DCOM tries to use them in the order in which they appear on the
	list, until it finds a common protocol on both computers. Microsoft recommends
	that you always keep TCP/IP as the first one on the list. In particular, TCP/IP
	is the only protocol supported on Windows 95 and Windows 98 platforms.
	
	Custom Settings
	---------------
	
	The preceding parameters are the default parameters for a given computer and they
	are used for a given server unless the server has its own custom settings.
	Custom settings take precedence over default settings.
	
	To set the custom settings for a given server, click the Applications tab, select
	the server on the list of applications, and then click the Properties button.
	Once you are on the server's Properties window, you should see the following
	tabs:
	
	- General
	
	- Location
	
	- Security
	
	- Identity
	
	- Endpoints
	
	The meaning for most of the options is the same as described earlier. For
	security reasons, Microsoft recommends that you set the default settings with a
	high level of security. Authentication Level set to Connect keeps default access
	and launch permissions restricted to a very limited group of people. For servers
	where you need to lower security, you should do it by using custom settings, so
	that the lower settings apply only to this specific server.
	
	In the tab, you can set the authentication level for your server. If you select
	Default, the server uses the authentication level specified in the Default
	Properties tab described earlier. The most common options are None or Connect,
	as already described.
	
	The link shows where the server application should run. The settings are
	different for the computer where the server is running and the computers where
	you run the clients:
	
	- On the server computer - Check only the Run application on this computer
	  option.
	
	- On the client computers - Use this tab to set the location where you want to
	  run the server. Check only the Run application on the following computer
	  option and provide the name of the computer where the server is installed.
	  You can provide a computer name or an IP address here.
	
	The tab looks exactly like the Default Security tab described earlier. Use the
	three buttons to define the custom settings. To activate the buttons that allow
	you to define custom settings, you need to select the related Use custom
	permissions option.
	
	The tab allows you to define which account you want to use to run the server.
	It's important to understand what each of these options mean to assure that you
	are making the right choice for your case.
	
	- The interactive user - The server runs using the security context of the user
	  currently logged onto the computer. Points to consider are:
	
	  a. If nobody is logged on, then the application does not start.
	
	  b. This is the only option that allows the server to display a user
	     interface.
	
	  c. The rights of your server vary according to who is logged on to the
	     computer.
	
	- The launching user - The server runs by using the security context of the
	  user who started the application. In other words, the server uses the same
	  security context as that of the client. If you select this option, and
	  several clients with different security contexts instantiate objects from
	  this server, then several instances of the server launch, one for each
	  security context. Additional points to consider are:
	
	  a. Cannot be used if the server has a User Interface.
	
	  b. Cannot be used if the server makes call backs or fires events, or if it
	     instantiates objects on a third computer, unless delegation is enabled.
	     Only Windows 2000 allows you to enable delegation.
	
	  c. Cannot be used if users accessing the server are non-domain users.
	
	  d. Always check the Unattended Execution option when compiling the server.
	     You set this option in the Project Properties window in the General tab.
	
	- This user - With this option you can provide a user name and a password and,
	  when the server launches, it runs under the security context of this user.
	  Additional points to consider are:
	
	  a. Cannot be used if the server has a User Interface.
	
	  b. Is usually the best option if the server does not have a User Interface,
	     because you can define precisely what rights you want to give to this
	     server. You could create a user specifically for this purpose. This is the
	     best option in terms of scalability.
	
	  c. Always check the Unattended Execution option when compiling the server.
	     You set this option in the Project Properties window in the General tab.
	
	Usually you don't need to set custom values on the tab. Keeping the default
	system protocols is the most common setting here.
	
	Dcomcnfg for Windows 95 and Windows 98
	--------------------------------------
	
	When you run Dcomcnfg on a Windows 95 and Windows 98 computer, you see only a
	subset of the fields described earlier. For example, on Windows 95 and Windows
	98, you do not find settings for launch permissions because Windows 95 and
	Windows 98 do not launch the server for you. If you want to run a server under
	Windows 95 and Windows 98, you need to launch it explicitly and have it waiting
	for clients to call in. There are also some differences in the names of some
	system groups. For example, the equivalent to Everyone is called World on
	Windows 95 and Windows 98.
	
	One important setting you must check is the Allow remote connections in the
	Default Security tab. You need to have this checked if you are going to run a
	server under Windows 95 or Windows 98, or on every client computer if the server
	calls back to your client or raises events.
	
	How to Configure Some Common Scenarios 
	--------------------------------------
	
	This section shows how to set some of the most common scenarios.
	
	Authentication Level on the Server Side
	
	1. Connect - Use this option if the server is able to authenticate all users.
	  For this to happen, all users need to log in as domain users to the same
	  domain under which the server is running or to a trusted domain.
	
	2. None - Use this option in cases where authentication is not possible, such as
	  when users don't log in as domain users or if the users log in to a
	  non-trusted domain.
	
	NOTE: Be aware that the effective authentication level is the most restrictive
	between the server and the client computer, so if you need to use Authentication
	= None, then you need to set it on both computers.
	
	For security reasons, Microsoft recommends that you set the authentication level
	for the server as a custom setting in the server's Properties dialog box.
	
	Authentication Level on the Client Side
	
	1. Connect - Use this option only if the server is running on a Windows NT or
	  Windows 2000 computer and if the users on this client computer log in to a
	  domain that is trusted to the server.
	
	2. None - Use this option in all other cases.
	
	NOTE: Dcomcnfg does not allow you to set custom settings for the client, so you
	are limited to setting only the default authentication level. If you prefer to
	set custom settings, you can do it by using the procedures described in one of
	the following Microsoft Knowledge Base articles:
	
	  Q268884 HOWTO: Set/Retrieve DCOM Client's Authentication Level
	
	  Q239561 HOWTO: Use CoInitializeSecurity in Visual Basic
	
	Access and Launching Permissions
	
	Access and Launching permissions are only set on the server side. If you are
	using authentication level as Connect, you can configure the list of users and
	groups for access and launch permissions according to your needs. You can give
	rights to everybody by using the Everybody group, or you can define a restricted
	list of users or groups. However, you always need to include the System account
	in the list of Access and Launch permissions in addition to your custom needs.
	
	If you are using authentication level as None, then include Everyone in both
	lists.
	
	Identity
	
	Identity is set only on the server side, as follows:
	
	1. The interactive user - This is not a convenient setting for two reasons. The
	  first one is that the server does not run at all if nobody is logged on to
	  the computer. The second is that the rights granted to the server depend on
	  who is logged on to the computer. You should avoid this setting unless your
	  server displays a user interface. If this is the case, Interactive User is
	  your only choice.
	
	2. The launching user - This setting starts one instance of the server for each
	  different client user. You cannot use this option if:
	
	   - The authentication level is None and you have non-domain users connecting
	     to the server.
	
	   - Your server displays a User Interface.
	
	   - Your server raises events, calls back the client, or calls another server
	     residing on another computer, unless you are using Windows 2000 and you
	     have delegation enabled.
	
	   - You have a lot of different users connecting to your server. As explained
	     previously, you get one instance of the server per user with this setting,
	     and the computer may run out of window stations.
	
	3. This user - assigning a given user to define the security context of your
	  server is the most convenient option. The only situation where you cannot use
	  this option is if your server displays a user interface.
	
	Locating Your Server in the Client's Applications List
	
	When you look for your server in the Applications tab when you are running
	Dcomcnfg on the client computer, you may not find it under its friendly
	description. Instead, you may find it under its AppID. This occurs because when
	the server's VBR and TLB files are registered during the installation of the
	client, an AppID description is not included in the registry. To locate your
	server, you need to know its AppID. There are several ways to find out the AppID
	of your server. One way is by just looking in the registry as follows:
	
	1. Start regedit.
	
	2. Under HKEY_CLASSES_ROOT, find the ProgID of your class, for example
	  MyServer.Class1. Under this key you find a sub-key called Clsid. Highlight
	  the Clsid sub-key, and the default value gives you the ClassID of your class.
	  Write this value down.
	
	3. Under HKEY_CLASSES_ROOT, find the CLSID key and, under HKCR\CLSID, find the
	  ClassID you wrote down in the step above. Select it, and you should see a
	  value called AppID on the left pane. Usually it's the same value as the
	  ClassID, but not necessarily. This is the AppID you should look for in the
	  list of applications on the client side.
	
	Another way to find the AppID is by using Oleview. In fact, Oleview doesn't
	display the AppID, only the ClassID, but, because most of the times the AppID is
	the same as the ClassID, this is an easy way to get it. To get the ClassID,
	follow these steps:
	
	1. On the server computer, start Oleview.
	
	2. Under the File menu, select View Typelib, and then open the executable of
	  your server (yourserver.exe). Note that the whole IDL for your server is
	  displayed on the left pane. Look for the uuid of your coclass. For servers
	  created with Visual Basic, this is equal to the ClassID.
	
	3. Because most of the time the AppID is the same as the ClassID, this is the
	  number you need. If you cannot find this ID under the list of applications in
	  Dcomcnfg, use the preceding procedure to check in the registry if the AppID
	  is different of the ClassID.
	
	Another point to take into consideration is that if your server has several
	classes, you find one entry for each class because the installation procedure on
	the client creates one AppID for each class.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
