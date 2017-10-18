---
layout: page
title: "Q181280: XFOR: Attachment with PC Binary or PC ASCII Flag Set Unreadable"
permalink: kb/181/Q181280/
---

## Q181280: XFOR: Attachment with PC Binary or PC ASCII Flag Set Unreadable

	Article: Q181280
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 03-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- LinkAge Message Exchange, version 3.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An attachment of type PC Binary or PC ASCII that is sent from IBM Office Vision
	(PROFS and/or OV/VM) to Exchange via the Linkage Message Exchange OV/VM
	Connector version 3.2 is unreadable in Exchange.
	
	CAUSE
	=====
	
	An attachment with the PC Binary or PC ASCII flag set is transformed per entries
	in the Conversational Monitor System (CMS) to Exchange mapping table
	(Cmsxmap.tbl). This behavior is incorrect; messages with PC Binary or ASCII
	flags set do not need conversion and should be sent right through to Exchange.
	This conversion strips the first two characters, resulting in an unreadable
	attachment.
	
	
	RESOLUTION
	==========
	
	Apply the fix described below. The Linkage Message Exchange OV/VM connector was
	fixed to not read the Cmsxmap.tbl when the PC Binary or PC ASCII flags are
	detected on an attachment coming down from the host.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Linkage Message Exchange version
	3.2.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	
	MORE INFORMATION
	================
	
	When storing CMS files to OV/VM storage, note that PC Binary should only apply
	to PC Binary files (for example, *.doc, *.xls) without EBCDIC conversion, and PC
	ASCII should apply to PC text files uploaded to the host with EDCDIC conversion.
	
	Additional query words: SENDMAIL
	======================================================================
	Keywords          : kbusage 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbLinkAgeSearch kbLinkAge320
	Version           : 4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
