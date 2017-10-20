---
layout: page
title: "Q91041: PC WFW: Moving a Windows for Workgroups Postoffice"
permalink: /kb/091/Q91041/
---

## Q91041: PC WFW: Moving a Windows for Workgroups Postoffice

{% raw %}

	Article: Q91041
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To prepare for moving a workgroup postoffice (WGPO)
	---------------------------------------------------
	
	1. Pick a time when all users are off of Mail (usually after normal working
	  hours) to move the WGPO.
	
	2. Ask users to do the following:
	
	  a. Update their mailboxes by choosing New Messages from the View menu.
	
	  b. Choose Exit And Sign Out from the File menu before a specified time or
	     before they leave for the day.
	
	3. Create a shared directory for the postoffice. Different networks use
	  different commands for setting up a server. If you are moving the WGPO to
	  another computer on a Windows for Workgroups network, use the File Manager to
	  create the directory, and use the Share As command from the Disk menu to
	  share the directory.
	
	To move a workgroup postoffice
	------------------------------
	
	1. Open the File Manager and select the WGPO directory.
	
	2. From the File menu, choose Move. Move the WGPO directory by using the Windows
	  File Manager. Do not use the MS-DOS COPY or XCOPY commands; these MS-DOS
	  commands do not copy hidden files that need to be moved with the postoffice.
	
	3. In the "To:" box, type the new path for the postoffice. Remember this path;
	  you will use it when you run the Extend program.
	
	4. Choose the OK button.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
