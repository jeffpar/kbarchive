---
layout: page
title: "Q234175: XADM: Store Stops Responding When Generating DR to SMIME Message"
permalink: kb/234/Q234175/
---

## Q234175: XADM: Store Stops Responding When Generating DR to SMIME Message

	Article: Q234175
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55 EXC55SP3Fix kbExchange500preSP3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an Internet user sends an SMIME message to an Exchange Server recipient and
	requests a delivery receipt (DR), the Exchange Server information store may stop
	responding with the following information in the Drwtsn32.log and User.dmp
	files:
	
	FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	0e38f6dc  6fff1a40  3b67ca94 0e9a4b48 00000000 KERNEL32!InterlockedCompareExchange+0xc
	0e38f6fc  6fff13c4  01050588 0e9a4b50 004062e5 EXCHMEM!MpHeapFree+0x50
	0e38f708  004062e5  0e9a4b50 0041c3b4 0e9a4b50 EXCHMEM!ExchMHeapFree+0x14
	0e38f710  0041c3b4  0e9a4b50 00633c9b 0e9a4b50 STORE!MDBFreePv+0xa
	0e38f718  00633c9b  0e9a4b50 0e9b9990 0042a06b STORE!CIMailBaseVirtual::operator delete+0xa
	0e38f724  0042a06b  00000001 00000000 0e9b9990 STORE!CIMailBaseVirtual::`scalar deleting destructor'+0x17
	0e38f738  00438ad0  0e96dd10 00000000 0e9b9990 STORE!CmnContent::Clone+0x73
	0e38f750  00441753  0e96dd10 00000000 00000000 STORE!CRFCMIMEemtr::HrUpdateContentNode+0x30
	0e38f784  00440733  0e996018 00000400 0e38f7bc STORE!CRFCMIMEemtr::hrEndOfBody+0xe8
	0e38f7ac  00438956  0e9cbf78 0e996018 00000000 STORE!CmcvtrBdy::hrEmit+0xca
	0e38f7d4  00438895  0fb20fb0 00002000 0e38f860 STORE!CINETemtr::hrEmit+0x82
	0e38f7f4  00405261  0105e034 0e9c5460 0e38f83c STORE!CConvertStream::Read+0x5b
	0e38f820  0047b4c3  0e9b9928 0fb20fb0 00002000 STORE!MDB::PunkFromHsot+0x7e
	0e38f83c  0047b436  00002000 0fb20fb0 0e38f860 STORE!EcReadStreamOp+0x4f
	0e38f860  00406d35  00000007 0000001a 001f2a94 STORE!EcReadStream+0x5e
	0e9c5524  00402111  00000000 0e9823d0 00000068 STORE!EcRpc+0x87b
	
	The information store may also stop responding and return an access violation if
	it creates a non-delivery report (NDR) on a specific type of incoming Internet
	message. Specifically, if the "Send attachments Using HTML" check box is
	selected in the Internet Mail Service, and a non-MIME message arrives that
	contains an incorrect user name and references to URLs in the message, the
	information store stops responding and returns an access violation. The
	preceding stack dump will also be found in the Drwtsn32.log and User.dmp files.
	
	CAUSE
	=====
	
	When the Exchange Server information store attempts to generate the DR, it
	incorrectly tries to free the same object twice. This results in an access
	violation, which causes the store to crash.
	
	RESOLUTION
	==========
	
	Exchange Server Version 5.0:
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server version 5.0 service pack that contains
	this fix.
	
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
	
	Component: Information Store
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Store.exe  | 5.0.1462.3 | 
	+-------------------------+
	| Mdbmsg.dll | 5.0.1462.3 | 
	+-------------------------+
	
	
	
	Exchange Server Version 5.5:
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Gapi32.dll | 5.5.2637.0 | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2637.0 | 
	+-------------------------+
	| Netif.dll  | 5.5.2637.0 | 
	+-------------------------+
	| Store.exe  | 5.5.2637.0 | 
	+-------------------------+
	
	NOTE: This fix requires the Directory fix described in the following Microsoft
	Knowledge Base article:
	
	  Q230285 XADM:'Denial of service' Vulnerability in Store with IMAP or POP3
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.0 and 5.5. This problem was first corrected in Exchange Server 5.5
	Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 EXC55SP3Fix kbExchange500preSP3fix 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
