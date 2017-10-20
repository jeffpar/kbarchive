---
layout: page
title: "Q170400: Unauthorized Program Can Be Installed and Run on ZAK Workstation"
permalink: /kb/170/Q170400/
---

## Q170400: Unauthorized Program Can Be Installed and Run on ZAK Workstation

{% raw %}

	Article: Q170400
	Product(s): Microsoft Windows NT
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup
	Last Modified: 21-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zero Administration Kit for Windows NT Workstation 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may be able to install and run some programs on a Windows NT Zero
	Administration Kit (ZAK) client workstation, even though you should be
	restricted from doing so. You may be able to do this by installing programs to
	and running them from the folder defined in the TEMP user variable (the
	temporary folder). In a ZAK client workstation, the default temporary folder is
	C:\Temp.
	
	CAUSE
	=====
	
	The temporary folder is not restricted on ZAK client workstations because many
	programs, including Microsoft Office, do not function properly if the temporary
	folder is restricted.
	
	RESOLUTION
	==========
	
	To work around this issue, you can configure the policy file for the ZAK client
	workstation to allow only specific programs to run. The policy file resides on
	the ZAK server and can be modified by using the following steps:
	
	1. Log on to the ZAK server (this is the primary domain controller for the
	  network) as the domain administrator.
	
	2. Start Policy Editor (Poledit.exe), and then open the Ntconfig.pol file in the
	  following folder:
	
	     %SystemRoot%\System32\Repl\Import\Scripts
	
	3. Double-click the user icon for the ZAK client user, double-click System, and
	  then double-click Restrictions. Click the Run Only Allowed Windows
	  Applications check box to select it.
	
	4. Click Show, click Add, type the executable file name of the program you want
	  to allow the ZAK client user to run, and then click OK. Repeat this procedure
	  for every program you want the user to be able to run.
	
	  For example, to allow the ZAK client to run Microsoft Word, type "winword.exe"
	  (without the quotation marks) as the allowed program. To determine the
	  executable file names, view the shortcuts on the Start menu of the ZAK client
	  in the Netapps folder on the ZAK server.
	
	
	5. Click OK, and then click OK.
	
	6. Save the file, and then quit Policy Editor.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	
	Additional query words: unattend sysdiff deploy directory environment
	
	======================================================================
	Keywords          : kbenv kbsetup 
	Technology        : kbWinNTWsearch kbAudDeveloper kbZAWNTW400
	Version           : 1.0
	
	=============================================================================
	

{% endraw %}
