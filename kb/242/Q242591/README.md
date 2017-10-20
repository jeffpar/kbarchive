---
layout: page
title: "Q242591: PRB: Running Noncertified Applications as a Non-Administrator"
permalink: /kb/242/Q242591/
---

## Q242591: PRB: Running Noncertified Applications as a Non-Administrator

{% raw %}

	Article: Q242591
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:RC1,RC2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A non-Windows 2000 certified (legacy) application doesn't start or causes an
	access violation when it starts.
	
	CAUSE
	=====
	
	The application was installed by a user with less than "Power Users" permission
	on the target machine. The application-installation program does not consider
	changes in the default security configuration of Windows 2000.
	
	By default, there are no members of the Power Users group on a clean installation
	of Microsoft Windows 2000. Therefore, non-administrator users that log in to a
	Windows 2000 machine on an NTFS partition are automatically subject to a secure
	access control policy. Although these users can run any certified Windows 2000
	application, these users probably cannot successfully run noncertified legacy
	applications. The following rules apply to installing applications on Windows
	2000:
	
	- Normal Users may be able to perform a per-user installation of an application
	  if the application's setup program supports per-user installations.
	
	- Power Users should be able to install most applications provided that they do
	  not modify critical system files or registry locations.
	
	RESOLUTION
	==========
	
	To correctly run noncertified legacy applications, do one of the following:
	
	- Run the application as "Power Users".
	
	- Apply the "compatible" security template.
	
	- Redesign the application to adhere to Windows 2000 certification
	  specification.
	
	For more information, refer to the "Default Access Control Settings" document at
	the following Web site:
	
	  http://www.microsoft.com/windows/server/Technical/security/default.asp
	
	STATUS
	======
	
	This behavior is by design because of the default security configuration changes
	mentioned in the "Cause" section of this article.
	
	MORE INFORMATION
	================
	
	In general, applications written to the Microsoft Windows 9x and Microsoft
	Windows NT family paradigm function correctly on Windows 2000 given appropriate
	access control. Power Users have at least the same access that Windows NT 4.0
	Users have. Any application that runs as a User on Microsoft Windows NT 4.0
	should run as a "Power Users" on Windows 2000.
	
	REFERENCES
	==========
	
	"Default Access Control Settings" White Paper at:
	
	  http://www.microsoft.com/windows/server/technical/security/default.asp
	  (http://www.microsoft.com/windows/server/technical/security/default.asp)
	
	Additional query words: compatguidechange compatguidesetup
	
	======================================================================
	Keywords          :  
	Version           : WINDOWS:RC1,RC2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
