---
layout: page
title: "Q321390: PRB:Cold Fusion Pages Set for Anon Access Prompt for Credentials"
permalink: /kb/321/Q321390/
---

## Q321390: PRB:Cold Fusion Pages Set for Anon Access Prompt for Credentials

{% raw %}

	Article: Q321390
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to locate any ColdFusion (.cfm) files, you are prompted for user
	name and password credentials, and you then receive the following error message
	in the browser:
	
	  HTTP Error 401
	  401.3 Unauthorized: Unauthorized due to ACL on resource
	
	This behavior occurs even when the ColdFusion application is set to allow
	Anonymous authentication. Later, when you are prompted for credentials, you may
	access the ColdFusion page if you enter the user name and password of the
	Administrator account. This indicates that the Anonymous user (which by default
	is the IUSR_machinename user) does not have enough permissions to access the
	ColdFusion application.
	
	CAUSE
	=====
	
	This issue is typically related to Microsoft Windows NT 4.0 or Microsoft Windows
	2000 security and permissions at the NTFS level.
	
	RESOLUTION
	==========
	
	If you are using the Anonymous user account (that is, the IUSR_machinename user
	account) to access the ColdFusion application to access the .cfm pages, the
	IUSR_machinename user must have at least Read and Execute rights for the
	following directories, as well as any folders and files that these directories
	contain:
	
	NOTE: If you are using Basic authentication or NTLM Challenge/Response instead of
	Anonymous authentication, the account that you are using must also have these
	permissions.
	
	- \Cfusion\Bin (especially Iscf.dll, which resides in that directory)
	
	- \Winnt\System32
	
	- The Web root directory and any other directories to which the Anonymous user
	  needs access
	
	MORE INFORMATION
	================
	
	In certain cases, this behavior occurs after you reboot the computer. The reason
	may be that the security on the server is adjusted so that only Administrators
	have rights to the root of drive C on the server. This also limits the access to
	the ColdFusion directory to only Administrators. This lack of rights to the
	ColdFusion dynamic link libraries (DLLs) may cause the prompt for credentials
	(that is, the user name and password prompt) to appear. Internet Information
	Services (IIS) loads this DLL when the server starts and keeps it in memory.
	Because the DLL is already in memory, a security check is not performed.
	However, when the server is rebooted, the new security becomes effective and the
	password prompt may appear.
	
	REFERENCES
	==========
	
	Some information in this article has been referenced by a similar article from
	the following Macromedia ColdFusion support site:
	
	  http://www.macromedia.com/v1/handlers/index.cfm?ID=10334&Method=Full
	  (http://www.macromedia.com/v1/handlers/index.cfm?ID=10334&Method=Full)
	
	Additional query words: cold fusion cfm prompt username password anonymous authentication 401.3 unauthorized iscf.dll cfusion
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
