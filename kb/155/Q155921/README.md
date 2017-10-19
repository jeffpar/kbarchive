---
layout: page
title: "Q155921: User Profile Editor Does Not Show Unlocked Program Groups"
permalink: /kb/155/Q155921/
---

## Q155921: User Profile Editor Does Not Show Unlocked Program Groups

	Article: Q155921
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbtool kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Korean Windows NT 3.51, the User Profile Editor does not list any program
	groups in the Unlocked Program Groups dialog box. Therefore, the administrator
	cannot lock any program groups.
	
	WORKAROUND
	==========
	
	In the For Unlocked Groups, Allow User To: dialog box, select the option to be
	applied to unlocked personal program groups. The option you choose determines
	the kind of modifications the user can make.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Korean Windows NT version 3.51.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The table below shows the changes that are allowed by each option.
	
	  Option for unlocked groups             Allowed changes
	  -----------------------------------------------------------------------
	  Make Any Change                Create, delete, and change program items
	                                 and program groups.
	
	  Create/Delete/Change           Create, delete, and change program items.
	  Program Items                  Users cannot create, delete, or change
	                                 program groups.
	
	  Change All Program             Change program items. Users cannot create
	  Item Properties                or delete program items, nor can they
	                                 create, delete, or change program groups.
	
	  Change Program Item            Change all properties of a program item
	  Properties Except              except the entry in the command line of
	  Command Line                   the Program Item Properties dialog box.
	                                 Users cannot create or delete program
	                                 items, nor can they create, delete, or
	                                 change program groups.
	
	Additional query words: prodnt tools
	
	======================================================================
	Keywords          : kbtool kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
