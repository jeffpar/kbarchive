---
layout: page
title: "Q195510: XFOR: Notes Dirsync not Working after Installation of 5.5 SP1"
permalink: /kb/195/Q195510/
---

## Q195510: XFOR: Notes Dirsync not Working after Installation of 5.5 SP1

{% raw %}

	Article: Q195510
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After upgrading the Microsoft Exchange Notes Connector to Service Pack 1 for
	Exchange Server 5.5, directory synchronization (dirsync) may no longer work, and
	the following errors may appear in the Exchange Connectivity Administrator
	program's log browser:
	
	  1998/09/24 03:55:23-      LME-NOTES-DXANOTES(0129) 1 60012:Field
	  DispName
	  not found in source directory class
	   >> dxgmap(944)
	  1998/09/24 03:55:23-      LME-NOTES-DXANOTES(0129) 1 60011:Error parsing
	  rule ' DispName ' at position 0
	   >> dxgmap(746)
	  1998/09/24 03:55:23-      LME-NOTES-DXANOTES(0129) 1 60014:Error
	  evaluating
	  mapping function NAMEL
	   >> dxgmap(907)
	  1998/09/24 03:55:23-      LME-NOTES-DXANOTES(0129) 1 60011:Error parsing
	  rule                                               ' NAMEL( DispName ) "
	  " STRIP( NAMEF( DispName ), ",", "R")'
	  at position 0
	   >> dxgmap(746)
	  1998/09/24 03:55:23-      LME-NOTES-DXANOTES(0129) 1 60014:Error
	  evaluating mapping
	  function STRIP
	   >> dxgmap(907)
	  1998/09/24 03:55:23-      LME-NOTES-DXANOTES(0129) 1 60011:Error parsing
	  rule
	  'STRIP( NAMEL( DispName ) " " STRIP( NAMEF( DispName ), ",", "R"), ",",
	  "R" ) "@" DN "@EX"' at position 0
	   >> dxgmap(746)
	  1998/09/24 03:55:23-      LME-NOTES-DXANOTES(0129) 1 60350:Error
	  {Invalid syntax}:
	  Failed to read next transaction
	   >> mifppars(590)
	  1998/09/24 03:55:23-      LME-NOTES-DXANOTES(0129) 1 64072:Error
	  {Invalid syntax}:
	  Failure reading transaction 1
	   >> lndxapi(1636)
	
	CAUSE
	=====
	
	Exchange Server 5.5 Service Pack 1 Setup overwrites the following files located
	in the <Exchsrvr>\Connect\Exchconn directory:
	
	  DXAMEX\amap.tbl
	  DXAMEX\mapnotes.tbl
	  DXANOTES\mapmex.tbl
	
	The overwriting resets all changes to the mapping rules from Lotus Notes to
	Exchange Server and may cause the previous error message. The new Mapmex.tbl may
	refer to attributes that are not defined in a customized Amap.tbl.
	
	WORKAROUND
	==========
	
	Save the contents of the Dxamex and Dxanotes directories, and restore them after
	applying Service Pack 1.
	
	Additional query words: 5.5 notes amap mapmex mapnotes
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
