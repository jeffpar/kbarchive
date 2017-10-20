---
layout: page
title: "Q251264: PRB: App.Logevent Fails in Components that You Call from ASP"
permalink: /kb/251/Q251264/
---

## Q251264: PRB: App.Logevent Fails in Components that You Call from ASP

{% raw %}

	Article: Q251264
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:6.0; winnt:5.0
	Operating System(s): 
	Keyword(s): kbinterop kbOSWin2000 kbVBp kbVBp600 kbWinDNA kbGrpDSSIE kbDSupport kbIIS kbiis500
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Internet Information Server version 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If you run a Visual Basic server-side COM component from an ASP page on Windows
	2000, you are not able to use the App.Logevent functionality by default.
	
	CAUSE
	=====
	
	By default, components that are run from an ASP page are created under the
	IUSR_MACHINENAME account. This account is a member of the "guests" group, and
	Windows 2000 changed the security privileges needed to write the application
	event log.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	In order to give members of the guest group the ability to write to the
	application event log, you must change the registry value
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Eventlog\Application\RestrictGuestAccess
	from a 1 to a 0. You must reboot for the change to take effect.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ASP page with the following code:
	
	  <%
	          dim obj
	          set obj = Server.CreateObject("LogEventTest.cLogEvent")
	          obj.TestEventLog
	          set obj = nothing
	          response.write "Test has been performed.  Check your EventLog to see if changes have been made."
	  %>
	
	2. Save the page as "Test.asp" (without the quotation marks) in your
	  Inetpub\Wwwroot directory.
	
	3. With Visual Basic 6.0, create an ActiveX .dll file.
	
	4. From the Project menu, select Properties, and then select Unattended
	  Execution and Retained in Memory.
	
	5. Rename Class1 as "cLogEvent" (without the quotation marks).
	
	6. Rename the project from project1 to "LogEventTest" (without the quotation
	  marks).
	
	7. Paste the following code into cLogEvent:
	
	  Public Sub TestEventLog()
	      
	      App.Logevent "Test of the Event Log"
	      
	  End Sub
	
	8. Compile the .dll file.
	
	9. Using your browser, navigate to http://Localhost/Test.asp.
	
	10. Check your eventlog to see if any events were logged.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbOSWin2000 kbVBp kbVBp600 kbWinDNA kbGrpDSSIE kbDSupport kbIIS kbiis500 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbiisSearch kbiis500 kbWinAdvServSearch
	Version           : WINDOWS:6.0; winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
