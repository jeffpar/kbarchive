---
layout: page
title: "Q164885: Default Services Required for IIS Services"
permalink: /kb/164/Q164885/
---

## Q164885: Default Services Required for IIS Services

{% raw %}

	Article: Q164885
	Product(s): Internet Information Server
	Version(s): winnt:2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the service dependencies of the Microsoft Internet
	Information Server (IIS) WWW (http), FTP, and Gopher services with the default
	Windows NT services.
	
	MORE INFORMATION
	================
	
	There are certain cases in which it may be desirable to disable particular
	services on a Windows NT installation. This article describes the minimum
	windows NT services that are required for the IIS services to function and will
	explore some of considerations that must be taken before employing these
	methods. These methods are used to increase the security of an IIS installation
	through the limitation of available services.
	
	**********WARNING**********
	
	Extreme care must be taken when disabling NT services because specific
	functionality is provided by each windows NT service. You must thoroughly
	understand the implications of changing particular service startup values. This
	text is not a comprehensive discussion of all Windows NT services but a
	guideline for particular services that are required for the IIS services to
	function. You WILL lose or limit certain features of IIS functionality when
	particular services are disabled. For this reason, these methods may not apply
	to your particular Windows NT installation nor be desirable in your
	implementation of IIS. These suggestions should be thoroughly tested on a
	another computer or in a test lab prior to implementation on production servers.
	Additionally, you may have other services installed that are not covered in this
	test that have dependencies that are outside the scope of this article.
	
	If the desired functionality of an IIS computer is only to only provide IIS
	services. In the context of this article IIS or IIS services refers to WWW, FTP,
	or Gopher services. The following default services in addition to the IIS
	service you are implementing are needed for base IIS functionality.
	
	At least one of the following:
	
	- Gopher Publishing Service: Optional
	
	- FTP Publishing Service: Optional
	
	- World Wide Web Publishing Service: Optional
	
	All of the following:
	
	- EventLog: Required
	
	- NT LM Security Support Provider: Required (NOTE: If this service is not
	  listed, check to make sure RPC Configuration is loaded in Control Panel
	  Network Services.)
	
	- Remote Procedure Call (RPC) Service: Required
	
	These represent the minimum configuration needed for the IIS services to
	function. You will in most probability need to ensure some of the following
	services are functioning for normal server operation. Each of the default
	services found in a Windows NT installation will be discussed next and the
	specific functionality used by the IIS services will be described.
	
	Services marked with an asterisk will cause loss of functionality if disabled;
	disabling these services may be detrimental to overall server functionality.
	
	Services marked with a hyphen have no dependency relationship with IIS or may
	have little server impact if disabled.
	
	**********WARNING**********
	
	Care should be taken before altering the startup values of these services. These
	services may have complex dependencies with other services not listed here.
	
	You MUST understand what functionality is provided by these services before
	changing the settings.
	
	Improper changes of services will risk the loss of needed capabilities or server
	functionality.
	
	**********WARNING**********
	
	- Alerter: Not Required. No IIS dependency
	
	- Clip Book Viewer: Not Required. No IIS dependency
	
	- *Computer Browser: Recommended. If disabled, no browse list will be available
	  and no computer browsing will be allowed. You must know the network path on
	  remote computers.
	
	NOTE: The Computer Browser service must be running in order for the computer to
	have the capability to become a master or backup browser, however it has nothing
	to do with whether or not a computer announces itself on the network. As long as
	the Server service is running, and the computer is not hidden, a Windows NT
	computer will make Host Announcements. If a master or backup browser in the same
	domain or workgroup receives these Announcements, the computer making the
	Announcements will be added to the server list, and clients will see it in the
	list when they browse the workgroup or domain.
	
	- *EventLog: Recommended. This logs server operation. You will receive alerts
	  logged by disabling some of these services that are not required for base
	  functionality.
	
	- *DHCP Client: Not Required if all Network interfaces use a static IP address.
	
	- *Directory Replicator: Not Required. No IIS dependency. However, directory
	  replication will not take place if this is disabled. This is a common
	  services to use on large multi-server web installations to synchronize Web
	  content across servers.
	
	- Messenger: Not Required. No IIS dependency
	
	- *Net Logon: Recommended. If you want Windows NT domain or remote logins this
	  service must to be enabled. There will be few cases where it is desirable to
	  disable this service.
	
	- Network DDE: Not Required. No IIS dependency
	
	- Network Monitor Agent: Not Required. No IIS dependency
	
	- *NT LM Security Support Provider: Required for security and RPC
	  implementation. There will not be any cases when you will want to disable
	  this service.
	
	- Plug & Play: Not Required. No IIS dependency
	
	- *Remote Procedure Call (RPC) Locator: Recommended. Not required, unless you
	  are doing remote administration from computer. This is what IIS uses to
	  register computers available for remote administration. This can be disabled
	  if remote administration is not desired. In most cases you will not disable
	  this service as other this is a commonly used by administrative tools and
	  some applications. Take care when disabling this service.
	
	- *Remote Procedure Call (RPC) Service: Required. It is not recommended you
	  pause or stop this service in any IIS installation.
	
	- *Server Service: Recommended. This service provides SMB server services.
	  Other services are dependent on this services Some of these include Computer
	  Browser, replication services, network logon and RAS service. Note that you
	  will need to start it if you want to run User Manager.
	
	- Simple TCP/IP Services: Not Required. No IIS dependency.
	
	- Spooler: Not Required. No IIS dependency.
	
	- *TCP/IP NetBIOS Helper: Recommended for NetBIOS support and name resolution.
	  Disabling this service will also disable Computer Browser and Net Logon
	  services. It is not recommended to disable this service in most cases.
	
	- Telephony Service: Not Required unless access is via dial-up.
	
	- UPS: Recommended for mission-critical servers.
	
	- *Workstation: Recommended. Disabling this service shuts down the network
	  redirector. You must use this service if you are using UNC paths or making
	  network shares available via the IIS services. It is not normally recommended
	  to disable this service.
	
	There are many other services you may have installed, such as the Remote Access
	Service, DHCP, DNS, or WINS service that you may need to enable that are not
	covered here for particular implementations of IIS. Consult the Windows NT
	Server resource kit or product documentation for more complete descriptions of
	particular Windows NT services. Your needs must be carefully considered before
	changing the default state of any of the described services. The preceding list
	provides only a minimal guide to the requirements of a particular IIS server
	installation. Your requirements and mileage may vary especially in an Intranet
	scenario where services such as WINS, DHCP and DNS may be necessary.
	
	For more information on Windows NT Services and Web Security consult the
	following resources along with proper testing before implementing these
	suggestions on production servers:
	
	- Windows NT Online Help: Query in the Index Tab on services : overview.
	
	- Windows NT Server Resource Kit
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : winnt:2.0,3.0
	
	=============================================================================
	

{% endraw %}
