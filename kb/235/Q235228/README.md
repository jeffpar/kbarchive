---
layout: page
title: "Q235228: XWEB: OWA Stops Responding with Exchange Server 5.5 SP2"
permalink: kb/235/Q235228/
---

## Q235228: XWEB: OWA Stops Responding with Exchange Server 5.5 SP2

	Article: Q235228
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5; winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you apply Service Pack 2 for Microsoft Exchange Server 5.5, Outlook Web
	Access (OWA) may stop responding and produce the following Drwtsn32.log:
	
	  Application exception occurred:
	  App: exe\inetinfo.dbg (pid=256)
	  When: 5/5/1999 @ 11:26:32.523
	  Exception number: c0000005 (access violation)
	
	CAUSE
	=====
	
	If the symbols are installed correctly on the computer, the callstack will look
	similar to the following:
	
	  
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  05aaf868  6277d48f  20b02f28 62782266 20b02f28 EMSMDB32!DeinitEMSUI+0xf
	  05aaf870  62782266  20b02f28 07e018e8 20b1c9c0 EMSMDB32!PerInstDeinit+0x3f
	  05aaf884  6fada321  20b02f28 62791aed 20b02f28 EMSMDB32!PRVDROBJ::Release+0x46
	  05aaf88c  62791aed  20b02f28 00000000 07e018e8 MAPI32!UlRelease+0x11
	  05aaf8a0  627922c0  07e018e8 07eb4f80 07e57038 EMSMDB32!RMSP_Destroy+0x4d
	  05aaf8b4  6fada321  07e018e8 6fa974df 07e018e8 EMSMDB32!RMSP_Release+0x40
	  05aaf8bc  6fa974df  07e018e8 07e018e8 08051480 MAPI32!UlRelease+0x11
	  05aaf948  6fada321  07e57038 62794866 07e57038 MAPI32!CommonSupportRelease+0x3cf
	  05aaf950  62794866  07e57038 08051480 08051480 MAPI32!UlRelease+0x11
	  05aaf968  627946d7  07e57038 20a9f010 05544330 EMSMDB32!ROBJ_Destroy+0xe6
	  05aaf97c  6f07a1af  08051480 05544330 6f0896e8 EMSMDB32!ROBJ_Release+0xc7
	  05aaf988  6f0896e8  05544330 6f06c57b 00000001 CDO!CPropArray::~CPropArray+0xf
	  05aaf99c  6f06c256  00000000 05544330 00000000 CDO!CInfoStore::CInfoStore+0x28
	  05aaf9b8  6f06c663  20a9f010 20a9f010 6f06c69b CDO!CDispatchObj::Release+0x26
	  05aaf9cc  6f06c609  02124dd0 20a9f010 6f085f8c CDO!CDispatchObj::M_InvalidateChildren+0x43
	  05aaf9d8  6f085f8c  00000000 20a9f010 00000000 CDO!CDispatchObj::M_InvalidateObj+0x49
	  05aafa10  6f083076  6f06ca20 015a26c0 00000000 CDO!CSession::M_ScLogoff+0xdc
	  05aafa14  6f06ca20  015a26c0 00000000 00000000 CDO!CSession::V_HrInvoke+0xb6
	  05aafa24  6b60d1e1  20a9f010 00000076 6b641458 CDO!CDispatchObj::Invoke+0x60({...})
	  08051480  07fd0710  00000000 4a040003 00000000 0x6b60d1e1
	  627adc80  627945b0  62794610 6278b3a0 6278b3f0 0x07fd0710
	
	NOTE: The fix needs to be applied on the computer running OWA.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: MDB
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Emsmdb32.dll | 5.5.2628.0 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 SP2. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: inetinfo, emsmdb32, crash
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 EXC55SP3Fix 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : WINDOWS:5.5; winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
