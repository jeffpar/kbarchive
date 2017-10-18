---
layout: page
title: "Q269082: IISADMPWD Virtual Directory Not Created During IIS 5.0 Installat"
permalink: kb/269/Q269082/
---

## Q269082: IISADMPWD Virtual Directory Not Created During IIS 5.0 Installat

	Article: Q269082
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 24-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The IISADMPWD virtual directory is used for configuring Internet Information
	Server (IIS) 4.0 so that it allows users to change their Windows NT passwords.
	This virtual directory is not configured in Internet Information Services (IIS)
	5.0, unless the installation is an upgrade from IIS 4.0. However, the .htr files
	are still included in the Winnt\System32\Inetsrv\Iisadmpwd directory.
	
	Because of the potential security risk that is introduced by the user's ability
	to change their account passwords over the Internet, the IISADMPWD virtual
	directory is not configured by default.
	
	The "More Information" section of this article explains how to configure IIS 5.0
	to allow this feature.
	
	MORE INFORMATION
	================
	
	To create the IISADMPWD virtual directory, follow these steps:
	
	1. In the Internet Services Manager Microsoft management Console (MMC),
	  right-click the Default Web Site, click New, and then select Virtual
	  Directory.
	
	2. When the Virtual Directory Creation Wizard starts, follow the instructions to
	  create the virtual directory with the alias IISADMPWD. Make sure that the
	  path points to the Winnt\System32\Inetsrv\Iisadmpwd directory, and that both
	  Read and Execute permissions are selected.
	
	To set the PasswordChangeFlags value in the metabase, do the following:
	
	1. From a command prompt, switch to the Inetpub\Adminscripts directory.
	
	2. Type "adsutil.vbs" (without the quotation marks), and then press the ENTER
	  key. If this is the first time that Adsutil.vbs has been run, you may get
	  error messages stating that Cscript is not registered. Follow the prompts and
	  choose Yes to register Cscript.
	
	3. Type "adsutil.vbs set w3svc/1/PasswordChangeFlags [value]" (without the
	  quotation marks).
	
	  "w3svc/1" (without the quotation marks) represents the Default Web Site and
	  "[value]" (without the quotation marks) can be set to one of the following
	  options:
	
	  0 - SSL connection required
	  1 - Password changing allowed on non-secure ports.
	  2 - Password changing disabled.
	  3 - Password changing disabled. (Undocumented)
	  4 - Advance notification of password expiration disabled.
	
	Users should now be able to change their Windows NT passwords.
	
	REFERENCES
	==========
	
	For additional information on PasswordChangeFlags, see the IIS 5.0 online
	documentation.
	
	For additional information on how to change passwords in IIS 4.0, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q184619 How to Change Windows NT Account Passwords Using IIS 4.0
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbinfo
	
	=============================================================================
	
