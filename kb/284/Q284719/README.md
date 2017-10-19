---
layout: page
title: "Q284719: XADM: Eseutil/p Causes AV in ESE!OBJIDLIST&#95;&#95;ErrAddObjid"
permalink: /kb/284/Q284719/
---

## Q284719: XADM: Eseutil/p Causes AV in ESE!OBJIDLIST&#95;&#95;ErrAddObjid

	Article: Q284719
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): exc5 exc5sp1 exc5sp2 exc5sp3 kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run eseutil /p against a Microsoft Exchange Server 5.5 database, you
	may experience a Dr. Watson Access Violation.
	
	A review of the User.dmp file or, if proper symbols are installed, a review of
	the Drwatson.log file, reveals a call stack similar to the following:
	
	#  ChildEBP RetAddr  Args to Child              
	00 0012f5d0 6ff208be 00002782 0000277f 78010d13 ESE!OBJIDLIST__ErrAddObjid+0x3e
	01 0012f6ec 6ff1ff7e 0012f738 0000277f 000052ea ESE!ErrREPAIRCheckOneTable+0x852
	02 0012f778 6ff1f28a 0012f7dc 00145a48 00151288 ESE!ErrREPAIRCheckAllTables+0x359
	03 0012fae4 6ff002d1 0012fc54 00d10200 00000000 ESE!ErrDBUTLRepair+0x6c2 
	04 0012fbdc 6ff0dcdc 0012fca0 00d10200 7800eb11 ESE!ErrIsamDBUtilities+0x93 
	05 0012fbe8 7800eb11 00000000 00000000 001474a4 ESE!JetDBUtilities+0x13d 
	
	CAUSE
	=====
	
	This issue occurs when you have more than 200 indexes on a table in the database
	that you are running eseutil /p against.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Exchange Server 5.5 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Extensible Storage Engine
	
	+-------------------------+
	| File name | Version     | 
	+-------------------------+
	| Ese.dll   | 5.5.2654.49 | 
	+-------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc5sp1 exc5sp2 exc5sp3 kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
