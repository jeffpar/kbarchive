---
layout: page
title: "Q166138: INFO: Detailed Description of FTCODE Table in ATS"
permalink: kb/166/Q166138/
---

## Q166138: INFO: Detailed Description of FTCODE Table in ATS

	Article: Q166138
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Anomaly Tracking System, version 1.0, included with:
	   - Microsoft Visual Studio 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Anomaly Tracking System (ATS), contains several tables in the main database
	(Ft.dbc). Although all tables play a role, the ftcode table contains custom
	information such as User IDs, Products, Versions, and several others.
	
	MORE INFORMATION
	================
	
	There are five fields in the ftcode table:
	
	  Field name  Purpose                       Notes
	  ------------------------------------------------------------------------
	
	  Co_id       Unique ID for record          Assigned by "fttpk.nextid"
	  Co_ctid     Category ID of record         Further described below
	  Co_order    Order of option within group  Order options appear in pop-up
	  Co_name     Name of option                Option that shows in pop-up
	  Co_proc     Name of validation procedure  What to run if option chosen
	
	The Category field (Co_ctid) determines which group of options the record is
	associated with. The following Co_ctid are listed along with the names of the
	options they go with:
	
	  Co_ctid     Option group             Notes
	  ------------------------------------------------------------------------
	  01          Current users in database
	  02          Keywords                 Choices available on Attributes tab
	  03          Priority
	  04          Platform                 Windows 95, Windows NT, MS-DOS
	  05          Language                 English, French, and so forth
	  06          Version number
	  07          Product name
	  08          Area                     Documentation, User interface, and
	                                       so forth
	  09          Sub-area
	  10          Resolution type
	  11          Found during what        Ad-hoc, beta testing, and so forth
	  12          Issue type               Defect, suggestion, and so forth
	  13          Issue sub-type
	  14          Source                   Beta site, user education, and so
	                                       forth
	  15          Severity
	  16          Status
	  17          Assigned to
	  18          Found by whom
	  19          Environment             Choices available on Attributes tab
	
	It is recommended that any changes, additions, or deletions to this table be made
	through the ATS interface. Specifically, the Property Options Maintenance option
	on the Tools menu provides the ability to maintain this table. One exception is
	category 01, which contains the users added to the system. This is maintained by
	User Maintenance option on the Tools menu.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbVSsearch kbAudDeveloper kbVS97Search
	Version           : WINDOWS:1.0
	Issue type        : kbinfo
	
	=============================================================================
	
