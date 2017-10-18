---
layout: page
title: "Q296432: XFOR: Doclink Conversion to RTF Fails If Source Doc Is on UNIX"
permalink: kb/296/Q296432/
---

## Q296432: XFOR: Doclink Conversion to RTF Fails If Source Doc Is on UNIX

	Article: Q296432
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Document links (doclinks) that point to a Domino database on UNIX-based systems
	cannot convert to Rich Text Format (RTF) when messages with the doclinks are
	sent across an Exchange Connector for Lotus Notes.
	
	The Exchange Server user receives a message with an attachment. When the user
	opens the attachment, the following message is displayed:
	
	  Notes Link Description:
	  Database_Name
	  Notes Server:
	  CN=Name_of_UNIX_Domino_Server/O=Notes_Domain_Name
	  Notes Document Link was not accessible at processing time. Contact sender or
	  message source to obtain document link information.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server 5.5 service pack that contains this fix.
	
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
	
	Component: Notes Connector
	
	+----------------------------+
	| File name    | Version     | 
	+----------------------------+
	| Ctreestd.dll | 5.5.2654.89 | 
	+----------------------------+
	| Dispatch.exe | 5.5.2654.89 | 
	+----------------------------+
	| Dxagwise.dll | 5.5.2654.89 | 
	+----------------------------+
	| Dxamex.dll   | 5.5.2654.89 | 
	+----------------------------+
	| Dxanotes.dll | 5.5.2654.89 | 
	+----------------------------+
	| Dxasnads.dll | 5.5.2654.89 | 
	+----------------------------+
	| Eab.dxa      | 5.5.2654.89 | 
	+----------------------------+
	| Exconmsg.dll | 5.5.2654.89 | 
	+----------------------------+
	| Gw2mex.exe   | 5.5.2654.89 | 
	+----------------------------+
	| Gwhc.dll     | 5.5.2654.89 | 
	+----------------------------+
	| Gwrouter.exe | 5.5.2654.89 | 
	+----------------------------+
	| Lscms.dll    | 5.5.2654.89 | 
	+----------------------------+
	| Lsdiajcl.exe | 5.5.2654.89 | 
	+----------------------------+
	| Lsdiamex.exe | 5.5.2654.89 | 
	+----------------------------+
	| Lsdiavm.exe  | 5.5.2654.89 | 
	+----------------------------+
	| Lsdxa.exe    | 5.5.2654.89 | 
	+----------------------------+
	| Lsldew.dll   | 5.5.2654.89 | 
	+----------------------------+
	| Lsmexdia.exe | 5.5.2654.89 | 
	+----------------------------+
	| Lsmexhc.dll  | 5.5.2654.89 | 
	+----------------------------+
	| Lsmexif.dll  | 5.5.2654.89 | 
	+----------------------------+
	| Lsmexin.exe  | 5.5.2654.89 | 
	+----------------------------+
	| Lsmexnts.exe | 5.5.2654.89 | 
	+----------------------------+
	| Lsntshc.dll  | 5.5.2654.89 | 
	+----------------------------+
	| Lsntsmex.exe | 5.5.2654.89 | 
	+----------------------------+
	| Lsqview.dll  | 5.5.2654.89 | 
	+----------------------------+
	| Lsvmdia.exe  | 5.5.2654.89 | 
	+----------------------------+
	| Lsvmhc.dll   | 5.5.2654.89 | 
	+----------------------------+
	| Lsxfm.dll    | 5.5.2654.89 | 
	+----------------------------+
	| Mex2gw.exe   | 5.5.2654.89 | 
	+----------------------------+
	| Ntsperf.dll  | 5.5.2654.89 | 
	+----------------------------+
	| Ntspxgen.dll | 5.5.2654.89 | 
	+----------------------------+
	| Psab.dxa     | 5.5.2654.89 | 
	+----------------------------+
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Exchange
	Server version 5.5 Service Pack 4.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
