---
layout: page
title: "Q282472: IIS May Hang or Terminate When Using OLE DB Provider"
permalink: kb/282/Q282472/
---

## Q282472: IIS May Hang or Terminate When Using OLE DB Provider

	Article: Q282472
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbsna400sp3 kbsna400sp4
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the SNA Server OLE DB Provider for DB2 from an Active Server Page
	(ASP), Microsoft Internet Information Server (IIS) may stop responding (hang) or
	may terminate without generating any errors.
	
	This problem is most likely to occur on systems that are under stress or heavy
	load when multiple clients are trying to access the ASP and therefore the host
	by way of the OLE DB Provider. In addition, multi-processor systems may be more
	likely to experience the problem.
	
	CAUSE
	=====
	
	The OLE DB Provider for DB2 does not protect the statement list on the agent
	(Db2serv.exe), which is used for communicating with the host system. The problem
	described here may occur when two or more clients try to access the same
	statement list.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft SNA Server version 4.0 service pack that contains this
	fix.
	
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
	
	+------------------------------------+
	| File name    | Date       | Time   | 
	+------------------------------------+
	| Db2oledb.dll | 12/08/2000 | 1:20AM | 
	+------------------------------------+
	| Db2serv.exe  | 12/08/2000 | 1:19AM | 
	+------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	4.0 Service Pack 3 (SP3) and 4.0 Service Pack 4 (SP4).
	
	Additional query words: ghost away oledb asp vb Db2oledb Db2serv sp4 service pack
	
	======================================================================
	Keywords          : kbsna400sp3 kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
