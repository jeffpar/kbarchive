---
layout: page
title: "Q174700: XFOR: Error Opening Notes Database 'Foreign.nsf'"
permalink: /kb/174/Q174700/
---

## Q174700: XFOR: Error Opening Notes Database 'Foreign.nsf'

	Article: Q174700
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): exc4
	Last Modified: 26-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing the LinkAge Notes Directory Exchange Agent (DXA), the Notes DXA
	will not process updates or full load propagations from the Directory Exchange
	Manager (DXM) to the Notes DXA. In the LinkAge Administrator's Browse Log (or in
	the log files in the Linkage\Logs directory), you see the following error
	messages:
	
	  1997/09/22 17:46:19- DXANOTES(01e8) 1 41104:Error opening Notes database
	  'foreign.nsf'
	  >> lsnabapi(660)
	  1997/09/22 17:46:19- DXANOTES(01e8) 2 41127:Notes Package ID: Operating
	  System (OS). Extended Reason String: File does not exist
	  >> lsnabapi(3118)
	  1997/09/22 17:46:19- DXANOTES(01e8) 1 64092:Error {Invalid parameter}
	  detected when Opening a Note
	  >> lndxapi(2361)
	  1997/09/22 17:46:19- DXANOTES(01e8) 1 64085:Error {Invalid parameter}:
	  detected when adding user to Notes
	  >> lndxapi(2002)
	  1997/09/22 17:46:19- DXANOTES(01e8) 2 64073:Error {Invalid parameter}:
	  While processing Transaction 1
	  >> lndxapi(1397)
	
	CAUSE
	=====
	
	The Notes DXA has not been configured through the LinkAge Setup icon in the
	LinkAge Software 3.2 program group.
	
	WORKAROUND
	==========
	
	Use either of the following methods to work around the problem.
	
	Method 1
	--------
	
	1. Start the Setup program from the LinkAge Software 3.2 program group, and
	  click Configure Directory Exchange Manager/Agent(s).
	
	2. On Select LDE Component to Configure, click Notes DXA, and click Next. Enter
	  the required information (Notes server name, path to Notes.ini file, source
	  N&A book(s), and target N&A book).
	
	Method 2
	--------
	
	Alternatively, directly edit the Linkage.ini file found in the Linkage directory.
	The section [DXANOTES] has the following parameters that need to be set:
	
	  servername=
	  notesini=
	  sourcebooks=
	  targetbook=
	
	Servername is the full name of the Notes Server (for example, SERVER/ORG).
	Notesini is the full path to the Notes.ini file. Sourcebooks= are the Notes
	N&A books that are propagated to the DXM; and Targetbook= is the Notes
	N&A book that contains all foreign users.
	
	
	Additional query words: NOTESDXA INSTALLATION LINKAGE
	
	======================================================================
	Keywords          : exc4 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
