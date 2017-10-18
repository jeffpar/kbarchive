---
layout: page
title: "Q180119: Err: CreateIISPackage or DeleteIISpackage 0x800706be RPC Failed"
permalink: kb/180/Q180119/
---

## Q180119: Err: CreateIISPackage or DeleteIISpackage 0x800706be RPC Failed

	Article: Q180119
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbFAQ
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Internet Information Server (IIS) version 4.0, you may get the
	following error message:
	
	  CreateIISPackage or DeleteIISpackage 0x800706be RPC failed
	
	This is followed by a second error message:
	
	  Create Inproc: AppCreate 0x80110401
	
	If you click OK, the Setup program will continue, and the installation will
	complete after you dismiss the error messages. In addition, IIS will allow you
	to successfully access basic HTML web pages. However, when you try to access a
	Microsoft Active Server Page (ASP), your browser may display the following error
	message:
	
	  Server application error.
	  Server has encountered an error while loading an application during the
	  processing of your request.
	
	In Event Viewer, the application log may also record error 8004005 when you try
	to access the ASP page.
	
	CAUSE
	=====
	
	Microsoft Transaction Server (MTS), core components installed with IIS, requires
	that the default Distributed COM (DCOM) impersonation level be set to Identify.
	
	DCOM allows you to configure the ability of a client application to start and
	access objects on remote computers and the local computer. This setting enables
	the caller identity to be checked on out-of-process and off-computer calls and
	enables MTS role-based security checking. If the default DCOM impersonation
	level is set to some other value, you can experience errors when you set up MTS
	using the MTS Explorer or when you run MTS applications. In these cases, you
	will likely see the error code 0x800706be reported in error dialog boxes.
	
	WORKAROUND
	==========
	
	To work around this problem, follow these steps:
	
	1. Run Dcomcnfg.exe.
	
	2. Click the Default Properties tab.
	
	3. The Default Impersonation Level should be set to Identify.
	
	4. Backup the Microsoft Windows NT Option Pack configuration if necessary. This
	  should not be necessary for a new installation. For more information on this
	  topic, please refer to the online documentation.
	
	5. Uninstall the Microsoft Windows NT Option Pack.
	
	6. Reinstall the Microsoft Windows NT Option Pack.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbFAQ 
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
