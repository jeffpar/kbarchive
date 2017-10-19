---
layout: page
title: "Q236910: XIMS: Cannot Open IMS Dial-Up Connections Tab on Windows 2000"
permalink: /kb/236/Q236910/
---

## Q236910: XIMS: Cannot Open IMS Dial-Up Connections Tab on Windows 2000

	Article: Q236910
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000; winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you click the Dial-Up Connections tab in the properties for the Internet
	Mail Service on a Windows 2000 Server computer, the following error message may
	be displayed:
	
	  The Remote Access Service (RAS) phone book cannot be opened. It must be
	  accessible and in the system directory as \Winnt\System32\Ras\Rasphone.pbk.
	
	In addition, when you install a RAS Message Transfer Agent (MTA) transport stack
	on a Windows 2000 Server computer, and then attempt to install a Dynamic RAS
	Connector, the following error message may be displayed:
	
	  The System Attendant on server <server> could not read the RAS
	  Phonebook entries.
	
	  An error occurred while loading the RAS phone book. To view details, see the
	  application event log in the Windows NT Event Viewer on the Microsoft
	  Exchange Server computer.
	
	  Microsoft Exchange Administrator
	  ID no: c1031669
	
	CAUSE
	=====
	
	When you attempt to perform either of the above actions, Exchange Server
	attempts to open the Rasphone.pbk file in the Winnt\System32\Ras folder.
	However, in Windows 2000 Server, the file is located in the Documents and
	Settings\All Users\Application Data\Microsoft\Network\Connections\PBK folder.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, click the following article number to
	view the article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Administrator Program
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Imcadmin.exe | 5.5.2648.0 | 
	+---------------------------+
	| Mad.exe      | 5.5.2648.0 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	
	Additional query words: ims internet mail connector imc
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbOSWin2000 kbOSWinSearch kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:2000; winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
