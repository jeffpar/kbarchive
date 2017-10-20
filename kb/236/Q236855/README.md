---
layout: page
title: "Q236855: Changes to the IWAM Account in IIS 5.0"
permalink: /kb/236/Q236855/
---

## Q236855: Changes to the IWAM Account in IIS 5.0

{% raw %}

	Article: Q236855
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
	
	In Internet Information Services (IIS) 5.0, the default setup for a Web
	application is to run as "out-of-process pooled" or medium application
	protection. This means that if the application should stop for some reason, IIS
	itself is not affected.
	
	Because COM+ must run an out-of-process application with some identity, in the
	case of IIS, IWAM_<MACHINE NAME>is used. In IIS 5.0, the IWAM_<MACHINE
	NAME> account is a very low privilege account, just as in IIS 4.0. This was
	done for security reasons. The side-effect of this is that some ISAPI
	applications that require the process account to have localsystem-like
	capabilities will fail. The most common are those that use reverttoself() to
	perform some highly trusted function. The code following a call to
	reverttoself() in an out-of-process application in IIS 5.0 (the default) may
	fail.
	
	MORE INFORMATION
	================
	
	Who is affected?
	
	- If your Web server does not use any custom ISAPI applications, you should not
	  be affected.
	
	- Any code that worked correctly in an IIS 4.0 out-of-process application will
	  also work in IIS 5.0.
	
	- If you use custom authentication ISAPI applications, you may be affected. The
	  errors you may see are based on how the ISAPI application is written.
	
	What should you do?
	
	- If you see no errors, then do nothing. IIS 5.0 is running in its optimal
	  configuration.
	
	- If you do see an error and you feel the ISAPI application is the point of
	  failure, then try the following:
	
	  1. Run the application in-process. If that works, then contact your ISAPI
	     application vendor to see if they have an update that runs out-of-process
	     pooled.
	
	  2. Run the application out-of-process and give the IWAM account "Act as part
	     of operating system" and "Increase application quota" privileges. If this
	     succeeds, then contact the ISAPI application vendor for an updated
	     version.
	
	- If you are a developer writing ISAPIs or any functionality relying on
	  localsystem after a reverttoself(), then you should start testing your code
	  on the released version of Windows 2000 and IIS 5.0.
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
