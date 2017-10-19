---
layout: page
title: "Q199731: Duplicate Datakeys in Table After Datdupck Runs"
permalink: /kb/199/Q199731/
---

## Q199731: Duplicate Datakeys in Table After Datdupck Runs

	Article: Q199731
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbDatabase kbsms120 kbDataLoader kbsmsUtil
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Datdupck.exe and Datdupcl.exe utilities are used to resolve problems with
	duplicate datakeys in an SMS database. The table that results might contain new
	duplicate datakeys even after Datdupcl.exe has deleted the previous duplicates.
	
	CAUSE
	=====
	
	This problem may be caused by a value in the NextSpecificKey in the GROUPMAP
	table of less than (and therefore overlapping) the current maximum value in the
	table that shows the problem.
	
	For example, you might discover new duplicates and see an entry in the
	Datdupck.log such as:
	
	  11766 Duplicate datakeys found in Table: IRQ_Table_SPEC
	
	(Note that the table name might be different.)
	
	Running the following queries with a utility such as ISQL/w may show this
	overlapping range of datakeys:
	
	  Select MAX(datakey) from IRQ_TABLE_SPEC
	  Select NextSpecificKey from GROUPMAP where SPECIFICTABLENAME =
	  'IRQ_Table_Spec'
	
	For example, say the first select query returns a value of 2017976 and the second
	query returns a value of 2009726. This means that the next new record in the
	IRQ_TABLE_SPEC will have a datakey of 2009726. The problem is that you already
	have datakeys in the table up to and including the value 2017976. Thus, until
	the NextSpecificKey value is incremented to a value greater than the current
	maximum value in your table, you will continue to assign duplicates.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Systems Management Server version
	1.2.
	
	MORE INFORMATION
	================
	
	Duplicate datakeys can cause performance problems, which may result in a backlog
	of Management Information Format files.
	
	If you encounter this problem, please contact Product Support Services:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Additional query words: prodsms smssql
	
	======================================================================
	Keywords          : kbDatabase kbsms120 kbDataLoader kbsmsUtil 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	
	=============================================================================
	
