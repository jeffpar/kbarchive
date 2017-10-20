---
layout: page
title: "Q183480: HOW TO: Debug ISAPI DLLs Under IIS 4.0 and IIS 5.0"
permalink: /kb/183/Q183480/
---

## Q183480: HOW TO: Debug ISAPI DLLs Under IIS 4.0 and IIS 5.0

{% raw %}

	Article: Q183480
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbASP kbDebug kbiis400 kbiis500 kbHOWTOmaster
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.1 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Method to Debug ISAPI DLL
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes one method to debug an Internet Server API
	(ISAPI) Extension or a filter DLL file. (It is assumed that Microsoft Visual C++
	is installed on the Internet Information Services (IIS) computer.)
	
	Method to Debug an ISAPI DLL
	----------------------------
	
	1. Build a debug version of the ISAPI DLL. By default, the Debug subdirectory of
	  the project will now contain *.dll and two files with a *.pdb extension (for
	  example, c:\MyProj\debug directory).
	
	2. Create a virtual root with execute permissions in the IIS Management Console,
	  and then set its physical location to the project's Debug directory (for
	  example, /MyProj virtual root will be mapped to c:\MyProj\Debug).
	
	3. Make sure that W3SVC service is running. Start it if it is not (you can use
	  this command: "net start w3svc").
	
	4. Start Microsoft Developer Studio. On the Build menu, click Start Debug, and
	  then click Attach Process. Select the Show System Processes option. On a
	  Microsoft Windows 2000-based computer, sometimes no processes will appear in
	  the process list.
	
	  For additional information about this issue, click the article number below to
	  view the article in the Microsoft Knowledge Base:
	
	  Q235434 BUG: "Attach to Process" List Is Empty
	
	  To attach a debugger to a particular process, click the "Task Manager
	  processes" tab, right-click the process that you want, and then click
	  "debug".
	
	5. In the list of running processes, select INETINFO.
	
	6. On the Project menu, click Settings, and then click the Debug tab. In the
	  Category list, click Additional DLLs.
	
	  At this point, you should see the message that states that the DLL symbols
	  were loaded.
	
	7. Add your ISAPI extension or filter DLL to the list.
	
	8. On the File menu, click Open, and then bring up the source file for the DLL.
	  Set a breakpoint in the source code, and then submit a request to IIS from
	  the browser (for example, http://<server/myproj/mydll>.dll). If the
	  debugger beeps and refuses to set the break point, the reason for this may be
	  a mismatch between the DLL and PDB files. Rebuild the DLL to troubleshoot
	  this situation.
	
	NOTE: If the application is configured to run out-of-proc in IIS 4.0 (or on IIS
	5.0 or IIS 5.1 with an Application Protection setting of medium or high), by
	attaching the debugger to Inetinfo.exe, this will not break execution of an
	extension DLL. You must attach the debugger to the MTX.exe process (or
	Dllhost.exe on a Windows 2000 or Microsoft Windows XP-based system) that hosts
	the ISAPI DLL. Because there may be more than one MTX.exe (Dllhost.exe) process
	running at one time, you may have to add code to the ISAPI DLL that shows the
	process ID (PID) in which the DLL is loaded. After the PID is known, you can
	attach the debugger to the MTX (DLLHOST) with the corresponding PID. To do this,
	use the following code:
	
	  #define _WIN32_WINNT 0x0400
	
	  #ifdef _DEBUG
	  char szMessage [256];
	  wsprintf (szMessage, "Please attach a debugger to the process 0x%X (%s) and click OK",
	            GetCurrentProcessId(), argv[0]);
	  MessageBox(NULL, szMessage, "ISAPI/Filter Debug Time!",
	                   MB_OK|MB_SERVICE_NOTIFICATION);
	  #endif
	
	Also, note that the Application Protection setting of medium is the default
	setting of IIS 5.0.
	
	NOTE: For debugging purposes it may be easier to configure IIS 5.0 or IIS 5.1
	applications to run with the Application Protection setting of low. This permits
	you to attach the debugger directly to the Inetinfo.exe process.
	
	REFERENCES
	==========
	
	The process to debug ISAPI extensions and filters under IIS is fully explained
	in the Microsoft Developer Network (MSDN) documentation. This documentation can
	be found in the following location:
	
	  Web Development
	     Server Technologies
	        Internet Information Services (IIS)
	           SDK Documentation
	              Internet Information Services 5.1
	                 Programmer's Guide
	                    Developing ISAPI Extension and Filters
	                       Debugging ISAPI Extensions and Filters
	
	Note that this documentation is not installed by the default installation option
	of NT Option Pack or by adding IIS to Windows 2000 or Windows XP. To obtain this
	documentation, visit the following MSDN Web site:
	
	  http://msdn.microsoft.com/library
	
	You can also download this documentation in compiled Help format to your local
	hard disk. To do this, visit the following Microsoft download site:
	
	  http://www.microsoft.com/msdownload/platformsdk/sdkupdate
	
	Additional query words:
	
	======================================================================
	Keywords          : kbASP kbDebug kbiis400 kbiis500 kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis510
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
