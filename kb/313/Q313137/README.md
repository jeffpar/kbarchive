---
layout: page
title: "Q313137: COMTI/OTMA Error When App. Returns Unbounded Recordset"
permalink: /kb/313/Q313137/
---

## Q313137: COMTI/OTMA Error When App. Returns Unbounded Recordset

{% raw %}

	Article: Q313137
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport Kbhostintegserv2000
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a mainframe host application returns a recordset that contains multiple
	records to a COM Transaction Integrator (COMTI) component that is connected
	through TCP/IP to an IBM Information Management System (IMS) region on a
	mainframe that uses IBM Open Transaction Management Architecture (OTMA) or IBM
	IMS Connect, the following COMTI 102 event may be logged in the Application
	Event Log:
	
	  Description: (102) COM Transaction Integrator reported the following
	  exception to the client:
	  Component: (Prog ID of Component)
	  Method: (Method Name)
	
	  Exception description:
	  (2135) The TCP transport detected that the socket was closed but has not
	  received the Complete-Status Message segment. Therefore, the outcome of the
	  IMS transaction is in an unknown state. IP Address: (IP of Host), port: (port
	  number), transid: (Trans ID).
	
	CAUSE
	=====
	
	The host application sends all rows of the unbounded record set within a single
	IMS Insert command (ISRT), and this causes COMTI to return the error message. If
	the host application sends an individual ISRT command for each row of the
	unbounded recordset, no problem occurs.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Host Integration Server 2000 service pack that contains this fix.
	
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
	
	+--------------------------------------------+
	| File name   | Date        | Time           | 
	+--------------------------------------------+
	| Trantcp.dll | 19-JUN-2001 | 12:00 midnight | 
	+--------------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, revise the program on the host so that it uses
	individual ISRT statements to send each row of the unbounded recordset.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Host Integration Server 2000.
	
	MORE INFORMATION
	================
	
	A Network Monitor (NetMon) trace of the failed transaction shows the Extended
	Binary Coded Decimal Interchange Code (EBCDIC) data that was returned from the
	host application. The last 8 bytes of data are "*CSMOKY*". In EBCDIC characters,
	these are as follows:
	
	  5C C3 E2 D4 D6 D2 E8 5C
	
	This data is the "Complete-Status Message segment" that the error message reports
	as missing.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport Kbhostintegserv2000 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
