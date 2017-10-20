---
layout: page
title: "Q284930: INFO:  Issues Administering IIS 5.0 from IIS 4.0 MMC"
permalink: /kb/284/Q284930/
---

## Q284930: INFO:  Issues Administering IIS 5.0 from IIS 4.0 MMC

{% raw %}

	Article: Q284930
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbWinDNA kbGrpDSSIE kbDSupport kbIIS kbiis400 kbiis500
	Last Modified: 29-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Internet Information Server (IIS) 4.0 Internet Service Manager allows you to
	connect to a remote Windows 2000/Internet Information Services 5.0 server in
	order to perform remote administration tasks. However, unexpected behavior can
	occur when you administer IIS 5.0 remotely from the Windows NT 4.0/Internet
	Information Server 4.0 Internet Service Manager (and vice versa). Microsoft
	recommends that you use the HTML Administration Web site to remotely administer
	an IIS 5.0 or IIS 4.0 server.
	
	MORE INFORMATION
	================
	
	The following excerpt from IIS 5.0 Help (the path to this information is
	Contents, Administration, Server Administration, Web and FTP sites, and
	Downlevel Site Administration) describes a problem concerning application
	mappings when you are administering IIS 5.0 from the IIS 4.0 Microsoft
	Management Console (MMC) snap-in:
	
	  Important! The column entitled Verbs in the App Mappings property sheet lists
	  the HTTP verbs that will be run by an application. In IIS 4.0, this column,
	  entitled Exclusions, listed the HTTP verbs that would not be run by an
	  application. If you perform remote administration tasks between computers
	  running IIS 4.0 and IIS 5.0, this column will be incorrectly labeled.
	
	  For more information on application mappings, see Setting Application
	  Mappings.
	
	This problem can actually occur in both directions (in other words, the problem
	can happen when administering IIS 5.0 from a Windows NT 4.0/IIS 4.0 server and
	vice versa).
	
	The following is a detailed description of the problem: If an administrator
	double-clicks on a specific application mapping in the IIS 4.0 Internet Service
	Manager's Application Configuration dialog box on the App Mappings tab, this
	brings up the Add/Edit application extension mapping form. The part of this form
	that concerns HTTP verbs is titled "Method Exclusions". On IIS 4.0, the default
	behavior for this form is to exclude only the HTTP verbs that you do not want to
	allow for a given application mapping (from example, "exclude PUT, DELETE from
	.ASP").
	
	This behavior was changed in IIS 5.0. The corresponding form is now titled "Limit
	to:" and you type in the HTTP verbs you want to include.
	
	For example, on a Windows 2000 Server, if you use the IIS 5.0 Internet Service
	manager to locally edit the application mapping for the .asp extension, the
	default behavior for the HTTP verbs is "Limit to: GET, HEAD, POST, TRACE". This
	configuration information is then written to the metabase under the ScriptMaps
	key as:
	
	  .asp,C:\WINNT\System32\inetsrv\asp.dll,1,GET,HEAD,POST,TRACE
	
	If this same procedure is performed from a Windows NT 4.0/IIS 4.0 Internet
	Service Manager while you are remotely connected to a Windows 2000/IIS 5.0
	server, the IIS 4.0 Internet Service Manager will read this information from the
	metabase and display "GET, HEAD, POST, TRACE" in the form field as "method
	exclusions", even though these are really method inclusions. If the IIS 4.0
	administrator notices this and changes these values to reflect the proper
	default method exclusions for IIS 4.0 ("PUT, DELETE"), these values will be
	written back to the IIS 5.0 servers metabase and the ScriptMaps key will appear
	as:
	
	  .asp,C:\WINNT\System32\inetsrv\asp.dll,1,PUT,DELETE
	
	IIS 5.0 will then only allow the HTTP verbs PUT and DELETE to be sent to ASP
	pages, which causes the Web application to fail.
	
	REFERENCES
	==========
	
	IIS 5.0 Help, http://localhost/iishelp/iis/htm/core/ii30adm.htm
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinDNA kbGrpDSSIE kbDSupport kbIIS kbiis400 kbiis500 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
