---
layout: page
title: "Q243196: Internet Information Services 5.0 RC2 Release Notes"
permalink: /kb/243/Q243196/
---

## Q243196: Internet Information Services 5.0 RC2 Release Notes

{% raw %}

	Article: Q243196
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "More Information" section of this article contains contents from the
	Internet Information Services 5.0 RC2 Release Notes.
	
	MORE INFORMATION
	================
	
	Internet Services
	-----------------
	
	The following sections describe Windows 2000 issues related to Internet services
	features.
	
	Internet Information Services
	
	To obtain the most recent information about installation, documentation, and
	other known Internet Information Services (IIS) issues, type the following into
	the address bar of your browser (or click Start, click Run, and type the
	following):
	
	  file:\\%Systemroot%\Help\Iishelp\Iis\Htm\Core\Readme.htm
	
	Where %systemroot% is your Windows 2000 installation path, including drive and
	directory (for example, C:\Winnt).
	
	IIS is not installed by default on Windows 2000 Professional. If you cannot view
	the IIS Release Notes from the link above, you need to install IIS by using
	Add/Remove Programs in Control Panel.
	
	If you previously installed Windows 2000 without IIS, you can install it through
	Control Panel Add/Remove Programs by clicking the Add/Remove Windows Components
	button. Do not use the Autorun utility on the Windows 2000 compact disc.
	
	Requiring 128-Bit Encryption on a 56-Bit Server
	
	If you select the Require 128-bit encryption check box on a server that is only
	capable of 56-bit encryption, users cannot access resources for which this
	requirement is selected. Even though the Require 128-bit encryption check box is
	selected, only 56-bit encryption is used. To enable access to these resources,
	clear the check box.
	
	Using Clustered Host Header Sites
	
	If you are using clustered Web sites with host headers, you must set the
	ServerAutoStart metabase property type to True for these sites. To set the
	ServerAutoStart metabase property type to True, type the following at the
	command prompt:
	
	  
	
	  %SystemDrive%\inetpub\adminscripts\adsutil.vbs set w3svc/<instance id>/ServerAutoStart True
	
	The <instance id> is the instance ID for the virtual host sites that are
	part of the cluster.
	
	Problems Accessing FrontPage Webs after Upgrading to the FrontPage 2000 Server
	Extensions
	
	If you upgrade to the FrontPage 2000 Server Extensions and then experience
	problems accessing FrontPage Webs, review the permissions for all of your
	FrontPage Web sites. If any changes are required, update the permissions in
	FrontPage to ensure that changes are made correctly.
	
	Server Certificate Cannot be Removed and Reassigned after Upgrade
	
	After you upgrade to Windows 2000, you may be unable to remove and reassign your
	server certificate. This issue is caused by changes in the way that IIS uses
	server certificates. As a workaround, use the following Visual Basic script to
	change metabase settings and remove the certificate:
	
	  
	
	  'Set Machinename to the name of the machine or localhost
	  Set PathObj = GetObject("IIS://" & MachineName & "/w3svc")
	  PathObj.PutEx 1, "SSLCertHash", ""
	  PathObj.PutEx 1, "SSLStoreName", ""
	  PathObj.Setinfo
	
	You can then use the Web Site Certificate wizard in IIS to reassign the
	certificate. This will be addressed in a future release.
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
