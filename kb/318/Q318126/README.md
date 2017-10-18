---
layout: page
title: "Q318126: &quot;Installer&quot; Err Msg Installing Host Integration Server Client"
permalink: kb/318/Q318126/
---

## Q318126: &quot;Installer&quot; Err Msg Installing Host Integration Server Client

	Article: Q318126
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbhis2000 kbhis2000bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install a Host Integration Server 2000 End-User Client
	installation that has been assigned or published through the Microsoft Windows
	IntelliMirror feature, and you do not have administrative rights, you receive
	the following error message:
	
	  Installer Information
	
	  You must be logged on to this computer as a local or domain administrator in
	  order to run Microsoft Host Integration Server 2000 End-User Client setup.
	
	CAUSE
	=====
	
	This behavior occurs because the Host Integration Server 2000 End-User Client
	Windows Installer package explicitly checks to determine whether the user
	running the package has administrative rights. This causes the error message
	described in the "Symptoms" section of this article, even though Windows
	Installer packages published or assigned through IntelliMirror are installed by
	using elevated privileges.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Host Integration Server 2000 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	+---------------------------------+
	| File name    | Date     | Time  | 
	+---------------------------------+
	| Hiclient.msi | 02/07/02 | 10:05 | 
	+---------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The Host Integration Server 2000 End-User Client Windows Installer Package
	requires administrative rights to do the following:
	
	- Add and update registry entries under the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM
	
	- Install the OLE DB Provider for AS/400 and VSAM as a Windows service on
	  Microsoft Windows NT, Microsoft Windows 2000, and Microsoft Windows XP-based
	  systems.
	
	Applications published or assigned through a Group Policy Object (GPO) as part of
	IntelliMirror are designed to run with elevated privileges so that
	nonadministrators can install applications that may normally require
	administrative rights.
	
	You can allow nonadministrators to install applications that are not published or
	assigned through IntelliMirror. To do this (on a Windows 2000-based system),
	select the "Always install with elevated privileges" option in both a User
	Configuration GPO and a Computer Configuration GPO.
	
	For additional information about how to set the "AlwaysInstallElevated" registry
	parameter to allow users to install applications when GPOs are not in use, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q259459 HOWTO: Allow Nonadministrators to Install MSI Packages
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbhis2000 kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
