---
layout: page
title: "Q288702: SNA Manager Disappears When Using the LU Creation Wizard"
permalink: /kb/288/Q288702/
---

## Q288702: SNA Manager Disappears When Using the LU Creation Wizard

{% raw %}

	Article: Q288702
	Product(s): Microsoft SNA Server
	Version(s): 2000,2000 SP1
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 10-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the LU Creation Wizard to assign logical units (LUs) to a
	server-connection from SNA Manager, after you select Server Name from the
	drop-down menu, SNA Manager closes.
	
	To open the LU Creation Wizard: from the Action menu, select All Tasks, and then
	select Range of LUs....
	
	CAUSE
	=====
	
	When Host Integration Server 2000 is installed on a Windows 2000 Server, the
	computer name that it uses is taken from the Windows 2000 registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Computername\
	
	When the LU Creation Wizard is used and a Server Name is selected, SNA Manager
	displays the computer name in upper case characters even though lower case
	characters were used. These are compared when the Wizard is run, and the
	discrepancy causes SNA Manager to close.
	
	
	WORKAROUND
	==========
	
	Use the 3270 Wizard: from the Action menu, select All Tasks", and then 3270
	Wizard....
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Host Integration Server 2000.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :2000,2000 SP1
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
