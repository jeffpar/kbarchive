---
layout: page
title: "Q90215: WFWG Err Msg: Error 6118: The List of Servers for This..."
permalink: /kb/090/Q90215/
---

## Q90215: WFWG Err Msg: Error 6118: The List of Servers for This...

{% raw %}

	Article: Q90215
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 1.0,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Workgroup Connections, version 1.0 
	- Microsoft Workgroup Add-On for MS-DOS, version 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a machine running Workgroup Connections, Workgroup Add-On for MS-DOS, or
	Windows for Workgroups 3.11, you receive the following error message:
	
	  Error 6118: The list of servers for this workgroup is not currently
	  available.
	
	Under Windows for Workgroups 3.11, you may also receive the following error
	message:
	
	  The list of servers for this workgroup is not currently available.
	
	In this case, you can see the workgroup but not the individual computers in the
	workgroup. You may be able to see the computers under other workgroups. You can
	connect to a server by manually typing in the path, but you cannot browse a list
	of available servers.
	
	Or, other computers are able to browse the network but not all workstations show
	up on the browse list.
	
	CAUSE
	=====
	
	These errors can occur if you browse or run NET VIEW when connecting to network
	drives and one of the following conditions exists:
	
	- Your machine has file and print sharing disabled (Windows for Workgroups
	  only).
	
	  -or-
	
	- There is a space character in the workgroup name.
	
	  -or-
	
	- There are no browse master machines on the network (Windows for Workgroups
	  only).
	
	  -or-
	
	- You are using the Windows for Workgroups basic redirector and you have ten
	  network connections established.
	
	If there is no master or backup browser present in the workgroup, you cannot see
	individual computers in a workgroup when you browse. You may see the computers
	in other workgroups if there is a browser present in that workgroup. If there is
	only one workgroup present on the network and there is no browser present, you
	see the workgroup listed but no servers.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Enable file and/or print sharing.
	
	  -or-
	
	- Remove the space character from the workgroup name.
	
	  -or-
	
	- Type the following at the MS-DOS command prompt and then press ENTER:
	
	  net view /workgroup:"work group"
	
	  NOTE: The quotation marks are not optional.
	
	  -or-
	
	- Use a text editor (such as MS-DOS Editor or Windows for Workgroups Notepad)
	  to edit the SYSTEM.INI file on one machine in the workgroup and add the
	  following entry to the [Network] section:
	
	  MaintainServerList=yes
	
	  You can also set a second computer in the workgroup to Auto and the remainder
	  at "no." On each computer that you edit the SYSTEM.INI file, you must quit
	  and restart Windows for Workgroups.
	
	  -or-
	
	- Disconnect from one or more network servers.
	
	
	MORE INFORMATION
	================
	
	MaintainServerList controls the ability of the computer to act as a browse
	master. If this entry is set to Auto, the computer acts as a backup browser or
	master browser as needed. If the entry is set to Yes, the computer acts as the
	master browser. If the entry is set to No, the computer acts as neither. There
	must be at least one computer acting as a browser in the workgroup in order for
	you to be able to browse.
	
	REFERENCES
	==========
	
	Microsoft Windows for Workgroups version 3.11 SYSINI.WRI file
	
	Windows for Workgroups "Resource Kit Addendum for Operating System Version 3.11,"
	Chapter 1, page 44 and Chapter 4, page 15.
	
	Additional query words: 3.10 3.11 err msg errmsg browsemaster double- click domain workgroup name connect network drive dialog box File Manager net use 10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311 kbWFW311DOS
	Version           : :1.0,3.11
	
	=============================================================================
	

{% endraw %}
