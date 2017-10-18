---
layout: page
title: "Q229794: XCLN: Macintosh Outlook Doesn't Open PAB/PST Files NT MAC Vol."
permalink: kb/229/Q229794/
---

## Q229794: XCLN: Macintosh Outlook Doesn't Open PAB/PST Files NT MAC Vol.

	Article: Q229794
	Product(s): Microsoft Exchange
	Version(s): MACINTOSH:8.0,8.1; WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	- Microsoft Outlook for Macintosh, Exchange Server Edition, versions 8.0, 8.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Macintosh Outlook Client creates a profile that contains personal address book
	(PAB) files or personal store files (.pst files) stored in a MAC volume on a
	computer running Microsoft Windows NT Server. When the Outlook Client logs on to
	the above profile, it works successfully.
	
	But when you run chkdsk.exe /F on the Windows NT Server computer and reboot it,
	the same files are inaccessible and an Outlook Client attempting to log on to
	the above profile generates the following error message:
	
	  Cannot find PAB or PST files.
	
	The only way to access those PAB and .pst files is to delete the current MAPI
	profile and create a new one pointing to those files.
	
	CAUSE
	=====
	
	This behavior occurs because Microsoft Outlook stores a static path to PAB and
	.pst files, which can be reset by defragmenting the disk that contains the
	folder or running chkdsk /f against that disk to fix any disk errors.
	
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
	
	  Component: Microsoft Macintosh Client
	
	  Version
	  -------
	  8.1.3
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Macintosh
	client, versions 4.0, 5.0 and Microsoft Outlook for Macintosh, Exchange Server
	Edition, versions 8.0, 8.1.
	
	Additional query words: 98
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbOutlookMacSearch kbExchange500Mac kbExchange400Mac kbOutlook800Mac kbOutlook810Mac
	Version           : MACINTOSH:8.0,8.1; WINDOWS:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
