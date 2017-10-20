---
layout: page
title: "Q136050: PC Gen: Err Msg: Error Sorting Members of Group..."
permalink: /kb/136/Q136050/
---

## Q136050: PC Gen: Err Msg: Error Sorting Members of Group...

{% raw %}

	Article: Q136050
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you extract postoffice address list (POL) group information using
	GIMPORT.EXE versions 3.1 or earlier, the following error message may be
	displayed and logged (if a log file is specified):
	
	  Error sorting members of group <group name>
	
	where <group name> is the name of a postoffice address list group.
	
	When this error occurs, no members from the affected group are extracted.
	
	CAUSE
	=====
	
	The ADMINSHD.GRP( and ADMIN.GRP) file contains the tid values for all the
	members belonging to a particular group. When one or more of these tid values in
	the .GRP file are invalid, the above error message is generated.
	
	A tid may become invalid due to corruption of the ADMINSHD.GRP file or if a user
	belonging to a group is removed from the POL.
	
	The error can also be caused by corruption of the POL.
	
	WORKAROUND
	==========
	
	In versions 3.1 or earlier of GIMPORT.EXE, use the -S command line option to
	workaround this problem. The -S option turns off sorting the members of the
	groups being extracted.
	
	In versions 3.5 or later of GIMPORT.EXE, this problem has been resolved and
	invalid tids belonging to a group are ignored.
	
	MORE INFORMATION
	================
	
	For more information about GIMPORT.EXE and how to obtain it, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q99419 PC DB: Database Maintenance Utilities (Complete)
	
	GIMPORT.EXE is a MS-DOS utility that allows Microsoft Mail Administrators to
	automatically:
	
	- Create Postoffice Address List groups.
	
	- Delete Postoffice Address List groups.
	
	- Modify Postoffice Address List groups.
	
	- Reset all Postoffice Address List groups.
	
	- Extract Postoffice Address List group information.
	
	For more information about GIMPORT.EXE, please refer to the documentation
	accompanying the program.
	
	
	Additional query words: 2.10 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.2
	
	=============================================================================
	

{% endraw %}
