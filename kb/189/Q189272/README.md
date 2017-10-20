---
layout: page
title: "Q189272: Upload Folders with Write and Execute Access Are Vulnerable"
permalink: /kb/189/Q189272/
---

## Q189272: Upload Folders with Write and Execute Access Are Vulnerable

{% raw %}

	Article: Q189272
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A computer running Internet Information Server (IIS) may be vulnerable to attack
	if the following conditions are true:
	
	- IIS is configured to allow users to upload content using RFC 1867 methods,
	  such as Posting Acceptor.
	
	- The directory that users can upload to has both Write access and Execute
	  permissions.
	
	MORE INFORMATION
	================
	
	Folders that are used for file uploading, such as folders used with Posting
	Acceptor, need to be given Write access in the Internet Service Manager (ISM)
	snap-in for the Microsoft Management Console (MMC). If Execute permissions are
	also granted in the ISM, a malicious user could upload an executable file and
	run it on the computer running IIS.
	
	When you attempt to apply both Write access and Execute permissions to a folder,
	you receive the following warning message:
	
	  WARNING - By setting both the Write and Execute permissions,
	  you are potentially exposing this site to malicious attack.
	  A destructive or intrusive program could be uploaded and
	  then executed. Are you sure you want to do this?
	
	If you click Yes, you potentially expose the server to attack.
	
	To prevent malicious attack, never allow Write and Execute permissions on an NTFS
	volume exposed to the Internet. As an additional level of security, set the IIS
	SSIExecDisable property to True on the IIS Web server to disable Server-Side
	Includes (SSI) from executing.
	
	To disable SSI from executing on a server with Windows Script Host (WSH) enabled,
	follow these steps:
	
	1. At the command prompt, change to the IIS AdminSamples folder. By default,
	  this folder is in %SystemRoot%\System32\InetSrv\AdminSamples
	
	2. Type the following command, and then press Enter: cscript.exe adsutil.vbs set
	  w3svc/SSIExecDisable True
	
	On a server without WSH installed, the following sample code can be called from
	Visual Basic or ASP:
	
	     Dim oServer
	     Set oServer = GetObject("IIS://LocalHost/W3SVC")
	     oServer.SSIExecDisable = True
	     oServer.SetInfo
	     Set oServer = Nothing
	
	Additional query words: ACL ACLs privileges hack hackers #exec Executable Content
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
