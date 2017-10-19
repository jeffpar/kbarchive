---
layout: page
title: "Q239104: Jet Expression Can Execute Unsafe VBA Functions"
permalink: /kb/239/Q239104/
---

## Q239104: Jet Expression Can Execute Unsafe VBA Functions

	Article: Q239104
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 3.5,7.0
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 24-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Access, version 3.5 
	- Microsoft Access for Windows 95, version 7.0 
	- Microsoft Access 97 
	- Microsoft Office 97 Professional Edition for Windows 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	Using Jet 3.5x, a user can call unsafe Visual Basic for Applications functions
	in query statements from all types of Jet applications, such as ODBC or Access.
	For example, the following statement would result in all files being deleted
	from a computer's current folder:
	
	  SELECT Shell("Cmd /c del *.*") As c1 From Customers
	
	NOTE: The Shell command in this example works in Microsoft Windows NT. The
	command would have to be modified as follows to work on a computer running
	Microsoft Windows 95/98:
	
	  SELECT Shell("Command.com /c del *.*") As c1 From Customers
	
	The security risk occurs when expressions contain Visual Basic for Application
	commands that can be harmful to a computer running the query, for example, Shell
	commands to delete files or format the computer.
	
	CAUSE
	=====
	
	Jet queries can contain Visual Basic for Applications expressions. These are
	evaluated during query execution, a behavior that is desirable in many
	circumstances. However, if part of the query contains the Shell command, it is
	parsed and executed on the computer.
	
	You can block such operations, which is called "Sandbox mode." However, by
	default in Microsoft Jet 3.5x, Sandbox mode is not enabled for any applications
	that can issue Visual Basic for Applications commands.
	
	RESOLUTION
	==========
	
	In order to enable Sandbox mode, you must first install the Microsoft Jet 3.5
	SP3 update. After installing this update, the next time that you run Jet, a new
	registry key is added to the registry. You can use this new registry key to
	prevent this type of security risk. The following is the registry key that is
	added:
	
	  \\HKEY_LOCAL_MACHINE\Software\Microsoft\Jet\3.5\engines\SandboxMode
	
	For additional information about how to obtain the Microsoft Jet 3.5 SP3 update,
	please click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q172733 Updated Version of Microsoft Jet 3.5 Available on MSL
	
	To make your system more resistant to malicious attacks while at the same time
	making it possible for older applications to keep running, the operation of the
	Sandbox box mode has changed in the Jet update so that it is fully under your
	control.
	
	You can set the key to the following values, with 0 (zero) being most permissive
	and 3 being least permissive:
	
	+---------------------------------------------------------------------------------------------------------------------------+
	| Setting | Description                                                                                                     | 
	+---------------------------------------------------------------------------------------------------------------------------+
	| 0       | Sandbox mode is disabled at all times.                                                                          | 
	+---------------------------------------------------------------------------------------------------------------------------+
	| 1       | Sandbox mode is used for Access applications, but not for non-Access Applications.                              | 
	+---------------------------------------------------------------------------------------------------------------------------+
	| 2       | Sandbox mode is used for non-Access applications, but not for Access Applications. (This is the default value.) | 
	+---------------------------------------------------------------------------------------------------------------------------+
	| 3       | Sandbox mode is used at all times.                                                                              | 
	+---------------------------------------------------------------------------------------------------------------------------+
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	With Sandbox mode enabled, if you try to use Visual Basic for Applications
	functions in a Jet query that are not considered safe, you receive the following
	error message:
	
	  JET_errExprUnknownFunction
	
	Sandbox Mode Operations Allowed
	-------------------------------
	
	The following is a list of functions that you can use in Jet queries when Sandbox
	mode is enabled. Any functions that do not appear in the list are not available
	in Sandbox mode.
	
	+----------------------------------------------------------------------+
	| ABS        | array      | ASC       | ASCB    | ASCW      | ATN      | 
	+----------------------------------------------------------------------+
	| CBOOL      | CBYTE      | CCUR      | CDATE   | CDBL      | choose   | 
	+----------------------------------------------------------------------+
	| CHR        | CHR$       | CHRB      | CHRB$   | CHRW      | CHRW$    | 
	+----------------------------------------------------------------------+
	| CINT       | CLNG       | COS       | CSNG    | CSTR      | CVAR     | 
	+----------------------------------------------------------------------+
	| CvDate     | CVErr      | date      | DATE$   | DATEADD   | dateDiff | 
	+----------------------------------------------------------------------+
	| datePart   | DATESERIAL | DATEVALUE | day     | DDB       | error    | 
	+----------------------------------------------------------------------+
	| error$     | EXP        | fix       | format  | format$   | fv       | 
	+----------------------------------------------------------------------+
	| hex        | hex$       | HOUR      | IIF     | IMEStatus | inStr    | 
	+----------------------------------------------------------------------+
	| INT        | IPMT       | IRR       | isDate  | isEmpty   | ISERROR  | 
	+----------------------------------------------------------------------+
	| isNull     | isNumeric  | isObject  | lCase   | lCase$    | LEFT     | 
	+----------------------------------------------------------------------+
	| LEFT$      | LEFTB      | LEFTB$    | LEN     | LENB      | LOG      | 
	+----------------------------------------------------------------------+
	| lTrim      | lTrim$     | MID       | MID$    | MIDB      | MIDB$    | 
	+----------------------------------------------------------------------+
	| MINUTE     | MIRR       | MONTH     | NOW     | NPER      | NPV      | 
	+----------------------------------------------------------------------+
	| oct        | oct$       | partition | PMT     | PPMT      | PV       | 
	+----------------------------------------------------------------------+
	| QBColor    | RATE       | RGB       | RIGHT   | RIGHT$    | RIGHTB   | 
	+----------------------------------------------------------------------+
	| RIGHTB$    | rnd        | round     | rTrim   | rTrim$    | SECOND   | 
	+----------------------------------------------------------------------+
	| sgn        | SIN        | SLN       | space   | space$    | sqr      | 
	+----------------------------------------------------------------------+
	| str        | str$       | strComp   | strConv | string    | string$  | 
	+----------------------------------------------------------------------+
	| switch     | SYD        | TAN       | TIME    | TIME$     | timer    | 
	+----------------------------------------------------------------------+
	| timeSerial | TIMEVALUE  | TRIM      | TRIM$   | typeName  | uCase    | 
	+----------------------------------------------------------------------+
	| uCase$     | val        | varType   | WEEKDAY | YEAR      |          | 
	+----------------------------------------------------------------------+
	
	Additional query words: pra
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbAccess97 kbOffice97Search kbODBCSearch kbAccess97Search kbAccess95Search kbOffice97 kbZNotKeyword3 kbAccess700 kbODBCAccess350
	Version           : :3.5,7.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
