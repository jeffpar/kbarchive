---
layout: page
title: "Q280123: Internal NetLib Error When OLE DB Data Source Is Instantiated"
permalink: /kb/280/Q280123/
---

## Q280123: Internal NetLib Error When OLE DB Data Source Is Instantiated

{% raw %}

	Article: Q280123
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbhis2000
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run an Active Server Page (ASP), an internal net library (NetLib) error
	may occur on subsequent attempts to instantiate DB2OLEDB Decision Support
	Objects (DSOs):
	
	  Interface: IID_IDBInitialize
	  Result: 0x80040e14 = DB_E_ERRORSINCOMMAND
	  ISQLErrorInfo:[HY000][0xfff0bdc1]
	  Source: "Microsoft DB2 OLE DB Provider"
	  IErrorInfo:[0x00000000]"Internal NetLib Error"
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Host Integration Server (HIS) 2000 Service Pack that
	contains this fix.
	
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
	
	+---------------------------------+
	| File name    | Date     | Time  | 
	+---------------------------------+
	| Mseidb2d.dll | 12/15/00 | 12:25 | 
	+---------------------------------+
	| Mseidrda.dll | 12/15/00 | 12:25 | 
	+---------------------------------+
	| Mseidpm.dll  | 12/15/00 | 12:25 | 
	+---------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Host Integration Server 2000.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Run a simple ASP. View the results in a Web browser. Leave Microsoft Internet
	  Information Server (IIS) and Microsoft Internet Explorer running.
	
	2. Attempt to instantiate the DB2OLEDB DSO by using any application (Data Links,
	  RowsetViewer, and so on). This results in the error (RowsetViewer), which
	  shown in the "Symptoms" section.
	
	The expected behavior is that when you connect by using any application, while
	the IIS ASP is active, the connection succeeds.
	
	Additional query words: oledb dso assertion db2 ole db DB_E_ERRORSINCOMMAND sna Mseidb2d Mseidrda Mseidpm
	
	======================================================================
	Keywords          : kbDSupport kbhis2000 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
