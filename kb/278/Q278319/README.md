---
layout: page
title: "Q278319: INFO: Wscript.Shell Runs Commands as System in IIS"
permalink: /kb/278/Q278319/
---

## Q278319: INFO: Wscript.Shell Runs Commands as System in IIS

	Article: Q278319
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbDSupport kbiis400 kbiis500
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the run method of the Wscript.shell object in an Active Server
	Pages (ASP) page that is running in-process (in Inetinfo.exe), the command that
	is called is executed in the system context. This is because the run method uses
	CreateProcess to launch the command. The CreateProcess API executes the command
	by using the parents process token. The Inetinfo process runs in the system
	context, and thus commands that are executed with the run method are running in
	the system context. This could be a security risk, especially for sites that
	allow content editing and uploading.
	
	This only applies to sites or applications that are running in-process. This is
	the default in IIS 4. In IIS 5, the default is pooled out-of-process.
	
	MORE INFORMATION
	================
	
	Server administrators can take these steps to limit the risk:
	
	- Configure the IIS site or application to run in a separate process.
	
	  For IIS 4: Open Properties for the Web site or virtual directory application,
	  and click the Home Directory tab. Select Run in separate memory space
	  (isolated process), and then click ok.
	
	  For IIS 5: Open Properties for the Web site or virtual directory application,
	  and then click the Home Directory tab. From the Application Protection
	  dropdown list, choose either Medium (pooled) or High (isolated). For more
	  information on these settings, see the IIS Help.
	
	  If you want to continue to use the wshell object in an isolated Web
	  application, you must set some registry keys. For additional information,
	  click the article number below to view the article in the Microsoft Knowledge
	  Base:
	
	  Q221081 HOWTO: Use Windows Script Host Scripts as CGI Scripts
	
	- Unregister the wshell object.
	
	  To do this, execute the following from a command line:
	
	  "regsvr32 -u <path>\Wshom.ocx" (without the quotation marks)
	
	  The <path> is usually %SYSTEMROOT%\System32
	
	Additional query words: wscript
	
	======================================================================
	Keywords          : kbDSupport kbiis400 kbiis500 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	
