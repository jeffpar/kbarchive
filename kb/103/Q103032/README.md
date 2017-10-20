---
layout: page
title: "Q103032: PRB: &quot;RUN/! Command Failed&quot; with Windows NT"
permalink: /kb/103/Q103032/
---

## Q103032: PRB: &quot;RUN/! Command Failed&quot; with Windows NT

{% raw %}

	Article: Q103032
	Product(s): Microsoft FoxPro
	Version(s): 2.50 2.50a 2.50b 2.60 3.00
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 03-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running FoxPro for Windows under the Microsoft Windows NT operating
	system, the error message "RUN/! command failed" occurs when you are using the
	RUN command to execute an MS-DOS command.
	
	CAUSE
	=====
	
	When the FoxPro RUN command is used without the /N parameter, FoxPro will stop
	execution and wait until the RUN command has completed successfully and the
	MS-DOS session is closed. However, because Windows NT is a preemptive
	multitasking operating system, it switches control back and forth between FoxPro
	and the RUN command. This can cause FoxPro to time out while it is waiting for
	the RUN command to complete.
	
	NOTE: This problem affects the SetupWizard in the FoxPro Distribution Kit, which
	also uses a RUN command, causing it to fail at the point where compression
	starts.
	
	
	RESOLUTION
	==========
	
	Use the /N parameter on the RUN command to stop FoxPro from waiting for the RUN
	command to complete. The following is an example of using the RUN command with
	the /N parameter to execute FOXRUN.PIF. This example also uses the /C parameter
	to send a specific command to the command shell.
	
	     RUN /N FOXRUN.PIF /C DIR
	
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin FoxWin 2.50 winnt multi-task errmsg err msg setup wizard dk
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : 2.50 2.50a 2.50b 2.60 3.00
	
	=============================================================================
	

{% endraw %}
