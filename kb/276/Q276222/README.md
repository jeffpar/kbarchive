---
layout: page
title: "Q276222: XCON: MTA Terminates in OTPMRALT() Due to Bad ECBindex"
permalink: kb/276/Q276222/
---

## Q276222: XCON: MTA Terminates in OTPMRALT() Due to Bad ECBindex

	Article: Q276222
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server version 5.5 Service Pack 3 or Service Pack 4 message
	transfer agent (MTA) may stop unexpectedly with a call stack that is similar to
	the following when the MTA attempts to gain access to a particular object in the
	MTA database:
	
	  
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  0ab1fcfc  00510cc7  cffa119e 07ad9838 0069578c EMSMTA!otpmralt+0x25
	  0ab1fd4c  004dfe5a  00000034 08564d01 0786a290 EMSMTA!otpurert+0x307
	  0ab1fe84  004bfb7e  00000034 07ad000b 0ab1fee7 EMSMTA!otpmrtry+0x11a
	  0ab1fee8  004c6b99  00000034 00000141 0346b110 EMSMTA!otpaasb+0x93e
	  0ab1ff18  004c56be  00000034 0069578c 0786a290 EMSMTA!otparecv+0x119
	  0ab1ff54  004e24c5  00000034 000041e8 00000820 EMSMTA!otpamain+0x4ce
	  0ab1ff8c  00554b98  000041e8 00f70006 00000034 EMSMTA!otpimain+0x395
	  0ab1ffb8  77f04ede  00000034 000041e8 00f70006 EMSMTA!sbpiwbep+0x58
	  0ab1ffec  00000000  00000000 00000000 00000000 KERNEL32!BaseThreadStart+0x51
	
	In addition, the MTA may log several event ID error messages that are similar to
	the following before the MTA stops unexpectedly:
	
	  Event ID: 9202
	  A sockets error 0 on an accept() call was detected. The MTA will attempt to
	  recover the sockets connection. Control block index: 203. [BASE IL TCP/IP
	  DRVR 8 256] (12)
	
	  Event ID: 9405
	  An unexpected error has occurred which may cause the MTA to terminate. Error:
	  Failed to find socket, result=14, count=63. [BASE TCP/IP DRVR 122] (16)
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server service pack that contains this fix.
	
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
	
	Component: MTA
	
	+----------------------------+
	| File name    | Version     | 
	+----------------------------+
	| Dbserver.sch | N/A         | 
	+----------------------------+
	| Dcprods.cat  | N/A         | 
	+----------------------------+
	| Ems_rid.dll  | 5.5.2654.22 | 
	+----------------------------+
	| Emsmta.exe   | 5.5.2654.22 | 
	+----------------------------+
	| Infoplog.cfg | N/A         | 
	+----------------------------+
	| Mtamsg.dll   | 5.5.2654.22 | 
	+----------------------------+
	| Mtacheck.exe | 5.5.2654.22 | 
	+----------------------------+
	| Mtamsg.dll   | 5.5.2654.22 | 
	+----------------------------+
	| Mtaperf.dll  | 5.5.2654.22 | 
	+----------------------------+
	| P42.tpl      | N/A         | 
	+----------------------------+
	| P772.tpl     | N/A         | 
	+----------------------------+
	| P2.xv2       | N/A         | 
	+----------------------------+
	| X400om.dll   | 5.5.2654.22 | 
	+----------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3 and Service Pack 4.
	
	
	Additional query words: xmrp terminate stop responding
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5 SP3,5.5 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
