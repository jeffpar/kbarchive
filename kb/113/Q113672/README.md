---
layout: page
title: "Q113672: BUG: FoxPro Driver Always Shows Deleted Rows"
permalink: /kb/113/Q113672/
---

## Q113672: BUG: FoxPro Driver Always Shows Deleted Rows

{% raw %}

	Article: Q113672
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	BUG# ODBCDBASE: 2061 (1.01.1928)
	
	SYMPTOMS
	========
	
	The Show Deleted Rows checkbox on the ODBC FoxPro driver data source set up
	screen does not properly suppress the display of deleted rows when it is left
	unchecked.
	
	The FoxPro driver is installed and a FoxPro data source is set up with the Show
	Deleted Rows box not checked. Rows deleted by the FoxPro driver will still
	appear until the database file is packed. The behavior will disappear if the
	Dbase driver is installed and a Dbase data source is setup with the Show Deleted
	Rows box not checked.
	
	CAUSE
	=====
	
	The FoxPro driver does not recognize the setting, Deleted=On in its section of
	[FoxPro ISAM] in ODBCISAM.INI. The result is that rows that are deleted using
	the Fox driver will remain visible during future SELECT statements, until the
	data file is packed.
	
	The Fox driver is looking in the [dBase ISAM] section for the Deleted=On. If the
	Fox driver finds it there, it will operate properly. Having Deleted=On in the
	[FoxPro ISAM] has no effect. Users that use the DBase driver with the Show
	deleted row box not checked will not experience this error later when they use
	the Fox driver because they will already have the Deleted=On set in the [dBase
	ISAM] section.
	
	WORKAROUND
	==========
	
	If there is a [dBase ISAM] section in the ODBCISAM.INI with the variable
	Deleted=On in it, then the FoxPro driver will pick up that option and properly
	not show deleted rows.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the ODBC FoxPro Driver versions
	1.01.1928 and 1.01.2115. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Setup a Fox data source with the Show Deleted Rows box not checked.
	
	2. Create a table and insert a few rows into it.
	
	        create table model01 (col1 char(30))
	        insert into model01 values ('a')
	        insert into model01 values ('b')
	
	3. Delete a row from the table.
	
	  delete from model01 where col1 = 'a'
	
	4. Select all the rows from that table.
	
	  select * from model01
	
	The deleted row will show up.
	
	Additional query words: 1.01.1928 1.00.2115
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
